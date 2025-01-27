import { useState } from 'react';
import axios from 'axios';
import styles from './AddTextBlockForm.module.css';

const AddTextBlockForm = () => {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');
    // const API_URL = 'http://51.250.75.40:8000/';
    // const API_URL = "http://51.250.75.40:8000/api/"
    // const API_URL = "http://89.169.147.237:8000/api/"
    const API_URL = import.meta.env.VITE_API_URL;


    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newTextBlock = {
            title,
            content,
            is_enabled: true,
            font_family: 'Arial',
            font_size: 16,
            font_weight: 'normal',
            font_style: 'normal',
            color: '#000000',
            line_height: '1.5',
            text_align: 'left',
            list_type: 'none',
            link: ''
        };

        try {
            const response = await axios.post(
                `${API_URL}api/text-blocks/add/`,
                newTextBlock,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            setContent('');
            setTitle('');
            setError('');
        } catch  {
            // console.error('Ошибка при добавлении текстового блока:', err.response ? err.response.data : err);
            setError('Не удалось добавить текстовый блок');
        }
    };

    return (
        <div className={styles.formContainer}>
            <h2 className={styles.title}>Добавить текстовый блок</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Заголовок:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="Введите заголовок"
                        className={styles.input}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Содержимое:</label>
                    <textarea
                        value={content}
                        onChange={handleContentChange}
                        placeholder="Введите содержимое текстового блока"
                        className={styles.textarea}
                    />
                </div>
                {error && <p className={styles.error}>{error}</p>}
                <button type="submit" className={styles.button}>Добавить</button>
            </form>
        </div>
    );
};

export default AddTextBlockForm;
