import React, { Component } from 'react';

class SignUpContainer extends Component {
    render() {
        return (
            <div className="ui centered grid">
                <div className="row">
                    <form class="ui form">
                    <div class="field">
                        <label>Content</label>
                        <input type="text" name="content" placeholder="Your Review Here..."/>
                    </div>
                    <button class="ui button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
            
        );
    }
}

export default SignUpContainer;

