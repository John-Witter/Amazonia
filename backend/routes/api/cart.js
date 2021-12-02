const express = require('express');
const asyncHandler = require('express-async-handler');
const { Products, Review, User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

const router = express.Router();

// might need to change cart to not be 2 tables.
router.get('/:')


// router.put('/:reviewId', requireAuth, asyncHandler(async (req, res) => {
//     const reviewId = parseInt(req.params.reviewId, 10)
//     let review = await Review.findByPk(reviewId, {include: User});
//     if(review.userId === req.user.id) {
//         review.text = req.body.text;
//         review.rating = req.body.rating;
//         await review.save();
//         return res.json(review);
//     }
// }))

// router.delete('/:reviewId', requireAuth, asyncHandler(async (req, res) => {
//     const reviewId = parseInt(req.params.reviewId, 10)
//     let review = await Review.findByPk(reviewId);
//     if(review.userId === req.user.id) {
//         await review.destroy();
//         return res.sendStatus(200);
//     }
// }))


module.exports = router;
