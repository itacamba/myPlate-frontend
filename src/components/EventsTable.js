import React, { Component } from 'react';
import EventRow from './EventRow'

class ChefEventsTable extends Component {
    render() {
        let {events} = this.props
        return (
            <div>
                <h1>All my Events</h1>
                <table class="ui table">
                
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Host</th>
                                <th>Date</th>
                                <th>Options</th>
                                <th>Details</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                           {/* map to display rows */}  
                           {events.map( e => <EventRow key={e.id} event={e}/>)}
                        </tbody>
                    </table>
            </div>
        );
    }
}

export default ChefEventsTable;