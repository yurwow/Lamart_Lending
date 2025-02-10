import styles from './Form.module.css';
import { FormEvent, useState } from 'react';
import { submitApplication } from '../services/api';
import Button from '../Button/Button';

interface IFormProps {
    classNameBtn: string;
}

interface IData {
    full_name: string;
    phone_number: string;
    email: string;
    organization: string;
}

const Form = ({ classNameBtn }: IFormProps) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [company, setCompany] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validateEmail(email)) {
            return;
        }

        const data: IData = {
            full_name: name,
            phone_number: message,
            email: email,
            organization: company,
        };

        try {
            const response = await submitApplication(data);
            if (response) {
                alert(response.message);
            } else {
                alert('Не удалось получить ответ от сервера.');
            }
            setName('');
            setEmail('');
            setCompany('');
            setMessage('');
        } catch {
            alert('Ошибка при отправке заявки.');
        }
    };

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
                    type="email"
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
                    placeholder="Телефон и сообщение"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <p className={styles.form_p}>
                    *Отправляя форму заявки, вы соглашаетесь на обработку персональных данных
                </p>
                <div className={classNameBtn}>
                    <Button text="ЗАПРОСИТЬ ДЕМОДОСТУП" type={'submit'} />
                </div>
            </form>
        </div>
    );
};

export default Form;
