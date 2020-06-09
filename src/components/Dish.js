import React from 'react';

const Dish = ({dish, onDishClick}) => {
    return dish?
        <div className="four wide column" onClick={() => onDishClick(dish)}>
            <img alt="dish" src={dish.img}/>
            <h3>{dish.name}</h3>
        </div>
    : null
}

export default Dish;