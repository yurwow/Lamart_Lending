import styles from "./FAQFrame.module.css"
import ToggleWidget from "../../LandingPage/ToggleWidget.jsx";
import speaker1 from "@/speaker1.svg";
import speaker2 from "@/speaker2.svg"
import speaker3 from "@/speaker3.svg"
import speaker4 from "@/speaker4.svg"
import speaker5 from "@/speaker5.svg"
import speaker6 from "@/speaker6.svg"
import speaker7 from "@/speaker7.svg"
import {useEffect, useState} from "react";

const FaqFrame = () => {

    const images = [
        speaker1,
        speaker2,
        speaker3,
        speaker4,
        speaker5,
        speaker6,
        speaker7
    ]

    const [imagesIndex, setImagesIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImagesIndex((prev) => (prev + 1) % images.length)
        }, 700)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className={styles.section_faq}>
            <div className={styles.section_faq_title}>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</div>
            <div className={styles.section_faq_container}>
                <div className={styles.section_faq_questions}>
                    <ToggleWidget
                        questions="Какова стоимость использования вашего решения?"
                        answer="Стоимость использования зависит от выбранного тарифного плана и объема использования."/>
                    <ToggleWidget
                        questions="Как быстро мы можем начать использовать ваше решение?"
                        answer="Стоимость использования зависит от выбранного тарифного плана и объема использования."/>
                    <ToggleWidget
                        questions="Как ваше решение помогает в повышении вовлеченности сотрудников?"
                        answer="Стоимость использования зависит от выбранного тарифного плана и объема использования."/>
                    <ToggleWidget
                        questions="Есть ли поддержка для пользователей?"
                        answer="Стоимость использования зависит от выбранного тарифного плана и объема использования. "/>
                    <ToggleWidget
                        questions="Описание функциональных характеристик программного обеспечения"
                        answer="Стоимость использования зависит от выбранного тарифного плана и объема использования. "/>
                    <ToggleWidget
                        questions="Информация, необходимая для установки программного обеспечения"
                        answer="Стоимость использования зависит от выбранного тарифного плана и объема использования. "/>
                    <ToggleWidget
                        questions="Информация, необходимая для эксплуатации программного обеспечения"
                        answer="Стоимость использования зависит от выбранного тарифного плана и объема использования. "/>
                </div>
                <div className={styles.faq_speaker_img}>
                    <img className={styles.img} src={images[imagesIndex]} alt="Speaker Icon"/>
                </div>
            </div>
        </section>
    );
};

export default FaqFrame;
