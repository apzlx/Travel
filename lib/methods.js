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
    if (this.userId==post.owner){
      Posts.remove(post._id);
    }
  },
  'post.edit':function(id,newpost){
    // console.log("new comments: "+newComments);
    // console.log("id passed in method:"+id)
    var post = Posts.findOne(id);
    // console.log("com:"+com.comments);
    Posts.update(post._id, {$set:{text:newpost}});
    // console.log("new com.comments:"+com.comments);
  },
  'post.insert'(post){
    Posts.remove({owner:post.owner});
    Posts.insert(post);
  }
});
