import { useState } from 'react';
import axios from 'axios';
import styles from './AddTextBlockForm.module.css';

const AddTextBlockForm = () => {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');
    // const API_URL = "http://51.250.75.40:8000/api/"
    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newTextBlock = {
            title, // Заголовок
            content, // Содержимое
            is_enabled: true, // Статус включения
            font_family: 'Arial', // Пример значения по умолчанию
            font_size: 16, // Пример значения по умолчанию
            font_weight: 'normal', // Пример значения по умолчанию
            font_style: 'normal', // Пример значения по умолчанию
            color: '#000000', // Пример значения по умолчанию
            line_height: '1.5', // Пример значения по умолчанию
            text_align: 'left', // Пример значения по умолчанию
            list_type: 'none', // Пример значения по умолчанию
            link: '' // Пример значения по умолчанию
        };

        try {
            const response = await axios.post(
                `$/text-blocks/add/`,
                newTextBlock,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log('Текстовый блок добавлен:', response.data);
            setContent('');
            setTitle('');
            setError('');
        } catch (err) {
            console.error('Ошибка при добавлении текстового блока:', err.response ? err.response.data : err);
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
