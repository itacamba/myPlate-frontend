import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
class EditDishForm extends Component {
    constructor () {
        super()
        this.state = {
            id: null,
            name: '',
            cuisine: '',
            description: '',
            img: ''
        }
    }

    componentDidMount () {
        let {id, name, cuisine, description, img} = this.props.dish
        this.setState({
            id: id,
            name: name,
            cuisine: cuisine,
            description: description,
            img: img
        })
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        let {id, name, cuisine, description, img} = this.state
        let dish = {
            name: name,
            cuisine: cuisine,
            description: description,
            img: img
        }
        fetch(`http://localhost:3000/dishes/${id}`, {
            method: 'PATCH',
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
            <Modal size="mini" trigger={<Button className="ui blue button" >Edit</Button>}>
                <Modal.Header>Edit Dish</Modal.Header>
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

export default EditDishForm;