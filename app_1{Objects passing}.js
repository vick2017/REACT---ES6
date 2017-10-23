console.log("App.js is running!!!!");


//WITH VARIABLES

// var userName= 'Vick Sarkar!!!!';
// var userAge='26';
// var userLocation='Toronto';


//     var template= (
//         <div>
//         <h1>{userName.toLocaleUpperCase()}</h1>
//         <p>Age: {userAge}</p>
//         <p>Location: {userLocation}</p>
//         </div>
    
//     );
    
// NOW WITH OBJECTS

var user={
    Name: 'Vick Sarkar!!!!',
    Age:'26',
    Location:'Toronto'
}


    var template= (
        <div>
        <h1>{user.Name.toLocaleUpperCase()}</h1>
        <p>Age: {user.Age}</p>
        <p>Location: {user.Location}</p>
        </div>
    
    );


var appRoot= document.getElementById("app");


ReactDOM.render(template, appRoot);