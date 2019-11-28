// let - Block scope variable
function letFunc(){
  let x = 10;
}
letFunc();
//console.log(x); // undefined;




//Const - Block scope variable, cann't be changed
function constFunc(){
  const xconst = 10;
  //xconst = 20; // Throws error, cann't be modifed;
  const yconstArray = [10, 20];
  yconstArray.push(30);
  console.log(yconstArray); // [10, 20, 30] You can add/push data to array if declared as const
}
constFunc();
//console.log(xconst); // undefined;


//Arrow functions

let example = (i) => i;

let example2 = (x, y) => {
  let sum = x+y
  console.log(sum);
}

console.log(example("Hello")); //Hello;
example2(10, 20); // 30



// Template litrals and String interpolation
let templitralsx = 10;
let templity = 20;
let txt = `This person's age is ${templitralsx} and my brother age is ${templity+5}`; 
console.log(txt);


//Array Destructuring 

let myArr = [10, 20, 30];

console.log(myArr[0]);

let [a, b, c] = myArr;
console.log(b);


//Object Destructuring
 
let myObj = {
             name: 'pk', 
             age:'29', 
             city:'bangalore',
             state:'KA'
            };

console.log(myObj['state']);

let {name, age, city, state} = myObj;

console.log(city);



// Enhanced Object litrals

let car = "BMW", color = "green", price = 10000000;

let myCarObj = {
  car : car,
  color: color,
  price : price
};

console.log(myCarObj.price);  // 10000000

//Shorthand property if keys and variables are the same

let myCarObj2 = {
  car,
  color,
  price
};

console.log(myCarObj2.color); //green


// Rest Parameter

function myFuncRest(a, b, ...list){
  console.log(a, b);
  console.log(list.length);
}

myFuncRest(1, 2, 3, 4, 5, 6, 7); // Passing values as comma, separated


//Spread Operator 
let spreadOpr = [3, 4, 5, 6, 7];
myFuncRest (1, 2, ...spreadOpr); //passing value as array for rest parameter


//Default constructor

function myFuncTest(x, y=20){
  console.log(x+y);
}

myFuncTest(10); // 30


// For Of loop; for arrays/iterators

let cars = ['bmw', 'audi', 'benz'];

for(let car of cars){
  console.log(car);
}


//For in loop for Objects/Enumurators;
let personObj = {
  name:'John',
  age:30,
  city:'New York',
}

for(let key in personObj){
  console.log(personObj[key]);
}



// Class in JS
class MyClass{
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  sum(){
    console.log(this.x + this.y);
  }
}

let myClassObj = new MyClass(10, 20);

myClassObj.sum();












 
