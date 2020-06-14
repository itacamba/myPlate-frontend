import React, { Component } from 'react';

class SignUpContainer extends Component {
    render() {
        return (
            <div id="tab" >
                <div id="left-side">
                    <div>My Dishes</div>
                    <div>Event Requests</div>
                    <div>Syllabus</div>
                </div>
                <div id="right-side">
                    <div id="list">
                    <table class="ui table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Cuisine</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Image">
                                    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1532533774%2Fdeep-dish-all-american-cinnamon-apple-pie-XL-RECIPE0918.jpg" className="ui middle aligned mini circular image"/>
                                </td>
                                <td data-label="Name">Greasy Hamburger</td>
                                <td data-label="Cuisine">American</td>
                                <td data-label="Detail">
                                    <button className="ui blue button">Details</button>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="Image">
                                    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1532533774%2Fdeep-dish-all-american-cinnamon-apple-pie-XL-RECIPE0918.jpg" className="ui middle aligned mini circular image"/>
                                </td>
                                <td data-label="Name">Lasagna Verde</td>
                                <td data-label="Cuisine">American</td>
                                <td data-label="Detail">
                                    <button className="ui blue button">Details</button>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="Image">
                                    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1532533774%2Fdeep-dish-all-american-cinnamon-apple-pie-XL-RECIPE0918.jpg" className="ui middle aligned mini circular image"/>
                                </td>
                                <td data-label="Name">Apricot Pie</td>
                                <td data-label="Cuisine">American</td>
                                <td data-label="Detail">
                                    <button className="ui blue button">Details</button>
                                </td>
                            </tr>
                           
                            
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUpContainer;


// <div className="ui centered grid">
//                 <h1>Sign up / Log in</h1>
//             </div>



// CHILDREN OF #list

{/* <div className="assign">
<div id="assign-content">
    Assignment here
</div>
<i id="assign-icon" class="edit blue icon"></i>
<i id="assign-icon" class="trash alternate outline red icon"></i>
</div>
<div className="assign">
<div id="assign-content">
    Assignment here
</div>
<i id="assign-icon" class="edit blue icon"></i>
<i id="assign-icon" class="trash alternate outline red icon"></i>
</div>
<div className="assign">
<div id="assign-content">
    Assignment here
</div>
<i id="assign-icon" class="edit blue icon"></i>
<i id="assign-icon" class="trash alternate outline red icon"></i>
</div> */}