import React, {Children, cloneElement, useEffect, useState} from 'react';
import classes from './Review.module.css'
import left from '../../ref/review/arrow-left.svg'
import right from '../../ref/review/arrow-right.svg'
const Review = ({children}) => {
    const [width, setWidth] = useState(Number(window.innerWidth));
    let pageWidth = 400
    if(width < 720){
        pageWidth = 300;
    }


    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);
    const [index, setIndex] = useState(1)
    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${pageWidth}px`,
                        maxWidth: `${pageWidth}px`
                    }
                })
            })
        )
    }, []);
    const handleRightClick = () => {
        if(index < 4){
            setOffset((currentOffset) => {
                const newOffset = currentOffset - pageWidth;
                console.log(newOffset);
                return newOffset;
            })
            setIndex((currentIndex) => {
                return currentIndex + 1;
            })
        }
        else return offset;
    }

    const handleLeftClick = () => {
        if(index > 1) {
            setOffset((currentOffset) => {
                const newOffset = currentOffset + pageWidth;
                const maxOffset = -(pageWidth * (pages.length - 1))
                console.log(newOffset);
                return newOffset;
            })
            setIndex((currentIndex) => {
                return currentIndex - 1;
            })
        }
        else return offset;

    }

    return (
        <div className={classes.review}>
            <div className={classes.title}>
                <h2 className={classes.title}>Отзывы</h2>
            </div>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <div ref={window} className={classes.window}>
                        <div
                            className={classes.allPages}
                            style={{
                                transform: `translateX(${offset}px)`,
                            }}
                        >
                            {pages}
                        </div>
                    </div>
                </div>

                <div className={classes.arrows}>
                    <img className={classes.arrowsCtr} src={left} alt={'left'} onClick={() => handleLeftClick()}/>
                    <div className={classes.index}>{index}/4</div>
                    <img className={classes.arrowsCtr} src={right} alt={'right'} onClick={() => handleRightClick()}/>
                </div>
            </div>
        </div>
    );
};

export default Review;