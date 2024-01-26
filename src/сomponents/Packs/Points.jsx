import React from 'react';
import check from '../../ref/packs/checked.svg'
import classes from './Points.module.css'
const Points = ({props}) => {
    return (
        <div className={classes.point}>
            <div>
            <p className={classes.text}> <img src={check} className={classes.imgPoint}/> {props.text}</p>
            </div>
        </div>
    );
};

export default Points;