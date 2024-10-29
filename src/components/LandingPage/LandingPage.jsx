import styles from './LandingPage.module.css'
import icon from '../../public/icon.svg'
import megapolic from '../../public/megapolis.svg'
import monitorIcon from '../../public/Celestial-Blue.svg'
import background from '../../public/backgroundImage.svg'
import Widget from "./Widget.jsx";
import widgetIconFirst from '../../public/widgetIconFirst.svg'
import widgetIconSecond from '../../public/widgetIconSecond.svg'
import widgetIconThird from '../../public/widgetIconThird.svg'


const LandingPage = () => {
    const style = {
        backgroundImage: `url(${background})`,
        // height:'2527px',
        // marginTop: '50px'
    }
    return (
        <div>
            <header className={styles.header}>
                <img className={styles.page_icon} src={icon} alt="Landing icon"/>
                <div className={styles.header_span_container}>
                    <span className={styles.header_span}>ОТКРЫТЫЕ ИДЕИ</span>
                </div>
            </header>
            <main>
                <section>
                    <div className={styles.section_one}>
                        <span className={styles.h1}>ИТ-ПРОДУКТ ДЛЯ ПОДАЧИ ПРЕДЛОЖЕНИЙ</span>
                        <span className={styles.span}>ПО УЛУЧШЕНИЮ ПРОЦЕССОВ В КОМПАНИИ</span>
                        <span className={styles.section_one_span}>Информационная система, разработанная для сбора, оценки и управления предложениями сотрудников по оптимизации различных процессов в компании</span>
                        <button className={styles.btn}>Получить демодоступ</button>
                    </div>
                </section>
                <section className={styles.section_two}>
                    <div className={styles.section_two_container}>
                        <div className={styles.h2}>ИТ-РЕШЕНИЕ ДЛЯ ВАШЕЙ КОМПАНИИ</div>
                        <div className={styles.text}>С помощью этого решения, сотрудники могут предлагать идеи, рекомендации и предложения по улучшению работы компании, а экспертам и управляющим лицам предоставляется возможность эффективно оценивать и реализовывать эти предложения</div>
                    </div>
                    <img className={styles.megapolis_icon} src={megapolic} alt="иконка здание"/>
                </section>
                <div style={style}>
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
                                    text="ИТ-решение отслеживает статус предложений, позволяет ставить лайки и уведомляет о ходе процесса, улучшая взаимодействие между сотрудниками и руководством." />
                            <Widget src={widgetIconThird    }
                                    title="Объективная оценка и приоритизация"
                                    text="Информационная система обеспечивает объективную оценку предложений по заданным критериям, что помогает выбирать лучшие для реализации." />
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;
