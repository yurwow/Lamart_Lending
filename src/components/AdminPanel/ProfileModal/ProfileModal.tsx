import styles from './ProfileModal.module.css';
import elipseAcc from '../../../public/EllipseAcc.png';
import settindIcon from '../../../public/settings.svg';
import logoutIcon from '../../../public/logout.svg';
import { useState } from 'react';
import ModalLogout from '../ModalLogout/ModalLogout';

const ProfileModal = () => {
    const [open, setOpen] = useState<boolean>(false);
    const handleClick = () => {
        setOpen((prevState) => !prevState);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={elipseAcc} alt="ellipse icon" />
                <div className={styles.name}>admin</div>
                <div className={styles.mail}>admin@admin.admin</div>
            </div>
            <div>
                <div className={styles.settings}>
                    <img src={settindIcon} alt="setting icon" />
                    <span className={styles.span_settings}>Настройки</span>
                </div>
                <div className={styles.border}></div>
                <div className={styles.logout} onClick={handleClick}>
                    <img src={logoutIcon} alt="logout icon" />
                    <span className={styles.span_settings}>Выйти</span>
                </div>
            </div>
            <ModalLogout isOpen={open} onClose={handleCloseModal} />
        </div>
    );
};

export default ProfileModal;
