import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import styles from './AddTextBlockForm.module.css';

interface TextBlockData {
    title: string;
    content: string;
    is_enabled: boolean;
    font_family: string;
    font_size: string;
    font_weight: string;
    font_style: string;
    color: string;
    line_height: string;
    text_align: string;
    list_type: string;
    link: string;
}

const AddTextBlockForm = () => {
    const [content, setContent] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [error, setError] = useState<string>('');
    const API_URL = import.meta.env.VITE_API_URL;

    const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const newTextBlock: TextBlockData = {
            title,
            content,
            is_enabled: true,
            font_family: 'Arial',
            font_size: '16',
            font_weight: 'normal',
            font_style: 'normal',
            color: '#000000',
            line_height: '1.5',
            text_align: 'left',
            list_type: 'none',
            link: '',
        };

        try {
            const response = await axios.post<{ message: string }>(`${API_URL}api/text-blocks/add/`, newTextBlock, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setContent('');
            setTitle('');
            setError('');
        } catch {
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
                <button type="submit" className={styles.button}>
                    Добавить
                </button>
            </form>
        </div>
    );
};

export default AddTextBlockForm;
