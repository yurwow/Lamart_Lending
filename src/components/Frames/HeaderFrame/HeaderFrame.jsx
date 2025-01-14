import styles from './HeaderFrame.module.css'
import headerIcon from "../../../public/headerIcon.svg";
import mailIcon from "../../../public/mail.png";
import Button from "../../Button/Button.jsx";

const HeaderFrame = ({textBlocks, scrollToForm, images }) => {
    return (
        <div className={styles.header_background}>
            <header className={styles.header}>
                <div className={styles.left_header_container}>
                    <img src={images?.[0]?.image ? `http://51.250.75.40:8000/${images[0].image}` : headerIcon}
                         alt="Landing icon"
                         className={styles.img}
                    />
                    <div className={styles.header_span_container}>
                        <span className={styles.header_span}>ОТКРЫТЫЕ ИДЕИ</span>
                        {/*{(textBlocks?.length > 0 ? (
                            <span
                                style={{
                                    color: textBlocks[0].styles?.color || "#000000",
                                    fontSize: textBlocks[0]?.styles?.fontSize || '14px',
                                    fontFamily: textBlocks[0]?.styles?.fontFamily || "Arial",
                                    fontWeight: textBlocks[0]?.styles?.fontWeight || "normal",
                                    fontStyle: textBlocks[0]?.styles?.fontStyle || "normal",
                                    lineHeight: textBlocks[0]?.styles?.lineHeight || 1.5,
                                    textAlign: textBlocks[0]?.styles?.textAlign || "left",
                                    listStyleType: textBlocks[0]?.styles?.listType || "none",
                                    display: 'inline-block',
                                }}
                            >
                            {textBlocks[0].content}
                            </span>
                        ) : (
                            <span className={styles.header_span}>ОТКРЫТЫЕ ИДЕИ</span>
                        ))}*/}
                    </div>
                </div>
                <div className={styles.right_header_container}>
                    {/*<a className={styles.email} href="mailto:inbox@aratrum.ru">inbox@aratrum.ru</a>*/}
                    {/*{(textBlocks?.length > 0 ? (
                        <a
                            style={{
                                color: textBlocks[1].styles?.color || "#000000",
                                fontSize: textBlocks[1]?.styles?.fontSize || '14px',
                                fontFamily: textBlocks[1]?.styles?.fontFamily || "Arial",
                                fontWeight: textBlocks[1]?.styles?.fontWeight || "normal",
                                fontStyle: textBlocks[1]?.styles?.fontStyle || "normal",
                                lineHeight: textBlocks[1]?.styles?.lineHeight || 1.5,
                                textAlign: textBlocks[1]?.styles?.textAlign || "left",
                                listStyleType: textBlocks[1]?.styles?.listType || "none",
                                display: 'inline-block',
                            }}
                        >
                            {textBlocks[1].content}
                            </a>
                    ) : (
                        <a className={styles.email} href="mailto:inbox@aratrum.ru">inbox@aratrum.ru</a>
                    ))}*/}
                    <img className={styles.img} src={images?.[1]?.image ? `http://51.250.75.40:8000/${images[1].image}` : mailIcon} alt="mail"/>
                </div>
            </header>
            <section>
                <div className={styles.section_one}>
                    <span className={styles.h1}>ИТ-ПРОДУКТ ДЛЯ ПОДАЧИ ПРЕДЛОЖЕНИЙ</span>
                    {/*{(textBlocks?.length > 0 ? (
                        <span
                            style={{
                                color: textBlocks[2].styles?.color || "#000000",
                                fontSize: textBlocks[2]?.styles?.fontSize || '14px',
                                // fontFamily: textBlocks[2]?.styles?.fontFamily || "Poppins, sans-serif",
                                fontWeight: textBlocks[2]?.styles?.fontWeight || "normal",
                                fontStyle: textBlocks[2]?.styles?.fontStyle || "normal",
                                lineHeight: textBlocks[2]?.styles?.lineHeight || 1.5,
                                textAlign: textBlocks[2]?.styles?.textAlign || "left",
                                listStyleType: textBlocks[2]?.styles?.listType || "none",
                                display: 'inline-block',
                            }}
                        >
                            {textBlocks[2].content}
                        </span>
                    ) : (
                        <span className={styles.h1}>ИТ-ПРОДУКТ ДЛЯ ПОДАЧИ ПРЕДЛОЖЕНИЙ</span>
                    ))}*/}
                    {/*{(textBlocks?.length > 0 ? (
                        <span
                            style={{
                                color: textBlocks[3].styles?.color || "#000000",
                                fontSize: textBlocks[3]?.styles?.fontSize || '14px',
                                // fontFamily: textBlocks[2]?.styles?.fontFamily || "Poppins, sans-serif",
                                fontWeight: textBlocks[3]?.styles?.fontWeight || "normal",
                                fontStyle: textBlocks[3]?.styles?.fontStyle || "normal",
                                lineHeight: textBlocks[3]?.styles?.lineHeight || 1.5,
                                textAlign: textBlocks[3]?.styles?.textAlign || "left",
                                listStyleType: textBlocks[3]?.styles?.listType || "none",
                                display: 'inline-block',
                            }}
                        >
                            {textBlocks[3].content}
                        </span>
                    ) : (
                        <span className={styles.span}>ПО УЛУЧШЕНИЮ ПРОЦЕССОВ В КОМПАНИИ</span>
                    ))}*/}
                    <span className={styles.span}>ПО УЛУЧШЕНИЮ ПРОЦЕССОВ В КОМПАНИИ</span>

                    {/*{(textBlocks?.length > 0 ? (
                        <span
                            style={{
                                color: textBlocks[4].styles?.color || "#000000",
                                fontSize: textBlocks[4]?.styles?.fontSize || '14px',
                                // fontFamily: textBlocks[2]?.styles?.fontFamily || "Poppins, sans-serif",
                                fontWeight: textBlocks[4]?.styles?.fontWeight || "normal",
                                fontStyle: textBlocks[4]?.styles?.fontStyle || "normal",
                                lineHeight: textBlocks[4]?.styles?.lineHeight || 1.5,
                                textAlign: textBlocks[4]?.styles?.textAlign || "center",
                                listStyleType: textBlocks[4]?.styles?.listType || "none",
                                display: 'inline-block',
                                marginTop: '20px',
                                width: '900px',

                            }}
                        >
                            {textBlocks[4].content}
                        </span>
                    ) : (
                        <span className={styles.section_one_span}>Информационная система, разработанная для сбора, оценки и управления предложениями сотрудников по оптимизации различных процессов в компании</span>
                    ))}*/}
                    <span className={styles.section_one_span}>Информационная система, разработанная для сбора, оценки и управления предложениями<br/> сотрудников по оптимизации различных процессов в компании</span>
                    <Button onClick={scrollToForm} text="ПОЛУЧИТЬ ДЕМОДОСТУП"/>
                </div>
            </section>
        </div>
    );
};

export default HeaderFrame;
