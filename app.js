const express = require('express');
//create an express app
const app = express();
//morgan middleware
const morgan = require('morgan')
//blogs routes
const blogRoutes = require('./routes/blogRoutes')
//mongoose
const mongoose = require('mongoose');
//connection sting that connects to mongodb
const uri = "mongodb+srv://netninja:test1234@nodetuts.szgxu.mongodb.net/nodetuts?retryWrites=true&w=majority";
//this is a async function and returns a promise
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((result) => {
    console.log('Connected to the DB')
    //listen to a request at port 3000
    app.listen(3000)
}).catch((err) => {
    console.log(err)
})

//use blog routes
app.use("/blogs",blogRoutes);


//register view engine
app.set('view engine', 'ejs')


//middle ware & static files
app.use(express.static('PublicStuff'))
//morgan logger middleware
app.use(morgan('dev'));




app.get('/', (req, res) => {
    res.redirect('/blogs')
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    })
});

//404 page
app.use((req, res) => {
    res.status(404).render('404', {
        title: '404'
    })
})