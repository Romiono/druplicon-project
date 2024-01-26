import React from 'react';
import classes from './Card.module.css'
const Card = ({props}) => {
    return (
        <div className={classes.card}>
            <img className={classes.imgCard} src={props} alt={'card'}/>
        </div>
    );
};

export default Card;