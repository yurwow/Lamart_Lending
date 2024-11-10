import styles from './Button.module.css'

const Button = ({text}) => {
    return (
        <button className={styles.btn}>
            <div className={styles.rectangle}></div>
            {text}
            <div className={styles.rectangle}></div>
        </button>
    );
};

export default Button;
