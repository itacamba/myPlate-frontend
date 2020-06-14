import React, { Component } from 'react';
import DishesRow from './DishesRow';

class DishesTable extends Component {

    
   
    render() {
        let {dishes, onDishDelete} = this.props
        return (
            <div>
                <h1>All my Dishes</h1>
                <table class="ui table">
                
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Cuisine</th>
                                <th>Details</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                           {/* map to display rows */}  
                           {dishes.map( d => <DishesRow key={d.id} dish={d} onDishDelete={onDishDelete}/>)}
                        </tbody>
                    </table>
            </div>
            
        );
    }
}

export default DishesTable;