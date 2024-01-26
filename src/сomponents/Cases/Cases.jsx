import React, {useEffect} from "react";
import classes from "./Cases.module.css";
import {Col} from "react-bootstrap";
import case1 from "../../ref/cases/image 6.2.svg"


const Cases = ({props}) => {

    return(
        <Col sm={props.size} xs={12}>
            <div className={classes.case}>
                <img className={classes.picture} src={props.img} alt={'case'}/>
                <div className={classes.caseContetnt}>
                    <h6 className={classes.caseTitle} style={{color: props.color}}>{props.title}</h6>
                    <p className={classes.caseDate}>{props.date}</p>
                    <p className={classes.caseText} style={{color: props.color}}>{props.text}</p>
                </div>
            </div>
        </Col>
    );
};
export default Cases;
