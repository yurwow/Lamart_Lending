import styles from './Breadcrumbs.module.css'
import houseIcon from '@/house.svg'
import ellipseIcon from '@/Ellipse34.png'

const Breadcrumbs = () => {
    return (
        <nav aria-label="breadcrumb" className={styles.breadcrumbNav}>
            <ol className={styles.breadcrumb}>
                <li className={styles.breadcrumbItem}>
                    <a href="/#/adminpanel" className={styles.breadcrumbLink}>
                        <img className={styles.houseIcon} src={houseIcon} alt="house icon"/>
                        МОИ ПРОЕКТЫ
                    </a>
                </li>
                <li
                    className={`${styles.breadcrumbItem} ${styles.active}`}
                    aria-current="page">
                    <img className={styles.houseIcon} src={ellipseIcon} alt="ellipse icon"/>
                    ИТ-ПРОДУКТ ДЛЯ ПОДАЧИ...
                </li>
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
