/*React component states:
1)Setup default state object
2)Component rendered with default state values*
3)Change state based on events like (button clicks, form submission, finishing of a an HTTP request that got some JSON data from an API !  etc
4)Component re-rendered using new state values*
5) start at 3 */


/*Ok so we know by now that cahnging state is cruicial for rendering the UI this was done by passing props from parent to child class 

But on more complex problems like this one the child classes actually manipulate data in the parent class like delete options and add to options array!

BUT KEY VALUE PAIR CAN ONLY BE PASSED FROM PARENT-> CHILD [** ONE-WAY DATA Communication]


WE HAVE A WORKAROUND FOR THIS PROBLEM BY PASSING METHODS AS A KEY VALUE PAIR from PARENT CLASS to the child component this function is associated with data manipulation!  
^^ two way data flow
*/

class IndecissionApp extends React.Component{
    constructor(props){ //constructor function is a special method that will bind the this keyword in the rest of the class
        super(props);
        this.handleDeleteAllOptions=this.handleDeleteAllOptions.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={                           // DEFAULT STATE OBJ
            options: []             // DEFAULT STATE VALUES-->intial renderung values
        }
    }
    handleDeleteAllOptions(){                //----METHOD PASSED AS KEY VALUE PAIR FOR OPTIONS FPR DATA MANIPULATION-----
        this.setState(()=>{
            return{
                options: []
            };
        });
    }

    handlePick(){                //----METHOD PASSED AS KEY VALUE PAIR FOR OPTIONS FPR DATA MANIPULATION-----
        const randomNum= Math.floor(Math.random()* this.state.options.length);
        alert("You should " + this.state.options[randomNum]);  

    }


    handleAddOption(newOption){
        if(!newOption)
        {
            return 'Enter valid value to add item'
        }
        
        else if(this.state.options.indexOf(newOption)>-1)
        {
            return 'This options already exsists'
        }

      this.setState((prevState)=>{
          return{
             /* options: prevState.options.push(newOption)      ---> this will break since .push modifies the old array and the program cant render anymore throwing error   */
            options: prevState.options.concat([newOption])
            }

      });
    }         
    
    render(){
        const title= 'Indecsion app';
        const subtitle= 'Put your life on the hands of a computer!';
       
        return(
                <div>
                    <Header title={title} subtitle={subtitle}/> {/* class call header has a key value just like ID made so that it can be accesed in the class instance below!!!!*/}
                                                                     {/*title and subtitle are PROPS for Header COMPONENT*/}
                    <Action 
                    hasOptions={this.state.options.length>0}
                    handlePick={this.handlePick}/>                      
                    
                    <Options
                    options={this.state.options}
                    hasOptions={this.state.options.length>0}
                    handleDeleteAllOptions={this.handleDeleteAllOptions}  //-----METHOD PASSED AS KEY VALUE PAIR FOR OPTIONS FPR DATA MANIPULATION----
                    />
                    
                    <AddOption handleAddOption={this.handleAddOption}/>
                </div>
        );
    }
}




class Header extends React.Component{
render () {
    console.log(this.props); //this.props calling key from the call <header key/>
    return (
        <div> 
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
        </div>
        );
    }
}

class Options extends React.Component{

    render(){
        return(
            <div> 
                {this.props.options.map((x) => <OptionEach key={x} optionText={x}/>)} 
                <button 
                disabled={!this.props.hasOptions}
                onClick={this.props.handleDeleteAllOptions}>
                Remove all</button>
                {/*COMMENT:
                    <button onClick={this.removeAll.bind*(this)}>Remove all</button>
                    this passes the 'this' into removeAll func --->SO WE ARE PASSING
                    this EVERY TIME COMPONENT RENDERS WHICH IS HIGHLY INEFFICIENT!!!

                    SO WE USE BINDING THE this INTO THE FUNCTION USING THE CONSTRUCTOR METHOD!!!
                */}
            </div>
        );
    }
}   


class OptionEach extends React.Component{
    render(){
        return(
            <div>
            Your options are:{this.props.optionText}
            </div>
        );
    }
}  

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOpt= this.handleAddOpt.bind(this);
        this.state={
            error: undefined
        };

    }
    handleAddOpt(events){
    events.preventDefault(); // prevents full page refresh!
    
    const input=events.target.elements.input.value.trim(); // .trim() neglects outer blank spaces
                    //IP: console.log(events);
                    //OPs events object from form submission 
                    
                    //IP:console.log(events.target.elements.input);
                    //OP: <input type="text" name="input" placeholder="text">
                
                    //IP: console.log(events.target.elements.input.value);
                    //OP: THE THING U TYPE IN THE TEXT BOX
    
    // if(input){                                 =>NEW CHECK TO SEE IF ARRAYS EMPTY IS SET IN PARENT CLASS THUS WE DONT NEED THIS ANYMORE
       const error= this.props.handleAddOption(input);
    // //  ^^^^-> I need constructor function in this class to access this 'this' function
    // }
        this.setState(()=>{
            return{
                error,  // or error: error          
            }
        });
    }
render(){

    return(
        <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOpt}>
            <input type="text" name="input" placeholder="text"/>
            <button>Add option</button>
            </form>
        </div>
    );
    }
}

class Action extends React.Component{
    render(){
        return(
            <div>
            <button onClick={this.props.handlePick}
            disabled={!this.props.hasOptions}
            >
            What should I do?</button>
            </div>
        );
    }
}







ReactDOM.render(<IndecissionApp />, document.getElementById('app'));