Meteor.methods({
  //'user.insert': function(user){}
  'user.insert'(user){
      People.insert(user);

  },
  'user.remove'(user){
    console.log(this.userId);
    if (this.userId == user.owner){
      People.remove(user._id);
    }
  },
});
// name:val,name:val,
