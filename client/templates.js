Template.showpeople.helpers({
  peoplelist() {return People.find()},
})
Template.addperson.events({
  'click button'(elt,instance){
    const name = instance.$('#name').val();
    const year=instance.$('#birthday').val();
    const birthyear=parseInt(year);
    const type=instance.$('#type').val();
    const country=instance.$('#country').val();

    console.log('adding'+name);
    instance.$('#name').val("");
    instance.$('#type').val("");
    instance.$('#country').val("");

    People.insert({name:name,type:type,country:country})

  }
})
Template.personrow.events({
  'click span'(elt,instance){
    console.dir(this);
    console.log(this.person._id);
    People.remove(this.person._id);
  }

})
