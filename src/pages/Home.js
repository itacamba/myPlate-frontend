import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import CuisinesContainer from '../home-components/CuisinesContainer';

class Home extends Component {
    render() {
        return (
            <div  className="ui centered grid ">
                <div className="sixteen wide column">
                    <img alt="pro-chef"
                    //https://www.sanpellegrino.com/media//international/spyc2019/Sanpellegrino_SPYC_teaser_POST_01.jpg
                    className="ui fluid image" src="https://ssl.c.photoshelter.com/img-get2/I00006lwd2eVenl4/sec=/fit=1200x1200/I00006lwd2eVenl4.jpg"/>
                </div>
                <CuisinesContainer/>
                
            </div>
        );
    }
}

export default Home;