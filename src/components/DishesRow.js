import React, { Component } from 'react';

class DishesRow extends Component {
    render() {
        let {id,img, name,cuisine,about} = this.props.dish
        return (
            <tr>
                <td data-label="Image">
                    <img src={img? img : "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1532533774%2Fdeep-dish-all-american-cinnamon-apple-pie-XL-RECIPE0918.jpg"} 
                        alt="circle-dish"
                        className="ui middle aligned mini circular image"/>
                </td>
                <td data-label="Name">{name}</td>
                <td data-label="Cuisine">{cuisine}</td>
                <td data-label="Detail">
                    <button className="ui blue button">Details</button>
                </td>
                <td data-label="Delete">
                    <button className="ui red button right">Delete</button>
                </td>
            </tr>
        );
    }
}

export default DishesRow;