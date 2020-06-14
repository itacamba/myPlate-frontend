import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div  className="ui centered grid ">
                <div className="twelve wide column">
                    <img className="ui fluid image" src="https://www.sanpellegrino.com/media//international/spyc2019/Sanpellegrino_SPYC_teaser_POST_01.jpg"/>
                </div>
                <div className="row">
                    <div id="home-header"> Irresistibly Delicious Food at Your Door </div>
                </div>
                <div className="row">
                    <div id="border-red-container" className="ten wide column">
                        <div id="border-red">
                            <Link to="/chefs" ><button>Find a Chef</button></Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;