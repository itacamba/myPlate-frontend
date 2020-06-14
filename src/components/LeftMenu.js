import React, { Component } from 'react';

class LeftMenu extends Component {
    constructor(){
        super()
        this.state = {
            clicked: false,
            secondClicked: false,
            thirdClicked: false
        }
    }


    handleClick = () => {
        this.setState({
            clicked: true,
            second: false,
            third: false
        })
        this.props.showEvents()
    }

    handleSecondClick = () => {
        this.setState({
            clicked: false,
            second: true,
            third: false
        })
    }
    handleThirdClick = () => {
        this.setState({
            clicked: false,
            second: false,
            third: true
        })
    }
  
    render() {
        return (
            <div  className="four wide column">
                <div class="ui vertical menu">
                    <div href="#" className={this.state.clicked? 'active red item': 'item'} onClick={this.handleClick}>
                        Requests
                        <div className={this.state.clicked? 'ui red left pointing label': 'ui gray label'}>{this.props.eventsQty}</div>
                    </div>
                    <div href="#" className={this.state.second? 'active red item' : "item"} onClick={this.handleSecondClick} >
                        Spam
                        <div className={this.state.second? 'ui red left pointing label': 'ui gray label'}>51</div>
                    </div>
                    <div href="#" className={this.state.third? 'active red item' : 'item'} onClick={this.handleThirdClick}>
                        Updates
                        <div className={this.state.third? 'ui red left pointing label': 'ui gray label'}>1</div>
                    </div>
                    <div class="item">
                        <div class="ui transparent icon input">
                        <input type="text" placeholder="Search mail..."/>
                        <i class="search icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftMenu;

