const express = require('express');
const path = require('path');
const app =express();

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static('views'));
app.use('/css', express.static(__dirname + 'views/css'))
app.use('/img', express.static(__dirname + 'views/img'))

const date= new Date();
const day=date.getDay();
const hour=date.getHours();


app.use(function (req, res, next) {
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
        next();
    }
    else {
        res.send('Please check out our website from Monday to Friday between 9:00 and 17:00');
        
    }
    
  });
app.get('/', (req, res)=> {
    res.render("home")
});
app.get('/contact', (req,res)=> {
    res.render ("contact")
        });
app.get('/services', (req, res)=> {
    res.render("services")
})


app.listen('3000')