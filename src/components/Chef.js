import React, { Component } from 'react';

class Chef extends Component {
    render() {
     
        let {name, img, about} = this.props.chef
        let dishes = this.props.chef.dishes
        return (
                    <div class="card">
                        <div class="image">
                            {<img src={dishes[0].img} alt="dish_image" />}
                        </div>
                        <div class="content">
                            <img id="chef-img" class="ui small circular image" src={img} alt="chef_image"/>
                            <div class="header center-name">{name}</div>
                            <div class="description center-about">{about}</div>
                        </div>                
                    </div>
        );
    }
}

export default Chef;