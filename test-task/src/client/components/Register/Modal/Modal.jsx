import React from "react";
import "./Modal.scss"
import Button from "../../../../shared/components/Button";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {createCloseModal} from "../../../../store/actionCreators";
import {CSSTransition} from "react-transition-group";

const Modal = () => {

    const {showModal, isSuccess} = useSelector(state => state.modal, shallowEqual);
    const {requestMessage} = useSelector(state => state.registration, shallowEqual);
    const dispatch = useDispatch();

    const modalClassName = showModal ? 'modal modal--active' : 'modal'; //show and hide modal window
    const buttonText = isSuccess ? 'Great' : 'Ok';
    const title = isSuccess ? 'Congratulations' : 'Oops...';
    const text = isSuccess ? 'You have successfully passed the registration' : requestMessage;

    return (
        <CSSTransition in={showModal} timeout={200} classNames="fade">
        <div className={modalClassName} onClick={() => dispatch(createCloseModal())}>
            <div className="modal__container">
                <div className="modal__title">
                    <h2>{title}</h2>
                    <div className="modal__close" onClick={() => dispatch(createCloseModal())}>

                    </div>
                </div>

                <div className="modal__content">{text}</div>

                <div className="modal__button-container">
                    <Button text={buttonText} type="primary" handleClick={() => dispatch(createCloseModal())} />
                </div>
            </div>
        </div>
        </CSSTransition>
    )
};

export default Modal;

