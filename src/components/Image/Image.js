import React from 'react';

function Image(props){
    return (<img 
        className="sponsor-image"
        src={props.url}
        alt="partner"
    />)
}

export default Image;