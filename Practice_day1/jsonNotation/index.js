const fs = require("fs");
const mydata = {
    name: "manoj",
    age: 23,
    city: "Akola"
};

// console.log(JSON.stringify(mydata));               // object to JSON
// console.log(JSON.parse(JSON.stringify(mydata)));    // json to object
const json_data = JSON.stringify(mydata);

fs.writeFile("json1.json", json_data, (err) => {
    console.log("done");
});

fs.readFile("json1.json", "utf-8", (err, data) => {
    console.log(data);
    console.log(JSON.parse(data));
});