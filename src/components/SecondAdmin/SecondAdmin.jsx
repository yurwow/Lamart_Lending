import { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderFrame from '../Frames/HeaderFrame/HeaderFrame';
import WhyUsFrame from '../Frames/WhyUsFrame/WhyUsFrame';
import FormFrame from '../Frames/FormFrame/FormFrame';
import FooterFrame from '../Frames/FooterFrame/FooterFrame';
import ComputerFrame from "../Frames/ComputerFrame/ComputerFrame";
import PrivilegeFrame from "../Frames/PrivilegeFrame/PrivilegeFrame.jsx";
import ClientsFrame from "../Frames/ClientsFrame/ClientsFrame.jsx";
import ReviewsFrame from "../Frames/ReviewsFrame/ReviewsFrame.jsx";
import FAQFrame from "../Frames/FAQFrame/FAQFrame.jsx";
import styles from './SecondAdmin.module.css';
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs.jsx";
import birdIcon from "../../public/birdIcon.svg"
import filterIcon from "../../public/filterIcon.png"
import miniHeader from "../../public/miniHeader.png"
import miniComputer from "../../public/miniComputerFrame.png"
import miniPriv from "../../public/miniPrevilege.png"
import miniWhyUs from "../../public/miniWhyUs.png"
import miniForm from "../../public/miniForm.png"
import miniClients from "../../public/miniClients.png"
import miniReview from "../../public/miniReview.png"
import miniFAQ from "../../public/miniFAQ.png"
import miniFooter from "../../public/miniFooter.png"
import {fetchAiText} from "../services/api.js";

const frameComponents = {
    Header: HeaderFrame,
    Computer: ComputerFrame,
    Privilege: PrivilegeFrame,
    WhyUs: WhyUsFrame,
    Form: FormFrame,
    Clients: ClientsFrame,
    Reviews: ReviewsFrame,
    FAQ: FAQFrame,
    Footer: FooterFrame,
};

const frameTemplates = [
    { id: 1, name: 'Header', description: 'Блок Header', image: miniHeader },
    { id: 2, name: 'Computer', description: 'Блок Демонстрация решения', image: miniComputer },
    { id: 3, name: 'Privilege', description: 'Блок "Привилегии"', image: miniPriv },
    { id: 4, name: 'WhyUs', description: 'Блок "Почему мы"', image: miniWhyUs },
    { id: 5, name: 'Form', description: 'Форма для отправки данных', image: miniForm },
    { id: 6, name: 'Clients', description: 'Блок "Наши клиенты"', image: miniClients },
    { id: 7, name: 'Reviews', description: 'Блок "Отзывы"', image: miniReview },
    { id: 8, name: 'FAQ', description: 'Блок "FAQ"', image: miniFAQ },
    { id: 9, name: 'Footer', description: 'Подвал страницы', image: miniFooter },
];

// const BASE_URL = 'http://51.250.75.40:8000/api';
// const URL = 'http://51.250.75.40:8000/';
const URL = import.meta.env.VITE_API_URL;


const SecondAdmin = () => {
    const [selectedFrames, setSelectedFrames] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [editingFrameId, setEditingFrameId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [aiPrompt, setAiPrompt] = useState('');
    const [aiResponse, setAiResponse] = useState('');
    const [editingTextBlockId, setEditingTextBlockId] = useState(null);
    const [editedContent, setEditedContent] = useState({});
    const [editedStyles, setEditedStyles] = useState({});

    const toggleTextBlockEditor = (blockId) => {
        setEditingTextBlockId((prevId) => (prevId === blockId ? null : blockId));
        setEditedContent({});
        setEditedStyles({});
    };

    useEffect(() => {
        const fetchFramesAndData = async () => {
            setIsLoading(true);
            try {
                const framesResponse = await axios.get(`${URL}api/content-blocks/`);
                const textBlocksResponse = await axios.get(`${URL}api/text-blocks/`);
                const imagesResponse = await axios.get(`${URL}api/images/`);

                const framesWithData = framesResponse.data.map((frame) => ({
                    ...frame,
                    textBlocks: textBlocksResponse.data.filter((block) => block.title === frame.name),
                    images: imagesResponse.data.filter((image) => image.description === frame.name),
                }));

                setSelectedFrames(framesWithData);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFramesAndData();
    }, []);

    const addFrame = async (frame) => {
        try {
            const newFrame = {
                name: frame.name,
                enabled: true,
                order: Date.now(),
                content: frame.description,
            };
            const response = await axios.post(`${URL}api/content-blocks/add/`, newFrame);
            setSelectedFrames([...selectedFrames, response.data]);
        } catch (error) {
            console.error('Ошибка при добавлении фрейма:', error);
        }
    };

    const removeFrame = async (id) => {
        try {
            await axios.delete(`${URL}api/content-blocks/${id}/delete/`);
            setSelectedFrames(selectedFrames.filter((frame) => frame.id !== id));
        } catch (error) {
            console.error('Ошибка при удалении фрейма:', error);
        }
    };

    const handleContentChange = (blockId, content) => {
        setEditedContent(prev => ({
            ...prev,
            [blockId]: content
        }));
    };

    const handleStyleChange = (blockId, styleKey, value) => {
        setEditedStyles(prev => ({
            ...prev,
            [blockId]: {
                ...(prev[blockId] || {}),
                [styleKey]: value
            }
        }));
    };

    const handleSaveChanges = async (blockId, originalContent, originalStyles) => {
        const newContent = editedContent[blockId] ?? originalContent;
        const newStyles = {
            ...originalStyles,
            ...(editedStyles[blockId] || {})
        };

        try {
            await updateTextBlock(blockId, newContent, newStyles);
            setEditingTextBlockId(null);
            setEditedContent(prev => {
                const newState = { ...prev };
                delete newState[blockId];
                return newState;
            });
            setEditedStyles(prev => {
                const newState = { ...prev };
                delete newState[blockId];
                return newState;
            });
        } catch (error) {
            console.error('Ошибка при сохранении изменений:', error);
        }
    };

    const updateTextBlock = async (blockId, updatedContent, updatedStyles) => {
        try {
            await axios.put(`${URL}api/text-blocks/${blockId}/update/`, {
                content: updatedContent,
                styles: updatedStyles,
            });

            setSelectedFrames((prevFrames) =>
                prevFrames.map((frame) => ({
                    ...frame,
                    textBlocks: frame.textBlocks.map((block) =>
                        block.id === blockId
                            ? { ...block, content: updatedContent, styles: updatedStyles }
                            : block
                    ),
                }))
            );
        } catch (error) {
            console.error('Ошибка при обновлении текстового блока:', error);
        }
    };

    const updateImage = async (imageId, newImageFile, description) => {
        try {
            const formData = new FormData();
            formData.append('image', newImageFile);
            formData.append('description', description);
            const response = await axios.put(`${URL}api/images/${imageId}/update/`, formData);

            setSelectedFrames((prevFrames) =>
                prevFrames.map((frame) => ({
                    ...frame,
                    images: frame.images.map((image) =>
                        image.id === imageId ? response.data : image
                    ),
                }))
            );
        } catch (error) {
            console.error('Ошибка при обновлении изображения:', error);
        }
    };

    const filteredFrames = frameTemplates.filter((frame) => {
        return frame.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            frame.description.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const handleAiPromptChange = (e) => {
        const prompt = e.target.value;
        setAiPrompt(prompt);
    };

    const handleAiRequest = async () => {
        try {
            const response = await fetchAiText(aiPrompt);
            setAiResponse(response);
        } catch {
            setAiResponse("Произошла ошибка при запросе.");
        }
    };

    return (
        <div className={styles.adminPanel}>
            <header className={styles.header}>
                <Breadcrumbs/>
            </header>
            <div className={styles.container}>
                <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : styles.closed}`}>
                    <button
                        className={styles.toggleButton}
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        {isSidebarOpen ? <img src={birdIcon} alt="bird icon"/> : <img src={birdIcon} alt="bird icon"/>}
                    </button>
                    {isSidebarOpen && (
                        <>
                            <div className={styles.filter_container}>
                                <input
                                    type="text"
                                    placeholder="Поиск..."
                                    className={styles.searchInput}
                                    value={searchQuery}
                                    onChange={event => setSearchQuery(event.target.value)}
                                />
                                <img src={filterIcon} alt="filter icon"/>
                            </div>
                            <ul className={styles.ul}>
                                {(searchQuery ? filteredFrames : frameTemplates).map((frame) => (
                                    <li
                                        key={frame.id}
                                        onClick={() => addFrame(frame)}
                                        className={styles.frameItem}
                                    >
                                        <div className={styles.framePreview}>
                                            <img className={styles.miniIcon} src={frame?.image} alt="icon"/>
                                            <strong>{frame.name}</strong>
                                            <p>{frame.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
                <div className={styles.contentArea}>
                    {isLoading ? (
                        <p>Загрузка...</p>
                    ) : selectedFrames.length === 0 ? (
                        <div className={styles.emptyState}>
                            <p>Выберите блок из боковой панели, чтобы добавить его на страницу</p>
                        </div>
                    ) : (
                        <div className={styles.framesContainer}>
                            {selectedFrames.map((frame) => {
                                const FrameComponent = frameComponents[frame.name];
                                const isEditing = editingFrameId === frame.id;
                                return (
                                    <div key={frame.id} className={styles.frameBlock}>
                                        <div className={styles.frameHeader}>
                                            <span className={styles.frame_name}>{frame.name}</span>
                                            <div className={styles.edit_container}>
                                                <button
                                                    onClick={() => removeFrame(frame.id)}
                                                    className={styles.deleteButton}
                                                >
                                                    Удалить
                                                </button>
                                                <button
                                                    onClick={() => setEditingFrameId(isEditing ? null : frame.id)}
                                                    className={styles.editButton}
                                                >
                                                    {isEditing ? 'Закрыть' : 'Редактировать'}
                                                </button>
                                            </div>
                                        </div>
                                        <div className={styles.frameContent}>
                                            {FrameComponent && (
                                                <FrameComponent
                                                    textBlocks={frame.textBlocks || []}
                                                    images={frame.images || []}
                                                    updateImage={(imageId, newImageFile, description) =>
                                                        updateImage(imageId, newImageFile, description)
                                                    }
                                                />
                                            )}
                                            {isEditing && (
                                                <div className={styles.editorContainer}>
                                                    <h4>Редактирование</h4>

                                                    <div className={styles.textEditor}>
                                                        <h5>Тексты</h5>
                                                        {frame.textBlocks.map((block) => (
                                                            <div key={block.id} className={styles.textBlock}>
                                                                <div
                                                                    className={styles.textPreview}
                                                                    onClick={() => toggleTextBlockEditor(block.id)}
                                                                >
                                                                    <p>{block.content}</p>
                                                                </div>

                                                                {editingTextBlockId === block.id && (
                                                                    <div className={styles.textBlockEditor}>
                                                                        <textarea
                                                                            defaultValue={block.content}
                                                                            onChange={(e) => handleContentChange(block.id, e.target.value)}
                                                                            className={styles.textarea}
                                                                        />
                                                                        <div className={styles.styleEditor}>
                                                                            <label>Шрифт:</label>
                                                                            <select
                                                                                defaultValue={block.styles?.fontFamily || ''}
                                                                                onChange={(e) => handleStyleChange(block.id, 'fontFamily', e.target.value)}
                                                                            >
                                                                                <option value="Poppins">Poppins</option>
                                                                                <option value="Montserrat Alternates">Montserrat Alternates</option>
                                                                                <option value="Arial">Arial</option>
                                                                                <option value="Times New Roman">Times New Roman</option>
                                                                            </select>
                                                                            <label>Цвет текста:</label>
                                                                            <input
                                                                                type="color"
                                                                                defaultValue={block.styles?.color || '#000000'}
                                                                                onChange={(e) => handleStyleChange(block.id, 'color', e.target.value)}
                                                                            />
                                                                            <label>Размер текста:</label>
                                                                            <input
                                                                                type="text"
                                                                                defaultValue={block.styles?.fontSize || ''}
                                                                                onChange={(e) => handleStyleChange(block.id, 'fontSize', e.target.value)}
                                                                            />
                                                                            <label>Размер текста для мобильной
                                                                                версии:</label>
                                                                            <input
                                                                                type="text"
                                                                                defaultValue={block.styles?.mobileFontSize || ''}
                                                                                onChange={(e) => handleStyleChange(block.id, 'mobileFontSize', e.target.value)}
                                                                            />
                                                                            <label>Толщина текста:</label>
                                                                            <select
                                                                                defaultValue={block.styles?.fontWeight || 'normal'}
                                                                                onChange={(e) => handleStyleChange(block.id, 'fontWeight', e.target.value)}
                                                                            >
                                                                                <option value="normal">Обычный</option>
                                                                                <option value="bold">Жирный</option>
                                                                                <option value="lighter">Тонкий</option>
                                                                            </select>

                                                                        </div>
                                                                        <div className={styles.buttonContainer}>
                                                                            <button
                                                                                onClick={() => handleSaveChanges(block.id, block.content, block.styles)}
                                                                                className={styles.saveButton}
                                                                            >
                                                                                Сохранить изменения
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className={styles.imageEditor}>
                                                        <h5>Изображения</h5>
                                                        {frame.images.map((image) => (
                                                            <div key={image.id} className={styles.imageBlock}>
                                                                <div className={styles.imagePreviewContainer}>
                                                                <img
                                                                        src={`${URL}${image.image}`}
                                                                        alt="Изображение"
                                                                        className={styles.imagePreview}
                                                                    />
                                                                </div>
                                                                <input
                                                                    type="file"
                                                                    onChange={(e) =>
                                                                        updateImage(image.id, e.target.files[0], image.description)
                                                                    }
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className={styles.aiSection}>
                                                        <h5>Нейросеть</h5>
                                                        <textarea
                                                            placeholder="Введите запрос для нейросети..."
                                                            value={aiPrompt}
                                                            onChange={handleAiPromptChange}
                                                            className={styles.aiInput}
                                                        />
                                                        <div>
                                                            <button onClick={handleAiRequest}
                                                                    className={styles.aiButton}>
                                                                Отправить запрос
                                                            </button>
                                                        </div>

                                                        {aiResponse && (
                                                            <div className={styles.aiResponse}>
                                                                <h6>Ответ нейросети:</h6>
                                                                <p>{aiResponse.generated_text}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SecondAdmin;
