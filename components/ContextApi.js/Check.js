import React from "react";
const Counter=()=>{

    return(
    
    <NumberContext.Consumer>{(val)=><h1>{val}</h1>}</NumberContext.Consumer>
    
    
    );
}