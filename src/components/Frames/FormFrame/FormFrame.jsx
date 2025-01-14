import {forwardRef} from 'react';
import styles from "./FormFrame.module.css";
import Form from "../../Form/Form.jsx";
import lamp from '../../../public/lamp.svg'
import iconDown from '../../../public/iconDown.svg'

const FormFrame = forwardRef((props, ref) => {
    return (
        <div>
            <section ref={ref} className={styles.section_form_background}>
                <div className={styles.section_form}>
                    <div className={styles.section_form_container}>
                        <span
                            className={styles.form_title}>НАСТРОИМ ОНЛАЙН-ПЛАТФОРМУ ОТКРЫТЫЕ ИДЕИ ПОД ВАШИ ЗАДАЧИ</span>
                        <p className={styles.form_p}>Ответим на вопросы, внедрим платформу, импортируем данные, научим
                            решать любые задачи в<br/> одном окне браузера и получать аналитику с помощью отчетов</p>
                        <Form classNameBtn={styles.btn}/>
                    </div>
                </div>
            </section>
            <section className={styles.section_sun}>
                <div className={styles.sun_container}>
                    <img className={styles.sunImage} src={lamp} alt="sun icon"/>
                    <img className={styles.icon_down} src={iconDown} alt="icon down"/>
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
