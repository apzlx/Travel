Meteor.publish('users',function(){
  return User.find();
})
Meteor.publish('members',function(){
  return Members.find();
})
Meteor.publish('posts',function(){
  return Posts.find();
})
