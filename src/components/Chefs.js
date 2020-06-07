import React, { Component } from 'react';
import Chef from './Chef'

class Chefs extends Component {
    render() {
        const chefs = this.props.chefs
        return (
            
            <div className="ui centered cards">
                {this.props.chefs.length > 0? 
                chefs.map( chef => <Chef key={chef.id} chef={chef}/>) 
                :  <div className="not-found">Results Not Found</div> }
            </div>

        );
    }
}

export default Chefs;