import React, { Component } from 'react';

class ReviewCard extends Component {
    render() {
        // const {title, event ,dish_name, content, user_id} = this.props.review
        const {user, review,e} = this.props
        console.log("review is: ", this.props.review)
        
        return (
            <div id="review-card"class="ui raised card">
                <div class="content">
                    <div class="header">{review.title}</div>
                    <div class="meta">
                        <span class="category">{e}</span>
                    </div>
                    <div class="description">
                        <p>{review.content}</p>
                    </div>
                </div>
                <div class="extra content">
                    <div class="right floated author">
                        <img class="ui avatar image" src={review.user_id === user.id? user.img : review.user.img}/> 
                        {review.user_id === user.id? "Me" : review.user.name}
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewCard;