import React from 'react';
import {Col} from "react-bootstrap";
import classes from './Worker.module.css'

const Worker = ({props}) => {
    return (
        <Col sm={4} xs={6}>
            <div className={classes.wrapper}>
                <img src={props.img} className={classes.portrait} alt={'img'}/>
                <h6 className={classes.title}>{props.name}</h6>
                <p>{props.text}</p>
            </div>
        </Col>
    );
};

export default Worker;