const express = require("express");
const app = express();
const path = require("path");
//console.log(path.join(__dirname, "../public"));

const port = 8989;
const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../template");
// app.use(express.static(staticpath));

app.set("view engine", "hbs");
app.set("views", templatepath);

app.get("/", (req, res) => {
    res.render("index");
});

// app.get("/", (req, res) => {
//     res.status(200).send("<h2>Hello from Home page<h2/>");
// });

app.get("/about", (req, res) => {
    res.status(200).send("<h1>from about page<h1/>");
});

app.get("/contact", (req, res) => {
    res.status(200).send("<h1>from contact page<h1/>");
});

app.get("/temp", (req, res) => {
    res.status(200).json([{
        id: 2,
        name: "manoj"
    },
    {
        id: 2,
        name: "manoj"
    },
    {
        id: 2,
        name: "manoj"
    }]);
});

app.listen(port, "127.0.0.1", () => {
    console.log(`listening is started at ${port}`);
});