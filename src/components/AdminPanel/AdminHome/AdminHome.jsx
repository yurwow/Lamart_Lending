import styles from "./AdminPanel.module.css";
import icon from "../../../public/landIcon.svg";
import ellipse from "../../../public/Ellipse.svg";
import search from "../../../public/ellipsepng.png";
import plus from "../../../public/plus.png";
import AdminHomeWidget from "../AdminHomeWidget/AdminHomeWidget.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import ProfileModal from "../ProfileModal/ProfileModal.jsx";
import { useNavigate } from "react-router-dom";

const AdminHome = () => {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [username, setUsername] = useState("");
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();
    // const API_URL = "http://51.250.75.40:8000/api/"
    const clickMenu = () => {
        setOpenMenu((prev) => !prev);
    };

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const refreshAccessToken = async () => {
        try {
            const refreshToken = localStorage.getItem("refreshToken");
            if (!refreshToken) {
                throw new Error("Refresh Token отсутствует.");
            }

            const response = await axios.post(
                `/api/auth/refresh`,
                {
                    refresh_token: refreshToken
                },
                {
                    withCredentials: false,
                    headers: {
                        Authorization: `Bearer ${refreshToken}`,
                        "Content-Type": "application/json"
                    }
                }
            );

            const { access } = response.data;
            localStorage.setItem("accessToken", access);
            return access;
        } catch (error) {
            console.error("Ошибка обновления токена:", error.response?.data || error.message);
            // navigate("/login");
            return null;
        }
    };


    const fetchUserData = async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            if (!accessToken) {
                throw new Error("Access Token отсутствует.");
            }

            const response = await axios.get(`/api/auth/user`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                withCredentials: false
            });

            setUsername(response.data.username);
            console.log("Успешное получение данных пользователя");
        } catch (error) {
            console.error("Ошибка получения данных пользователя:", error);

            // Если токен истек, обновляем его
            const newAccessToken = await refreshAccessToken();
            if (newAccessToken) {
                localStorage.setItem("accessToken", newAccessToken);
                fetchUserData();
            } else {
                console.error("Не удалось обновить токен");
                // navigate("/login");
            }
        }
    };

    useEffect(() => {
        const initialize = async () => {
            try {
                await fetchUserData();
            } catch (error) {
                console.error("Ошибка авторизации:", error);
                // navigate("/login");
            }
        };

        initialize();
    }, [navigate]);

    const handleClickToPage = () => {
        navigate("/second");
    };

    return (
        <div>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src={icon} alt="logo" />
                    <div className={styles.span}>ОТКРЫТЫЕ ИДЕИ</div>
                </div>
                <div className={styles.logo} onClick={clickMenu}>
                    <span className={styles.name}>{username || "yura"}</span>
                    <img src={ellipse} alt="user icon" />
                </div>
            </header>
            <main>
                <section>
                    {openMenu && <ProfileModal />}
                    <div className={styles.menu}>
                        <span className={styles.my_project}>Мои проекты:</span>
                        <div className={styles.container_btn}>
                            <button className={styles.btn}>
                                <div className={styles.btn_search} onClick={handleClick}>
                                    <img className={styles.search_img} src={search} alt="search icon" />
                                </div>
                                {open && (
                                    <input
                                        type="text"
                                        placeholder="Поиск..."
                                        className={styles.input}
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        autoFocus
                                    />
                                )}
                            </button>
                            <button className={styles.btn_create}>
                                <img src={plus} alt="plus icon" />
                                <span className={styles.span_btn}>Создать новый сайт</span>
                            </button>
                        </div>
                    </div>
                    <div className={styles.container_pages}>
                        <AdminHomeWidget onClick={handleClickToPage} />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AdminHome;
