import React, { Component } from 'react';

class Chef extends Component {
    render() {
     
        let {name, img, about} = this.props.chef
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
                        </div>                
                    </div>
        );
    }
}

export default Chef;