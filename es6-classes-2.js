

// CLASSES ARE LIKE BLUEPRINT!

class Person{
    
    constructor(name='Anonymous', location='Private', age='Private', car='Private'){  
    this.name = name;                    
    this.location=location;
    this.age=age;
    this.car=car;
    
     } 
    getGreeting(){
      return `Hi ${this.name} of ${this.age} living in ${this.location} driving a ${this.car}`; 
    }
    
    
    }
    
    class Student extends Person{ // class students extends person
        constructor(name, location, age, car, major){
            super(name, location, age, car); // THIS CALLS THE PARENT CONSTRUCTOR FUNCTION AND POPULATES THE OTHER STUFF BEFORE MODELS
            this.major=major;
        } 
        hasMajor(){
            return !!this.major;
        }
        getGreeting() {
            let description = super.getGreeting();
            if(this.hasMajor()) {
                description+=` and you are studying ${this.major}`;
            }
            return description;
          }
    }







    const me = new Student('Vick','Toronto','26','Mazda','Computer');
    console.log(me);
    console.log(me.getGreeting()); 
    
    const other = new Student();
    console.log(other);
    console.log(other.getGreeting());