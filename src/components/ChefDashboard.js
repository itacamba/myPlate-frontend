import React, { Component } from 'react';
import DishesTable from './DishesTable';
import EventsTable from './EventsTable'

class ChefDashboard extends Component {
    constructor() {
        super();
        this.state = {
          currentSection: 'myDishes',
        }
      }


    setCurrentSection = (section) => {
        this.setState({
          currentSection: section
        })
    }
    render() {
        let {dishes, events} = this.props
        return (
            <div id="tab" >
                <div id="left-side">
                    <div onClick={()=> this.setCurrentSection('myDishes')}>My Dishes</div>
                    <div onClick={()=> this.setCurrentSection('eventRequests')}>Event Requests</div>
                    <div onClick={()=> this.setCurrentSection('calendar')}>Calendar</div>
                </div>
                <div id="right-side">
                    <div id="list">
                        
                        {/* <DishesTable/> */}
                        {this.state.currentSection === 'myDishes'? <DishesTable dishes={dishes} onDishDelete={this.props.onDishDelete}/> : null}
                        {/* <EventsTable /> */}
                        {this.state.currentSection === 'eventRequests'? <EventsTable events={events}/> : null}
                        {/* <EventsTable /> */}
                        {this.state.currentSection === 'calendar'? <DishesTable dishes={dishes} /> : null}
                
                    </div>
                </div>
            </div>
        );
    }
}

export default ChefDashboard;