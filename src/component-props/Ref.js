import React from 'react';


const Button = (props, ref) => {
    console.log("ref", ref);
    return <button ref={ref} className="FancyButton">
        {props.children}
    </button>
}
export const FancyButton = React.forwardRef(Button);

