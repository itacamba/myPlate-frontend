import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { Component } from 'react';
import SelectDropdown from './SelectDropdown'

class FormDishQuote extends Component {

    constructor(){
        super()
        this.state = {
            startDate: new Date(),
            partySize: null
            
        }
    }

    handleChange = date => {
        this.setState({
          startDate: date
        })
    }

    getSelected = (value) => {
        this.setState({
            partySize: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const event = {
            ocassion: e.target.querySelector('input[name="event"]').value,
            party_size: this.state.partySize,
            date: this.state.startDate,
            dish_id: this.props.dish.id,
            chef_id: this.props.chefId,
            customer_id: this.props.user .id
        }
        console.log(event)
        // this function triggers the function in ProfileOuter.js so we can hide the form
        this.props.onGetQuoteClick()
        // show success message
        this.props.successMessage()
    }


    render() {
        let {dish} = this.props
        return dish?
        <div id="selected-dish-container" className="row">
        <div  class="ten wide column centered">
            <div id="selected-dish" className="ui segment item">
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div>
                    <h3 className="ui grey header">Quote for {dish.name}</h3>
                </div>
                <br></br>
                <div class="field">
                        <label>Your Event Name</label>
                        <input type="text" name="event" placeholder="Event Name"/>
                </div>
                <div class="field">
                    <label>Party Size</label>
                    <SelectDropdown getSelected={this.getSelected}/>
                </div>
                <div class="field">
                    <label>Date:</label>
                    <DatePicker 
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        minDate={new Date()}
                    />
                </div>
                <button class="ui button" type="submit" >Submit</button>
            </form>
            </div>
            </div>
        </div>
    : null
    }
}


export default FormDishQuote;