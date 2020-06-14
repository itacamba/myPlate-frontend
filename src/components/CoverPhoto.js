import React from 'react';

const CoverPhoto = ({img}) => {

    const handleEditPhoto = () => {
        console.log("photo clicked")
    }
    return (
        <div className="cover-photo" onClick={() => { console.log("cover clicked")} }>
            <img alt="cover" className="ui fluid image" src={img}/>
        </div>  
    );
};

export default CoverPhoto;