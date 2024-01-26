import React from 'react';
import classes from './Menu.module.css'
const Menu = ({header, items, active, setActive}) => {
    return (
        <div className={active ? classes.menuActive : classes.menu}>
            <div className={classes.menu__content}>
                <ul className={classes.spisok}>
                    {items.map(item => <li className={classes.navItemWrapper} >
                            <a className={classes.navItem} href={item.href}>{item.value}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Menu;