import React from 'react';

export default class ChildParentinvoke extends React.Component {

constructor(props){
  super(props)
this.state = {
    data:'Initial data...'
}

this.updateState=this.updateState.bind(this);
}
updateState(event){

    this.setState({data:event.target.value});
}

render(){
return(
 <div>
    <h1 className='text-sucess'>Parent component</h1>
    <h1 className='text-sucess'>{this.state.data}</h1>
      <h2>child component</h2>

<Content myDataProp={this.state.data}
         updateStateProp={this.updateState}></Content>
       
         </div> 
);
}
}

class Content extends React.Component{
 render() {
     return(
<div>
<input type="text" value={this.props.myDataProp}
   onChange={this.props.updateStateProp}/>
   <h3>{this.props.myDataProp}</h3>

</div>

     );
} 
}
