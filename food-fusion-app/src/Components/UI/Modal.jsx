import React, { Fragment } from "react";
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrops = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClose} />
    );
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
};

const PortalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrops onClose={props.onClose} />, PortalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, PortalElement)}
        </Fragment>
    );
};

export default Modal;