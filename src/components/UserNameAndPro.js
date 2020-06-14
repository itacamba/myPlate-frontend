import React from 'react';

const UserNameAndPro = ({user}) => {
    return (
        <div id="name-and-about" className="column">
            <div id="chef-name">
                <h2>{user.name}</h2>
            </div>
            <div id="chef-about">
                {user.is_chef? <h2>Professional Chef</h2> : <h2>Loyal Customer</h2> }
            </div>
        </div>
    );
};

export default UserNameAndPro;