import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  People.remove({});  // clear the database
  People.insert({name:'Tim',birthyear:1955});
  People.insert({name:'Caitlin',birthyear:1995});
});
