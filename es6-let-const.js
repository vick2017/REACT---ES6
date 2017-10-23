console.log("ES6 is running!!!!");



//WHY USE LET AND CONST --- ES6 TUTORIAL



//// CONST vs LET vs VAR (REASSIGNING AND REINITIALIZING)

//         (1) YOU CAN REassign A VARIABLE WITH ANY DATA TYPE LATER
//**IMP*** (2) IF YOU REINTIALIZE THE SAME VARIABLE LATER YOU WILL NOT EVEN KNOW THE PREV  VERSION EXSISTED-> VERY HARD TO DEBUG

//E.G:
var nameVar='VAR';
var nameVar='var';
console.log('nameVar', nameVar);


//ES6 LET-tutorial
let nameLet='LET';
nameLet='let'
//let nameLet='dasas';  --->babel crashed!
console.log('nameLet',nameLet);
//reAssigning a variable possible
//duplication of a variable not possible

//ES6 CONST-TUTORIAL
const nameConst='CONST';
//nameConst='const' ----> babel crashed (Cannot rewrite nameConst read-only)
//let nameLet='dasas';  --->babel crashed! (cannot duplicate variable)
console.log('nameConst',nameConst);
//reAssigning a variable not possible
//duplication of a variable not possible

//// CONST vs LET vs VAR (SCOPE --- FUNCTION)


function getName(){
    var myNameVar= 'soubhik';
    let myNameLet= 'soubhik';
    const myNameConst= 'soubhik';
    return myNameVar,myNameLet,myNameConst
}


getName();
console.log(myNameVar); 
console.log(myNameConst); 
console.log(myNameLet); 

/// Doesnt work --- myName not defined due to scope of var/const/let is inside the function



//var is accessible outside an if statement but not function --- function scoped only
//let, const are not accesible if defined inside a block to call it in multiple place intialize it globally!!!

//therefor let and const- block level scoping















var template=(
<div>
<h1>Hello world</h1>
</div>
);

var appRoot= document.getElementById("app");
ReactDOM.render(template, appRoot);