import React, { ChangeEvent, useState } from 'react';
import styles from '../SecondAdmin.module.css';
import { fetchAiText } from '../../services/api';

interface IAiResponse {
    generated_text: string
}

const AiSection = () => {
    const [aiPrompt, setAiPrompt] = useState<string>('');
    const [aiResponse, setAiResponse] = useState<IAiResponse | string>();

    const handleAiRequest = async () => {
        try {
            const response = await fetchAiText(aiPrompt);
            if (response) {
                setAiResponse(response);
            } else {
                setAiResponse('Нет данных от нейросети.');
            }
        } catch {
            setAiResponse('Произошла ошибка при запросе.');
        }
    };

    const handleAiPromptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const prompt = e.target.value;
        setAiPrompt(prompt);
    };

    return (
        <div className={styles.aiSection}>
            <h5>Нейросеть</h5>
            <textarea
                placeholder="Введите запрос для нейросети..."
                value={aiPrompt}
                onChange={handleAiPromptChange}
                className={styles.aiInput}
            />
            <div>
                <button
                    onClick={handleAiRequest}
                    className={styles.aiButton}
                >
                    Отправить запрос
                </button>
            </div>
            {aiResponse && (
                <div className={styles.aiResponse}>
                    <h6>Ответ нейросети:</h6>
                    <p>{(aiResponse as IAiResponse)?.generated_text}</p>
                </div>
            )}
        </div>
    );
};

export default AiSection;
