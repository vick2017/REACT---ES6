

// CLASSES ARE LIKE BLUEPRINT!

class Person{

constructor(name='Anonymous', location='Private', age='Private', car='Private'){  //constructor(argument defaults if needed){} -->constructor func is used in classes to construct arguments passed through 
this.name = name; //                             through new constructor calls
this.location=location;
this.age=age;
this.car=car;
//this refers to the class instance     
 } // NOTICE: no comma after one function like objects
getGreeting(){
    // return 'Hi ' + this.name +' of '+this.age+' living in ' + this.location+' driving a '+this.car;
return `Hi ${this.name} of ${this.age} living in ${this.location} driving a ${this.car}`; //NEW ES6 SYNTAX
}


}

const me = new Student('Vick','Toronto','26','Mazda');
console.log(me);
console.log(me.getGreeting()); // calling methods inside class person

const other = new Student();
console.log(other);
console.log(other.getGreeting());