import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api'; // Обновленный базовый URL

// Получение всех текстовых блоков
export const getTextBlocks = async () => {
    const response = await axios.get(`${API_BASE_URL}/text-blocks/`);
    return response.data;
};

// Добавление нового текстового блока
export const addTextBlock = async (data) => {
    const response = await axios.post(`${API_BASE_URL}/text-blocks/add/`, data);
    return response.data;
};

// Обновление текстового блока по ID
export const updateTextBlock = async (id, data) => {
    const response = await axios.put(`${API_BASE_URL}/text-blocks/${id}/update/`, data);
    return response.data;
};

// Получение всех изображений
export const getImages = async () => {
    const response = await axios.get(`${API_BASE_URL}/images/`);
    return response.data;
};

// Обновление изображения по ID с использованием FormData
export const updateImage = async (id, formData) => {
    const response = await axios.put(`${API_BASE_URL}/images/${id}/update/`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data', // Устанавливаем тип контента для файлов
        },
    });
    return response.data;
};

// Добавление нового изображения
export const addImage = async (formData) => {
    const response = await axios.post(`${API_BASE_URL}/images/`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data', // Устанавливаем тип контента для файлов
        },
    });
    return response.data;
};

/// Отправка данных из формы
export const submitApplication = async (data) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/submit-application/', data, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.status === 200) {
            return { message: response.data.message || "Заявка успешно отправлена!" };
        }
    } catch (error) {
        console.error("Error:", error);
        throw new Error("Ошибка при отправке заявки.");
    }
};
