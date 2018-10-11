import React from 'react';

export default class TextDisplay extends React.Component {

render(){

    let myStyle={
        fontSize:20,
        color:'#FF0000'
    }
 return(
<div style={myStyle}>welcome:{this.props.text}
    
</div>
 )

}

}
TextDisplay.defaultProps ={ text:'noname'};