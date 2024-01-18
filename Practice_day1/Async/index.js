const fs = require('fs');
// fs.writeFile("read.txt", "today is awasome today is my 2nd day ", (err) => {
//     console.log("file is created");
//     console.log(err);
// });
// fs.appendFile("read.txt", "enjoy your life", (err) => {
//     console.log("task is completed")
// });
// fs.readFile("read.txt", "utf-8", (err, data) => {
//     console.log(data);
// });


// //Async vs Sync
// const data = fs.readFileSync("read.txt", "utf-8");
// console.log(data);
// console.log("after code run");
// fs.readFile("read.txt", "utf-8", (err, data) => {
//     console.log(data);
// });
// console.log("after code run");
fs.mkdir("folder", (err) => {
    console.log("folder is created");
});
fs.writeFile("read.txt", "Async function we are going to make", (err) => {
    console.log("file is created");
});
fs.appendFile("read.txt", "jay shri ram ", (err) => {
    console.log("data is append");
});
fs.readFile("read.txt", "utf-8", (err, data) => {
    console.log(data);
});
fs.unlink("read.txt", (err) => {
    console.log("deleted")
});