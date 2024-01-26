import React, {useState} from 'react';
import classes from './SliderColoborators.module.css'
import coloborator from '../../ref/coloborators/Frame 3.svg'
import coloborator2 from '../../ref/coloborators/Frame 3-2.svg'
import coloborator3 from '../../ref/coloborators/Frame 3-1.svg'
import coloborator4 from '../../ref/coloborators/Frame 3-3.svg'
import Card from "./Card/Card";
import Carousel from 'nuka-carousel'

const SliderColoborators = () => {
    const [width, setWidth] = useState(Number(window.innerWidth));
    let page = 6;
    if(width < 720){
        page = 1.5;
    }

    const coloborators = [coloborator, coloborator2, coloborator3, coloborator4, coloborator, coloborator2,
        coloborator3, coloborator4, coloborator, coloborator2, coloborator3, coloborator4, coloborator,
        coloborator2, coloborator3, coloborator4, coloborator, coloborator2, coloborator3, coloborator4,
        coloborator, coloborator2, coloborator3, coloborator4, coloborator, coloborator2, coloborator3,
        coloborator4, coloborator, coloborator2, coloborator3, coloborator4];

    return (

        <div className={classes.main}>
            <div className={classes.wrapper}>
                <h2 className={classes.title}>С нами работают</h2>
                <p className={classes.text}>Десятки компаний доверяют нам самое ценное, что у них есть в интернете –
                    свои <br/>
                    сайты. Мы делаем всё, чтобы наше сотрудничество было долгим.</p>
            </div>
            <Carousel
                slidesToScroll={0.5}
                slidesToShow={page}
                autoplay={true}
                autoplayInterval={5000}
                withoutControls={true}
            >{coloborators.map(i => <Card props={i}/>)}
            </Carousel>
            <br/>
            <Carousel
                slidesToScroll={1.5}
                slidesToShow={page}
                autoplay={true}
                autoplayInterval={5000}
                withoutControls={true}
                autoplayReverse={true}
            >{coloborators.map(i => <Card props={i}/>)}
            </Carousel>
        </div>
    );
};

export default SliderColoborators;