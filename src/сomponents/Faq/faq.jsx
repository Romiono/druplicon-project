import React, {useState} from 'react';
import {Col} from "react-bootstrap";
import classes from './faq.module.css'
import {CSSTransition} from "react-transition-group";

const Faq = ({props}) => {
    const [active, setActive] = useState(false)
    return (
        <Col sm={12}>
            <div className={classes.wrapper}>
                <div className={active ? classes.active : ""} onClick={() => setActive(!active)}>
                    <h5 className={`${active ? classes.titleActive : classes.title}`}><span
                        className={classes.id}>{props.id}. </span>{props.title}</h5>
                    <CSSTransition
                        in={active}
                        timeout={800}
                        classNames={{
                            enter: classes.slideIn,
                            exit: classes.slideOut,
                        }}
                        unmountOnExit
                    >
                        <div className={classes.answer}>
                            {props.answer}
                        </div>
                    </CSSTransition>
                </div>
            </div>
        </Col>
    );
};

export default Faq;