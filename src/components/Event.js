import React, { Component } from 'react';

class Event extends Component {
    constructor(){
        super()
        this.state = {
            isClicked: false
        }
    }

    handleBtnClick = () => {
        console.log("Clickedddd")
        this.setState({
            isClicked: !this.state.isClicked,
        })
    }

    
    render() {
        let {e, handleClicked} = this.props
        return (
                <div className="ui segment">
                        <div className="ui four column grid" >
                            <div class="column" >
                                <h4 className="small header">{e.ocassion}</h4>
                            </div>
                            <div class="column">
                                {e.chef.name}
                            </div>
                            <div class="column">
                                {e.dish_name}
                            </div>
                            <div class="column">
                                <button className="ui button" type="submit" onClick={() => {handleClicked(e); this.handleBtnClick()}}>{this.state.isClicked? 'Hide Details' : 'Show Details'}</button>
                            </div>
                        </div>
                </div>
                        
        );
    }
}
export default Event;