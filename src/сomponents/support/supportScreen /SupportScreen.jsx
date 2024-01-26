import React, {useState} from 'react';
import BG1 from '../../../ref/supports/support1.svg'
import BG2 from '../../../ref/supports/support2.svg'
import BG3 from '../../../ref/supports/support3.svg'
import BG4 from '../../../ref/supports/support4.svg'
import BG5 from '../../../ref/supports/support5.svg'
import BG6 from '../../../ref/supports/support6.svg'
import BG7 from '../../../ref/supports/support7.svg'
import BG8 from '../../../ref/supports/support8.svg'
import {Col, Container, Row} from "react-bootstrap";
import classes from "./SupportScreen.module.css";
import Support from "../Support";

const SupportScreen = () => {
    const mas = [
        {id: '01.', title: 'Постановка задачи по Email', text: 'Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда\n' +
                'не теряются.', img: BG1},
        {id: '02.', title: 'Постановка задачи по Email', text: 'Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда\n' +
                'не теряются.', img: BG2},
        {id: '03.', title: 'Постановка задачи по Email', text: 'Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда\n' +
                'не теряются.', img: BG3},
        {id: '04.', title: 'Постановка задачи по Email', text: 'Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда\n' +
                'не теряются.', img: BG4},
        {id: '05.', title: 'Постановка задачи по Email', text: 'Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда\n' +
                'не теряются.', img: BG5},
        {id: '06.', title: 'Постановка задачи по Email', text: 'Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда\n' +
                'не теряются.', img: BG6},
        {id: '07.', title: 'Постановка задачи по Email', text: 'Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда\n' +
                'не теряются.', img: BG7},
        {id: '08.', title: 'Постановка задачи по Email', text: 'Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда\n' +
                'не теряются.', img: BG8},
    ]


    return (
        <div className={classes.wrapper}>
            <Container className={classes.main}>
                <Row>
                    <Col md={12}>
                        <div className={classes.titleWrapper}>
                            <h2 className={classes.title}>Поддержка <br/> от Drupal-coder</h2>

                        </div>
                    </Col>
                </Row>
                <Row>
                    {mas.map(i => <Support props={i}/>)}
                </Row>
            </Container>
        </div>
    );
};

export default SupportScreen;