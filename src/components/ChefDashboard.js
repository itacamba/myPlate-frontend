import React, { Component } from 'react';
import DishesTable from './DishesTable';
import EventsTable from './EventsTable';

class ChefDashboard extends Component {
    constructor() {
        super();
        this.state = {
          name: "React",
          showHideDemo1: false,
          showHideDemo2: false,
          showHideDemo3: false
        }
      }

      hideComponent = (name) =>  {
        console.log(name);
        switch (name) {
          case "showHideDemo1":
            this.setState({ showHideDemo1: !this.state.showHideDemo1 });
            break;
          case "showHideDemo2":
            this.setState({ showHideDemo2: !this.state.showHideDemo2 });
            break;
          case "showHideDemo3":
            this.setState({ showHideDemo3: !this.state.showHideDemo3 });
            break;
        }
      }

    onEventsClick = () => {
        console.log("Events clicked")
    }
    render() {
        const { showHideDemo1, showHideDemo2, showHideDemo3 } = this.state;
        return (
            <div id="tab" >
                <div id="left-side">
                    <div onClick={() => this.hideComponent("showHideDemo1")}>My Dishes</div>
                    <div onClick={() => this.hideComponent("showHideDemo2")}>Event Requests</div>
                    <div onClick={() => this.hideComponent("showHideDemo3")}>Syllabus</div>
                </div>
                <div id="right-side">
                    <div id="list">
                        {/* <DishesTable/> */}
                        {showHideDemo1 && <DishesTable />}
                        <hr />
                        {showHideDemo2 && <EventsTable />}
                        <hr />
                        {showHideDemo3 && <DishesTable />}
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default ChefDashboard;