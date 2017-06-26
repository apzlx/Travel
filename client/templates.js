// Template.showpeople.helpers({
//   peoplelist() {return People.find()},
// })
// Template.addperson.events({
//   'click button'(elt,instance){
//     const name = instance.$('#name').val();
//     const gender = instance.$
//     const countries=instance.$('#countries').val();
//     const nature_check = instance.$("#nature").is(":checked");
//     const city_check= instance.$("#city").is(":checked");
//     const resort_check=instance.$("#resort").is(":checked");
//     const gender_check = $("input[name='gender']:checked").val();
//     // var gender = document.querySelector('input[name = "gender"]:checked').value;
//     console.log('adding'+name);
//     instance.$('#name').val("");
//     // instance.$('#gender').val("");
//     instance.$('#countries').val("");
//     instance.$('#nature').is(":checked");
//     instance.$('#city').is(":checked");
//     instance.$('#resort').is(":checked");
//
//     var user={name:name,
//               isGenderChecked:gender,
//               countries:countries,
//               isNatureChecked: nature_check,
//               isCityChecked: city_check,
//               isResortChecked: resort_check,
//               owner:Meteor.userId(),
//               createAt:new Date()}
//
//     Meteor.call('user.insert',user);
//     (err,res)=>{
//       console.log('got the answer');
//       console.dir([err,res]);
//     }
//   }
// })
// Template.personrow.helpers({
//   isOwner(){console.dir(this);
//     return this.person.owner == Meteor.userId()}
//
// })
// Template.personrow.events({
//   'click span'(elt,instance){
//     console.dir(this);
//     console.log(this);
//     console.log(this.person._id);
//     Meteor.call('user.remove',this.person);
//   //   if (this.person.owner==Meteor.userId()){
//   //     People.remove(this.person._id);
//   // }else {
//   //   alert("You are not allowed to delete this information");
//   // }
// }
// })
