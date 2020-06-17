import React, { Component } from 'react';
import ReviewCard from './ReviewCard';

class ReviewsByMe extends Component {
    render() {

        const {events, user} = this.props
        return (
            <div id="reviews-container">
                {events.map(e =>  e.reviews.map(r => r.user_id === user.id? <ReviewCard key={r.id} review={r} user={user} e={e.ocassion}/>:null))}
            </div>
        );
    }
}

export default ReviewsByMe;