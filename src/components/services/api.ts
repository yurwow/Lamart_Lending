import axios, { AxiosResponse } from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

interface TextBlock {
    id: number;
    title: string;
    content: string;
    styles: Styles[];
}

interface Styles {
    fontFamily?: string;
    color?: string;
    fontSize?: string;
    mobileFontSize?: string;
    fontWeight?: string;
}

export const getTextBlocks = async (): Promise<TextBlock[]> => {
    const response = await axios.get(`${API_URL}api/text-blocks/`);
    return response.data;
};

interface Images {
    description: string,
    id: number,
    image: string,
    is_enabled: boolean,
    styles: Styles
}

export const getImages = async (): Promise<Images[]> => {
    const response = await axios.get(`${API_URL}api/images/`);
    console.log(response, "images")
    return response.data;
};

/*
interface IFormData {
    image: File,
    description: string
}
*/

export const addImage = async (formData: FormData) => {
    const response = await axios.post(`${URL}api/images/add/`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};


export const updateImage = async (id: number, formData: FormData) => {
    try {
        const response = await axios.put(`${URL}api/images/${id}/update/`, formData, {
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

export const deleteImage = async (id: number) => {
    try {
        const response = await axios.delete(`${API_URL}api/images/${id}/delete/`);
        return response.data;
    } catch (error) {
        console.error('Error deleting image:', error);
        throw error;
    }
};

interface ISubmitApplication {
    full_name: string,
    phone_number: string,
    email: string,
    organization: string,
}

interface ISubmitApplicationResponse {
    message: string;
}

export const submitApplication = async (data: ISubmitApplication): Promise<ISubmitApplicationResponse | undefined> => {
    try {
        const response = await axios.post(`${API_URL}api/submit-application/`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            return { message: response.data.message || 'Заявка успешно отправлена!' };
        }
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Ошибка при отправке заявки.');
    }
};

interface Frames {
    content: string,
    enabled: boolean,
    id: number,
    name: string,
    order: number
}

export const getFrames = async (): Promise<Frames[]> => {
    try {
        const response = await axios.get(`${API_URL}api/content-blocks/`);
        console.log(response, "res")
        return response.data;
    } catch (error) {
        console.error('Error fetching frames:', error);
        throw error;
    }
};

interface AiTextResponse {
    generated_text: string;
}

export const fetchAiText = async (prompt: string): Promise<AiTextResponse | undefined> => {
    try {
        const response: AxiosResponse<AiTextResponse> = await axios.post(`${API_URL}api/generate-text/`, { prompt });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};


