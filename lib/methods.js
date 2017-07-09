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

  'member.insert'(member){
    User.remove({owner:member.owner});
    User.insert(member);
  },

  'post.remove'(post){
    console.log("this.userId"+this.userId+"post.owner"+post.owner);
    if (this.userId==post.owner){
      Posts.remove(post._id);
    }
  },

  'post.edit':function(id,newpost){
    var post = Posts.findOne(id);
    Posts.update(post._id, {$set:{text:newpost}});
    console.log("new com.comments:"+post.text);
  },

  'post.insert'(post){
    Posts.insert(post);
  }
});
