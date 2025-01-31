import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import HeaderFrame from '../Frames/HeaderFrame/HeaderFrame';
import WhyUsFrame from '../Frames/WhyUsFrame/WhyUsFrame';
import FormFrame from '../Frames/FormFrame/FormFrame';
import FooterFrame from '../Frames/FooterFrame/FooterFrame';
import ComputerFrame from '../Frames/ComputerFrame/ComputerFrame';
import PrivilegeFrame from '../Frames/PrivilegeFrame/PrivilegeFrame';
import ClientsFrame from '../Frames/ClientsFrame/ClientsFrame';
import ReviewsFrame from '../Frames/ReviewsFrame/ReviewsFrame';
import FAQFrame from '../Frames/FAQFrame/FAQFrame';
import styles from './SecondAdmin.module.css';
import miniHeader from '../../public/miniHeader.png';
import miniComputer from '../../public/miniComputerFrame.png';
import miniPriv from '../../public/miniPrevilege.png';
import miniWhyUs from '../../public/miniWhyUs.png';
import miniForm from '../../public/miniForm.png';
import miniClients from '../../public/miniClients.png';
import miniReview from '../../public/miniReview.png';
import miniFAQ from '../../public/miniFAQ.png';
import miniFooter from '../../public/miniFooter.png';
import SecondAdminHeader from './SecondAdminHeader/SecondAdminHeader';
import Sidebar from './SideBar/SideBar';
import FrameEditor from './FrameEditor/FrameEditor';
import FrameBlock from './FrameBlock/FrameBlock';
import { Frame, FrameAll, FrameTemplate, Image, Styles, TextBlock, UpdatedTextBlock } from './types';

export const frameComponents = {
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

const frameTemplates: FrameTemplate[] = [
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

const URL = import.meta.env.VITE_API_URL;

const SecondAdmin: FC = () => {
    const [selectedFrames, setSelectedFrames] = useState<FrameAll[]>([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [editingFrameId, setEditingFrameId] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [editingTextBlockId, setEditingTextBlockId] = useState<number | null>(null);
    const [editedContent, setEditedContent] = useState<{ [key: number]: string }>({});
    const [editedStyles, setEditedStyles] = useState<{ [key: number]: Styles }>({});
    const toggleTextBlockEditor = (blockId: number) => {
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

                const framesWithData = framesResponse.data.map((frame: Frame) => ({
                    ...frame,
                    textBlocks: textBlocksResponse.data.filter((block: TextBlock) => block.title === frame.name),
                    images: imagesResponse.data.filter((image: Image) => image.description === frame.name),
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

    const addFrame = async (frame: FrameTemplate) => {
        try {
            const newFrame: Omit<Frame, 'id' | 'textBlocks' | 'images'> = {
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

    const removeFrame = async (id: number) => {
        try {
            await axios.delete(`${URL}api/content-blocks/${id}/delete/`);
            setSelectedFrames(selectedFrames.filter((frame) => frame.id !== id));
        } catch (error) {
            console.error('Ошибка при удалении фрейма:', error);
        }
    };

    const handleContentChange = (blockId: number, content: string) => {
        setEditedContent((prev) => ({
            ...prev,
            [blockId]: content,
        }));
    };

    const handleStyleChange = (blockId: number, styleKey: string, value: string) => {
        setEditedStyles((prev) => ({
            ...prev,
            [blockId]: {
                ...(prev[blockId] || {}),
                [styleKey]: value,
            },
        }));
    };

    const handleSaveChanges = async (blockId: number, originalContent: string, originalStyles: Styles) => {
        const newContent = editedContent[blockId] ?? originalContent;
        const newStyles = {
            ...originalStyles,
            ...(editedStyles[blockId] || {}),
        };

        try {
            await updateTextBlock(blockId, newContent, newStyles);
            setEditingTextBlockId(null);
            setEditedContent((prev) => {
                const newState = { ...prev };
                delete newState[blockId];
                return newState;
            });
            setEditedStyles((prev) => {
                const newState = { ...prev };
                delete newState[blockId];
                return newState;
            });
        } catch (error) {
            console.error('Ошибка при сохранении изменений:', error);
        }
    };

    const updateTextBlock = async (blockId: number, updatedContent: string, updatedStyles: Styles) => {
        try {
            await axios.put(`${URL}api/text-blocks/${blockId}/update/`, {
                content: updatedContent,
                styles: updatedStyles,
            });

            setSelectedFrames((prevFrames: FrameAll[]) =>
                prevFrames.map((frame) => ({
                    ...frame,
                    textBlocks: frame.textBlocks.map((block) =>
                        block.id === blockId
                            ? ({ ...block, content: updatedContent, styles: updatedStyles } as UpdatedTextBlock)
                            : block,
                    ),
                })),
            );
            console.log(selectedFrames, 'selectedFrames');
        } catch (error) {
            console.error('Ошибка при обновлении текстового блока:', error);
        }
    };

    const updateImage = async (imageId: number, newImageFile: File, description: string) => {
        try {
            const formData = new FormData();
            formData.append('image', newImageFile);
            formData.append('description', description);
            const response = await axios.put(`${URL}api/images/${imageId}/update/`, formData);

            setSelectedFrames((prevFrames) =>
                prevFrames.map((frame) => ({
                    ...frame,
                    images: frame.images.map((image) => (image.id === imageId ? response.data : image)),
                })),
            );
        } catch (error) {
            console.error('Ошибка при обновлении изображения:', error);
        }
    };

    return (
        <div className={styles.adminPanel}>
            <SecondAdminHeader />
            <div className={styles.container}>
                <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    addFrame={addFrame}
                    frameTemplates={frameTemplates}
                />
                <div className={styles.contentArea}>
                    {isLoading ? (
                        <p>Загрузка...</p>
                    ) : selectedFrames.length === 0 ? (
                        <div className={styles.emptyState}>
                            <p>Выберите блок из боковой панели, чтобы добавить его на страницу</p>
                        </div>
                    ) : (
                        <div className={styles.framesContainer}>
                            {selectedFrames.map((frame) => (
                                <FrameBlock
                                    key={frame.id}
                                    frame={frame}
                                    isEditing={editingFrameId === frame.id}
                                    onRemove={removeFrame}
                                    onToggleEdit={(id) => setEditingFrameId((prev) => (prev === id ? null : id))}
                                >
                                    <FrameEditor
                                        frame={frame}
                                        editingTextBlockId={editingTextBlockId}
                                        onTextBlockToggle={toggleTextBlockEditor}
                                        onContentChange={handleContentChange}
                                        onStyleChange={handleStyleChange}
                                        onSaveChanges={handleSaveChanges}
                                        onImageChange={updateImage}
                                    />
                                </FrameBlock>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SecondAdmin;
