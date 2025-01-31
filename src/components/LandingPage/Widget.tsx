import styles from './Widget.module.css';
import { useState } from 'react';
import ModalWindow from '../PopUpWindow/ModalWindow';

interface IWidget {
    src: string,
    srcHover: string | undefined,
    title: string,
    text: string
}

const Widget = ({ src, srcHover, title, text }: IWidget) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => {
        setIsOpen(false);
    };
    return (
        <>
            <div
                className={isHovered ? `${styles.widget_container} ${styles.blue}` : `${styles.widget_container}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className={styles.widget_icon}>
                    <img src={isHovered ? srcHover : src} alt="widget icon" />
                </div>
                <div className={isHovered ? `${styles.widget_text_container_blue}` : `${styles.widget_text_container}`}>
                    <div className={isHovered ? `${styles.widget_title} ${styles.white}` : `${styles.widget_title}`}>
                        {title}
                    </div>
                    <div className={isHovered ? `${styles.widget_text} ${styles.white}` : `${styles.widget_text}`}>
                        {text}
                    </div>
                    {isHovered && (
                        <button className={styles.widget_btn} onClick={() => setIsOpen(true)}>
                            УЗНАТЬ ПОДРОБНЕЕ
                        </button>
                    )}
                    <ModalWindow isOpen={isOpen} onClose={onClose} />
                </div>
            </div>
        </>
    );
};

export default Widget;
