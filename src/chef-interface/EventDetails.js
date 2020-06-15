import React from 'react';
import { Modal, Button } from 'semantic-ui-react';
const EventDetails = ({event}) => {
    // t.integer "party_size"
    // t.date "date"
    // t.integer "chef_id"
    // t.integer "customer_id"
    // t.boolean "isApproved"
    console.log("event is: ", event)
    return event?
        <Modal  size="small" trigger={<Button className="ui blue button">Details</Button>}>
        <Modal.Header>Event Information</Modal.Header>
        <Modal.Content>
            <Modal.Content>
                {/* <button className={event.isApproved === null? }>{event.isApproved}</button> */}
                {event.isApproved === null? <button className="ui orange button">Pending</button>
                    : event.isApproved? <button className="ui green button">Accepted</button> : <button className="ui red button">Denied</button>  }
                
                <table class="ui definition table">
                    <tbody>
                        <tr>
                            <td class="four wide column">Ocassion</td>
                            <td>{event.ocassion}</td>
                        </tr>
                        <tr>
                            <td>Host Name </td>
                            <td>{event.customer.name}</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>{event.date}</td>
                        </tr>
                        <tr>
                            <td>Party Size</td>
                            <td>{event.party_size}</td>
                        </tr>
                    </tbody>
                </table>
            </Modal.Content>
        </Modal.Content>
    </Modal>
    : null
};

export default EventDetails;



// <div className="centered row">
// <div className="eleven wide column">
//     <div id="rigth-cont" className="ui segment">
//        <h1 className="centered header">Details for {event.ocassion}</h1>
//        <p>{event.isApproved === null ? 
//                 <div className="ui orange label">Pending</div>
//                 : event.isApproved ? <div className="ui green label">Approved</div> : <div className="ui red label">Denied</div>
//             }</p> 
//        <div className="content">
//             <h4>Chef Name:</h4>
//             <p>{event.chef.name}</p>
//             <h4>Party Size: </h4>
//             <p>{event.party_size}</p>
//             <h4>Date:</h4>
//             <p>{event.date}</p>
//             <h4>Status: </h4>
//             <button className="ui red button" onClick={() => onCancelEvent(event.id)}>Cancel Event</button>

//        </div>
//     </div>

// </div>
// </div>