const friends = require('../models/friends')

const updatingFriend = (req,res) => {
    let friendId = req.params.id;
    //   let updatedFriend = req.body;
    let updatedFriendBody = req.body;
  
    // Replace the old friend data for friendId with the new data from updatedFriend
  
    let foundFriend = null;
    let foundFriendIndex = -1;
  
    if (friendId) {
      foundFriend = friends.find((friend) => friend.id == friendId); // triple equals dont work
    }
  
    if (foundFriend) {
      foundFriendIndex = friends.indexOf(foundFriend);
      const updatedFriend = { ...foundFriend, ...updatedFriendBody };
      friends.splice(foundFriendIndex, 1, updatedFriend);
      res.json({
        result: "Updated friend with ID " + friendId,
        data: updatedFriend,
      });

    } else {
      res
        .status(404)
        .send({ error: "There is no friend matching id: " + friendId });
    }
  
    // // Modify this response with the updated friend, or a 404 if not found
    // res.json({
    //   result: "Updated friend with ID " + friendId,
    //   data: updatedFriend,
    // });
}

module.exports = {updatingFriend,};