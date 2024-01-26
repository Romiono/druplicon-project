import React, {useState} from 'react';
import classes from './Packs.module.css'
import {Col, Row} from "react-bootstrap"
import Points from "./Points"
import {useDispatch} from "react-redux";
import {handleOpenShow} from "../../features/formSlice";
import {useNavigate} from "react-router-dom";

const Packs = ({text, price}) => {
    const [blocks, setBlocks] = useState([
        {text: 'Предоплата от 10 часов',},
        {text: 'Консультации и работы по SEO',},
        {text: 'Услуги дизайнера',},
        {text: 'Консультации и работы по SEO',},
        {text: 'Консультации и работы по SEO',},
        {text: 'Консультации и работы по SEO',},
        {text: 'Консультации и работы по SEO',},
    ])
    const dispatch = useDispatch();

    let navigate = useNavigate();
    const handleNavigate = () => {
        navigate('#form');
    }

    const openForm = () => {
        handleNavigate();
        dispatch(handleOpenShow())
    }
    return (

            <Col sm={4} xs={12}>
                <div className={classes.wrapper}>
                    <div className={classes.titles}>
                        <h3 className={classes.titlePacks}>{text}</h3>
                        <h1 className={classes.price}>{price} <span>Р</span></h1>
                        <h6 className={classes.time}>в час</h6>
                    </div>
                    <div className={classes.PointList}>
                        {blocks.map(i => <Points props={i}/>)}
                    </div>
                    <div className={classes.button}>
                        <button onClick={() => openForm()}>Свяжитесь с нами</button>
                    </div>
                </div>
            </Col>
    );
};

export default Packs;