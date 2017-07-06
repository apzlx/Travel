Template.showpeople.helpers({
  userlist() {return User.find()},
})
Template.addperson.onCreated(function(){
  // this.state=new ReactiveDict();
  Meteor.subscribe('users');
})
Template.addperson.helpers({
  typelist: function() {
       console.log("in typelist");
       return ['Natural Scenery and Landscapes','Urban Life and City Experience',
       'Resorts and Theme Parks']
    },
  // continentlist: function() {
  //   console.log("in continentlist");
  //   return ['Africa','Asia','Australia','Europe','North America','South America']
  // }
})
Template.addperson.events({
  'click button'(elt,instance){
    const name = instance.$('#name').val();
    const gender=instance.$('#gender :selected').text();
    const countries=instance.$('#countries').val();
    desiredType = instance.$("#typelist input");
    types = [];
    desiredType.each(function(a,b){
      if (b.checked) { types.push(b.value);}
    });
    continentInput=instance.$('#continentlist input');
    continents = [];
    continentInput.each(function(a,b){
      if (b.checked) {continents.push(b.value);}
    })

    var type={name:name,
              gender:gender,
              countries:countries,
              // continents:continents,
              types:types,
              owner:Meteor.userId(),
              createAt:new Date()
            };
    Meteor.call('type.insert',type);
    (err,res)=>{
      console.log('got the answer');
      console.dir([err,res]);
    }
    console.log('adding'+name);
    instance.$('#name').val("");
    instance.$('#gender').val("");
    instance.$('#countries').val("");
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
    Meteor.call('type.remove',this.person);
}
})
