import React, { Component } from 'react';
import EventsRow from './EventsRow'

class EventsTable extends Component {
    render() {
        return (
            <div className="twelve wide centered column">
            <h1 className="header">Event Requests</h1>
            <table className="ui definition table">
                <tbody>
                    {this.props.events.map(e => <EventsRow key={e.id} event={e}/>)}   
                </tbody>
            </table>
            </div>
        );
    }
}

export default EventsTable;