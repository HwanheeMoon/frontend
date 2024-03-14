import React from "react";

function GoogleButton(props) {
    return(

        <button onClick={props.onClick} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}>
            <img src={props.imageSrc} alt={props.alt} style={{ width: props.width, height: props.height }} />
        </button>
    );
};

export default GoogleButton;
