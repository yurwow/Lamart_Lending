import styles from "./ScrollWidget.module.css"
import girlIcon from "../../public/girlIcon.svg"
import clickIcon from "../../public/Click01.svg"
const ScrollWidget = () => {
    return (
        <div className={styles.scroll_widget}>
            <p className={styles.scroll_widget_p}>“Использование ИТ-продукта значительно упростило наши внутренние процессы. Интуитивно понятный интерфейс
                и возможность интеграции с существующими системами позволили сократить время на обработку заявок на 30%.
                Однако, предлагаю добавить функцию аналитики для более глубокого анализа данных. Это поможет нам
                оптимизировать процессы еще больше. Спасибо за отличное решение!”
            </p>
            <div className={styles.scroll_widget_container}>
                <div className={styles.scroll_widget_person}>
                    <img className={styles.avatar} src={girlIcon} alt="girl icon"/>
                    <div>
                        <span className={styles.strong}>Черепанова Полина Сергеевна</span>
                        <p className={styles.p}>Руководитель отдела автоматизации</p>
                    </div>
                </div>
                <img className={styles.icon} src={clickIcon} alt="click icon"/>
            </div>

        </div>
    );
};

export default ScrollWidget;
