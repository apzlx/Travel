
Template.adduser.events({
  'click button'(elt,instance){
    const email = instance.$('#email').val();
    const password=instance.$('#password').val();

    console.log('adding'+username);
    instance.$('#email').val("");
    instance.$('#password').val("");

    var newuser={email:email,
              password:password,
              owner:Meteor.userId(),
              createAt:new Date()}

    Meteor.call('newuser.insert',newuser);
    (err,res)=>{
      console.log('got the answer');
      console.dir([err,res]);
    }
    console.log(User.find());
  }

})
