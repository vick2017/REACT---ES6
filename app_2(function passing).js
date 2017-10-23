console.log("App.js is running!!!!");

var app={
    title: 'Indecission app',
    subtitle:'Put your life in the hands of a computer!',
    }


var user={
    Name:'Vick',
    Age:'26',
}


    function getLocation(loc){
        if(loc){
            return <p>Location: {loc}</p> // returning whole html tag makes it visible if true orelse if false the whole tag is not visible when u inspect the element! 
            }
            
    }

    var template= (
        <div>
        <h1>{app.title.toLocaleUpperCase()}</h1>
        <p>{app.subtitle}</p>
        </div>
    
    );

    var template2=(
        <div>
        <h1>Name: {user.Name}</h1>
        <p>Age: {user.Age}</p>
        {getLocation(user.Location)}
        </div>
    );

var appRoot= document.getElementById("app");


ReactDOM.render(template2, appRoot);