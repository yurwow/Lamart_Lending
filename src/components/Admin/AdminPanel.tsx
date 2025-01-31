import EditImageBlock from './EditImageBlock';
import AddTextBlockForm from './AddTextBlockForm';
import styles from './AdminPanel.module.css';
import icon from '../../public/landIcon.svg';

const AdminPanel = () => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src={icon} alt="logo" />
                    <div className={styles.span}>ОТКРЫТЫЕ ИДЕИ</div>
                </div>
                <div className={styles.logo}></div>
            </header>
            <AddTextBlockForm />
            <EditImageBlock />
        </div>
    );
};

export default AdminPanel;
