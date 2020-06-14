import React, { Component } from 'react';

class EventsRow extends Component {

    constructor(){
        super()
        this.state = {
            alreadyClicked: null,
        }
    }

    componentDidMount(){
        let {event} = this.props
        fetch(`http://localhost:3000/events/${event.id}`)
        .then(resp => resp.json())
        .then(data => {
            if (data.isApproved !== null){
                this.setState({
                    alreadyClicked: true
                })
            }
            console.log("event is: ", data)
            // if(data.isApproved){
            //     this.setState({accepted: true})
            // } else {
            //     this.setState({denied: true})
            // }
            // this.setState({btnClicked: data.isApproved})
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
                 this.setState({alreadyClicked: true})
           
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
                this.setState({alreadyClicked: true})
        })
    }
    render() {
        let {event} = this.props
        return (
            <tr>
                <td class="four wide column">{event.ocassion}</td>
                <td>
                    {event.customer.name} | {event.date} | {event.dish_name}
                    <button className={this.state.alreadyClicked? "ui right floated disabled button": "ui right floated red button"} onClick={this.handleDecline}>Decline</button>
                    <button className={this.state.alreadyClicked? "ui right floated disabled button": "ui right floated green button"} onClick={this.handleAccept}>Accept</button>
                </td>
            </tr>
        );
    }
}

export default EventsRow;