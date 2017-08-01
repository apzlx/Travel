Meteor.methods({
  //'user.insert': function(user){}
  'type.insert'(type){
      User.remove({owner:type.owner});
      User.insert(type);

  },
  'type.remove'(type){
    if (this.userId == type.owner){
      User.remove(type._id);
    }
  },

  'member.insert'(member){
    Members.insert(member);
  },

  'post.remove'(post){
    if (this.userId==post.owner){
      Posts.remove(post._id);
    }
  },

  'post.edit':function(id,newpost){
    var post = Posts.findOne(id);
    Posts.update(post._id, {$set:{text:newpost}});
  },

  'post.insert'(post){
    Posts.insert(post);
  }
});
