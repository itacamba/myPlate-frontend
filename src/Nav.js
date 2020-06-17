import React from 'react';
import {Link} from 'react-router-dom'

const Nav = ({user, handleLogout}) => {
    return (
        <div id="nav-container">
            <div id="logo">
                <Link to="/"><h1>Cheffed</h1></Link>
            </div>
            <nav >
                <div id="nav-links">
                    <Link className="item" to="/">Home</Link><br></br>
                    <Link className="item" to="/cuisines">Cuisines</Link><br></br>
                    <Link className="item" to="/how-it-works">How it Works</Link><br></br>
                    { user ? <Link className="item" to="/profile">Profile</Link> : null}
                    { user ? null : <Link className="item" to="/login" >Log In</Link>}
                </div>
                <div id="find-chef-container">
                    <Link id="find-chef" className="item" to="/chefs">Find a Chef</Link> 
                    {user ?  <Link id="logout-btn" onClick={handleLogout} className="item" to="/logout" >Log Out</Link> : null }
                </div>
                <div>
                   
                </div>
                
            </nav>
        </div>
    );
};

export default Nav;