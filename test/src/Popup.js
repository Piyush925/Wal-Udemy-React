import React from 'react';
import './popup.css';

class Popup extends React.Component{
    

    render(){
        return(
            <div className='popup'>
                <div className='popup\_inner'>
                <input type="text" placeholder="title" defaultValue={this.props.title} onChange={this.props.handle} >
                    </input><input type="number" defaultValue={this.props.start} onChange={this.props.handlestart} placeholder="startTime"></input>
      <input  type="number"defaultValue={this.props.end} onChange={this.props.handleend} placeholder="startTime"></input> 
      <button onClick={this.props.add}>ADD</button>
      <br></br>
      <button onClick={this.props.close}>Close</button>

                </div>
            </div>
        )
    }
}

export default Popup;