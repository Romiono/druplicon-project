import React, {useRef} from 'react';
import Header from "../header/Header";
import ServicesScrin from "../Services/ServiceScreen/ServicesScrin";
import SupportScreen from "../support/supportScreen /SupportScreen";
import ExpirienceScreen from "../expirience/ExpirienceScreen";
import PacksScreen from "../Packs/Packs/PacksScreen";
import DevSpeedScreen from "../devSpeedScreen/devSpeedScreen";
import WorkerScreen from "../workers/workerScreen/WorkerScreen";
import CasesScreen from "../Cases/CasesScreen/CasesScreen";
import ReviewScreen from "../review/reviewScreen/ReviewScreen";
import FaqScreen from "../Faq/faqScreen/FaqScreen";
import SliderColoborators from "../Slider/SliderColoborators";
import Form from "../form/form";

const Main = () => {
    const headerData = [
        {
            menuItems: [
                { label: "ПОДДЕРЖКА DRUPAL", type: 'a' },
                { label: "АДМИНИСТРИРОВАНИЕ", type: 'a', options: ["МИГРАЦИЯ", "БЭКАПЫ", "АУДИТ БЕЗОПАСНОСТИ", "ОПТИМИЗАЦИЯ СКОРОСТИ", "ПЕРЕЕЗД НА HTTPS"] },
                { label: "ПРОДВИЖЕНИЕ", type: 'a' },
                { label: "РЕКЛАМА", type: 'a' },
                { label: "О НАС", type: 'a', options: ["КОМАНДА", "DRUPALGIVE", "БЛОГ", "КУРСЫ DRUPAL"] },
                { label: "ПРОЕКТЫ", type: 'a' },
                { label: "Контакты", type: 'a' }
            ],
            number: "8 800 222-26-73",
            locale: "RU",
            languageOptions: ["EN", "CH"]
        },
    ];

    const targetRef = useRef(null);

    const scrollToTarget = () => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="App">
            {headerData.map((data, index) => (
                <Header key={index} {...data} target={scrollToTarget}/>
            ))}
            <ServicesScrin/>
            <SupportScreen/>
            <ExpirienceScreen/>
            <PacksScreen target={targetRef}/>
            <DevSpeedScreen/>
            <WorkerScreen/>
            <CasesScreen/>
            <ReviewScreen/>
            <SliderColoborators/>
            <FaqScreen/>
            <Form/>
        </div>

    );
}

export default Main;