import plusIcon from "../../public/plusIcon.svg";
import {useState} from "react";
import styles from "./ToggleWidget.module.css"
const ToggleWidget = ({questions, answer}) => {
    const [showText, setShowText] = useState(false)

    const handleClick = () => {
        setShowText(prev => !prev)
    }

    return (
        <div className={styles.question_widget_container}>
            <div className={styles.question_widget}>
                <div className={styles.question_widget_text}>{questions}</div>
                <button onClick={handleClick} className={styles.question_widget_btn}>
                    <img src={plusIcon} alt="plus icon"/>
                </button>
            </div>
            {showText &&
                <div className={styles.question_widget_answer}>{answer}</div>
            }
        </div>
    );
};

export default ToggleWidget;
