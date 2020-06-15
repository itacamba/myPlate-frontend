import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react';

class CreateDishForm extends Component {

    constructor () {
        super()
        this.state = {
            name: '',
            cuisine: '',
            description: '',
            img: ''
        }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        let { name, cuisine, description, img} = this.state
        let {id} = this.props.user
        let dish = {
            name: name,
            cuisine: cuisine,
            description: description,
            img: img,
            user_id: id
        }
        fetch(`http://localhost:3000/dishes`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dish)
        })
        .then(resp => resp.json())
        .then(data => this.setState({
            name: data.name,
            cuisine: data.cuisine,
            description: data.description,
            img: data.img
        }))

    }


    render() {
        
        return (
            <Modal size="mini" trigger={<Button className="ui green button" >Create New Dish +</Button>}>
                <Modal.Header>Create New Dish</Modal.Header>
                    <Modal.Content >
                       <form class="ui form" onSubmit={this.handleSubmit}>
                            <div class="field">
                                <label>Name</label>
                                <input type="text" name="name" placeholder="Dish Name" 
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div class="field">
                                <label>Cuisine</label>
                                <input type="text" name="cuisine" placeholder="Dish Cuisine"
                                    value={this.state.cuisine}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div class="field">
                                <label>Description</label>
                                <textarea rows="3" name="description" placeholder="Dish Description"
                                    value={this.state.description}
                                    onChange={this.handleInputChange}
                                ></textarea>
                            </div>
                            <div class="field">
                                <label>Dish Image</label>
                                <input type="text" name="img" placeholder="Dish Cuisine"
                                    value={this.state.img}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <button class="ui button" type="submit">Submit</button>
                        </form>
                   </Modal.Content>
            </Modal>
        );
    }
}

export default CreateDishForm;