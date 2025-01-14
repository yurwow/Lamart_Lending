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
import icon from "../../public/landIcon.svg";

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
    { id: 1, name: 'Header', description: 'Заголовок страницы' },
    { id: 2, name: 'Computer', description: 'Блок "Демонстрация решения"' },
    { id: 3, name: 'Privilege', description: 'Блок "Привилегии"' },
    { id: 4, name: 'WhyUs', description: 'Блок "Почему мы"' },
    { id: 5, name: 'Form', description: 'Форма для отправки данных' },
    { id: 6, name: 'Clients', description: 'Блок "Наши клиенты"' },
    { id: 7, name: 'Reviews', description: 'Блок "Отзывы"' },
    { id: 8, name: 'FAQ', description: 'Блок "FAQ"' },
    { id: 9, name: 'Footer', description: 'Футер страницы' },
];

const BASE_URL = 'http://51.250.75.40:8000/api';
const URL = 'http://51.250.75.40:8000/';

const SecondAdmin = () => {
    const [selectedFrames, setSelectedFrames] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [editingFrameId, setEditingFrameId] = useState(null);

    useEffect(() => {
        const fetchFramesAndData = async () => {
            setIsLoading(true);
            try {
                const framesResponse = await axios.get(`${BASE_URL}/content-blocks/`);
                const textBlocksResponse = await axios.get(`${BASE_URL}/text-blocks/`);
                const imagesResponse = await axios.get(`${BASE_URL}/images/`);

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
            const response = await axios.post(`${BASE_URL}/content-blocks/add/`, newFrame);
            setSelectedFrames([...selectedFrames, response.data]);
        } catch (error) {
            console.error('Ошибка при добавлении фрейма:', error);
        }
    };

    const removeFrame = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/content-blocks/${id}/delete/`);
            setSelectedFrames(selectedFrames.filter((frame) => frame.id !== id));
        } catch (error) {
            console.error('Ошибка при удалении фрейма:', error);
        }
    };

    const updateTextBlock = async (blockId, updatedContent, updatedStyles) => {
        try {
            await axios.put(`${BASE_URL}/text-blocks/${blockId}/update/`, {
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
            const response = await axios.put(`${BASE_URL}/images/${imageId}/update/`, formData);

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

    return (
        <div className={styles.adminPanel}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src={icon} alt="logo" />
                    <div className={styles.span}>ОТКРЫТЫЕ ИДЕИ</div>
                </div>
            </header>
            <div className={styles.container}>
                <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : styles.closed}`}>
                    <button
                        className={styles.toggleButton}
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        {isSidebarOpen ? 'Скрыть' : 'Открыть'}
                    </button>
                    {isSidebarOpen && (
                        <>
                            <input
                                type="text"
                                placeholder="Поиск..."
                                className={styles.searchInput}
                            />
                            <ul className={styles.ul}>
                                {frameTemplates.map((frame) => (
                                    <li
                                        key={frame.id}
                                        onClick={() => addFrame(frame)}
                                        className={styles.frameItem}
                                    >
                                        <div className={styles.framePreview}>
                                            <div className={styles.previewImage}></div>
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
                                            <strong>{frame.name}</strong>
                                            <button
                                                onClick={() => removeFrame(frame.id)}
                                                className={styles.deleteButton}
                                            >
                                                Удалить
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setEditingFrameId(
                                                        isEditing ? null : frame.id
                                                    )
                                                }
                                                className={styles.editButton}
                                            >
                                                {isEditing ? 'Закрыть' : 'Редактировать фрейм'}
                                            </button>
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
                                                <div className={styles.textEditor}>
                                                    <h4>Редактирование текстов</h4>
                                                    {frame.textBlocks.map((block) => (
                                                        <div key={block.id} className={styles.textBlockEditor}>
                                                            <textarea
                                                                defaultValue={block.content}
                                                                onBlur={(e) =>
                                                                    updateTextBlock(block.id, e.target.value, block.styles)
                                                                }
                                                                className={styles.textarea}
                                                            />
                                                            <div className={styles.styleEditor}>
                                                                <label>Шрифт:</label>
                                                                <select
                                                                    defaultValue={block.styles?.fontFamily || ''}
                                                                    onBlur={(e) =>
                                                                        updateTextBlock(block.id, block.content, {
                                                                            ...block.styles,
                                                                            fontFamily: e.target.value,
                                                                        })
                                                                    }
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
                                                                    onBlur={(e) =>
                                                                        updateTextBlock(block.id, block.content, {
                                                                            ...block.styles,
                                                                            color: e.target.value,
                                                                        })
                                                                    }
                                                                />
                                                                <label>Размер текста:</label>
                                                                <input
                                                                    type="number"
                                                                    defaultValue={block.styles?.fontSize || ''}
                                                                    onBlur={(e) =>
                                                                        updateTextBlock(block.id, block.content, {
                                                                            ...block.styles,
                                                                            fontSize: `${e.target.value}px`,
                                                                        })
                                                                    }
                                                                />
                                                                <label>Толщина текста:</label>
                                                                <select
                                                                    defaultValue={block.styles?.fontWeight || 'normal'}
                                                                    onBlur={(e) =>
                                                                        updateTextBlock(block.id, block.content, {
                                                                            ...block.styles,
                                                                            fontWeight: e.target.value,
                                                                        })
                                                                    }
                                                                >
                                                                    <option value="normal">Обычный</option>
                                                                    <option value="bold">Жирный</option>
                                                                    <option value="lighter">Тонкий</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    <h4>Редактирование изображений</h4>
                                                    {frame.images.map((image) => (
                                                        <div key={image.id} className={styles.imageEditor}>
                                                            <img
                                                                src={`${URL}${image.image}`}
                                                                alt="Изображение"
                                                                className={styles.imagePreview}
                                                            />
                                                            <input
                                                                type="file"
                                                                onChange={(e) =>
                                                                    updateImage(image.id, e.target.files[0], image.description)
                                                                }
                                                            />
                                                            {/*<p>{image.description}</p>*/}
                                                        </div>
                                                    ))}
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
