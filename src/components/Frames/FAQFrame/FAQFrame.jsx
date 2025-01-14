import styles from "./FAQFrame.module.css"
import ToggleWidget from "../../LandingPage/ToggleWidget.jsx";
import speakerImg from "../../../public/speakerImg.svg";

const FaqFrame = () => {
    return (
        <section className={styles.section_faq}>
            <div className={styles.section_faq_title}>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</div>
            <div className={styles.section_faq_container}>
                <div className={styles.section_faq_questions}>
                    <ToggleWidget
                        questions="Какова стоимость использования вашего решения?"
                        answer="Стоимость использования зависит от выбранного тарифного плана и объема использования."/>
                    <ToggleWidget questions="Как быстро мы можем начать использовать
                                ваше решение?"
                                  answer="Стоимость использования зависит от выбранного тарифного плана и объема использования."/>
                    <ToggleWidget questions="Как ваше решение помогает в повышении
                                вовлеченности сотрудников?"
                                  answer="Стоимость использования зависит от выбранного тарифного плана и объема использования."/>
                    <ToggleWidget questions="Есть ли поддержка для пользователей?"
                                  answer="Стоимость использования зависит от выбранного тарифного плана и объема использования. "/>
                </div>
                {/*<div className={styles.faq_speaker_img}>
                    <img src={speakerImg} alt="Speaker Icon"/>
                </div>*/}
            </div>
        </section>
    );
};

export default FaqFrame;
