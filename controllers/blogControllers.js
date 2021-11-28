//blog_index, blig_details, blog_create_get, blog_create_post, blog_delete
const Blog = require('../models/blogs')
const blog_index = (req, res) => {
    Blog.find().sort({
            createdAt: -1
        })
        .then(result => {
            res.render('blogs/index', {
                title: 'Home Page',
                blogs: result
            });
        }).catch(err => {
            console.log('Error fetching the Blogs')
        })
}


const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id).then(result => {
        res.render('blogs/details', {
            blog: result,
            title: 'Blog Details'
        })
    }).catch(err => {
       res.status(404).render('404',{title:'Blog Not Found !'})
    })
}
const blog_create_get = (req, res) => {
    res.render('blogs/create', {
        title: 'Create Blog'
    })
}

const blog_create_post = (req, res) => {
    //only available if use urlencoded middle ware
    const blog = new Blog(req.body)

    blog.save().then(result => {
        res.redirect('/')
    }).catch(err => {
        console.log(err)
    })
}
const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id).then(result => {
        res.json({
            redirect: '/blogs'
        })
    }).catch(err => {
        console.log(err)
    })
}
module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}