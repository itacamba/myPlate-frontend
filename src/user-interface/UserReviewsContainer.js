import React, { Component } from 'react';
import ReviewsByMe from './ReviewsByMe';
import ReviewsByOthers from './ReviewsByOthers';

class UserReviewsContainer extends Component {

    constructor(){
        super()
        this.state = {
            currentSection: 'by-me',
            eventsAndReviews: [],
            myReviews: [] // contains review objects[{review},{review}...]
        }
    }

    setCurrentSection = (section) => {
        this.setState({
            currentSection: section
        })
    }

    componentDidMount(){
        const {id} = this.props.user
        // fetch("http://localhost:3000/reviews")
        fetch(`http://localhost:3000/event-reviews/${id}`)
        .then( resp => resp.json())
        .then( data => {
            this.setState({
                eventsAndReviews: data // contains event objects[{event},{event}...]
            })
        })
    }

    render() {
        const {user} = this.props
        return (
            <div id="user-about-container">
               
               <nav id="user-about-links">
                    <div id="about-title">
                        <h1 className="ui medium header">Reviews</h1>
                   </div>
                    <div className="about-link" onClick={() => this.setCurrentSection("by-me")}>Written by Me</div>
                    <div className="about-link" onClick={() => this.setCurrentSection("by-others")}>Written by Others</div>
               </nav>
               <div id="user-info-container">
                   {this.state.currentSection === 'by-me' ? <ReviewsByMe events={this.state.eventsAndReviews} user={user}/>: null}
                   {this.state.currentSection === 'by-others' ? <ReviewsByOthers events={this.state.eventsAndReviews} user={user}/> : null}
               </div>
           </div>
        );
    }
}

export default UserReviewsContainer;