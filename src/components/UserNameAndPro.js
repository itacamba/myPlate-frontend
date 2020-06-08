import React from 'react';

const UserNameAndPro = ({name}) => {
    return (
        <div id="name-and-about" className="column">
            <div id="chef-name">
                <h2>{name}</h2>
            </div>
            <div id="chef-about">
                <h2>Professional Chef</h2>
            </div>
        </div>
    );
};

export default UserNameAndPro;