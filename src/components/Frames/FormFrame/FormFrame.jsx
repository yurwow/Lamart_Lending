import {forwardRef, useState} from 'react';
import styles from "./FormFrame.module.css";
import Form from "../../Form/Form.jsx";
import lamp from '@/lamp.svg'
import lamp2 from '@/lamp2.svg'
import lamp3 from '@/lamp3.svg'
import iconDown from '@/iconDown.svg'

const FormFrame = forwardRef((props, ref) => {
    const textBlocks = props.textBlocks
    const isMobileDevice = window.innerWidth <= 768;
    const [isMoved, setIsMoved] = useState(false)

    const lampImages = [
        lamp,
        lamp2,
        lamp,
        lamp2,
        lamp3
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        setIsMoved(!isMoved)
        if (!isAnimating) {
            setIsAnimating(true);
            let index = 0;
            const animationInterval = setInterval(() => {
                index++;
                setCurrentImageIndex(index);
                if (index === lampImages.length - 1) {
                    clearInterval(animationInterval);
                }
            }, 1000);
        } else {
            setCurrentImageIndex(0);
            setIsAnimating(false);
        }
    }

    return (
        <div>
            <section ref={ref} className={styles.section_form_background}>
                <div className={styles.section_form}>
                    <div className={styles.section_form_container}>
                        {/*<span className={styles.form_title}>НАСТРОИМ ОНЛАЙН-ПЛАТФОРМУ ОТКРЫТЫЕ ИДЕИ ПОД ВАШИ ЗАДАЧИ</span>*/}
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
                                    textAlign: isMobileDevice ? 'left' : textBlocks[0]?.styles?.textAlign || "center",
                                    listStyleType: textBlocks[0]?.styles?.listType || "none",
                                    display: 'inline-block',
                                    padding: isMobileDevice ? '0px 37px 0px 20px' : '0 227px'
                                }}
                            >
                            {textBlocks[0].content}
                            </span>
                        ) : (
                            <span className={styles.form_title}>НАСТРОИМ ОНЛАЙН-ПЛАТФОРМУ ОТКРЫТЫЕ ИДЕИ ПОД ВАШИ ЗАДАЧИ</span>

                        ))}
                        {(textBlocks?.length > 0 ? (
                            <span
                                style={{
                                    color: textBlocks[1].styles?.color || "#000000",
                                    fontSize: isMobileDevice ? (textBlocks[1]?.styles?.mobileFontSize ? `${textBlocks[1]?.styles?.mobileFontSize}px` : '14px') : (textBlocks[1]?.styles?.fontSize ? `${textBlocks[1]?.styles?.fontSize}px` : '14px'),
                                    // fontSize: isMobileDevice ? '12px' : '20px',
                                    fontFamily: `${textBlocks[1]?.styles?.fontFamily}, sans-serif` || "Montserrat Alternates, sans-serif",
                                    fontWeight: textBlocks[1]?.styles?.fontWeight || "normal",
                                    fontStyle: textBlocks[1]?.styles?.fontStyle || "normal",
                                    lineHeight: textBlocks[1]?.styles?.lineHeight || 1.5,
                                    textAlign: isMobileDevice ? 'left' : textBlocks[1]?.styles?.textAlign || "center",
                                    listStyleType: textBlocks[1]?.styles?.listType || "none",
                                    display: 'inline-block',
                                    padding: isMobileDevice ? '20px 37px 0px 20px' : '30px 49px 0px 20px'
                                }}
                            >
                            {textBlocks[1].content}
                            </span>
                        ) : (
                            <p className={styles.form_p}>Ответим на вопросы, внедрим платформу, импортируем данные,
                                научим решать любые задачи в<br/> одном окне браузера и получать аналитику с помощью отчетов
                            </p>

                        ))}
                        {/*<p className={styles.form_p}>Ответим на вопросы, внедрим платформу, импортируем данные, научим*/}
                        {/*    решать любые задачи в<br/> одном окне браузера и получать аналитику с помощью отчетов</p>*/}

                        <Form classNameBtn={styles.btn}/>
                    </div>
                </div>
            </section>
            <section className={styles.section_sun}>
                <div className={styles.sun_container}>
                    <img className={styles.sunImage} src={lampImages[currentImageIndex]} alt="sun icon"/>
                    <img onClick={handleClick} className={`${styles.icon_down} ${isMoved ? styles.active : ''}`} src={iconDown} alt="icon down"/>
                </div>
                <div className={styles.sun_text_container}>
                    <span className={styles.sun_text}>НОВЫЕ <span
                        style={{color: '#1E4DC2', marginLeft: '6px'}}>ИДЕИ</span></span>
                    <div className={styles.sun_text}>НАДО ПОДДЕРЖИВАТЬ.</div>
                    <div className={styles.sun_text}>НЕМНОГИЕ ИМЕЮТ ТАКУЮ СМЕЛОСТЬ.</div>
                    <div className={styles.sun_text}>НО ЭТО ОЧЕНЬ ДРАГОЦЕННОЕ СВОЙСТВО ЛЮДЕЙ.</div>
                    <div className={styles.sun_span}>КОНСТАНТИН ЦИОЛКОВСКИЙ, РОССИЙСКИЙ И СОВЕТСКИЙ УЧЁНЫЙ</div>
                </div>
            </section>
        </div>
    );
});

FormFrame.displayName = "FormFrame";

export default FormFrame;
