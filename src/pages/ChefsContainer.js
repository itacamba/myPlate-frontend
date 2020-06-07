import React, { Component } from 'react';
import Chefs from '../components/Chefs'
import Slogan from '../components/Slogan';
import SearchAndFilter from '../components/SearchAndFilter';

class ChefsContainer extends Component {
   

    render() {
        return (
            <div>
                <Slogan/>
                <SearchAndFilter handleOnChangeSearch={this.props.handleOnChangeSearch} />
                <Chefs  
                    chefs={this.props.chefs} 
                />
            </div>
        );
    }
}

export default ChefsContainer;