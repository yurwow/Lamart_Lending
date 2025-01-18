import styles from "./PrivilegeFrame.module.css"
import Widget from "../../LandingPage/Widget.jsx";
import widgetIconFirst from "@/widgetIconFirst.svg";
import firstIconHover from "@/firstIconHover.svg";
import widgetIconSecond from "@/widgetIconSecond.svg";
import secondIconHover from "@/secondIconHover.svg";
import widgetIconThird from "@/widgetIconThird.svg";
import thirdIconHover from "@/thirdIconHover.svg";

const PrivilegeFrame = ({textBlocks}) => {
    const isMobileDevice = window.innerWidth <= 768;

    return (
        <section className={styles.section_three}>
            {/*<span className={styles.h3}>ПЛЮСЫ УПРАВЛЕНИЯ ПРЕДЛОЖЕНИЯМИ</span>*/}
            {(textBlocks?.length > 0 ? (
                <span
                    style={{
                        color: textBlocks[0].styles?.color || "#000000",

                        fontSize: isMobileDevice ? (textBlocks[0]?.styles?.mobileFontSize ? `${textBlocks[0]?.styles?.mobileFontSize}px` : '14px') : (textBlocks[0]?.styles?.fontSize ? `${textBlocks[0]?.styles?.fontSize}px` : '14px'),

                        fontFamily: textBlocks[0]?.styles?.fontFamily || "Arial",
                        fontWeight: textBlocks[0]?.styles?.fontWeight || "normal",
                        fontStyle: textBlocks[0]?.styles?.fontStyle || "normal",
                        lineHeight: textBlocks[0]?.styles?.lineHeight || 1.5,
                        textAlign: textBlocks[0]?.styles?.textAlign || "left",
                        listStyleType: textBlocks[0]?.styles?.listType || "none",
                        display: 'inline-block',
                        marginLeft: isMobileDevice ? '20px' : '14.84vw',
                        width: '58vw',
                    }}
                >
                            {textBlocks[0].content}
                            </span>
            ) : (
                <span className={styles.h3}>ПЛЮСЫ УПРАВЛЕНИЯ ПРЕДЛОЖЕНИЯМИ</span>
            ))}
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
