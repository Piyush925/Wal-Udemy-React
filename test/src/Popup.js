import React from 'react';
import './popup.css';
import TimePicker from 'react-time-picker'
import {TimePickerComponent} from '@syncfusion/ej2-react-calendars';

class Popup extends React.Component{
    

    render(){
        return(
            <div className='popup'>
              
              <div className="popup/_inner">
                <input  type="text" placeholder="title" defaultValue={this.props.title} onChange={this.props.handle} ></input><br></br>
                <TimePickerComponent format={"HH:mm"} placeholder="Select startTime"defaultValue={this.props.start} onChange={this.props.handlestart} /><br /><br />
                <TimePickerComponent format={"HH:mm"} placeholder="Select EndTime" defaultValue={this.props.end} onChange={this.props.handleend} /><br /><br />
               
               
               
                <button onClick={this.props.add}>ADD</button> <br/>  
                <button onClick={this.props.close}>Close</button>           
                    
                </div>
                
            </div>
        )
    }
}

export default Popup;