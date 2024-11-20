import styles from './Button.module.css'

const Button = ({text, onClick, type}) => {
    return (
        <button type={type} onClick={onClick} className={styles.btn}>
            <div className={styles.rectangle}></div>
            {text}
            <div className={styles.rectangle}></div>
        </button>
    );
};

export default Button;
