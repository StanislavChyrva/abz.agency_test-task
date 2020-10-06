import React, {useEffect} from "react";
import "./Users.scss"
import Section from "../../../../shared/components/Section";
import Button from "../../../../shared/components/Button";
import User from "../User";
import PropTypes from "prop-types";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import getUsers from "../../../../store/requestFunctions/getUsers";
import {createShowMoreUsers} from "../../../../store/actionCreators";
import Preloader from "../../../../shared/components/Preloader";

const Users = (props) => {
    const {title, className, text} = props;
    const {users, usersCountToShow} = useSelector(state => state.users, shallowEqual);
    const dispatch = useDispatch();
    const buttonClassName = (users.length <= usersCountToShow) ? 'btn--hide' : '';

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch, usersCountToShow]);

    const usersElements = users.map(user => <User {...user} key={user.id}/>);
    usersElements.splice(usersCountToShow, usersElements.length);

    const usersElementsToShow = users.length > 0 ? usersElements : <Preloader/>;


    return (
            <Section title={title} className={className}>
                <p>{text}</p>
                <div className="users__user-wrapper">
                    {usersElementsToShow}
                </div>
                <Button text='Show more' type='primary' handleClick={() => dispatch(createShowMoreUsers())}
                        className={buttonClassName}/>
            </Section>
    )
};

export default Users;

Users.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
};

Users.defaultProps = {
    className: 'users'
};