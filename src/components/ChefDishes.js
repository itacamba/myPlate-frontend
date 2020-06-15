import React from 'react';
import Dish from './Dish'

const ChefDishes = ({dishes, onDishClick}) => {
    return dishes.length > 0? 
        <div id="all-dishes" className="row">
                {dishes.map( d => <Dish key={d.id} dish={d} onDishClick={onDishClick}/>)}
        </div>
    : <div  className="centered row">  This chef currently has no dishes</div>
};

export default ChefDishes;