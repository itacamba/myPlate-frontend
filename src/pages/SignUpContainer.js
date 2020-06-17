import React, { Component } from 'react';

class SignUpContainer extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            user: null
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogIn = e => {
        e.preventDefault()
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state)
        }).then( resp => resp.json())
        .then(data => {
            console.log(data.error_message)
            if(data.error_message){
                alert(data.error_message)
            } else {
                localStorage.setItem("token", data.token)
                this.props.updateCurrentUser(data.user_data)
            }
        })
    }


    render() {
        return (
            <div className="ui grid">
                <div className="centered row">
                    <form className="ui form" onSubmit={this.handleLogIn}>
                        <div class="field">
                            <label>E-mail</label>
                            <input 
                                type="email"  
                                name="email" 
                                placeholder="E-mail" 
                                onChange={this.handleChange}
                            />
                        </div>
                        <div class="field">
                            <label>Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                onChange={this.handleChange}
                            />
                        </div>
                        <button class="ui button" type="submit">Log In</button>
                    </form>
                </div>
            </div>
            
        );
    }
}

export default SignUpContainer;

