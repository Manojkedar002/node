const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const Collection = require('./config');


const app = express();
//convert data into json format
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

//use ejs as views engine
app.set('view engine', "ejs");
//to use static page
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('login')
});

app.get('/signup', (req, res) => {
    res.render('signup')
});
//resister user
app.post('/signup', async (req, res) => {
    const data = {
        name: req.body.username,
        password: req.body.password
    }
    //cheak if user is aready exist in database
    const existingUser = await Collection.findOne({ name: data.name });
    if (existingUser) { res.send('user is aready exist you can directly login'); }
    else {
        // hash password using bcrypt
        const saltRound = 10;//number of salt Round for bcrypt
        const hashpassword = await bcrypt.hash(data.password, saltRound);
        data.password = hashpassword;//replace hash passward with body password

        const userdata = await Collection.insertMany(data);
        console.log(userdata);
        res.send(userdata);
    }
});
app.post('/login', async (req, res) => {
    try {
        const cheak = await Collection.findOne({ name: req.body.username })
        if (!cheak) { res.send('user is not avaible ,please do signup before') }
        //compare the hash passward from data base with plain text
        const isPasswordMatch = await bcrypt.compare(req.body.password, cheak.password);
        if (isPasswordMatch) {
            res.render('home')
        }
        else {
            res.send("password not match");
        }
    }
    catch (err) {
        res.send('wrong datails')

    }
});
const port = 3000;

app.listen(port, () => {
    console.log(`server is running on ${port}`)
});