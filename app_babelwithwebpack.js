// Importing 3rd party modules!!!
/* 1> Install
    2> IMPORT
        3> USE*/ 

//EG- NPM VALIDATOR

import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';



const template= <p>THIS IS JSX FROM WEBPACK!</p>

ReactDOM.render(template,document.getElementById("app"))




console.log(validator.isEmail('test@asdas.com'));