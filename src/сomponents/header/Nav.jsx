import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import logo from '../../ref/header/logo.svg'
import classes from "./Nav.module.css";

class Nav extends Component {
    render() {
        return (
            <Container>
                <div className={classes.wrapper}>
                    <div>
                        <img src={logo}/>
                    </div>
                    <div>
                        <nav className={classes.hdNav}>
                            <ul className={classes.nav}>
                                <li className={classes.navigation}><a>ПОДДЕРЖКА DRUPAL</a></li>
                                <li className={classes.navigation}><a>АДМИНИСТРОВАНИЕ</a></li>
                                <li className={classes.navigation}><a>ПРОДВИЖЕНИЕ</a></li>
                                <li className={classes.navigation}><a>РЕКЛАМА</a></li>
                                <li className={classes.navigation}><a>О НАС</a></li>
                                <li className={classes.navigation}><a>ПРОЕКТЫ</a></li>
                                <li className={classes.navigation}><a>КОНТАКТЫ</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </Container>
        );
    }
}

export default Nav;