import React from 'react';
export default class CompLifeCycle extends React.Component{

constructor(props){

    super(props);
    this.state={
        data:0,
        msg:'Initial data...'
    }
    this.setNewNumber=this.setNewNumber.bind(this);
    this.updateState=this.updateState.bind(this);
};

setNewNumber(e){
    this.setState({data:this.state.data+1})
}
updateState(e){
    this.setState({msg:e.target.value})
}

render(){

    return(
     <div>
     <button onClick={this.setNewNumber}>Increment</button>
     <Content myNumber={this.state.data} ></Content>
     <input type="text" value={this.state.msg} onChange={this.updateState}/>
     
     </div>

    )
}

}
class Content extends React.Component{
  constructor(props){
      super(props);
      this.state={name:'Murthy'}
      console.log("in constructot" +props.myNumber);
      console.log("1 constructot fired");
      this.handleScroll=this.handleScroll.bind(this);
  }
  componentWillMount(){
      console.log('1 component will mount'  +this.props.myNumber);
  }
  handleScroll() {
      console.log("scroll execusted");
  }
  componentDidMount(){
    console.log('2 component did mount  reset data');

    console.log('component did mount'  +this.props.myNumber);

  }
  componentWillReceiveProps(nextProps){

    console.log('3.set default props')
    console.log('3.set default props' +nextProps.myNumber)
    this.setState({isPassed:nextProps.myNumber >=60})
  }

  static getDerivedStateFromProps(props,state){
      console.log("getDerivedfromstate");
      console.log(state.name);
      return{}

  }
  shouldComponentUpdate(nextProps,nextState){
    console.log("should render");
      console.log(nextState)
      console.log("4component render");
      if(nextProps.myNumber > 3){
      return true}else{ return false;}
  }
  componentWillUpdate(nextProps,nextstate)
{
    console.log("5component will updtae" +nextProps.myNumber);
}
  componentDidUpdate(prevProps,prevState){
      console.log('7 component did update')
  }
  componentDidCatch(err)
  {
    console.log('some error has occured')
  }
componentWillUnmount(){
    console.log('8.will unmount')
    window.removeEventListener('scroll',this.handleScroll);

}


render(){
    return(
        <div>
            <h1>{this.props.myNumber}</h1>
        </div>
    )
}
}











