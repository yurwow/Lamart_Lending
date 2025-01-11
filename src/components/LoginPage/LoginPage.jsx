import styles from './LoginPage.module.css';
import loginLogo from '../../public/loginLogo.svg';
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const focusRef = useRef(null);
    const navigate = useNavigate();
    // const API_URL = "http://51.250.75.40:8000/api/"
    useEffect(() => {
        focusRef.current.focus();
    }, []);

    /*const clearCookies = () => {
        document.cookie.split(";").forEach((cookie) => {
            const [name] = cookie.split("=");
            document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`;
        });
    };*/


    const handleSubmit = async (e) => {
        // clearCookies()
        e.preventDefault();

        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(
                `/api/auth/login`,
                { email, password },
                {
                    withCredentials: false,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            const { access_token, refresh_token } = response.data;
            localStorage.setItem('accessToken', access_token);
            localStorage.setItem('refreshToken', refresh_token);
            // document.cookie = `access=${access_token}; path=/`;
            // document.cookie = `refresh=${refresh_token}; path=/`;

            console.log("Login successful:", response.data);
            navigate("/adminpanel");
        } catch (error) {
            console.error("Login error:", error.response ? error.response.data : error.message);
            setError("Неверные эл. почта или пароль");
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
                {error && <p className={styles.error}>{error}</p>}

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
                    <Link className={styles.forgot_pass} to="/forgot-password">Забыли пароль?</Link>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
