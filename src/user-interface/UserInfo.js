import React, { Component } from 'react';

class UserInfo extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            cover_img: '',
            img: '',
            about: ''
        }
    }
    componentDidMount(){
        const {name,email,password_digest, cover_img,img,about} = this.props.user
        this.setState({
            name: name,
            email: email,
            password: password_digest,
            cover_img: cover_img,
            img: img,
            about: about
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onEditUserInfo = (e) => {
        let {id} = this.props.user
        fetch(`http://localhost:3000/users/${id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state)
        }).then(resp => resp.json())
        .then(data => this.setState(data))
    }
    render() {
        const {name,email,password, cover_img,img,about} = this.state
        return (
            <div id="user-info">
                <form class="ui form" onSubmit={this.onEditUserInfo}>
                    <div class="two fields">
                        <div class="field">
                            <label>Full Name</label>
                            <input placeholder="Full Name" name="name" type="text" value={name} onChange={this.handleChange}/>
                        </div>
                        <div class="field">
                            <label>Email</label>
                            <input placeholder="E-mail" name="email" type="email" value={email} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div class="field ">
                        <label>Password</label>
                        <input placeholder="Password" name="pass" type="password" value={password} onChange={this.handleChange}/>
                    </div>
                    <div class="field ">
                        <label>Description</label>
                        <textarea rows="3" placeholder="About You.." name="about" type="text" value={about} onChange={this.handleChange}></textarea>
                    </div>
                    <div class="two fields">
                        <div class="field">
                            <label>Profile Picture</label>
                            <input placeholder="Profile Picture" name="profile-pic" type="text" value={img} onChange={this.handleChange}/>
                        </div>
                        <div class="field">
                            <label>Cover Picture</label>
                            <input placeholder="Cover Picture" name="cover-pic" type="text" value={cover_img} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <button type="submit" className="ui primary button">Save Changes</button>
             
                </form>
            </div>
        );
    }
}

export default UserInfo;