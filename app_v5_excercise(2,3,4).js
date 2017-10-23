console.log("App.js is running!!!!");

var app={
    title: 'Indecission app',
    subtitle:'Put your life in the hands of a computer!',
    options: []
    }

    // function option(options){
    //     if(options.length>0){
    //     return <p>Here are your options</p>
    //     }
    //     else{ return <p>No options</p>}
    // }


    //sub- logical &&
    // array func or ternary
    var template= (
        <div>
        <h1>{app.title.toLocaleUpperCase()}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length> 0? <p>Here are your options</p> : <p>No options</p>}
        </div>
      // {option(app.options)}
    );

    var appRoot= document.getElementById("app");
    
    
    ReactDOM.render(template, appRoot);