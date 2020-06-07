import React, { Component } from 'react';

class SearchAndFilter extends Component {
 
  

    render() {
        return (
            <div id="chef-search" className="ui center aligned grid">
                <form className="ui search">
                    <div className="ui icon input">
                        <input 
                            className="prompt" 
                            type="text" 
                            placeholder="Search by Name..."  
                            onChange={this.props.handleOnChangeSearch}
                        />
                        <i className="search icon"></i>
                    </div>
                    <div className="results"></div>
                </form>
                {/* <Dropdown clearable selection placeholder="Cuisines" onChange={this.handleChange} options={options} /> */}
                <select  id="select-chef" className="ui selection dropdown " >
                    <option disabled selected hidden >Choose Cuisine</option>
                    <option value="all">all</option>
                    <option value="african">African</option>
                    <option value="american">American</option>
                    <option value="asian">Asian</option>
                    <option value="french">French</option>
                    <option value="italian">Italian</option>
                    <option value="mediterranean">Mediterranean</option>
                    <option value="mexican">Mexican</option>
                    
                    
                </select>
                {/* <Select placeholder='Select your country' options={options} value={this.state.inp} onChange={this.handleChange}/> */}

            </div>
        );
    }
}

export default SearchAndFilter;