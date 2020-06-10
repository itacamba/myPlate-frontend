import React, { Component } from 'react';
import CoverPhoto from '../components/CoverPhoto'
import ProfileRoundPhoto from '../components/ProfileRoundPhoto'
import UserNameAndPro from '../components/UserNameAndPro'
import LeftMenu from '../components/LeftMenu'
import RightContainer from '../components/RightContainer'
import EventDetails from '../components/EventDetails'

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

    render() {
       let {user} = this.props
        return user ?
            <div className="ui grid container">
                <CoverPhoto img={user.cover_img} />
                <ProfileRoundPhoto img={user.img}/>
                <UserNameAndPro user={user}/>
                { this.state.eventClicked? <EventDetails event={this.state.currentEvent}/> : null}
                <div id="left-menu-and-right-container" className="row">
                    <LeftMenu showEvents={this.showEvents}/>
                    {this.state.showEvents? <RightContainer events={this.state.userEvents} handleClicked={this.handleEventClick}/> : null }
                </div>
                
                
            </div>
        : null
    }
}

export default ProfileInner;