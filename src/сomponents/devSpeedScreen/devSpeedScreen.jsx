import React from 'react';
import classes from './dev.SpeedScreen.module.css'
import {Col, Container, Row} from "react-bootstrap";
import Services from "../Services/Services";
import BG1 from "../../ref/icons2/1.svg";
import BG2 from "../../ref/icons2/2.svg";
import BG3 from "../../ref/icons2/3.svg";

const DevSpeedScreen = () => {

    const mas = [
        {img: BG1, text: 'Настройки событий GA в инетернет-магазине', title:'От 1ч' ,},
        {img: BG2, text: 'Разработка мобильной версии сайта', title:'От 20ч' ,},
        {img: BG3, text: 'Инетеграция модуля оплаты', title:'От 8ч' ,},
    ]

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className={classes.title}>
                            Наши разработчики<br/>
                            выполняют быстро любые задачи
                        </h2>
                    </Col>
                </Row>
                <Row>
                    {mas.map(i => <Services props={i}/>)}
                </Row>
            </Container>
        </div>
    );
};

export default DevSpeedScreen;