import styles from './CookiesWidget.module.css'
import cookiesIcon from '../../../public/cookies.png'
import {useEffect, useState} from "react";

const CookiesWidget = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const cookieAccepted = localStorage.getItem('cookieAccepted')
        if (!cookieAccepted) {
            setIsVisible(true)
        }
        setIsLoaded(true)
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieAccepted", "true")
        setIsVisible(false)
    }
    if (!isLoaded) {
        return null;
    }

    return (
        <>
            {isVisible &&
                <div className={styles.container}>
                    <span className={styles.text}>Мы используем файлы Cookie
                        <img src={cookiesIcon} alt="cookies img"/></span>
                    <button onClick={handleAccept} className={styles.btn}>Принять</button>
                </div>

            }
        </>
    );
};

export default CookiesWidget;
