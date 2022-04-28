import React, { Component } from "react";


class App extends Component {
  constructor(props) {
    super(props)
    
  this.state = {placeHolder: "ENTER INPUT HERE!"} 
  this.handleClick = (e) => {this.setState({hasLoaded:true})} 
  }

  
handleInput = (e) => {
return(this.setState({placeHolder: e.target.value}))
console.log("handleInput")
}

handleClick = (e) => {
  if (e = true){
    this.setState({hasLoaded:false})
    console.log ("hasLoaded")
  }
}


  render() {
    return (
      <div>
            {this.state.hasLoaded? <h1>Loading...</h1> : <h1>STARTER TITLE</h1>}<br></br>
        <div><input type="text" placeholder ={this.state.placeHolder} onChange = {this.handleInput}/></div><br></br>
        <button onClick = {this.handleClick}>Submit</button>
        
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount")
  }
}





export default App;
