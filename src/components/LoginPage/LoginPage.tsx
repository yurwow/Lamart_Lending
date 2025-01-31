import styles from './LoginPage.module.css';
import loginLogo from '../../public/loginLogo.svg';
import { useState, useEffect, useRef, FormEvent } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Link, useNavigate } from 'react-router-dom';

interface IResponse {
    access_token: string;
    refresh_token: string;
}

const LoginPage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);
    const focusRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();
    // const API_URL = "http://51.250.75.40:8000/api/"
    // const API_URL = 'http://89.169.147.237:8000/api/';
    // const API_URL = 'http://51.250.75.40:8000/';
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        focusRef.current?.focus();
    }, []);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        setError(undefined);

        try {
            const response: AxiosResponse<IResponse> = await axios.post(
                `${API_URL}api/auth/login`,
                { email, password },
                {
                    withCredentials: false,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );

            const { access_token, refresh_token } = response.data;
            localStorage.setItem('accessToken', access_token);
            localStorage.setItem('refreshToken', refresh_token);
            document.cookie = `access=${access_token}; path=/`;
            document.cookie = `refresh=${refresh_token}; path=/`;

            // console.log("Login successful:", response.data);
            navigate('/adminpanel');
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Login error:', error.message);
            }
            setError('Неверные эл. почта или пароль');
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
                            {loading ? 'Загрузка...' : 'Войти'}
                        </button>
                    </div>
                    <Link className={styles.forgot_pass} to="/forgot-password">
                        Забыли пароль?
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
