const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')
const port = 3000

// static website

const static_path = path.join(__dirname,'../public')
app.use(express.static(static_path))


// template path
const template_path = path.join(__dirname,'../templates/views')

// partial path
const partials_path = path.join(__dirname,'../templates/partials')



// Setting for handlers which is hbs

app.set('view engine', 'hbs');

// now setting for partials
app.set('views',template_path)

// registering partials
hbs.registerPartials(partials_path)

// routing

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/weather',(req,res)=>{
    res.render('weather')
})
app.get('*',(req,res)=>{
    res.render('404error',{
        errMsg : 'Oops! Page not found 🙄'
    })
})
app.listen(port,()=>{
    console.log(`Listening at port number ${port}`);
})