import React from  'react';



class Example extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            update:0
        }
    }
    componentDidMount(){
        console.log("didi mount")
    }
    componentWillMount(){
        console.log("Wiill")
    }
    componentDidUpdate(){

        console.log("update")
    }
 render(){
     return(
         <div> 
             <button onClick={()=>{this.setState({update:1})}}>Click</button>
         </div>
     )
 }

}

export default Example;