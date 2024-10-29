import styles from './Widget.module.css'

const Widget = ({src, title, text}) => {
    return (
        <div className={styles.widget_container}>
            <div className={styles.widget_icon}>
                <img src={src} alt="widget icon"/>
            </div>
            <div className={styles.widget_text_container}>
                <div className={styles.widget_title}>{title}</div>
                <div className={styles.widget_text}>{text}</div>
            </div>
        </div>
    );
};

export default Widget;
