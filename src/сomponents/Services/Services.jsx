import React from 'react';
import classes from './Services.module.css'
import {Col} from "react-bootstrap";
const Services = ({props}) => {
    return (
        <Col sm={3} xs={6}>
            <div className={classes.Adv}>
                <div className={classes.imgAdv}>
                    <img src={props.img} className={classes.img}/>
                </div>
                <div>
                    <h2 className={classes.title}>{props.title}</h2>
                    <p className={classes.textAdv}>{props.text}</p>
                </div>
            </div>
        </Col>
    );
};

export default Services;