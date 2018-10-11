import React from 'react';
import AddColorForm from './AddColorForm';
export default class UsingRefs extends React.Component {

constructor(props){
  super(props)
this.state = {
    data:'Initial data...'
}

this.updateState=this.updateState.bind(this);
this.clearInput=this.clearInput.bind(this);
};

updateState(e){
 this.setState({data:e.target.value});
}
clearInput(){
    this.setState({data:""});
    alert(this.refs.myInput.value)
   this.refs.myInput.focus()
   
    
}

render() {
    return (
       <div>
          <input value = {this.state.data} 
              onChange = {this.updateState} 
              ref = "myInput" id="txt1" />

          <button onClick = {this.clearInput}>CLEAR</button>
          <h4>{this.state.data}</h4>       
          <AddColorForm/>
       </div>
    );
 }
}