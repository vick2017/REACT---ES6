//ES 6      Arrow function

// DIFFERENCE: ES5 vs ES6 (func Vs arrow func)

//1)Name assignment
//es5 square function ---->You could assign name to a func like square
const square=function(x){
    return x*x;
};
console.log(square(8));

//ES6 square function---------> You cant assign a name to the function!!! they are annonymous
// const squareArrow= (x) =>{
//     return x*x;
// };
// console.log(squareArrow(9));

//2) Return type/Expression syntax --->if a function returns only one expression use arrow function instead shorter line of code!

const squareArrow= (x) => x*x;
console.log(squareArrow(100));


//ARROW FUNCTION --- EXPLICIT RETURN
const firstName= (fullname) =>{
   return fullname.split(' ')[0]
};


//ARROW FUNC---- IMPLICIT RETURN
// const firstName= (fullName) => fullName.split(' ')[0]
console.log(firstName('Soubhik Sarkar'))













const template=(<h1>Hello world</h1>);

const appRoot= document.getElementById("app");
ReactDOM.render(template, appRoot);