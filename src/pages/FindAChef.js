import React, { Component } from 'react';
import ChefsContainer from '../components/ChefsContainer'
import Slogan from '../shared/Slogan';
import SearchAndFilter from '../components/SearchAndFilter';

class FindAChef extends Component {
   

    render() {
        let {chefs, handleOnChangeSearch} = this.props
        return chefs?
            <div>
                <Slogan/>
                <SearchAndFilter handleOnChangeSearch={handleOnChangeSearch} />
                <ChefsContainer  
                    chefs={chefs} 
                />
            </div>
        : <div class="ui active centered inline loader"></div>
    }
}

export default FindAChef ;