import React, { Component } from 'react';
import CameraIcon from './CameraIcon';

class ProfileRoundPhoto extends Component {
    constructor(){
        super()
        this.state = {
            roundImgHovered: false
        }
    }

    handleEditPhoto = () => {
        console.log(" photo was clicked")

    }
    onMouseEnter = () => {
        this.setState({
            roundImgHovered: true
        })
    }
    onMouseLeave = () => {
        this.setState({
            roundImgHovered: false
        })
    }
    render() {
        let {img} = this.props
        return (
            <div id="profile-round-img" className="four wide column" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onClick={this.handleEditPhoto}>
                {/* <input type="file" id="file-input" onClick={this.handleEditPhoto}/> */}
                <img alt="profile"  className="ui medium circular image" src={this.state.roundImgHovered? 'https://kseniaveriguina.github.io/kendo/images/placeholder.png' : img} />
        
            </div>
        );
    }
}

export default ProfileRoundPhoto;