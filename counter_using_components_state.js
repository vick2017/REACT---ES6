//LOCAL STORAGE ADDED AND DEFAULT PROPS REMOVED!!

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleRemoveOne=this.handleRemoveOne.bind(this);
        this.handleReset=this.handleReset.bind(this);

        this.state = {
            count: 0,
        };

    };
        //FETCHING DATA LOCALLY---- try catch for bad JSON data and if options so that


        componentDidMount(){
            try{
                const data= parseInt(localStorage.getItem('count'),10);
                console.log("Fetching data");
                if(!isNaN(data)){
                    this.setState(()=>({count: data}))
                }
            }catch(e)
                {
    
                }
            }
        

    
    componentWillUnmount(){console.log("Component will unmount");}
    
    
    //SAVING DATA LOCALLY
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
        }
        
    }
    
    handleAddOne (){
        this.setState((prevState)=>{
            return{
                count:  prevState.count + 1
                };
            });
        }
        

    handleRemoveOne (){
        this.setState((prevState)=>{
            return{
                count:  (prevState.count > 0? prevState.count-1: 0 ) 
                };
            });
    }

    handleReset (){
        this.setState(()=>{
            return{
                count: 0
                };
            });
    }



    render(){
        let count=0;
        return (
         <div>
         <h1>Count:{this.state.count}</h1>
         <button onClick={this.handleAddOne}>+1</button>
         <button onClick={this.handleRemoveOne}>-1</button>
         <button onClick={this.handleReset}>reset</button>
         </div>
        );
    }
}



//NOT REQUIRED ANYMORE SINCE LOCAL STORAGE HAS BEEN ADDED
// //DEFAULT VALUES
// Counter.defaultProps={
//     count:0
// }

                        // VALUES PASSED AS AN ARGUMENTS- IF NOT PASSED THEN THE COUNT IS PRESUMED TO BE THE DEFAULT PROP VALUES
ReactDOM.render(<Counter  /*count={44}*//>, document.getElementById("app"));
