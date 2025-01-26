import styles from "./WhyUsFrame.module.css";
import puzzleIcon from "@/puzzle.svg";
import SecondWidget from "../../LandingPage/SecondWidget.jsx";

const WhyUsFrame = ({textBlocks}) => {
    const isMobileDevice = window.innerWidth <= 768;

    return (
        <div>
            <section className={styles.section_four}>
                <div className={styles.section_two_container}>
                    {/*<div style={{marginTop: '40px'}} className={styles.h2}>ПОЧЕМУ ИМЕННО МЫ?</div>*/}
                    {(textBlocks?.length > 0 ? (
                        <span
                            style={{
                                color: textBlocks[0].styles?.color || "#000000",
                                fontSize: isMobileDevice
                                    ? (textBlocks[0]?.styles?.mobileFontSize ? `${textBlocks[0]?.styles?.mobileFontSize}px` : '14px')
                                    : (textBlocks[0]?.styles?.fontSize ? `${textBlocks[0]?.styles?.fontSize}px` : '14px'),
                                fontFamily: `${textBlocks[0]?.styles?.fontFamily}, sans-serif` || "Montserrat Alternates, sans-serif",
                                fontWeight: textBlocks[0]?.styles?.fontWeight || "normal",
                                fontStyle: textBlocks[0]?.styles?.fontStyle || "normal",
                                lineHeight: textBlocks[0]?.styles?.lineHeight || 1.5,
                                textAlign: textBlocks[0]?.styles?.textAlign || "left",
                                listStyleType: textBlocks[0]?.styles?.listType || "none",
                                display: 'inline-block',
                                marginTop: '40px'
                            }}
                        >
                            {textBlocks[0].content}
                            </span>
                    ) : (
                        <div style={{marginTop: '40px'}} className={styles.h2}>ПОЧЕМУ ИМЕННО МЫ?</div>
                    ))}
                    {(textBlocks?.length > 0 ? (
                        <div
                            style={{
                                color: textBlocks[1].styles?.color || "#000000",
                                fontSize: isMobileDevice
                                    ? (textBlocks[1]?.styles?.mobileFontSize ? `${textBlocks[1]?.styles?.mobileFontSize}px` : '14px')
                                    : (textBlocks[1]?.styles?.fontSize ? `${textBlocks[1]?.styles?.fontSize}px` : '14px'),
                                fontFamily: `${textBlocks[1]?.styles?.fontFamily}, sans-serif` || "Montserrat Alternates, sans-serif",
                                fontWeight: textBlocks[1]?.styles?.fontWeight || "normal",
                                fontStyle: textBlocks[1]?.styles?.fontStyle || "normal",
                                lineHeight: textBlocks[1]?.styles?.lineHeight || 1.5,
                                textAlign: textBlocks[1]?.styles?.textAlign || "left",
                                listStyleType: textBlocks[1]?.styles?.listType || "none",
                                display: 'inline-block',
                                marginTop: '30px'
                            }}
                        >
                            {textBlocks[1].content}
                            </div>
                    ) : (
                        <div className={styles.text}>Мы помогаем развивать технологические инновации в компаниях</div>
                    ))}
                    {/*<div className={styles.text}>Мы помогаем развивать технологические инновации в компаниях</div>*/}
                </div>
                <div className={styles.puzzle_container}>
                    <img className={styles.puzzleIcon} src={puzzleIcon} alt="puzzle icon"/>
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
