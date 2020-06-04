import React, { Component } from 'react';
import Chefs from '../components/Chefs'
import Slogan from '../components/Slogan';
import SearchAndFilter from '../components/SearchAndFilter';
let CHEFS = "http://localhost:3000/chefs"
class ChefsContainer extends Component {
    constructor () {
        super()
        this.state = {
            chefs: []
        }
    }

    componentDidMount(){
        fetch(CHEFS)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                chefs: data
            })
        })
    }
    render() {
        return (
            <div>
                <Slogan/>
                <SearchAndFilter/>
                <Chefs chefs={this.state.chefs}/>
            </div>
        );
    }
}

export default ChefsContainer;