import React from 'react';
import {Container, Row} from "react-bootstrap";
import case1 from "../../../ref/cases/image 8.3.svg";
import case2 from "../../../ref/cases/image 6.2.svg"
import case3 from "../../../ref/cases/image 7.3.svg"
import case4 from "../../../ref/cases/image 9.2.svg"
import Cases from "../Cases";
import classes from "./CasesScreen.module.css"

const CasesScreen = () => {

    const mas = [
        {size: 4, img: case1, color: "white", title: "Настройка выгрузки YML для Яндекс.Маркета", date: "22.05.2020"},
        {size: 8, img: case2, color: "white", title: "Использование отчетов Ecommerce в Яндекс.Метрике",},
        {size: 4, img: case3, color: "white", title: "Повышение конверсии", date: "24.01.2020"},
        {size: 4, img: case4, color: "black", title: "Настройка кэширования данных. Апгрейд сервера...", date: "04.05.2020", text: "Влияние скорости загрузки страницы сайта на отказы и конверсии. Кейс ускорения..."},
    ]

    return (
        <div className={classes.cases}>
            <Container>
                <div className={classes.title}>
                    <h2 className={classes.title}>Последние Кейсы</h2>
                </div>
                <Row>
                    {mas.map(i => <Cases props={i}/>)}
                </Row>
            </Container>
        </div>
    );
};

export default CasesScreen;