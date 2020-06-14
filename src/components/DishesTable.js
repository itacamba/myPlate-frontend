import React, { Component } from 'react';
import DishesRow from './DishesRow';

class DishesTable extends Component {
    render() {
        return (
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
                            <DishesRow/>
                            <DishesRow/>
                            <DishesRow/>
                        </tbody>
                    </table>
        );
    }
}

export default DishesTable;