const router = require('express').Router();
const User = require("../models/User");

const Post = require('../models/Post')

//create POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body)
    try {
            const savedPost = await  newPost.save()
            res.status(200).json(savedPost)
    } catch (error) {
        res.status(500).json(error)
    }
});

//update POST

// router.delete("/:id", async (req, res) => {
//   if (req.body.userId === req.params.id) {
//     try {
//         const user=   await User.findByIdAndDelete(req.params.id);
//       try {

//        await User.findByIdAndDelete(req.params.id);
//        //delte user posts
//        await  Post.deleteMany({username:user.username})
//        res.status(200).json("user Deleted");
//       } catch (error) {
//         res.status(500).json(error);
//       }
//     } catch (error) {
//         res.status(500).json("user Not Found!!");
//     }
//   } else {
//     res.status(401).json("you can update your account only");
//   }
// });

// //delete POST
// router.get("/:id", async (req, res) => {
//     try {
//       const user = await User.findById(req.params.id);
//       const { password, ...others } = user._doc;
//       res.status(200).json(others);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

  // get post


module. exports = router;