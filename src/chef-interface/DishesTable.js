import React, { Component } from 'react';
import DishesRow from './DishesRow';
import CreateDishForm from './CreateDishForm';

class DishesTable extends Component {


    // onCreateDish = () => {
    //     let {user} = this.props
    //     let dish = {
    //         name: ,
    //         cuisine: ,
    //         description: ,
    //         user_id: ,
    //     }
    //     fetch()

    // }

    render() {
        let {user, dishes, onDishDelete} = this.props
        return (
            <div>
                
                <div id="title-and-create-a-dish">
                    <h1>All my Dishes</h1>
                    <CreateDishForm user={user}/>
                    {/* <button className="ui green button" onClick={this.onDisplayForm}>Create New Dish +</button> */}
                </div>
                <table className="ui table">
                
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