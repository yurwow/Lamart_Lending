import { useState } from "react";
import axios from "axios";

const RegisterUser = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResponse(null);
        setError(null);

        if (password !== password2) {
            setError("Пароли не совпадают!");
            return;
        }

        try {
            const res = await axios.post('http://127.0.0.1:8000/api/user/create', {
                username,
                email,
                password,
                password2
            });

            if (res.status === 201 || res.status === 200) {
                setResponse("Пользователь успешно зарегистрирован!");
            }
        } catch (err) {
            setError(err.response?.data?.detail || "Ошибка при регистрации");
        }
    };

    return (
        <div>
            <h2>Регистрация пользователя</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Имя пользователя"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Эл. почта"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Подтвердите пароль"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    required
                />
                <button type="submit">Зарегистрировать</button>
            </form>
            {response && <p style={{ color: "green" }}>{response}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default RegisterUser;
