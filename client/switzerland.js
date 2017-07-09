import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {ReactiveDict}from 'meteor/reactive-dict';

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
Template.postrow.onCreated(function(){
  this.dictionary = new ReactiveDict();
  this.dictionary.set("showEditField",false);
})
Template.postrow.helpers({
  showEditField: function(){
    return Template.instance().dictionary.get("showEditField");
  }
})
Template.postrow.events({
    'click span'(elt,instance){
      console.log(this.p._id);
      Meteor.call('post.remove',this.p);
    },
    'click #enableEdit'(event,template){
       template.dictionary.set("showEditField",true);
    },
     'click #finishEdit'(elt,template){
      const post_id = this.p._id;
      const newPost = $('#newPost_'+post_id).val();
      Meteor.call('post.edit',post_id,newPost);
      template.dictionary.set("showEditField",false);
    }
})
