import React from 'react';
import App from './App';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Login extends React.Component{
    toogle=false
    constructor(props)
    {
       super(props)
        this.state={
            email:'',
            password:'',
            Date:[{date:'',activity:[],endTime:[],
            startTime:[]}]
        }
        
        this.handleEmail=this.handleEmail.bind(this);
        this.handlepassword=this.handlepassword.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }
    handleEmail(e)
    {
        this.setState({email:e.target.value});
        

    }
    handlepassword(e)
    {
        this.setState({password:e.target.value});
    }
    handleLogin(e)
    {   if(!localStorage.getItem(this.state.email))
        {
            localStorage.setItem(this.state.email,JSON.stringify(this.state))
        }
        this.toogle=!this.toogle;
        
    }


    render()
    {
        return(
            <div>
                <h1>Login</h1>
                
                <input placeholder="username" type='text' value={this.state.email} onChange={this.handleEmail}></input><br></br>
                <input placeholder="password" type='text' value={this.state.password} onChange={this.handlepassword}></input><br></br>
                
           
                              <Router>
                  <Link to='/App'> <button onClick={this.handleLogin} >Login</button>
                  </Link>
                <Switch>
                    <Route path="/App">
                    <App mail={this.state.email}/>
                    </Route>
                </Switch>

                   </Router> 

                
                
            </div>
        )
    }
}

export default Login;
