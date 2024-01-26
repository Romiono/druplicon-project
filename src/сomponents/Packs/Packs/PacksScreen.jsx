import React from 'react';
import {Container, Row} from "react-bootstrap";
import Packs from "../Packs";
import classes from './PacksSceen.module.css'
import drupl from '../../../ref/Vector.svg'

const PacksScreen = ({target}) => {
    const mas = [
        {text: "Стартовый", price: "2000",},
        {text: "Бизнес", price: "3000",},
        {text: "VIP", price: "4000",},
    ]
    return (
        <div ref={target} className={classes.wrapper}>
            <div className={classes.title}>
                <h2 className={classes.titleIn}>ТАРИФЫ</h2>
            </div>
            <Container>
                <Row>
                    {mas.map(item => <Packs text={item.text} price={item.price}/>)}
                </Row>
            </Container>
            <div className={classes.text}>
                <p className={classes.inText}>Вам не подходят наши тарифы? Оставьте заявку и мы<br/> предложим вам индивидуальные условия!<br/>
                    <a className={classes.priceLink} href={"#"}>Получить индивидуальный тариф</a></p>
            </div>
            <img className={classes.bg} alt={"drupling"} src={drupl}/>
        </div>
    );
};

export default PacksScreen;