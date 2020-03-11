import React from 'react';


class Report extends React.Component{

    render()
    {
        return(
            <tr>
                <td>{this.props.item} </td>&nbsp;&nbsp;
                <td>{this.props.date} </td>&nbsp;&nbsp;
                <td>{this.props.start} </td>&nbsp;&nbsp;
                <td>{this.props.end} </td>&nbsp;&nbsp;
                <td>{this.props.duration} </td>&nbsp;&nbsp;
            </tr>
        )
    }

}

export default Report;