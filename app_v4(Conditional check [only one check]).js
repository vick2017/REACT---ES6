console.log("App.js is running!!!!");



var user={
    
    Name:'Vick',
    Age:'12',
    Location:'Toronto'
}


    function getLocation(loc){
        if(loc){
            return <p>Location: {loc}</p> // returning whole html tag makes it visible if true orelse if false the whole tag is not visible when u inspect the element! 
            }
        }
            

    var template2=(
//23. Checks whether user.Age exsists if  no-> return nothing
//                                        yes-> take that user age and see if it is above 18   no->return nothing
//                                                                                             yes -> return user.Age
        <div>
        <h1>Name: {user.Name ? user.Name : 'Anonymous'}</h1>
        {(user.Age && user.Age>=18) && <p>Age: {user.Age}</p>}  
        {getLocation(user.Location)}
        </div>
    );

var appRoot= document.getElementById("app");


ReactDOM.render(template2, appRoot);