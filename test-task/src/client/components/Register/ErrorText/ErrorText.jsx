import React from "react";
import "./ErrorText.scss"

const ErrorText = ({children}) => {

    return (
        <div className='error'>
            {children}
        </div>
    )
};

export default ErrorText;