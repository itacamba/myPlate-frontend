import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react';
class EventRequestDetail extends Component {
    render() {
        let {event} = this.props
        return (
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
                            <td>Chef Name </td>
                            <td>{event.chef.name}</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>{event.date}</td>
                        </tr>
                        <tr>
                            <td>Party Size</td>
                            <td>{event.party_size}</td>
                        </tr>
                        <tr>
                            <td>Dish</td>
                            <td>{event.dish_name}</td>
                        </tr>
                    </tbody>
                </table>
            </Modal.Content>
        </Modal.Content>
    </Modal>
        );
    }
}

export default EventRequestDetail;