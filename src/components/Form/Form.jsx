import styles from './Form.module.css'
import Button from "../Button/Button.jsx";
import {useState} from "react";
import {submitApplication} from "../services/api.js";

const Form = ({classNameBtn}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {
            full_name: name,
            email: email,
            organization: company,
            message: message
        }

        try {
            const response = await submitApplication(data); // Используем функцию из api.js
            alert(response.message);
            // Очищаем поля формы после отправки
            setName('');
            setEmail('');
            setCompany('');
            setMessage('');
        } catch (error) {
            alert(error.message || "Ошибка при отправке заявки.");
        }
    }

    return (
        <div className={styles.form_container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.form_input}
                    placeholder="Имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    className={styles.form_input}
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className={styles.form_input}
                    placeholder="Компания (или ИНН)"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                />
                <input
                    className={styles.form_input}
                    placeholder="Сообщение"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <p className={styles.form_p}>*Отправляя форму заявки, вы соглашаетесь на обработку персональных данных</p>
                <div className={classNameBtn}>
                    <Button text="ЗАПРОСИТЬ ДЕМОДОСТУП" type={"submit"}/>
                </div>
            </form>
        </div>
    );
};

export default Form;
