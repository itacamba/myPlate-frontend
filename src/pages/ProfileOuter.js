import React from 'react';

const ProfileOuter = ({chef}) => {
    return chef ?
        <div>
            OUTER PROFILE COMPONENT SHOWING  {chef.name}
        </div>
    : <div className="not-found">Sorry Chef not Found :(</div>
}

export default ProfileOuter;