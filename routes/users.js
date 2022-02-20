const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Post = require('../models/Post')
//UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {}
  } else {
    res.status(401).json("you can update your account only");
  }
});

//DELETE

router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
        const user=   await User.findByIdAndDelete(req.params.id);
      try {

       await User.findByIdAndDelete(req.params.id);
       //delte user posts
       await  Post.deleteMany({username:user.username})
       res.status(200).json("user Deleted");
      } catch (error) {
        res.status(500).json(error);
      }
    } catch (error) {
        res.status(500).json("user Not Found!!");
    }
  } else {
    res.status(401).json("you can update your account only");
  }
});

//GET USER
router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
