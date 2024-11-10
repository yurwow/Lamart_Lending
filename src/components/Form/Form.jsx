import styles from './Form.module.css'
import Button from "../Button/Button.jsx";

const Form = () => {
    return (
        <div className={styles.form_container}>
            <form className={styles.form}>
                <input className={styles.form_input} placeholder="Имя"/>
                <input className={styles.form_input} placeholder="Email"/>
                <input className={styles.form_input} placeholder="Компания (или ИНН)"/>
                <input className={styles.form_input} placeholder="Сообщение"/>
                <p className={styles.form_p}>*Отправляя форму заявки, вы соглашаетесь на обработку персональных данных</p>
                <div className={styles.btn}>
                    <Button text="ЗАПРОСИТЬ ДЕМОДОСТУП"/>
                </div>
            </form>
        </div>
    );
};

export default Form;
