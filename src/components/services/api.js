import axios from 'axios';

// export const API_BASE_URL = 'http://51.250.75.40:8000/api';

export const getTextBlocks = async () => {
    const response = await axios.get(`/api/text-blocks/`);
    return response.data;
};

/*// Добавление нового текстового блока
export const addTextBlock = async (data) => {
    const response = await axios.post(`${API_BASE_URL}/text-blocks/add/`, data);
    return response.data;
};*/

export const updateTextBlock = async (id, data) => {
    const response = await axios.put(`/api/text-blocks/${id}/update/`, data);
    return response.data;
};

export const deleteTextBlock = async (id) => {
    try {
        const response = await axios.delete(`/api/text-blocks/${id}/delete/`);
        return response.data;
    } catch (error) {
        console.error('Error deleting text block:', error);
        throw error;
    }
};


export const getImages = async () => {
    const response = await axios.get(`/api/images/`);
    return response.data;
};

// Обновление изображения по ID с использованием FormData
/*export const updateImage = async (id, formData) => {
    const response = await axios.put(`${API_BASE_URL}/images/${id}/update/`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data', // Устанавливаем тип контента для файлов
        },
    });
    return response.data;
};*/

export const addImage = async (formData) => {
    const response = await axios.post(`/api/images/add/`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};

export const updateImage = async (id, updatedFile) => {
    try {
        const formData = new FormData();
        formData.append('image', updatedFile);

        const response = await axios.put(`/api/images/${id}/update/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error updating image:', error);
        throw error;
    }
};

export const deleteImage = async (id) => {
    try {
        const response = await axios.delete(`/api/images/${id}/delete/`);
        return response.data;
    } catch (error) {
        console.error('Error deleting image:', error);
        throw error;
    }
};

export const submitApplication = async (data) => {
    try {
        const response = await axios.post(`/api/submit-application/`, data, {
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

export const getFrames = async () => {
    try {
        const response = await axios.get(`/api/content-blocks/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching frames:', error);
        throw error;
    }
};

export const addFrame = async (frameData) => {
    try {
        const response = await axios.post(`/api/content-blocks/add/`, frameData);
        return response.data;
    } catch (error) {
        console.error('Error adding frame:', error);
        throw error;
    }
};

// export const getFrameById = async (id) => {
//     try {
//         const response = await axios.get(`${API_BASE_URL}/content-blocks/${id}/`);
//         return response.data;
//     } catch (error) {
//         console.error(`Error fetching frame with ID ${id}:`, error);
//         throw error;
//     }
// };

export const updateFrame = async (id, updatedData) => {
    try {
        const response = await axios.put(`/api/content-blocks/${id}/update/`, updatedData);
        return response.data;
    } catch (error) {
        console.error(`Error updating frame with ID ${id}:`, error);
        throw error;
    }
};

export const deleteFrame = async (id) => {
    try {
        const response = await axios.delete(`/api/content-blocks/${id}/delete/`);
        return response.data;
    } catch (error) {
        console.error('Error deleting frame:', error);
        throw error;
    }
};
