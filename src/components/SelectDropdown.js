import React from 'react';

const SelectDropdown = ({getSelected}) => {


    const setValue = (e) => {
        getSelected(e.target.value)
    }
    return (
        <select  id="select-chef" className="ui selection dropdown " onChange={setValue} >
            <option disabled selected hidden >Choose your option</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
    );
};

export default SelectDropdown;