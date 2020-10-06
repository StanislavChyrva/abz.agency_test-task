import React from "react";
import "./User.scss"
import UsersImage from "../UsersImage";
import PropTypes from "prop-types";

const User = (props) => {

    const {name, email, position, phone, photo} = props;

    const nameClassName = name.length > 20 ? 'many-words' : ''; // different className with different margin-bottom;
                                                                // I understand that there should be a correct solution
                                                                // to this problem, but I don't know it yet (＋_＋)
    return (

        <div className='user'>
            <UsersImage src={photo} alt='Photo'/>
            <h2 className={nameClassName}>{name}</h2>
            <p className='user__position'>{position}</p>
            <div className="tooltip">
            <a href={`mailto:${email}`}>{email}</a>
                <span className="tooltip__text">{email}</span>
            </div>
            <a href={`tel:${email}`}>{phone}</a>
        </div>
    )
};

export default User;

User.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
};
