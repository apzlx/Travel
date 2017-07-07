import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {ReactiveDict}from 'meteor/reactive-dict';
// Template.timeline.helpers({
//   posts(){
//     return Posts.find();
//   }
// })
if(Meteor.isClient){
    Template.joinCircle.onCreated(function(){
      // this.state=new ReactiveDict();
      Meteor.subscribe('members');
    });
    Template.makepost.onCreated(function(){
      Meteor.subscribe('posts');
    });
}
Template.showpost.helpers({
  postlist() {return Posts.find()},
})
Template.showmember.helpers({
  memberlist() {return Members.find()},
})
Template.makepost.events({
  "click #submit"(event, instance){
    // var user = User.findOne({owner:Meteor.userId()});
    var name=User.findOne({owner:Meteor.userId()}).name;
    var now = new Date();
    var text = instance.$("#posttext").val();
    var post = {
      owner:Meteor.userId(),
      name:name,
      createdAt: now,
      text: text,
    };
    console.dir(post);

    Meteor.call('post.insert',post);
    instance.$('#text').val("");
    instance.$('#name').val("");

  }
})
Template.joinCircle.helpers({
  isMember(){
    console.log(Members.findOne({owner:Meteor.userId()}))
    return Members.findOne({owner:Meteor.userId()})
  }
})

Template.joinCircle.events({
  "click button"(event, instance){
    var member={owner:Meteor.userId()};
    Meteor.call('member.insert',member);
    (err,res)=>{
      console.log('got the answer');
      console.dir([err,res]);
    }
    console.log('adding'+Meteor.userId());
    console.log(Members.find());
  }
  // "click #js-exit"(event,instance){
  //   var z = Members.findOne({owner:Meteor.userId()});
  //   console.log('removing'); console.dir(z);
  //   Members.remove(z._id);
  // },

})
// Template.postrow.events({
//      'click span'(elt,instance){
//     //  console.dir(this);
//       //console.log(this);
//       console.log(this.post._id);
//       Meteor.call('post.remove',this.comments);
//     }
// })
Template.postrow.onCreated(function(){
  this.Dict = new ReactiveDict();
  this.Dict.set("Editing",false);
  this.Dict.set("id");
})
Template.postrow.onCreated(function postrowOnCreated() {
  this.Editing= new ReactiveVar(false);
});


Template.postrow.events({
     'click #enableEdit'(event,instance){
      instance.Editing.set(true);
      console.log(instance.Editing.get());
    }
})

Template.postrow.events({
     'click #finishEdit'(elt,instance){
      const oldPost = this.p.text;
      const newPost = instance.$('#newPost').val();
      const name = this.p.name;
      // console.log("this id:"+this._id);
      // console.log("this comment id:"+this.comments._id);
      console.log("old comments: "+oldPost);
      // console.log("new comments: "+newComments);
      // console.log("this comments: "+this.comments);
      var id = this.p._id;
      console.log("var id:"+id);
      Meteor.call('post.edit',id,newPost);
      instance.Editing.set(false);
    }
})
Template.postrow.helpers({
  counter() {
    return Template.instance().counter.get();
  },

  isEditing() {
    return Template.instance().Editing.get();

  }

    //&& this._id=id
})
