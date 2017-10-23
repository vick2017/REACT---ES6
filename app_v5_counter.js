console.log("App.js is running!!!!");

let count=0;

    const appRoot= document.getElementById("app");
    const addOne=()=>{
        count++;
        console.log("One added");
        renderScore();
    };
    const minusOne=()=>{
        count--;
        console.log("One minused");
        renderScore();
};
    const reset=()=>{
        count=0;
        console.log("reset");
        renderScore();
    };

const   renderScore=()=>{
    const template= (
        <div>
        <h1>Count:{count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderScore();