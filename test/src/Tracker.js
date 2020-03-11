import React , {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';


class Tracker extends Component{
    documentData;
    constructor(props){
        super(props)
        this.state={
            activity:"",
            startDate:new Date(),
            endDate:"",
            startTime:"",
            endTime:""
        }
        this.handleTime = this.handleTime.bind(this);
        this.handleTimeEnd = this.handleTimeEnd.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    };

    handleChangeActivity = (e) => {
        this.setState({
          activity: e.target.value
        });
      };


    handleChange = date => {
        this.setState({
          startDate: date
        });
      };

      handleChangeEnd = date => {
        this.setState({
          endDate: date
        });
      };

      handleTime = (e) => {
        this.setState({startTime: e.target.value})
      }

      handleTimeEnd =(e) => {
        this.setState({endTime: e.target.value})
      }

      handleFormSubmit(e) {
        e.preventDefault()
       localStorage.setItem('document',JSON.stringify(this.state));
    }


      componentDidMount() {
        this.documentData = JSON.parse(localStorage.getItem('document1'));
     
        if (localStorage.getItem('document1')) {
            this.setState({
                activity:this.documentData.activity,
            startDate:this.documentData.startDate,
            endDate:this.documentData.endDate,
            startTime:this.documentData.startTime,
            endTime:this.documentData.endTime
        })
        
    } else {
        this.setState({
            activity:"",
            startDate:new Date(),
            endDate:"",
            startTime:"",
            endTime:""
        })
    }
    }
      
      


    render(){
        return (
            <div className="container">
            <form onSubmit={this.handleFormSubmit}>
                <input className="inputField" type="text" placeholder="Enter the Activity" onChange={this.handleChangeActivity} value={this.state.activity}></input><br/><br/>
                Start Date :<DatePicker selected={this.state.startDate} value={this.state.startDate} onChange={this.handleChange} /><br/><br/>
                End Date :<DatePicker selected={this.state.endDate} value={this.state.endDate} onChange={this.handleChangeEnd} /><br/><br/>
                Start Time:<TimePickerComponent id="timepicker" placeholder="Select a Time" width="195" value={this.state.startTime} onChange={this.handleTime} /><br/><br/>
                End Time:<TimePickerComponent id="timepicker" placeholder="Select a Time" width="195" value={this.state.endTime} onChange={this.handleTimeEnd} /><br/><br/>
     
                <button className="submit" type="submit"  id="submit">Submit</button><br/><br/>
            </form>

            </div>
        )
    }
    
    
}

export default Tracker;