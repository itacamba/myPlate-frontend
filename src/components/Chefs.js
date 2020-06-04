import React, { Component } from 'react';
import Chef from './Chef'

class Chefs extends Component {
    render() {
        const chefs = this.props.chefs
        console.log(chefs)
        return (
            <div class="ui link centered cards">
                {chefs.map( chef => <Chef key={chef.id} chef={chef}/>)}
            </div>

        );
    }
}

export default Chefs;