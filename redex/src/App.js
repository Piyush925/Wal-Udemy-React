import React from 'react';

import './App.css';
import { ADD, SUBSTRACT } from './Reducer/action'
import {connect} from 'react-redux';






class App extends React.Component{

  render(){
    
    //onclickadd=this.props.onclickadd
    return(
      <div>
        <div>Counter : {this.props.counter}</div>
        <button onClick={this.props.clickadd}>Add</button>
        <button onClick={this.props.clicksub}>Substract</button>
      </div>

    )
  }
}

const mapStateToProps=(state)=>{
  return{
    counter:state.counter

  }
}


const mapDispatchToProps=(dispatch)=> {
  return{
  clickadd:()=>{ dispatch({type:ADD})},
  clicksub:()=>{ dispatch({type:SUBSTRACT})}
  
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(App);
