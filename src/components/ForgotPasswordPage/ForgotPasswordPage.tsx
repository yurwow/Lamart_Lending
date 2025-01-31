import { useState, useRef, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import styles from './ForgotPasswordPage.module.css';
import loginLogo from '../../public/loginLogo.svg';
import messageIcon from '../../public/messageEmail.png';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const focusRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        focusRef.current?.focus();
    }, []);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        setMessage('');
        setError(null);

        try {
            // console.log("Simulating server request...");
            await new Promise((resolve) => setTimeout(resolve, 0));

            const mockResponse = {
                message: 'Инструкция по восстановлению пароля отправлена.',
            };

            // console.log("Mock response:", mockResponse);
            setMessage(
                'Мы отправили подтверждение сброса пароля на ваш email. Перейдите по ссылке в письме, чтобы продолжить.',
            );
        } catch {
            // console.error("Mock error:", error);
            setError('Что-то пошло не так. Попробуйте ещё раз.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.logo_container}>
                    <img src={loginLogo} alt="login logo" />
                    <span className={styles.title}>ОТКРЫТЫЕ ИДЕИ</span>
                </div>
                <div className={styles.title_pass}>Восстановление пароля</div>

                {error ? (
                    <p className={styles.error}>{error}</p>
                ) : (
                    !message && <p className={styles.title_email}>Введите email, который вам выдала компания.</p>
                )}

                {message ? (
                    <div className={styles.succes_container}>
                        <p className={styles.succes}>{message}</p>
                        <img className={styles.img} src={messageIcon} alt="msg icon" />
                        <Link className={styles.link_login} to="/login">
                            Войти
                        </Link>
                    </div>
                ) : (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input
                            ref={focusRef}
                            className={styles.login_input}
                            placeholder="Эл. почта"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className={styles.btn_container}>
                            <button className={styles.btn} type="submit" disabled={loading}>
                                {loading ? 'Загрузка...' : 'Восстановить'}
                            </button>
                        </div>
                        <Link className={styles.forgot_pass} to="/login">
                            Назад
                        </Link>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
