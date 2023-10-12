const express = require("express");
const router = express.Router();
const friends = require("../models/friends");
const findingController = require("../controllers/findingController");
const filteringController = require("../controllers/filteringController");
const addingController = require("../controllers/addingController");
const updatingController = require("../controllers/updatingController");
const infoController = require("../controllers/infoController");

// TODO - #1: Add support to the 'filter' endpoint for a new query parameter
//'letter' which filters friends by starting letter

// TODO - #2: Modify the 'info' route to only return the
// user-agent, content-type and accept header data

// TODO - #3: Modify the dynamic GET route to return a single friend object
// matching the dynamic 'id' request parameter

// TODO - #4: Complete the PUT route which will update data for an existing friend

// TODO - #5: Move all logic out into a controller with functions for finding,
// filtering, info, adding and updating

// default endpoint, gets all friends
router.get("/", (req, res) => {
  res.json(friends);
});

// filter endpoint, gets friends matching the gender from 'gender' query parameter ie. /friends/filter?gender=male
// 1. Add support to also filter by a starting 'letter' query parameter ie. /friends/filter?letter=R
router.get("/filter", (req, res) => {
  filteringController.filteringFriends(req, res);
});

// 2. Get information about this request from the headers
router.get("/info", (req, res) => {
  infoController.findInfo(req, res);
});

// 3. Dynamic request param endpoint - get the friend matching the specific ID ie. /friends/3
router.get("/:id", (req, res) => {
  findingController.findingFriend(req, res);
});

// a POST request with data sent in the body of the request, representing a new friend to add to our list
router.post("/", (req, res) => {
  addingController.addingFriend(req, res);
});

// 4. Complete this new route for a PUT request which will update data for an existing friend
router.put("/:id", (req, res) => {
  updatingController.updatingFriend(req, res);
});

module.exports = router;
