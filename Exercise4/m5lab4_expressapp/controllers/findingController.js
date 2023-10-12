const friends = require("../models/friends");

const findingFriend = (req,res) => {
    console.log(req.params);
    let friendId = req.params.id; // 'id' here will be a value matching anything after the / in the request path
    console.log(`this is friend id ${friendId}`);
    // Modify this function to find and return the friend matching the given ID, or a 404 if not found
    let foundFriend = null;
    if (friendId) {
      foundFriend = friends.filter((friend) => friend.id == friendId);
      //foundFriend = friends.find((friend) => friend.id == friendId);
    }
  
    if (foundFriend.length > 0) {
      //   if (foundFriend) {
      res.status(200);
      res.json(foundFriend);
    } else {
      res
        .status(404)
        .send({ error: "There is no friend matching id " + friendId });
    }
};

module.exports = {findingFriend,};