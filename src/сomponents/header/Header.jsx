import React from 'react';
import HeaderTop from "./HeaderTop/HeaderTop";
import Drupal from '../../ref/header/druplicon.svg'
import video from '../../ref/header/video.mp4'
import classes from "./Header.module.css";
import NavBar from "../NavBar/NavBar";

const Header = (props) => {
    const { menuItems, number, locale, languageOptions } = props;
    return (
        <div className={classes.main}>
            <NavBar
                menuItems={menuItems}
                number={number}
                locale={locale}
                languageOptions={languageOptions}
            />
            <img className={classes.druplicon} src={Drupal} alt={'drupal'}/>
            <video src={video} autoPlay muted loop className={classes.bgVideo}/>
            <HeaderTop target={props.target}/>

        </div>
    );
};

export default Header;