const express = require('express');
const app = express();
const User = require('./config');
const Collection = require('./config');
const bcrypt = require('bcrypt');
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'));
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('login');
});


app.get('/signup', (req, res) => {
    res.render('signup');
})

app.post('/signup', async (req, resp) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    console.log(data)
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) { resp.send('given user name exist'); }
    else {
        const saltRound = 10;
        const hashpassword = await bcrypt.hash(data.password, saltRound);
        data.password = hashpassword;

        const userdata = await User.insertMany(data);
        resp.send(userdata);
    }

});
app.post('/login', async (req, resp) => {
    try {
        const cheak = await Collection.findOne({ email: req.body.email });
        if (!cheak) { resp.end(`<h1>user not available<h1/>`) }
        const isPasswordMatch = await bcrypt.compare(req.body.password, cheak.password)
        if (isPasswordMatch) {
            resp.render('home');
        }
        else {
            resp.end('invalid password');
        }
    }
    catch (err) {
        console.log(err);

        resp.send(err)
    }

})





const port = 3000;
app.listen(port, () => {
    console.log(`server is running on ${port}`);
})