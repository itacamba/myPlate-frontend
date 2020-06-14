import React from 'react';

const CoverPhoto = ({img}) => {

    
    return (
        <div className="cover-photo" >
            <img alt="cover" className="ui fluid image" src={img}/>
        </div>  
    );
};

export default CoverPhoto;