Meteor.publish('users',function(){
  return User.find();

})
// Meteor.publish('users',function(){
//   return User.find();
// })
