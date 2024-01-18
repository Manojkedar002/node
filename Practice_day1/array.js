const person = ["jay", "vijay", "ajay"];

person.push("suresh");
console.log(person + "  " + person.length);

//spread syntax
const arrayCopied = [...person, "paresh", "ganesh"];
console.log(arrayCopied);

//rest operator
const sum = (...args) => {
    var add = 0;
    for (let arr of args) {
        add = add + arr;
    }
    let average = add / args.length;
    return average;

}
console.log(sum(10, 20, 30, 40, 25, 36));