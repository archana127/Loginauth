import React from 'react';
import Grid from './propsstates/Grid';
import UsingRefs from './Intercomp/UsingRefs';
import CompLifeCycle from './Lifecycle/Complifecycle';
import WeatherComponent from './Lifecycle/WeatherComponent';
import Contextapp from './ContextApi.js/Contextapp';
export default class Dashboard extends React.Component {

constructor(props){
  super(props)
this.state = {
    company:"Verizon IT",
};
}


render(){

    return(

  <div className='bg-warning'>
    <h1>{this.state.company}</h1>
    <ContactInfo/>
    <Grid/>
    <UsingRefs/>
    <Contextapp/>
    <CompLifeCycle/>
    <WeatherComponent/>
  </div>
)
}
}
const ContactInfo = (props) => {

  return (
  <h3>{props.mail}</h3>
  )}
ContactInfo.defaultProps={
  mail:'archana@gmail.com'
};




