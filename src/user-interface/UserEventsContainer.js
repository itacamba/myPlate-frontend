import React, { Component } from 'react';
import EventRequestsTable from './EventRequestsTable';

class UserEventsContainer extends Component {
    render() {
        return (
            <div id="user-events-container">
                <EventRequestsTable events={this.props.events} onCancelEvent={this.props.onCancelEvent}/>
            </div>
        );
    }
}

export default UserEventsContainer;