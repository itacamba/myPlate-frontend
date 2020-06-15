import React, { Component } from 'react';
import CoverPhoto from '../shared/CoverPhoto'
import ProfileRoundPhoto from '../shared/ProfileRoundPhoto'
import UserNameAndPro from '../shared/UserNameAndPro'
import EventDetails from '../chef-interface/EventDetails'
import UserDashboard from '../user-interface/UserDashboard';
class ProfileInner extends Component {
    constructor(){
        super()
        this.state = {
            showEvents: false,
            userEvents: [],
            eventClicked: false,
            currentEvent: null
        }
    }

    showEvents = () => {
        this.setState({
            showEvents: !this.state.showEvents
        })
    }

    componentDidMount () {
        let {user} = this.props
        fetch(`http://localhost:3000/user-events/${user.id}`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                userEvents: data
            })
        })
    }
    handleEventClick = (event) => {
        this.setState({
            eventClicked: !this.state.eventClicked,
            currentEvent: event
        })
    }
    handleEditPhoto = () => {
        console.log("photo was clicked")
    }

    onCancelEvent = (id) => {
        fetch(`http://localhost:3000/events/${id}`,{
            method: "DELETE"
        })
        let arr = this.state.userEvents
        arr.filter( e => e.id !== id)
        this.setState({
            userEvents: arr.filter( e => e.id !== id),
            eventClicked: !this.state.eventClicked
        })
    }

    render() {
       let {user} = this.props
        return user ?
            <div className="ui grid container">
                <CoverPhoto img={user.cover_img} />
                <ProfileRoundPhoto img={user.img} />
                <UserNameAndPro user={user} />
                { this.state.eventClicked? <EventDetails event={this.state.currentEvent} onCancelEvent={this.onCancelEvent}/> : null}
                <UserDashboard  events={this.state.userEvents} onCancelEvent={this.onCancelEvent} user={user}/>
                
            </div>
        : null
    }
}

export default ProfileInner;