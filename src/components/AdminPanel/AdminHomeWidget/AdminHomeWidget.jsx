import styles from './AdminHomeWidget.module.css'

const AdminHomeWidget = ({onClick}) => {
    return (
        <div className={styles.container} onClick={onClick}>
            <div className={styles.box}></div>
            <div className={styles.span}>ИТ-продукт для подачи предлож...</div>
            <div className={styles.span_online}>Редактировано 5 минут назад</div>
        </div>
    );
};

export default AdminHomeWidget;
