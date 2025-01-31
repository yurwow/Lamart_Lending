import styles from './FooterFrame.module.css';
import headerIcon from '@/headerIcon.svg';

const FooterFrame = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div>
                    <div className={styles.left_footer}>
                        <img className={styles.icon} src={headerIcon} alt="Landing icon" />
                        <div className={styles.header_span_container}>
                            <span className={styles.header_span}>ОТКРЫТЫЕ ИДЕИ</span>
                        </div>
                    </div>
                    <div className={styles.footer_span}>© 2024 Открытые идеи</div>
                </div>
                <div className={styles.container}>
                    <div className={styles.footer_center}>
                        <div className={styles.email}>КОНТАКТЫ</div>
                        <a className={styles.email} href="mailto:inbox@aratrum.ru">
                            inbox@aratrum.ru
                        </a>
                    </div>
                    <div className={styles.footer_center}>
                        <div className={styles.email}>АДРЕС</div>
                        <span className={styles.email}>
                            г. Екатеринбург,
                            <br /> ул. Конструкторов, д. 5
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterFrame;
