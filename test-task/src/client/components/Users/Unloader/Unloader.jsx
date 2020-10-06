import React from "react";
import photoCover from "../../../../assets/photo-cover.svg"
import "./Unloader.scss"



const Unloader = () => {
    return (
       <img src={photoCover} className='user__unloader' alt="have no img"/>
    )
};

export default Unloader;