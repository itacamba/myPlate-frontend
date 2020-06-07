import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Chef extends Component {



    handleClick = (id) => {
        // the following line of code is changing the browser route to that specific chef's route.
        // window.location.assign(`/profile/${id}`);
        this.props.handleSelectedChef(id)
    }

    render() {
     
        let {id, name, img, about} = this.props.chef
        let dishes = this.props.chef.dishes
    
        return (
                
                    <div id="chef-card" className="card">
                        <div className="image">
                            {this.props.chef.dishes.length > 0 ? <img alt="recipe" src={dishes[0].img}/> : <img alt="recipe" src="https://cdn2.iconfinder.com/data/icons/food-restaurant-1/128/flat-15-512.png"/> }
                        </div>
                        <div className="content">
                            <img id="chef-img" className="ui small circular image" src={img} alt="chef_image"/>
                            <div className="header center-name">{name}</div>
                            <div className="description center-about">{about}</div>

                            <Link to={`/chefs/${id}`}><button id="chef-btn" className="ui blue button">See Profile</button></Link>
                        
                        </div>               
                    </div>
                
        );
    }
}

export default Chef;