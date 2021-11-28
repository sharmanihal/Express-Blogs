const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*schema defines a structure of documents that we
are going to later store in our collection */

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true })

//Now we need to create a blog model based on blogs schema
/*This Blog name(first argument) is important as we have named
our collection blogs in the actual database and mongoose
will look for blogs*/
const Blog=mongoose.model('Blog',blogSchema);
module.exports=Blog;
//we can then use this model to intreact with the database