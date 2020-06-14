import React from 'react';

const RoundPhoto = ({img}) => {
    return (
        <div id="profile-round-img" className="four wide column">
        <div>
            <img alt="profile"  className="ui medium circular  image" src={img} />
        </div>
    </div>
    );
};

export default RoundPhoto;