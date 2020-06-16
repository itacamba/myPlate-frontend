import React, { Component } from 'react';

class CuisinesContainer extends Component {
    
    componentDidMount(){
        
    }
    
    render() {
        return (
            <div id="cuisines-container" className="twelve wide column row">
                <h1>cuisines</h1>
                <div id="cuisines-cards">
                    <div className="cuisine-card">
                        <img alt="cuisine" src="https://images.pexels.com/photos/4194390/pexels-photo-4194390.jpeg?" />
                        <h3>Spanish</h3>
                    </div>
                    <div className="cuisine-card">
                        {/* <img alt="cuisine" src="https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?" /> */}
                        <img alt="cuisine" src="https://images.pexels.com/photos/3073970/pexels-photo-3073970.jpeg" />
                        <h3>Mexican</h3>
                    </div>
                    <div className="cuisine-card">
                        <img alt="cuisine" src="https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?" />
                        <h3>American</h3>
                    </div>
                    <div className="cuisine-card">
                        <img alt="cuisine" src="https://images.pexels.com/photos/4193843/pexels-photo-4193843.jpeg?" />
                        <h3>Asian</h3>
                    </div>
                </div>
                <button className="ui red button"> Explore Cuisines</button>
            </div>
        );
    }
}

export default CuisinesContainer;
