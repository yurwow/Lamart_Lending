import styles from './LandingPage.module.css'
import megapolic from '../../public/megapolis.svg'
import monitorIcon from '../../public/Celestial-Blue.svg'
import Widget from "./Widget.jsx";
import widgetIconFirst from '../../public/widgetIconFirst.svg'
import widgetIconSecond from '../../public/widgetIconSecond.svg'
import widgetIconThird from '../../public/widgetIconThird.svg'
import mailIcon from '../../public/mail.png'
import headerIcon from '../../public/headerIcon.svg'
import puzzleIcon from '../../public/puzzle.svg'
import {useEffect, useState} from "react";
import SecondWidget from "./SecondWidget.jsx";
import Form from "../Form/Form.jsx";
import Button from "../Button/Button.jsx";
import sunImage from "../../public/Sun.svg"
import clickIcon from '../../public/clickIcon.svg'
import plusIcon from '../../public/plusIcon.svg'
import speakerImg from '../../public/speakerImg.svg'


const LandingPage = ({headerTitle}) => {
    const [title, setTitle] = useState(headerTitle);

    useEffect(() => {
        const savedTitle = localStorage.getItem('headerTitle');
        if (savedTitle) {
            setTitle(savedTitle);
        }
    }, [headerTitle]);

    return (
        <div>
            <div className={styles.header_background}>
                <header className={styles.header}>
                    <div className={styles.left_header_container}>
                        <img src={headerIcon} alt="Landing icon"/>
                        <div className={styles.header_span_container}>
                            <span className={styles.header_span} dangerouslySetInnerHTML={{__html: title}}/>
                        </div>
                    </div>
                    <div className={styles.right_header_container}>
                        <a className={styles.email} href="mailto:inbox@aratrum.ru">inbox@aratrum.ru</a>
                        <img src={mailIcon} alt="mail"/>
                    </div>
                </header>
                <section>
                    <div className={styles.section_one}>
                        <span className={styles.h1}>ИТ-ПРОДУКТ ДЛЯ ПОДАЧИ ПРЕДЛОЖЕНИЙ</span>
                        <span className={styles.span}>ПО УЛУЧШЕНИЮ ПРОЦЕССОВ В КОМПАНИИ</span>
                        <span className={styles.section_one_span}>Информационная система, разработанная для сбора, оценки и управления предложениями сотрудников по оптимизации различных процессов в компании</span>
                        <Button text="ПОЛУЧИТЬ ДЕМОДОСТУП"/>
                    </div>
                </section>
            </div>
            <section className={styles.section_two}>
                <div className={styles.section_two_container}>
                    <div className={styles.h2}>ИТ-РЕШЕНИЕ ДЛЯ ВАШЕЙ КОМПАНИИ</div>
                    <div className={styles.text}>С помощью этого решения, сотрудники могут предлагать идеи, рекомендации
                        и предложения по улучшению работы компании, а экспертам и управляющим лицам предоставляется
                        возможность эффективно оценивать и реализовывать эти предложения
                    </div>
                </div>
                <img className={styles.megapolis_icon} src={megapolic} alt="иконка здание"/>
            </section>
            <div className={styles.monitorIcon_container}>
                <img className={styles.monitorIcon} src={monitorIcon} alt="monitorIcon"/>
            </div>
            <section className={styles.section_three}>
                <span className={styles.h3}>ПРЕИМУЩЕСТВА УПРАВЛЕНИЯ ПРЕДЛОЖЕНИЯМИ</span>
                <div className={styles.section_three_widgets}>
                    <Widget src={widgetIconFirst}
                            title="Централизация и структурирование"
                            text="ИТ-решение централизует предложения, упрощая доступ и предотвращая их утрату. Оно также структурирует данные по категориям для удобного анализа и реализации."/>
                    <Widget src={widgetIconSecond}
                            title="Прозрачность и отслеживаемость"
                            text="ИТ-решение отслеживает статус предложений, позволяет ставить лайки и уведомляет о ходе процесса, улучшая взаимодействие между сотрудниками и руководством."/>
                    <Widget src={widgetIconThird}
                            title="Объективная оценка и приоритизация"
                            text="Информационная система обеспечивает объективную оценку предложений по заданным критериям, что помогает выбирать лучшие для реализации."/>
                </div>
            </section>
            <section className={styles.section_four}>
                <div className={styles.section_two_container}>
                    <div style={{marginTop: '40px'}} className={styles.h2}>ПОЧЕМУ ИМЕННО МЫ?</div>
                    <div className={styles.text}>Мы помогаем развивать технологические инновации в компаниях</div>
                </div>
                <div className={styles.puzzle_container}>
                    <img src={puzzleIcon} alt="puzzle icon"/>
                </div>
            </section>
            <section>
                <div className={styles.section_four_widgets}>
                    <SecondWidget title="Функции"
                                  text="Платформа включает систему сбора и управления инициативами сотрудников, BI-аналитики и базу знаний"/>
                    <SecondWidget title="Поддержка" text="Круглосуточная служба технической поддержки help@aratrum.ru"/>
                    <SecondWidget title="Стоимость"
                                  text="Рассчитывается в индивидуальном порядке через оформление заявки или почту inbox@aratrum.ru"/>
                </div>
            </section>
            <section className={styles.section_form_background}>
                <div className={styles.section_form}>
                    <div className={styles.section_form_container}>
                        <span
                            className={styles.form_title}>НАСТРОИМ ОНЛАЙН-ПЛАТФОРМУ ОТКРЫТЫЕ ИДЕИ ПОД ВАШИ ЗАДАЧИ</span>
                        <p className={styles.form_p}>Ответим на вопросы, внедрим платформу, импортируем данные, научим
                            решать любые задачи в одном окне браузера и получать аналитику с помощью отчетов</p>
                        <Form/>
                    </div>
                </div>
            </section>
            <section className={styles.section_sun}>
                <img className={styles.sunImage} src={sunImage} alt="sun icon"/>
                <div className={styles.sun_text_container}>
                    <span className={styles.sun_text}>НОВЫЕ <span style={{color: '#1E4DC2', marginLeft:'6px'}}>ИДЕИ</span></span>
                    <div className={styles.sun_text}>НАДО ПОДДЕРЖИВАТЬ.</div>
                    <div className={styles.sun_text}>НЕМНОГИЕ ИМЕЮТ ТАКУЮ СМЕЛОСТЬ.</div>
                    <div className={styles.sun_text}>НО ЭТО ОЧЕНЬ ДРАГОЦЕННОЕ СВОЙСТВО ЛЮДЕЙ.</div>
                    <div className={styles.sun_span}>КОНСТАНТИН ЦИОЛКОВСКИЙ, РОССИЙСКИЙ И СОВЕТСКИЙ УЧЁНЫЙ</div>
                </div>
            </section>
            <section className={styles.section_clients}>
                <span className={styles.section_clients_title}>КЛИЕНТЫ, КОТОРЫЕ ВЫБРАЛИ</span>
                <div className={styles.section_clients_title} style={{color: '#1E4DC2'}}>ОТКРЫТЫЕ ИДЕИ</div>
                <div className={styles.section_clients_container}>
                    <div className={styles.section_clients_click}>
                        <img src={clickIcon} alt="click icon"/>
                    </div>
                    <div className={styles.section_clients_click}>
                        <img src={clickIcon} alt="click icon"/>
                    </div>
                    <div className={styles.section_clients_click}>
                        <img src={clickIcon} alt="click icon"/>
                    </div>
                    <div className={styles.section_clients_click}>
                        <img src={clickIcon} alt="click icon"/>
                    </div>
                    <div className={styles.section_clients_click}>
                        <img src={clickIcon} alt="click icon"/>
                    </div>
                    <div className={styles.section_clients_click}>
                        <span className={styles.section_clients_click_span}>СТАТЬ НАШИМ КЛИЕНТОМ</span>
                    </div>
                </div>
            </section>
            <section className={styles.section_faq}>
                <div className={styles.section_faq_title}>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</div>
                <div className={styles.section_faq_container}>
                    <div className={styles.section_faq_questions}>
                        <div className={styles.question_widget}>
                            <div className={styles.question_widget_text}>Какова стоимость использования вашего
                                решения?
                            </div>
                            <button className={styles.question_widget_btn}>
                                <img src={plusIcon} alt="plus icon"/>
                            </button>
                        </div>

                        <div className={styles.question_widget}>
                            <div className={styles.question_widget_text}>Как быстро мы можем начать использовать
                                ваше решение?
                            </div>
                            <button className={styles.question_widget_btn}>
                                <img src={plusIcon} alt="plus icon"/>
                            </button>
                        </div>

                        <div className={styles.question_widget}>
                            <div className={styles.question_widget_text}>Как ваше решение помогает в повышении
                                вовлеченности сотрудников?
                            </div>
                            <button className={styles.question_widget_btn}>
                                <img src={plusIcon} alt="plus icon"/>
                            </button>
                        </div>

                        <div className={styles.question_widget}>
                            <div className={styles.question_widget_text}>Есть ли поддержка для пользователей?</div>
                            <button className={styles.question_widget_btn}>
                                <img src={plusIcon} alt="plus icon"/>
                            </button>
                        </div>
                    </div>
                    <div className={styles.faq_speaker_img}>
                        <img src={speakerImg} alt="Speaker Icon"/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
