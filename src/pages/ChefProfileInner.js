import React, { Component } from 'react';
import CoverPhoto from '../shared/CoverPhoto'
import ProfileRoundPhoto from '../shared/ProfileRoundPhoto'
import UserNameAndPro from '../shared/UserNameAndPro'
import ChefDashboard from '../chef-interface/ChefDashboard';
//import LeftMenu from '../components/LeftMenu';
//import RightContainer from '../components/RightContainer'
//import EventDetails from '../components/EventDetails'

class ChefInnerProfile extends Component {

    constructor(){
        super()
        this.state = {
            userEvents: [],
            dishes: []
        }
    }
    componentDidMount(){
        // Fetch User Events
        let userId = this.props.user.id
        console.log()
        fetch(`http://localhost:3000/chef-events/${userId}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            userEvents: data
        }))
        // Fetch Chefs Dishes
        fetch(`http://localhost:3000/chef-dishes/${userId}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            dishes: data
        }))
    }

    onDishDelete = (id) => {
        console.log("I was clicked", id)
        fetch(`http://localhost:3000/dishes/${id}`, {
            method: "DELETE"
        })
        let filtered = this.state.dishes.filter(d => d.id !== id)
        this.setState({
            dishes: filtered
        })
    }
    
    render() {

        const {user} = this.props
        return (
            <div className="ui grid container">
                <CoverPhoto img={user.cover_img} />
                <ProfileRoundPhoto img={user.img}/>
                <UserNameAndPro user={user}/>
                <ChefDashboard 
                    events={this.state.userEvents} 
                    dishes={this.state.dishes} 
                    onDishDelete={this.onDishDelete}
                    user={user}
                />
            </div>
        );
    }
}

export default ChefInnerProfile;