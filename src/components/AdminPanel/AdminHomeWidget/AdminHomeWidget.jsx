import styles from './AdminHomeWidget.module.css';

const AdminHomeWidget = ({ onClick, img, text }) => {
    return (
        <div className={styles.container} onClick={onClick}>
            <div className={styles.box}>{img ? <img src={img} alt="заглушка" /> : null}</div>
            <div className={styles.span}>ИТ-продукт для подачи предлож...</div>
            <div className={styles.span_online}>{text}</div>
        </div>
    );
};

export default AdminHomeWidget;
