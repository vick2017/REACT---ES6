//ES 6      Arrow function

// Argument objects are no longer bound with arrow function

//ES5
// const add = function(a,b){
//     console.log(arguments); // this prints all variables passed inside the functions as arg [55,1,1000]
//     return a+b; // but only call by value parameters are executed sequentally in this expression!
// };
// console.log(add(55,1,1000));

//ES6
const add = (a,b)=>{
    // console.log(arguments); // this prints all variables passed inside the functions as arg [55,1,1000]
    return a+b; // but only call by value parameters are executed sequentally in this expression!
};
console.log(add(55,1,1000));





//this keyword-no longer bound 


//ES5
// const user={
// name: 'Andrew',
// Cities:['Toronto','Ottawa','Montreal'],
// printPlacesVisited: function(){
//    console.log(this.name);
//    console.log(this.Cities);
// }
// };
// user.printPlacesVisited();



//this is not accessible inside forEach with regular ES5 function howver it is accesible by a arrow function
const user={
    name: 'Andrew',
    Cities:['Toronto','Ottawa','Montreal'],
    
    // printPlacesVisited: function(){
    printPlacesVisited(){ // new type of function declaration just same as above line!
        
    // printPlacesVisited:()=>{ // this doesnt have bindness of own value therefore goes upto the parent element-> globall
       console.log(this.name);
       console.log(this.Cities);
        
         this.Cities.forEach((city)=>{
         console.log(this.name+ ' has lived in ' +city);
     });
    }
};
    
    user.printPlacesVisited();
    
























const template=(<h1>Hello world</h1>);

const appRoot= document.getElementById("app");
ReactDOM.render(template, appRoot);