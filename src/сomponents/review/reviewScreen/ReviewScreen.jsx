import React from 'react';
import Review from "../review";
import classes from './ReviewScreen.module.css'
import logo from '../../../ref/review/logo_0.png'
import logo2 from '../../../ref/review/logo.png'
import logo3 from '../../../ref/review/farbors_ru.jpg'
import logo4 from '../../../ref/review/logo_2.png'

const ReviewScreen = () => {

    return (
        <Review>
            <div className={classes.slide}>
                <div>
                    <img className={classes.img} src={logo} alt={'logo'}/>
                </div>
                <p className={classes.text}>
                    The long search for the one and only master on the long-suffering site www.cielparfum.com which was
                    assembled by an extremely incompetent programmer and once a month stably threatened to die, led me
                    to
                    the site and, as a result, to the guys from Drupal-coder. And for almost six months now, not a day
                    has
                    passed that I haven't been surprised and pleased with my luck! Fixed everything that didn't work -
                    from
                    the search to the menu display. We carried out a redesign - without departing from the desired, but
                    with
                    its own significant and high-quality additions. We have implemented a number of projects - contests,
                    tests, etc. And there are countless minor repairs and improvements! And most importantly -
                    everything is
                    high-quality and fast (despite not the "fastest" tariff). There are questions - the wonderful Alexey
                    will always prompt, support, repair and / or just make from scratch. There is an idea for
                    implementation
                    - the wonderful Sergey will discuss and offer the ideal option. There is a problem - wonderful
                    Nadezhda
                    and Roman will fix, correct, do! The guys proved that this CMS is a powerful and competent
                    management
                    system. I hope that our cooperation will last for a long time! Thanks!!!
                </p>
            </div>
            <div className={classes.slide}>
                <div>
                    <img className={classes.img} src={logo2} alt={'logo'}/>
                </div>
                <p className={classes.text}>
                    Sergey is a professional, highly qualified programmer with extensive experience in IT. I have been
                    communicating with top freelancers for a long time (the entire top twenty) on the weblancer and I
                    can say that THEY WERE NOT LYING AROUND WITH SERGEY. We are still working with Sergey. It's a
                    pleasure to work with him, I'm happy.
                </p>
            </div>
            <div className={classes.slide}>
                <div>
                    <img className={classes.img} src={logo3} alt={'logo'}/>
                </div>
                <p className={classes.text}>
                    I express my deepest gratitude to the team of specialists "Initlab" and personally to Dmitry
                    Kupyansky and Alexei Sinitsa. Drupal with additional functionality. Everything was done with the
                    highest quality and exactly in time. Everyone wants without nerves and unnecessary questions.
                </p>
            </div>
            <div className={classes.slide}>
                <div>
                    <img className={classes.img} src={logo4} alt={'logo'}/>
                </div>
                <p className={classes.text}>
                    For quite a long period (2014 - 2016) of very intensive work (the online store on the insanely
                    confused Drupal 6: eliminated the jambs of developers, accelerated the site, made a lot of new
                    functions, etc.) - only the kindest emotions from working with the Initlab / Drupal-coder team: you
                    can always count on quick and intelligent help, support, advice. Even now, despite the fact that we
                    have not been working on a permanent basis for almost a year (the tasks ended banally), a problem
                    with the site that accidentally occurred was solved instantly! In general, only the most sincere
                    thanks and recommendations!
                    Thank you!)
                </p>
            </div>
        </Review>
    );
};

export default ReviewScreen;