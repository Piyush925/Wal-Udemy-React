import React from 'react';

import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends React.Component{
  constructor(props)
  { super(props)
    this.state={
      username:''
    }
    this.handlechange=this.handlechange.bind(this);
  }
  handlechange(e)
  {
    this.setState({
      username:e.target.value
    })
  }
  render(){
    return(
      <div>
          <UserInput name={this.state.username} handle={this.handlechange} />
          <UserOutput user={this.state.username}  />
      </div>
    )

  }
}


export default App;
