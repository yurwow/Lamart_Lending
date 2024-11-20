import styles from './ModalWindow.module.css'
import {createPortal} from "react-dom";
import Button from "../Button/Button.jsx";
import Form from "../Form/Form.jsx";
import IphoneIcon from '../../public/IphoneIcon.svg'
import closeOne from '../../public/closeOne.svg'
import closeTwo from '../../public/closeTwo.svg'
import {useState} from "react";

const ModalWindow = ({isOpen, onClose}) => {

    const [isHovered, setIsHovered] = useState(false)

    if (!isOpen) return null;
    return createPortal(
        <div className={styles.modal}>
            <div className={styles.content_container}>
                <div className={styles.form_container}>
                    <p className={styles.title}>ОТКРЫТЫЕ ИДЕИ В ВАШЕЙ КОМПАНИИ</p>
                    <p className={styles.p}>Мотивируйте сотрудников, улучшайте качество работы и обеспечьте постоянное совершенствование процессов</p>
                    <Form classNameBtn={styles.btn_two}/>
                </div>
                <img src={IphoneIcon} alt="iphone icon"/>
                <a onClick={onClose}>
                    <img
                        className={styles.close}
                        src={isHovered ? closeOne : closeTwo}
                        alt="close icon"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                </a>
            </div>
        </div>,
        document.getElementById("modal-root")
    )
};

export default ModalWindow;
