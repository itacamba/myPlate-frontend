import React, { Component } from 'react';
import Event from '../components/Event'

class RightContainer extends Component {

    render() {
        let {events} = this.props
        return events?
            <div className="eleven wide column">
             <div id="rigth-cont" className="ui segment">
                {events.map(e => <Event handleClicked={this.props.handleClicked} e={e}/>)}
            </div>
        </div>
        :null
    }
}

export default RightContainer;

