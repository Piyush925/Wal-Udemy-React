import React from 'react';
import Report from './Report';
import './App.css';
import './popup.css';
import Popup from './Popup';
import moment from 'moment'

class  App extends React.Component {
   data;
  constructor(props){
    super(props)
    this.state={
      
      toggle:false,
      titleInput:'',
      startTimeInput:'',
      endTimeInput:''
    }
    this.togglePopUp=this.togglePopUp.bind(this);
    this.Add=this.Add.bind(this);
   this.handleedit=this.handleedit.bind(this);
   this.handleend=this.handleend.bind(this);
   this.handlestart=this.handlestart.bind(this)
  }

  handleedit(event)
  {
    this.setState({titleInput:event.target.value})
  }

  handlestart(event)
  {
    this.setState({startTimeInput:event.target.value})
  }
  handleend(event)
  {
    this.setState({endTimeInput:event.target.value})
  }


  Add()
  {
    if(this.state.endTimeInput>=this.state.startTimeInput)
    { let today=new Date();let i=0;let datelength;
      let isbreak=0;
      this.data=JSON.parse(localStorage.getItem(this.props.mail));
      datelength=this.data.Date.length;
      
      while( i<datelength)
      {if(today!=this.data.Date[i].date)
        {i++;}
        else
        {
          isbreak=1;
          break;
        }
      }
      if(datelength===7)
      {
        this.data.Date.shift();
      }
      if(isbreak===1){
      this.data.Date[i].activity.push(this.state.titleInput)
      this.data.Date[i].startTime.push(this.state.startTimeInput)
      this.data.Date[i].endTime.push(this.state.endTimeInput)
    // this.data.Date[i].date=new Date()
    this.data.Date[i].date=new Date();}
    else{ if(this.data.Date[i>=7?i-2:i-1].date===''){ i=i-1;
      this.data.Date[i].date=new Date();
      this.data.Date[i].activity.push(this.state.titleInput)
      this.data.Date[i].startTime.push(this.state.startTimeInput)
      this.data.Date[i].endTime.push(this.state.endTimeInput)}
      else{
      this.data.Date.push({date:new Date(),activity:[this.state.titleInput],startTime:[this.state.startTimeInput],endTime:[this.state.endTimeInput]});
      // this.data.Date[i-1].activity.push(this.state.titleInput)
      // this.data.Date[i-1].startTime.push(this.state.startTimeInput)
      // this.data.Date[i-1].endTime.push(this.state.endTimeInput)
    }
    // this.data.Date[i].date=new Date()
   //this.data.Date[i].date=24;
    }
      localStorage.setItem(this.props.mail,JSON.stringify(this.data));
      alert("Activity Added");
    }
    else {
      alert("EndTime Should be more")
    }
    this.setState({toggle:!this.state.toggle})
    
  }
  

  togglePopUp()
  {
    this.setState({toggle:!this.state.toggle})
  }


  render(){
    this.data=JSON.parse(localStorage.getItem(this.props.mail));
  return (
    
    <div className='cen'>
      <h1>Time Tracker</h1>

      <button onClick={this.togglePopUp}>Add Activity</button>
      {this.state.toggle?
      <Popup add={this.Add} handlestart={this.handlestart} handleend={this.handleend} handle={this.handleedit} title={this.state.titleInput} start={this.state.startTimeInput} end={this.state.endTimeInput}   close={this.togglePopUp}/> : null}
      <table className="cen" border="1">
        <th>Title</th>&nbsp;&nbsp;
        <th>Date</th>&nbsp;&nbsp;
        <th>StartTime</th>&nbsp;&nbsp;
        <th>EndTime</th>&nbsp;&nbsp;
        <th>Duration</th>&nbsp;&nbsp;
        
       {
       
       this.data.Date.map((item,key1)=>{
       return this.data.Date[key1].activity.map((item,key)=>{
          return <Report item={item} date={moment(this.data.Date[key1].date).format('L')} start={moment(this.data.Date[key1].startTime[key]).format("HH:mm:ss")} end={moment(this.data.Date[key1].endTime[key]).format("HH:mm:ss")} duration=
          
           
{moment.utc(moment(this.data.Date[key1].endTime[key],"YYYY/MM/DD HH:mm:ss").diff(moment(this.data.Date[key1].startTime[key],"YYYY/MM/DD HH:mm:ss"))).format("HH:mm:ss")
          //this.data.Date[key1].endTime[key]-this.data.Date[key1].startTime[key]
        } ></Report>
           //<li><p>{item}   &nbsp; &nbsp;  {this.data.Date[key1].startTime[key]}   &nbsp; &nbsp;{this.data.Date[key1].endTime[key]} &nbsp; &nbsp; {Number(this.data.Date[key1].endTime[key])-Number(this.data.Date[key1].startTime[key])}  </p></li>
          })
       })
       }
      </table>
    </div>
  );
}
}

export default App;
