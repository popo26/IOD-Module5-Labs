const friends = require("../models/friends");

const addingFriend = (req,res) => {
    let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
    console.log(newFriend); // 'body' will now be an object containing data sent via the request body
  
    // we can add some validation here to make sure the new friend object matches the right pattern
    if (!newFriend.name || !newFriend.gender) {
      res
        .status(500)
        .json({ error: "Friend object must contain a name and gender" });
      return;
    } else if (!newFriend.id) {
      newFriend.id = friends.length + 1; // generate an ID if one is not present
    }
  
    // if the new friend is valid, add them to the list and return the successfully added object
    friends.push(newFriend);
    res.status(200).json(newFriend);
}

module.exports = {addingFriend,};