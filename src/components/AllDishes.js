import React from 'react';
import Dish from '../components/Dish'

const AllDishes = ({dishes, onDishClick}) => {
    return dishes.length > 0? 
        <div id="all-dishes" className="row">
                {dishes.map( d => <Dish dish={d} onDishClick={onDishClick}/>)}
        </div>
    : <div  className="centered row">  This chef currently has no dishes</div>
};

export default AllDishes;