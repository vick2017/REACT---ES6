console.log("App.js is running!!!!");
var app={
    
title:'Indecissio App',
subtitle:'Put your life in the hands of a computer',
options:[]
}

const appRoot= document.getElementById("app");


const onFormSubmit=(events)=>{
    events.preventDefault(); // prevents full page refresh!
    
    const input=events.target.elements.input.value;
    if(input){
        app.options.push(input);
        events.target.elements.input.value= '';
        render();  
    }
};

const removeAll=()=>{
    if(app.options.length>0){
    app.options=[];
    render(); 
    }
    else{
        alert("Array is already empty");
    }
    
};

const makeDecission=()=>{
    const randomNum= Math.floor(Math.random()* app.options.length);
    alert("You should do " + app.options[randomNum]);
    };

const render = () =>{
const template= (
        <div>
        <h1>{app.title}</h1>
        {app.subtitle &&<p>{app.subtitle}</p>}
        <p>{app.options.length>0? 'Here are you options':'No options'}</p>
        <p>{app.options.length}</p>
        <button disabled={app.options.length<=0}onClick={makeDecission}>What should I do?</button>
        <button onClick={removeAll}>Remove all</button>
        
        
    {
        //     app.options.map( (arrayElement) => {
        //         return <li key={arrayElement}>{arrayElement}</li>
        //     })       

        // INSTEAD OF THE ABOVE LINES JUST USE THE ONE LINE CODE BELOW ---- works same way!
        app.options.map( (arrayElement) =><li key={arrayElement}>{arrayElement}</li>)
    }


        <form onSubmit={onFormSubmit}>
        <input type="text" name="input" placeholder="text"/>
        <button>Add option</button>
        </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();

   
