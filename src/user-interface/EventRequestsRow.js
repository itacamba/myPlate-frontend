import React, { Component } from 'react';
import EventRequestDetail from './EventRequestDetail';
class EventRequestsRow extends Component {

    constructor(){
        super()
        this.state = {
            alreadyClicked: null,
            status: null // isApproved: null 
        }
    }

    componentDidMount(){
        let {event} = this.props
        fetch(`http://localhost:3000/events/${event.id}`)
        .then(resp => resp.json())
        .then(data => {
            if (data.isApproved !== null){
                this.setState({
                    alreadyClicked: true,
                    status: data.isApproved // sets status to whatever isApproved is 
                })
            }
        })
    }
   

    render() {
        console.log("event is:", this.props.event)
        const {id, chef, date, dish_name} = this.props.event
        return this.props.event? 

            <tr> 
                {/* STATUS */}
                <td data-label="Status">
                    {this.state.status === null ? 
                        <i className="yellow circle icon"></i> : this.state.status? <i className="green circle icon"></i>
                        : <i className="red circle icon"></i>}
                </td>
                {/* CHEF */}
                <td data-label="Chef">{chef.name}</td>
                {/* DATE */}             
                <td data-label="Date">{date}</td>
                {/* OPTIONS */}
                <td data-label="Dish">
                    {dish_name}
                    {/* <button className={this.state.alreadyClicked? "ui right disabled button": "ui right  green button"} onClick={this.handleAccept}>Accept</button>
                    <button className={this.state.alreadyClicked? "ui right disabled button": "ui right red button"} onClick={this.handleDecline}>Decline</button> */}
                </td>
                {/* DETAILS */}
                <td data-label="Detail">
                    <EventRequestDetail event={this.props.event}/>
                    <i onClick={() => this.props.onCancelEvent(id)} id="delete-event-icon"className="trash icon"></i>
                </td>
                
            </tr>
        :null
    }
}

export default EventRequestsRow;