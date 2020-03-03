import React from 'react';

class UserInput extends React.Component{

    render(){
        return(
            <div>
                <input type='text' value={this.props.name} onChange={this.props.handle}></input>
                
            </div>
        )
    }
}

export default UserInput;