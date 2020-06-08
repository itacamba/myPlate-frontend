import React from 'react';

const SelectedDish = ({dish}) => {
    return dish ?
        <div id="selected-dish-container" className="row">
            <div  class="ten wide column centered">
                <div id="selected-dish" className="ui segment item">
                    <div id="dish-img" className="ui medium fluid image">
                        <img src={dish.img} />
                    </div>
                    <div id="dish-info" className="content">
                        <h1 className="header">{dish.name}</h1>
                        <h3 id="dish-cuisine"className="ui disabled small header">{dish.cuisine}</h3>
                        <p>{dish.description}</p>
                        <button className="ui large teal button">Get a Quote</button>
                    </div>
                </div> 
            </div>
        </div>
    : null
 
   
};

export default SelectedDish;

// id 