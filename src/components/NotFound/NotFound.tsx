import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.message}>Страница не найдена!</p>
            <Link to="/" className={styles.homeLink}>
                Вернуться на главную страницу
            </Link>
        </div>
    );
};

export default NotFound;
