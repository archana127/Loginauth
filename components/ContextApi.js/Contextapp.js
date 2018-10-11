import React, { Component } from 'react';
//import logo from './logo.svg';
import "./Context.css";
import NumberContext from "./Context";

const Counter=()=>{

return(

<NumberContext.Consumer>{(val)=><h1>{val}</h1>}</NumberContext.Consumer>
);

}
export default class Contextapp extends Component{

constructor(props){
    super(props)
    this.state={ 
        number:0
    };

    this.onDecHandler=this.onDecHandler.bind(this);
    this.onIncHandler=this.onIncHandler.bind(this);
    }
    onIncHandler(){

        this.setState({number:this.state.number+1});
    };
    onDecHandler(){

        this.setState({number:this.state.number-1});
    };

    render(){
    return(
      <div>
       <h1 className="App-title">React API</h1>
       <NumberContext.Provider value={this.state.number}>
         <Counter/>
        </NumberContext.Provider>            
        <button onClick={this.onIncHandler} className="btn">increment</button>
        <button onClick={this.onDecHandler} className="btn">decrement</button>
    </div>

    );


}


}