import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav className ="ui teal inverted menu">
        <Link className="item" to="/">Home</Link><br></br>
        <Link className="item" to="/chefs">Find a Chef</Link><br></br>
        <Link className="item" to="/cuisines">Cuisines</Link><br></br>
        <Link className="item" to="/about">About</Link><br></br>
        <Link className="item" to="/login" >Log In</Link><br></br>
        <Link className="item" to="/profile">Profile</Link><br></br>

      </nav>
    );
};

export default Nav;