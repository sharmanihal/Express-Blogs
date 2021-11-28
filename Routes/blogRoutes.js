const express = require("express");
const router = express.Router();
const blogController = require('../controllers/blogControllers')
//middleware that takes care of converting the data from post request to a workable format
//so it takes the url encoded data and parses it to workable format
router.use(express.urlencoded({
    extended: true
}))
//blog routes
router.get('/', blogController.blog_index)
router.get('/create', blogController.blog_create_get)
router.post('/', blogController.blog_create_post)
router.get('/:id', blogController.blog_details)
router.delete('/:id', blogController.blog_delete)
module.exports = router;