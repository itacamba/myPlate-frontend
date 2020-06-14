import React, { Component } from 'react';
import CoverPhoto from '../components/CoverPhoto'
import ProfileRoundPhoto from '../components/ProfileRoundPhoto'
import UserNameAndPro from '../components/UserNameAndPro'
import EventsTable from '../components/EventsTable'
import ChefDashboard from '../components/ChefDashboard';
// import LeftMenu from '../components/LeftMenu';
//import RightContainer from '../components/RightContainer'
//import EventDetails from '../components/EventDetails'

class ChefInnerProfile extends Component {

    constructor(){
        super()
        this.state = {
            userEvents: []
        }
    }
    componentDidMount(){
        let userId = this.props.user.id
        console.log()
        fetch(`http://localhost:3000/chef-events/${userId}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            userEvents: data
        }))
    }
    
    render() {

        const {user} = this.props
        return (
            <div className="ui grid container">
                <CoverPhoto img={user.cover_img} />
                <ProfileRoundPhoto img={user.img}/>
                <UserNameAndPro user={user}/>
                <ChefDashboard events={this.state.userEvents}/>
                <EventsTable events={this.state.userEvents}/>
            </div>
        );
    }
}

export default ChefInnerProfile;