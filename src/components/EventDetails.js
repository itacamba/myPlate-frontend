import React from 'react';

const EventDetails = ({event, onCancelEvent}) => {
    return (
        <div className="centered row">
            <div className="eleven wide column">
                <div id="rigth-cont" className="ui segment">
                   <h1 className="centered header">Details for {event.ocassion}</h1>
                   <p>{event.isApproved === null ? 
                            <div className="ui orange label">Pending</div>
                            : event.isApproved ? <div className="ui green label">Approved</div> : <div className="ui red label">Denied</div>
                        }</p> 
                   <div className="content">
                        <h4>Chef Name:</h4>
                        <p>{event.chef.name}</p>
                        <h4>Party Size: </h4>
                        <p>{event.party_size}</p>
                        <h4>Date:</h4>
                        <p>{event.date}</p>
                        <h4>Status: </h4>
                        <button className="ui red button" onClick={() => onCancelEvent(event.id)}>Cancel Event</button>

                   </div>
                </div>

            </div>
        </div>
    );
};

export default EventDetails;