import React, { Fragment } from "react";
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import mainImage from '../../assets/meals.jpg'

export default function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Food Fusion</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mainImage} alt="Delicious Food on table" />
            </div>
        </Fragment>
    );
};