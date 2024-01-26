import React from 'react';
import classes from './Support.module.css'
import {Col} from "react-bootstrap";
const Support = ({props}) => {
    return (
        <Col sm={3} xs={12}>
            <div className={classes.Support}>
                <div>
                    <p className={classes.idSupport}>{props.id}</p>
                </div>

                <div>
                    <p className={classes.titleSupport}>{props.title}</p>

                </div>

                <div className={classes.textSupport}>
                    <p className={classes.textSupport}>{props.text}</p>
                </div>

                <div className={classes.imageSupport}>
                    <img alt={'img'} src={props.img} className={classes.img}/>
                </div>

            </div>
        </Col>
    );
};

export default Support;