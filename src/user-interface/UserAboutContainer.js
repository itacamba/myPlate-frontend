import React, { Component } from 'react';
import UserInfo from './UserInfo';

class UserAboutContainer extends Component {
    constructor(){
        super();
        this.state ={
            currentSection: 'info'
        }
       
    }

    setCurrentSection = (section) => {
        this.setState({
            currentSection: section
        })
    }

    render() {
       const {user} = this.props
        return (
         
           <div id="user-about-container">
               
               <nav id="user-about-links">
                    <div id="about-title">
                        <h1 className="ui medium header">About</h1>
                   </div>
                    <div className="about-link" onClick={() => this.setCurrentSection("info")}>Information</div>
                    <div className="about-link" onClick={() => this.setCurrentSection("nothing")}>Nothing Here</div>
               </nav>
               <div id="user-info-container">
                   {this.state.currentSection === 'info' ? <UserInfo user={user}/> : null}
               </div>
           </div>
        );
    }
}

export default UserAboutContainer;