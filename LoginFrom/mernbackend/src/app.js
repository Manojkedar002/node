const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
require('./db/conn');
const User = require("./models/resisters");
const bcrypt = require('bcryptjs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const static_path = path.join(__dirname, "../public");

const template_path = path.join(__dirname, "../templates/views");
console.log(path.join(__dirname, "../templates/views"));

const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));
app.set('view engine', "hbs");
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.get('/', (req, res) => {
    res.render("index")

})


app.get('/login', (req, res) => {
    res.render("login")

});

app.get('/signup', (req, res) => {
    res.render("resister")

});

//create new user in database
app.post('/signup', async (req, res) => {
    try {
        data = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            cpassword: req.body.cpassword
        }

        const token = await User.generateAuthToken();
        if (data.password === data.cpassword) {
            console.log("signup");
            const userdata = await User.create(data);
            res.send(userdata);
            res.render('index')
        }
        else {
            res.send('please make sure password and confirm password are same')
        }
    }
    catch (err) {
        res.status(400).send(err)
    }
});

app.post('/login', async (req, res) => {
    try {

        email = req.body.email;
        password = req.body.password;
        console.log(email);
        const useremail = await User.findOne({ email: email });
        console.log(useremail)
        const isMatch = bcrypt.compare(password, useremail.password)

        if (isMatch) {

            res.status(201).render('index');
        }
        else {
            res.send('invalid details');
        }
    }
    catch (err) {
        res.send('invalid username and password')
    }
});

// const jwt = require('jsonwebtoken')

// const createToken = async () => {
//     const token = await jwt.sign({ _id: '6597f0d2878a0a444ca6060a' }, "given_idisofmanojkedarinourdatabase", { expiresIn: '2 seconds' });
//     console.log(token);

//     const userver = await jwt.verify(token, "given_idisofmanojkedarinourdatabase");
//     console.log(userver);
// }

// createToken();

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})