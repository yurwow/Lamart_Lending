import plusIcon from '../../public/plusIcon.svg';
import React, { memo, useState } from 'react';
import styles from './ToggleWidget.module.css';

interface IWidget {
    questions: string;
    answer: string;
}

// eslint-disable-next-line react/display-name
const ToggleWidget = memo(({ questions, answer }: IWidget) => {
    const [showText, setShowText] = useState<boolean>(false);

    const handleClick = () => {
        setShowText((prev) => !prev);
    };

    return (
        <div className={styles.question_widget_container}>
            <div className={styles.question_widget}>
                <div className={styles.question_widget_text}>{questions}</div>
                <button onClick={handleClick} className={styles.question_widget_btn}>
                    <img className={styles.plus} src={plusIcon} alt="plus icon" />
                </button>
            </div>
            {showText && <div className={styles.question_widget_answer}>{answer}</div>}
        </div>
    );
});

export default ToggleWidget;
