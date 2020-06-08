import React from 'react';

const ProfileRoundPhoto = ({img}) => {
    return (
        <div id="profile-round-img" className="four wide column">
            <img alt="profile"  className="ui medium circular  image" src={img} />
        </div>
    );
};

export default ProfileRoundPhoto;