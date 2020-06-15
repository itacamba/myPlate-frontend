import React, { Component } from 'react';
import {Image, Modal, Button } from 'semantic-ui-react';
import EditDishForm from './EditDishForm'
class DishModal extends Component {


    render() {
        let {img, name,cuisine,description} = this.props.dish
        return (
            <Modal trigger={<Button className="ui blue button">Details</Button>}>
                <Modal.Header>Dish Information</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src={img} />
                    <Modal.Description>
                        <h1>{name}</h1>
                        <h3 id="dish-cuisine" className="ui grey small header">{cuisine}</h3>
                        <p>{description}</p>
                        <EditDishForm dish={this.props.dish}/>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}

export default DishModal;