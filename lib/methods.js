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

});
// if(Meteor.isServer){
//   Meteor.publish('theUsers',function(){
//     var currentUserId = this.userId;
//     return User.find({ createdBy: currentUserId });
//   })
// }
// if (Meteor.isClient){
//   Meteor.subscribe('theUsers'),function(){
//     return User.find();
//   }
// }
// name:val,name:val,
