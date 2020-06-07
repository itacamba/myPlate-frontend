import React from 'react';

const ProfileOuter = ({chef}) => {
    return chef ?
        <div  className="ui container grid" >
            <div id="cover-profile-img">
                <img alt="cover" className="responsive-img " src={chef.cover_img}/>
            </div>
            <div className="four wide column">
                <img alt="profile" id="profile-rounded-img" className="ui medium circular image" src={chef.img} />
            </div>
            <div className="row">
                
            </div>



        </div>
 


    : <div className="not-found">Sorry Chef not Found :(</div>
}

export default ProfileOuter;