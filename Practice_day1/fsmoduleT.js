const fs = require("fs");
fs.writeFileSync("hello.txt", "welcome to fermion");
fs.appendFileSync("hello.txt", " today is my 2nd day");

const buf_data = fs.readFileSync("hello.txt");
org_data = buf_data.toString();
console.log(org_data);
fs.renameSync("fermion.txt", "hello.txt");
//  (err) => {
//     if (err) throw err;
//     console.log("File renamed");
// });


