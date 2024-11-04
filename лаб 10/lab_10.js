//1 
console.log("1 --------------------------------------");
const set = new Set([1, 1, 2, 3, 4]);
console.log(set);
console.log("2 --------------------------------------");
//2
const name = "Nikitos";
age = 21;
console.log(delete name);
console.log(delete age);
console.log("3 --------------------------------------");
//3
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;
console.log(y);
console.log("4 --------------------------------------");
//4
const user = {name: "Nikitos", age: 21};
const admin = {admin: true, ...user};

console.log(admin);
console.log("5 --------------------------------------");
//5
const person = { name: "Nikitos"};
Object.defineProperty(person, "age", {value:21});
console.log(person);
console.log(Object.keys(person));
console.log("6 --------------------------------------");
//6
const a = {};
const b = {key: "b"};
const c = {key: "c"};
a[b]=123;
a[c]=456;
console.log(a[b]);
console.log("7 --------------------------------------");
//7
let num = 10;
const increaseNumber = () => num++;
const increasePassedNumber = number => number++;
const num1 = increaseNumber;
const num2 = increasePassedNumber(num1);
console.log(num1);
console.log(num2);
console.log("8 --------------------------------------");
//8
const value = {number:10};
const multiply = (x = {...value}) => {
    console.log((x.number *=2));
}
multiply();
multiply();
multiply(value);
multiply(value);
console.log("9 --------------------------------------");
//9
[1,2,3,4].reduce((x,y) => console.log(x,y));