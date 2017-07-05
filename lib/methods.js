Meteor.methods({
  //'user.insert': function(user){}
  'type.insert'(type){
      User.remove({owner:type.owner});
      User.insert(type);

  },
  'type.remove'(type){
    console.log(this.userId);
    if (this.userId == type.owner){
      User.remove(type._id);
    }
  },
  'type.update': function(selectedUser, futureCountry){
    check(selectedUser, String);
    check(futureCountry, String);
    var currentUserId = Meteor.userId();
    if(currentUserId){
        User.update( { _id: selectedUser, createdBy: currentUserId },
                            { $inc: {countries: futureCountry} });
    }
}
});
