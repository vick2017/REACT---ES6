console.log("App.js is running!!!!");



var user={
    
    Name:'Vick',
    Age:'15',
    Location:'Toronto'
}


    function getLocation(loc){
        if(loc){
            return <p>Location: {loc}</p> // returning whole html tag makes it visible if true orelse if false the whole tag is not visible when u inspect the element! 
            }
            

    var template2=(
        <div>
        <h1>Name: {user.Name ? user.Name : 'Anonymous'}</h1>
        {user.Age > 18 && <p>Age: {user.Age}</p>}
        {getLocation(user.Location)}
        </div>
    );

var appRoot= document.getElementById("app");


ReactDOM.render(template2, appRoot);