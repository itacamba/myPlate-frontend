import React, { Component } from 'react';

class DishesRow extends Component {
    render() {
        return (
            <tr>
                <td data-label="Image">
                    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1532533774%2Fdeep-dish-all-american-cinnamon-apple-pie-XL-RECIPE0918.jpg" className="ui middle aligned mini circular image"/>
                </td>
                <td data-label="Name">Apricot Pie</td>
                <td data-label="Cuisine">American</td>
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