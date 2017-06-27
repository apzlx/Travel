
Template.adduser.events({
  'click button'(elt,instance){
    const email = instance.$('#email').val();
    const password=instance.$('#password').val();

    console.log('adding'+username);
    instance.$('#email').val("");
    instance.$('#password').val("");

    var user={email:email,
              password:password,
              owner:Meteor.userId(),
              createAt:new Date()}

    Meteor.call('user.insert',user);
    (err,res)=>{
      console.log('got the answer');
      console.dir([err,res]);
    }
  }
})
