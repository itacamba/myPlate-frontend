import React, { Component } from 'react';
import EventRequestsRow from './EventRequestsRow';

class EventRequestsTable extends Component {
    render() {
        let {events} = this.props
        return (
            <div  id="event-table">
                <h1>All my Events</h1>
                <table className="ui table">
                
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Chef Name</th>
                                <th>Date</th>
                                <th>Dish</th>
                                <th>Details</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                           {/* map to display rows */}  
                           {events.map( e => <EventRequestsRow key={e.id} event={e} onCancelEvent={this.props.onCancelEvent}/>)}
                        </tbody>
                    </table>
            </div>
        );
    }
}

export default EventRequestsTable;