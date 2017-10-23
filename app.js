//STATELESS FUNCTIONS ADDED! --> FOR simple functions
//Default prop values
//Removing individual options

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
        this.handleDeleteOption=this.handleDeleteOption.bind(this);
        
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
       
        this.state={                           // DEFAULT STATE OBJ
            options: [] /*props.options   LOCAL STORAGE ADDED*/            // DEFAULT STATE VALUES-->intial renderung values
        }
    }

    //FETCHING DATA LOCALLY---- try catch for bad JSON data and if options so that


        componentDidMount(){
            try{
                const json= localStorage.getItem('options');
                const options=JSON.parse(json);
                console.log("Fetching data");
                if(options){
                    this.setState(()=>({options: options}))
                }
            }catch(e)
                {

                }
            }
        


 
    componentWillUnmount(){console.log("Component will unmount");}
    
    
    //SAVING DATA LOCALLY
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json=JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        
    }
    handleDeleteAllOptions(){                //----METHOD PASSED AS KEY VALUE PAIR FOR OPTIONS FPR DATA MANIPULATION-----
        this.setState(()=>({options: []}));
    }

    handleDeleteOption(optionToRemove){                //----METHOD PASSED AS KEY VALUE PAIR FOR OPTIONS FPR DATA MANIPULATION-----
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>optionToRemove !== option)
        }));
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

        this.setState((prevState)=>({options: prevState.options.concat([newOption])}));
             /* options: prevState.options.push(newOption)     ---> this will break since .push modifies the old array and the program cant render anymore throwing error   */
    }   
    
    render(){
        const subtitle= 'Put your life on the hands of a computer!';
       
        return(
                <div>
                    <Header subtitle={subtitle}/> {/* class call header has a key value just like ID made so that it can be accesed in the class instance below!!!!*/}
                                                                     {/*title and subtitle are PROPS for Header COMPONENT*/}
                    <Action 
                    hasOptions={this.state.options.length>0}
                    handlePick={this.handlePick}/>                      
                    
                    <Options
                    options={this.state.options}
                    hasOptions={this.state.options.length>0}
                    handleDeleteAllOptions={this.handleDeleteAllOptions}  //-----METHOD PASSED AS KEY VALUE PAIR FOR OPTIONS FPR DATA MANIPULATION----
                    handleDeleteOption={this.handleDeleteOption}
                    />
                    
                    <AddOption handleAddOption={this.handleAddOption}/>
                </div>
        );
    }
}

//LOCAL STORAGE ADDED
// IndecissionApp.defaultProps={ // THIS IS REQUIRED TO KEEP .length feature active
//     options:[]
// };

// STATELESS FUNCTION used instead of classes
const Header= (props)=>{
    return(
        <div> 
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

//DEFAULT PROPS
Header.defaultProps={
    title: 'Indecission'
};


// STATELESS FUNCTION used instead of classes
const Options= (props) =>{
    return( <div>
        
        <button 
        disabled={!props.hasOptions}
        onClick={props.handleDeleteAllOptions}>
        Remove all</button>
        {props.options.length==0 && <p>Please add an option to get started!!</p>}
        
        
        {props.options.map((x) => <OptionEach key={x} optionText={x} handleDeleteOption={props.handleDeleteOption}/>)} 


    </div>);
};

// STATELESS FUNCTION used instead of classes
const OptionEach=(props)=>{
       return(
            <div>
            Your options are:{props.optionText}
            <button 
            onClick={(e)=>{
                props.handleDeleteOption(props.optionText)
            }}>
            
            remove
            </button>
            </div>
    );
};



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
        this.setState(()=>({error  /* or error: error */}));   


        //CLEAR IP BOX if valid data is entered!
        if(!error)
        {
         events.target.elements.input.value='';
        }
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

// STATELESS FUNCTION used instead of classes
const Action =(props)=>{
    return(
        <div>
        <button onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
        What should I do?</button>
        </div>
    );
};





const User= (props)=> {
return(
    <div>
    <p>Name:{props.name}</p>
    <p>Age:</p>
    </div>
);
};


ReactDOM.render(<IndecissionApp /*options={['Bellamy','Lawerence']}*/ />, document.getElementById('app'));