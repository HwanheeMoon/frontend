import React from "react";

function KakaoButton(props) {
    return(

        <button onClick={props.onClick} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0 , marginBottom: 0}}>
            <img src={props.imageSrc} alt={props.alt} style={{ width: props.width, height: props.height }} />
        </button>
    );
};

export default KakaoButton;
