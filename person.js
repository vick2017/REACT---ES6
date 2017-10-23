console.log("person.js is running!")

export const isAdult= (age) =>{
    if(age>=18) {
        alert("You are adult--TRUE")
        }
        else{
            alert ("You are a minor--FALSE")
        }
}

export const canDrink= (age) =>{
        if(age>=21){
            alert("YOU CAN DRINK!!!!")
        }
        else{
            alert("Sorry!!! You must be atleast 21 years old to drink!!18")
        }
}