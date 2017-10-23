class VisibilityToggle extends React.Component{
constructor(props){
    super(props);
    this.handleToggleVisibility=this.handleToggleVisibility.bind(this);
    this.state={
        visibility: false
    }
}

handleToggleVisibility(){
    this.setState((prevState)=>{
        return{
            visibility:  !prevState.visibility
              };
        });
    }



render(){
    
    return(

            <div>
            <h1>Toggle Visibilty</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.visibility? 'Hide details' : 'Show details'}</button>
            {this.state.visibility && (
                <div>
                <p>Here are some details.!!!</p>
                </div>
            )}
            
            </div>

         );
    }

}

ReactDOM.render(<VisibilityToggle/>, document.getElementById("app"))