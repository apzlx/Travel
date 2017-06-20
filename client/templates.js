Template.showpeople.helpers({
  peoplelist() {return People.find()},
})
Template.addperson.events({
  'click button'(elt,instance){
    const name = instance.$('#name').val();
    const type=instance.$('#type').val();
    const countries=instance.$('#countries').val();
    // var gender = document.querySelector('input[name = "gender"]:checked').value;
    console.log('adding'+name);
    instance.$('#name').val("");
    instance.$('#type').val("");
    // instance.$('#gender').val("");
    instance.$('#countries').val("");

    var user={name:name,
              type:type,
              countries:countries,
              owner:Meteor.userId(),
              createAt:new Date()}
    Meteor.call('user.insert',user);
    (err,res)=>{
      console.log('got the answer');
      console.dir([err,res]);
    }
  }
})
Template.personrow.helpers({
  isOwner(){console.dir(this);
    return this.person.owner == Meteor.userId()}

})
Template.personrow.events({
  'click span'(elt,instance){
    console.dir(this);
    console.log(this);
    console.log(this.person._id);
    Meteor.call('user.remove',this.person);
  //   if (this.person.owner==Meteor.userId()){
  //     People.remove(this.person._id);
  // }else {
  //   alert("You are not allowed to delete this information");
  // }
}
})
