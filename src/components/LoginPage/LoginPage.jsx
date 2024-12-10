import styles from './LoginPage.module.css'
import loginLogo from '../../public/loginLogo.svg'
import {useState, useEffect, useRef} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const focusRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        focusRef.current.focus();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/login/',
                { email, password },
                { withCredentials: true }
            );

            if (response.status === 200) {
                navigate("/admin");
            }
        } catch (error) {
            setError(error.response?.data || "Произошла ошибка при логине");
            console.log(error)
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.logo_container}>
                    <img src={loginLogo} alt="login logo"/>
                    <span className={styles.title}>ОТКРЫТЫЕ ИДЕИ</span>
                </div>
                {error && <p className={styles.error}>Неверные эл. почта или пароль</p>}

                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        ref={focusRef}
                        className={styles.login_input}
                        placeholder="Эл. почта"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className={styles.login_input}
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className={styles.btn_container}>
                        <button className={styles.btn} type="submit" disabled={loading}>
                            {loading ? "Загрузка..." : "Войти"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
