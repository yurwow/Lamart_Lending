import styles from "./PrivilegeFrame.module.css"
import Widget from "../../LandingPage/Widget.jsx";
import widgetIconFirst from "@/widgetIconFirst.svg";
import firstIconHover from "@/firstIconHover.svg";
import widgetIconSecond from "@/widgetIconSecond.svg";
import secondIconHover from "@/secondIconHover.svg";
import widgetIconThird from "@/widgetIconThird.svg";
import thirdIconHover from "@/thirdIconHover.svg";

const PrivilegeFrame = () => {
    return (
        <section className={styles.section_three}>
            <span className={styles.h3}>ПЛЮСЫ УПРАВЛЕНИЯ ПРЕДЛОЖЕНИЯМИ</span>
            <div className={styles.section_three_widgets}>
                <Widget src={widgetIconFirst}
                        srcHover={firstIconHover}
                        title="Централизация и структурирование"
                        text="ИТ-решение централизует предложения, упрощая доступ и предотвращая их утрату. Оно также структурирует данные по категориям для удобного анализа и реализации."/>
                <Widget src={widgetIconSecond}
                        srcHover={secondIconHover}
                        title="Прозрачность и отслеживаемость"
                        text="ИТ-решение отслеживает статус предложений, позволяет ставить лайки и уведомляет о ходе процесса, улучшая взаимодействие между сотрудниками и руководством."/>
                <Widget src={widgetIconThird}
                        srcHover={thirdIconHover}
                        title="Объективная оценка и приоритизация"
                        text="Информационная система обеспечивает объективную оценку предложений по заданным критериям, что помогает выбирать лучшие для реализации."/>
            </div>
        </section>
    );
};

export default PrivilegeFrame;
