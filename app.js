
//imports
const express = require('express');
const app = express()
const port = 4000;


//set views
app.set('views','./views')
app.set('view engine', 'ejs')


//Static files

app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))



/*app.get('',(req,res)=>{
    res.sendFile(__dirname +'/views/index.html')
})
*/

app.get('/',(req, res) =>{
        res.render('index', {text: "Hello"});
    })

app.get('/about',(req, res) =>{
        res.render('about', {text: "About page"});
})

//Listen on port 4000
app.listen(port, ()=> console.info(`Listening on port ${port}`))