
import React from 'react';
import ReactDOM from 'react-dom';

import IndecissionApp from './components/IndecissionApp'



class OldSyntax{
    constructor(){
        this.name='Mike';
        this.getGreeting= this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi ${this.name}`;
    }
}

const oldsyntax= new OldSyntax();
console.log(oldsyntax); //DISPLAYS CLASS INSTANCE OF OldSyntax
console.log(oldsyntax.getGreeting());
const getGreeting=oldsyntax.getGreeting;
console.log(getGreeting()); // THE 'this binding is lost thus we need to use.bind function'


//===================================================


class NewSyntax{
name= 'jen';
age='23';
getGreeting=()=>`Hi ${this.name} of age ${this.age}`;
}
const newsyntax= new NewSyntax();
console.log(newsyntax);//DISPLAYS CLASS INSTANCE OF NewSyntax
console.log(newsyntax.getGreeting());
const getGreeting_new=newsyntax.getGreeting;
console.log(getGreeting_new());
ReactDOM.render(<IndecissionApp /*options={['Bellamy','Lawerence']}*/ />, document.getElementById('app'));