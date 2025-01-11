import styles from "../../LandingPage/LandingPage.module.css";
import ScrollWidget from "../../LandingPage/ScrollWidget.jsx";

const ReviewsFrame = () => {
    return (
        <section className={styles.section_reviews}>
            <div className={styles.section_reviews_title_container}>
                <div className={styles.section_reviews_title}>ОТЗЫВЫ ПОЛЬЗОВАТЕЛЕЙ</div>
                <div className={styles.section_reviews_p}>Команды разработчиков любят <span style={{color: '#1E4DC2'}}>Открытые идеи</span>
                </div>
            </div>
            <div className={styles.section_reviews_widget_container}>
                <ScrollWidget/>
                <ScrollWidget/>
                <ScrollWidget/>
                <ScrollWidget/>
            </div>
        </section>
    );
};

export default ReviewsFrame;
