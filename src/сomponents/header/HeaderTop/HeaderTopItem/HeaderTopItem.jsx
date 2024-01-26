import React from 'react';
import {Col} from "react-bootstrap";
import classes from "./HeaderTopItem.module.css";
import cup from '../../../../ref/header/cup.png'
const HeaderTopItem = ({props}) => {
    return (
        <Col md={4} xs={6}>
            <div className={classes.wrapper}>
                <div className={classes.header}>
                    <h2 className={classes.bigTitle}>{props.title}</h2>
                    {props.img === true && <img alt={'img'} src={cup}/>}
                </div>
                <h3 className={classes.title}>{props.head}</h3>
                <p className={classes.tB}>{props.text}</p>
            </div>
        </Col>
    );
};

export default HeaderTopItem;