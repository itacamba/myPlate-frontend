import React, { Component } from 'react';
import DishesTable from './DishesTable';
import EventsTable from './EventsTable';

class ChefDashboard extends Component {
    constructor() {
        super();
        this.state = {
          currentSection: 'myDishes'
        }
      }


    setCurrentSection = (section) => {
        this.setState({
          currentSection: section
        })
    }
    render() {
        
        return (
            <div id="tab" >
                <div id="left-side">
                    <div onClick={()=> this.setCurrentSection('myDishes')}>My Dishes</div>
                    <div onClick={()=> this.setCurrentSection('eventRequests')}>Event Requests</div>
                    <div onClick={()=> this.setCurrentSection('syllabus')}>Syllabus</div>
                </div>
                <div id="right-side">
                    <div id="list">
                        
                        {/* <DishesTable/> */}
                        {this.state.currentSection === 'myDishes'? <DishesTable /> : null}
                        <hr />
                        {this.state.currentSection === 'eventRequests'? <EventsTable events={this.props.events}/> : null}
                        <hr />
                        {this.state.currentSection === 'syllabus'? <DishesTable /> : null}
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default ChefDashboard;