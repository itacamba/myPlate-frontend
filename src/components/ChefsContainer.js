import React, { Component } from 'react';
import ChefCard from './ChefCard'

class Chefs extends Component {
    render() {
        const chefs = this.props.chefs
        return (
            <div className="ui centered grid">
                <div className="ten wide column row">
                    <div className="ui centered cards">
                        {this.props.chefs.length > 0? 
                        chefs.map( chef => <ChefCard key={chef.id} chef={chef}/>) 
                        :  <div className="not-found">Results Not Found</div> }
                    </div>
                </div>
            </div>

        );
    }
}

export default Chefs;