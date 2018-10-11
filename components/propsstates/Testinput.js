import React from 'react';
import TextDisplay from './TextDisplay'

export default class Testinput extends React.Component {

constructor(props){
  super(props)
this.state = {
    inputText:'Murthy',
};
}
handleChange(event){
this.setState(
    {
        inputText:event.target.value
    })  

}
render(){
 return(
<div>
    <input type="text" value="Hello"></input>
    <div>enter name</div>
  <input type="text"
  onChange={this.handleChange.bind(this)}/>
      {this.state.inputText?console.log("valid"):console.log("No Data")}
      {this.state.inputText?<TextDisplay text={this.state.inputText}/>
                     :<TextDisplay text="enter name please"/>}

}
</div>
 )

}

}
