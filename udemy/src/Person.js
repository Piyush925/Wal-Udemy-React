import React from 'react'
import Radium from 'radium';
import Per from './Per';

class Person extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
           persons:"Max",
    
        showPerson:false
            
        }
        this.togglePerson=this.togglePerson.bind(this);
    }
    togglePerson()
    {
        this.setState({
            showPerson:true
        })
    }

    render(){
        const style={backgroundColor:'green',
        color:'white',
        ':hover':{
            backgroundColor:'Lightgreen',
            color:'black'
        }    
        }
        let persons=null;
        if(this.state.showPerson===true)
        {
            persons=(
                <Per name={this.state.persons}/>
            )
            style.backgroundColor='red'
            style[":hover"]={
                backgroundColor:'Yellow',
                color:'black'
            }
        }
        return(
            <div className="person">
                <h1>Hi this is react</h1>
                <Per name={this.state.persons}/>
                <button style={style} onClick={this.togglePerson}>Toogle Person</button>
            {persons    
            /* {this.state.showPerson===true ?
            <div>
            <h5>
               
               <Per name={this.state.persons}/>
               <Per name={this.state.persons}/>
            </h5>

        </div>:"hide"} */}
            </div>

        )
    }
}

export default Radium(Person);