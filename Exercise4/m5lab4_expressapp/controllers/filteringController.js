const friends = require("../models/friends");

const filteringFriends = (req, res) => {
    console.log(req.query);
  let filterGender = req.query.gender;
  const filteredLetter = req.query.letter;
  console.log(`Letter is ${filteredLetter}`);

  let matchingFriends = [...friends];

  if (filterGender) {
    matchingFriends = matchingFriends.filter(
      (friend) => friend.gender == filterGender
    );
  }

  if (filteredLetter) {
    matchingFriends = matchingFriends.filter((friend) =>
      friend.name.toUpperCase().startsWith(filteredLetter.toUpperCase())
    );
  }

  if (matchingFriends.length > 0) {
    // return valid data when the gender matches
    res.status(200).json(matchingFriends);
  } else {
    // and an error response when there are no matches
    res.status(404).json({
      error:
        "No friends matching gender " +
        filterGender +
        " or starting with letter " +
        letter,
    });
  }
};

module.exports = {filteringFriends};