import React from "react";

import "./UsersImage.scss"
import {Img} from 'react-image'
import Unloader from "../Unloader";
import PropTypes from "prop-types";


const UsersImage = ({src, alt}) => {
    return (
       <Img src={src} unloader={<Unloader/>} alt={alt}/>
    )
};

export default UsersImage;

UsersImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};