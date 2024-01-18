const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
require('../db/dbconnection');
const User = require('../models/schema');
const hbs = require('hbs');
const path = require('path');
const bcrypt = require("bcryptjs")



const template_path = path.join(__dirname, '../templates/views')
const partials_path = path.join(__dirname, '../templates/partials')
app.set('view engine', 'hbs');
app.set('views', template_path)
hbs.registerPartials(partials_path);
app.use(express.urlencoded({ extended: false }));

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));
app.use(express.json());


app.post('/login', async (req, res) => {
    try {
        email = req.body.email;
        password = req.body.password;
        const existemail = await User.findOne({ email: req.body.email })
        console.log(existemail);
        const isMatch = await bcrypt.compare(password, existemail.password);
        if (isMatch) {
            res.status(200).render('home');
        }
        else {
            res.send('invalid user name and password');
        }
    }
    catch (err) {
        res.send('invalid username')
    }
});



app.post('/signup', async (req, res) => {
    try {
        data = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            cpassword: req.body.cpassword
        }
        if (data.password === data.cpassword) {

            const userdata = await User.create(data)
            console.log(userdata);
            res.status(200).send(userdata);
        }
        else {
            res.status(400).send('password and confirm password is not matched!!')
        }
    }
    catch (err) {
        console.log(err)
    }
})








app.get('/login', (req, res) => {
    res.status(201).render("login");
});


app.get('/signup', (req, res) => {
    res.status(201).render("signup");
});




app.get('/', (req, res) => {
    res.status(201).send("welcome user");
});

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});