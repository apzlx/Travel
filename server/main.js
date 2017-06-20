import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  People.remove({});  // clear the database
});
