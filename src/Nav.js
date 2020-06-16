import React from 'react';
import {Link} from 'react-router-dom'

const Nav = ({user}) => {
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
                </div>
                <div id="find-chef-container">
                    <Link id="find-chef" className="item" to="/chefs">Find a Chef</Link><br></br>
                    { user ? null : <Link className="item" to="/login" >Log In</Link>}
                </div>
               
                
            </nav>
        </div>
    );
};

export default Nav;