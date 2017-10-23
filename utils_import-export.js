console.log("util.js is running!");


export const square=(x)=>{    // NAMED EXPORT
    return x*x;
}

export const add = (a, b) => a+b; // NAMED EXPORT

const subtract= (c, d) => c- d;

export default subtract; // DEFAULT EXPORT
// export{square, add, subtract as default};

// //exports-default export- named exports