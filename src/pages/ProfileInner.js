import React, { Component } from 'react';
import CoverPhoto from '../components/CoverPhoto'
import ProfileRoundPhoto from '../components/ProfileRoundPhoto'
import UserNameAndPro from '../components/UserNameAndPro'
import LeftMenu from '../components/LeftMenu'
import RightContainer from '../components/RightContainer'
import EventDetails from '../components/EventDetails'
import CameraIcon from '../components/CameraIcon';

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
        console.log("I was clicked")
        this.setState({
            showEvents: !this.state.showEvents
        })
    }

    componentDidMount () {
        let {user} = this.props
        fetch(`http://localhost:3000/user-events/${user.id}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            userEvents: data
        }))
    }
    handleEventClick = (event) => {
        console.log("event", event)
        this.setState({
            eventClicked: !this.state.eventClicked,
            currentEvent: event
        })
    }
    handleEditPhoto = () => {
        console.log("photo was clicked")
    }

    onCancelEvent = (id) => {
        console.log("deleting...", id)
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
                <div id="left-menu-and-right-container" className="row" >
                    <LeftMenu showEvents={this.showEvents} eventsQty={this.state.userEvents.length}/>
                    {this.state.showEvents? <RightContainer events={this.state.userEvents} handleClicked={this.handleEventClick}  /> : null }
                </div>
                
                
            </div>
        : null
    }
}

export default ProfileInner;