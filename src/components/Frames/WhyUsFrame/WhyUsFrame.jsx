import styles from "./WhyUsFrame.module.css";
import puzzleIcon from "@/puzzle.svg";
import SecondWidget from "../../LandingPage/SecondWidget.jsx";

const WhyUsFrame = () => {
    return (
        <div>
            <section className={styles.section_four}>
                <div className={styles.section_two_container}>
                    <div style={{marginTop: '40px'}} className={styles.h2}>ПОЧЕМУ ИМЕННО МЫ?</div>
                    <div className={styles.text}>Мы помогаем развивать технологические инновации в компаниях</div>
                </div>
                <div className={styles.puzzle_container}>
                    <img src={puzzleIcon} alt="puzzle icon"/>
                </div>
            </section>
            <section className={styles.widget_container}>
                <div className={styles.section_four_widgets}>
                    <SecondWidget title="Функции"
                                  text="Платформа включает систему сбора и управления инициативами сотрудников, BI-аналитики и базу знаний"/>
                    <SecondWidget title="Поддержка" text="Круглосуточная служба технической поддержки help@aratrum.ru"/>
                    <SecondWidget title="Стоимость"
                                  text="Рассчитывается в индивидуальном порядке через оформление заявки или почту inbox@aratrum.ru"/>
                </div>
            </section>
        </div>
    );
};

export default WhyUsFrame;
