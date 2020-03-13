import React from 'react';
import App from './App';
import './popup.css'
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
        this.setState({email:this.state.email});
        this.toogle=!this.toogle
        
    }


    render()
    {
        return(
            <div className="cd">
                <h1 className={this.toogle?"hide":"centre"}>Login</h1> 
               <p className='centre'> <button className={this.toogle?"centre":"hide"} onClick={()=>{this.toogle=!this.toogle;this.setState({email:this.state.email})}}>Logout</button></p>
                <p className={this.toogle?"hide":"centre"}>
               Username : <input  placeholder="username" type='text' value={this.state.email} onChange={this.handleEmail}></input><br></br>
               Password : <input  placeholder="password" type='password' value={this.state.password} onChange={this.handlepassword}></input><br></br>
               <button className="centre" onClick={this.handleLogin} >Login</button>
                
                              {/* {<Router>
                  <Link to='/App'> 
                  </Link>
                <Switch>
                    <Route path="/App">
                    <App mail={this.state.email}/>
                    </Route>
                </Switch>

                   </Router> } */}

                   </p>
                   <div>
                  <p className="centre"> {this.toogle?<App mail={this.state.email} />: null} </p>
                   </div>
                
            </div>
        )
    }
}

export default Login;
