import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import Worker from "../Worker";
import worker1 from "../../../ref/workers/IMG_2472_0.jpg";
import worker2 from "../../../ref/workers/IMG_2474_1.jpg";
import worker3 from "../../../ref/workers/IMG_2522_0.jpg";
import worker4 from "../../../ref/workers/IMG_2539_0.jpg";
import worker5 from "../../../ref/workers/IMG_9971_16.jpg";
import classes from './WorkerScreen.module.css';

const WorkerScreen = () => {
    const workers = [
        {
            img: worker1,
            name: "Сергей Синица",
            text: "Руководитель отдела веб-разработки, канд. техн. наук, заместитель директора",
        },
        {img: worker2, name: "Роман Агабеков", text: "Руководитель отедла DevOPS, директор",},
        {img: worker3, name: "Алексей Синица", text: "Руководитель отдела поддержки сайтов",},
        {
            img: worker4,
            name: "Дарья Бочкарева",
            text: "Руководитель отдела продвижения, контекстной рекламы и контент-поддержки сайтов",
        },
        {img: worker5, name: "Ирина Торкунова", text: "Менеджер по работе с клиентами",},
    ]
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className={classes.wrapperTitle}>
                            <h2 className={classes.title}>Команда</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {workers.map(i => <Worker props={i}/>)}
                </Row>
                <div className={classes.wrapperBtn}>
                    <Button variant={"outline-dark"}>Вся команда</Button>
                </div>
            </Container>
        </div>
    );
};

export default WorkerScreen;