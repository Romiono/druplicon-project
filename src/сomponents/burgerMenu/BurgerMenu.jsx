import React, {useState} from 'react';
import logo from '../../ref/header/logo.svg'
import classes from "./BurgerMenu.module.css";
import Menu from "./menu/Menu";
const BurgerMenu = () => {
    const items = [
        {value: 'Поддержка Drupal', href: '/menu'},
        {value: 'Администрирование', href: '/menu', pod: ['Миграция', '','','','']},
        {value: 'Продвижение', href: '/menu'},
        {value: 'Реклама', href: '/menu'},
        {value: 'О нас', href: '/menu'},
        {value: 'Проекты', href: '/menu'},
        {value: 'Контакты', href: '/menu'},
    ]

    const [menuActive, setMenuActive] = useState(false)
    return (
        <div>
            <div className={classes.menu}>
                <img alt={'logo'} src={logo}/>
                <div className={classes.burgerBtn} onClick={() => setMenuActive(!menuActive)}>
                    <span className={classes.span}/>
                </div>
            </div>
            <Menu active={menuActive} setActive={setMenuActive} header={'бургер'} items={items}/>
        </div>
    );
};

export default BurgerMenu;