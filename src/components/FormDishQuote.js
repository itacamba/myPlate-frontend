import React from 'react';

const FormDishQuote = ({dish}) => {
    return dish?
        <div id="selected-dish-container" className="row">
        <div  class="ten wide column centered">
            <div id="selected-dish" className="ui segment item">
            <form className="ui form">
                <div>
                    <h3 className="ui grey header">Quote for {dish.name}</h3>
                </div>
                <br></br>
                <div class="field">
                    <label>Name</label>
                    <input type="text" name="first-name" placeholder="First Name"/>
                </div>
                <div class="field">
                    <label>Last Name</label>
                    <input type="text" name="last-name" placeholder="Last Name"/>
                </div>
                <div class="field">
                    <div class="ui checkbox">
                    <input type="checkbox" tabindex="0" class="hidden"/>
                    <label>I agree to the Terms and Conditions</label>
                </div>
                </div>
                <button class="ui button" type="submit">Submit</button>
            </form>
            </div>
            </div>
        </div>
    : null
};

export default FormDishQuote;