Template.timeline.helpers({
  posts(){
    var myCircle = Members.find({owner:Meteor.userId()}).fetch();
    var memberList = _.map(myCircle,function(x){return x.member});
    console.dir(memberList);
    return Posts.find({owner:{$in:memberList}},{sort:{createdAt:-1}})
    //return Posts.find();
  }
})

Template.makepost.events({
  "click #submit"(event, instance){
    var profile = User.findOne({owner:Meteor.userId()});
    var now = new Date();
    var text = instance.$("#posttext").val();
    var post = {
      owner:Meteor.userId(),
      name:profile.name,
      createdAt: now,
      text: text
    };
    console.dir(post);
    Posts.insert(post);
  }
})
Template.joinCircle.helpers({
  isMember(){return Members.findOne({member:this.u.owner,owner:Meteor.userId()})}
})

Template.joinCircle.events({
  "click #js-join"(event, instance){
    Members.insert({member:this.u.owner,owner:Meteor.userId()})
  },
  "click #js-exit"(event,instance){
    var z = Members.findOne({member:this.u.owner,owner:Meteor.userId()});
    console.log('removing'); console.dir(z);
    Members.remove(z._id);
  },

})
