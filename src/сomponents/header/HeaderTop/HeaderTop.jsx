import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import HeaderTopItem from "./HeaderTopItem/HeaderTopItem";
import classes from "./HeaderTop.module.css";
import {useDispatch} from "react-redux";


const HeaderTop = ({target}) => {

    const mas = [
        {title: '#1', text: 'Drupal-разработчик в России', img: true},
        {head: '3+', text: 'средний опыт специалистов более 3 лет', img: false},
        {head: '14', text: 'лет опыта в сфере Drupal', img: false},
        {head: '200+', text: 'модулей и тем в формате DrupalGive', img: false},
        {head: '35000', text: 'часов поддержки сайтов на Drupal', img: false},
        {head: '3+', text: 'Проектов на поддержке', img: false},
    ]
    return (
        <div className={classes.main}>
            <Container>
                <Row>
                    <Col md={6} xs={12}>
                        <div className={classes.wrapper}>
                            <h1 className={classes.title}>Поддержка<br/> сайтов на Drupal</h1>
                            <p className={classes.text}>Сопровождение и поддержка сайтов<br/>
                                на CMS Drupal любых версий и запущенности</p>
                            <div className={classes.wrapperBtn}>
                                <button onClick={target} className={classes.btn}>ТАРИФЫ</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} xs={12}>
                        <Row>
                            {mas.map(i => <HeaderTopItem props={i}/>)}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default HeaderTop;