import React, {useEffect, useState} from 'react';
import BG1 from '../../../ref/icons2/1.svg'
import BG2 from '../../../ref/icons2/2.svg'
import BG3 from '../../../ref/icons2/3.svg'
import BG4 from '../../../ref/icons2/4.svg'
import BG5 from '../../../ref/icons2/5.svg'
import BG6 from '../../../ref/icons2/6.svg'
import BG7 from '../../../ref/icons2/7.svg'
import BG8 from '../../../ref/icons2/8.svg'
import {Col, Container, Row} from "react-bootstrap";
import Services from "../Services";
import classes from "./ServicesScrin.module.css";

const ServicesScrin = () => {

    const [blocks, setBlocks] = useState([
        {img: BG1, text: 'Добавление информации на сайт, создание новых разделов',},
        {img: BG2, text: 'Разработка и оптимизация модулей сайта',},
        {img: BG3, text: 'Интеграция с CRM, 1C, платежными системами, любыми веб-сервисами',},
        {img: BG4, text: 'Любые доработки функционала и дизайна',},
        {img: BG5, text: 'Аудит и мониторинг безопасности Drupal сайтов',},
        {img: BG6, text: 'Миграция, импорт контента и апгрейд Drupal',},
        {img: BG7, text: 'Оптимизация и ускорение Drupal-сайтов',},
        {img: BG8, text: 'Веб-маркетинг, консультации и работы по SEO',},
    ])



    return (
        <div>
            <Container className={classes.main}>
                <Row>
                    <Col md={6}>
                        <h2 className={classes.title}>13 лет совершенствуем<br/> компетенции в Drupal<br/> поддержке!</h2>
                        <p className={classes.text}>Разрабатываем и оптимизируем модули, расширяем функциональность сайтов, обновляем дизайн</p>
                    </Col>
                </Row>
                <Row>
                    {blocks.map(i => <Services props={i}/>)}
                </Row>
            </Container>
        </div>

    );
};

export default ServicesScrin;