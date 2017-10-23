
let visibility=false;
const toggleVisibility = () =>{
visibility=!visibility;
console.log(visibility);
render();
}


const render =()=>{
const template=(
<div>
    <h1>Toggle Visibility</h1>
    <button onClick={toggleVisibility}>{visibility? 'Hide Details' : 'Show details'}</button>
    {visibility && 
        <div>
            <p>Here is some info</p>
        </div>}
</div>
);
ReactDOM.render(template, document.getElementById("app"));
}

render();