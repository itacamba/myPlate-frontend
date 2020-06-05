import React, { Component } from 'react';
import Chefs from '../components/Chefs'
import Slogan from '../components/Slogan';
import SearchAndFilter from '../components/SearchAndFilter';
let CHEFS = "http://localhost:3000/chefs"
class ChefsContainer extends Component {
    constructor () {
        super()
        this.state = {
            chefs: [],
            searchInp: ""
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
   //----- Search Feature ----//
    handleOnChangeSearch = (e) => {
        this.setState({
            searchInp: e.target.value
        })
        this.filterSearch()
    }
    
    filterSearch = () => {
        let filtered = this.state.chefs.filter( chef => chef.name.toLowerCase().includes(this.state.searchInp.toLowerCase()))
        return filtered
    }

    handleChangeDropdown = (e) => {
        console.log("cuisine is: ", this.state.chefs[0])
        // function not finished, maybe should be used for searching recipes
    }

    //----- Search Feature ----//
    render() {
        return (
            <div>
                <Slogan/>
                <SearchAndFilter handleOnChangeSearch={this.handleOnChangeSearch} handleChangeDropdown={this.handleChangeDropdown}/>
                <Chefs  chefs={this.filterSearch()}/>
            </div>
        );
    }
}

export default ChefsContainer;