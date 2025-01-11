import { useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./ModalLogout.module.css";

const ModalLogout = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);
    const navigate = useNavigate();
    const API_URL = "http://51.250.75.40:8000/api/";

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);


    // Логика выхода из профиля
    const handleLogout = async () => {
        try {
            await axios.post(
                `${API_URL}auth/logout`,
                {},
                { withCredentials: true }
            );

            // Очистка токенов в куках
            document.cookie = "access_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT";
            document.cookie = "refresh_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT";

            console.log("Logout successful");

            // Перенаправление на страницу входа
            navigate("/login");
        } catch (error) {
            console.error("Logout failed:", error);
            navigate('/login')
        }
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal} ref={modalRef}>
                <span className={styles.title}>Выйти из профиля?</span>
                <div className={styles.buttons}>
                    <button className={styles.cancel} onClick={onClose}>
                        Отмена
                    </button>
                    <button className={styles.confirm} onClick={handleLogout}>
                        Окей
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalLogout;
