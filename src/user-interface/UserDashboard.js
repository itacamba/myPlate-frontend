import React, { Component } from 'react';
import UserAboutContainer from './UserAboutContainer';
import UserEventsContainer from './UserEventsContainer';
import UserReviewsContainer from './UserReviewsContainer';


class UserDashboard extends Component {
  constructor() {
        super()
        this.state = {
          currentSection: 'about',
        }
      }


    setCurrentSection = (section) => {
        this.setState({
            currentSection: section
        })
    }
    render() {
        let {events, user} = this.props
        return events?
            <div id="user-dashboard-container">
                <nav id="user-dashboard-nav">
                    <div onClick={() => this.setCurrentSection("about")}>About</div>
                    <div onClick={() => this.setCurrentSection("event-requests")}>My Event Requests</div>
                    <div onClick={() => this.setCurrentSection("reviews")}>Reviews</div>
                </nav>
                <div id="dashboard-content">
                    {this.state.currentSection === 'about'? <UserAboutContainer user={user}/> : null}
                    {this.state.currentSection === 'event-requests'? <UserEventsContainer events={events} onCancelEvent={this.props.onCancelEvent}/> : null}
                    {this.state.currentSection === 'reviews'? <UserReviewsContainer user={user}/> : null}
                </div>
                
            </div>
        : null 
    }
}

export default UserDashboard;