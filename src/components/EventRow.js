import React, { Component } from 'react';

class EventRow extends Component {
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


    handleAccept = () => {
        console.log("been accepted...")
        const obj = {
            is_approved: true
        }
        let {event} = this.props
        fetch(`http://localhost:3000/events/${event.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(obj)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log("been accepted: ", data)
                 this.setState({
                     alreadyClicked: true,
                     status: data.isApproved
                    })
           
        })

    }
    handleDecline = () => {
        console.log("been denied...")
        const obj = {
            is_approved: false
        }
        let {event} = this.props
        fetch(`http://localhost:3000/events/${event.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(obj)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log("been denied: ", data)
                this.setState({
                    alreadyClicked: true,
                    status: data.isApproved
                })
        })
    }




    render() {
        let {ocassion, date, customer} = this.props.event
        console.log("event is: ", this.props.event )
        return (
            <tr> 
                {/* STATUS */}
                <td data-label="Status">
                    {this.state.status === null ? 
                        <i class="disabled circle icon"></i> : this.state.status? <i class="green circle icon"></i>
                        : <i class="red circle icon"></i>}
                </td>
                {/* HOST */}
                <td data-label="Host">{customer.name}</td>
                {/* DATE */}             
                <td data-label="Date">{ocassion}</td>
                {/* OPTIONS */}
                <td data-label="Options">
                    <button className={this.state.alreadyClicked? "ui right disabled button": "ui right  green button"} onClick={this.handleAccept}>Accept</button>
                    <button className={this.state.alreadyClicked? "ui right disabled button": "ui right red button"} onClick={this.handleDecline}>Decline</button>
                </td>
                {/* DETAILS */}
                <td data-label="Detail">
                    <button className="ui blue button">Details</button>
                </td>
                
            </tr>
        );
    }
}

export default EventRow;