import { useState, useEffect } from 'react';
import { deleteTextBlock, getTextBlocks, updateTextBlock } from '../services/api';
import styles from './EditTextBlock.module.css';

function EditTextBlock() {
    const [textBlocks, setTextBlocks] = useState([]);
    const [selectedBlock, setSelectedBlock] = useState(null);
    const [content, setContent] = useState('');
    const [blockStyles, setBlockStyles] = useState({
        color: '#000000',
        fontSize: '14px',
        fontFamily: 'Arial',
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.5,
        textAlign: 'left',
        listType: 'none',
        hyperlink: '',
    });

    useEffect(() => {
        getTextBlocks().then(setTextBlocks);
    }, []);

    const handleSelectBlock = (block) => {
        setSelectedBlock(block);
        setContent(block.content);
        setBlockStyles(block.styles || {
            color: '#000000',
            fontSize: '14px',
            fontFamily: 'Arial',
            fontWeight: 'normal',
            fontStyle: 'normal',
            lineHeight: 1.5,
            textAlign: 'left',
            listType: 'none',
            hyperlink: '',
        });
    };

    const handleStyleChange = (key, value) => {
        setBlockStyles((prevStyles) => ({
            ...prevStyles,
            [key]: value,
        }));
    };

    const handleSaveChanges = () => {
        if (selectedBlock) {
            const updatedData = {
                content,
                styles: blockStyles,
            };
            updateTextBlock(selectedBlock.id, updatedData).then((updatedBlock) => {
                setTextBlocks(
                    textBlocks.map((block) =>
                        block.id === updatedBlock.id ? updatedBlock : block
                    )
                );
                setSelectedBlock(null);
                resetForm();
            });
        }
    };

    const resetForm = () => {
        setContent('');
        setBlockStyles({
            color: '#000000',
            fontSize: '14px',
            fontFamily: 'Arial',
            fontWeight: 'normal',
            fontStyle: 'normal',
            lineHeight: 1.5,
            textAlign: 'left',
            listType: 'none',
            hyperlink: '',
        });
    };

    const handleDeleteBlock = async (id) => {
        try {
            await deleteTextBlock(id);
            setTextBlocks(textBlocks.filter((block) => block.id !== id));
            if (selectedBlock?.id === id) {
                setSelectedBlock(null);
            }
        } catch (error) {
            console.error('Error deleting text block:', error);
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Изменить текстовый блок</h2>
            <div className={styles.listContainer}>
                <h3 className={styles.subtitle}>Выберите блок для редактирования</h3>
                <ul className={styles.blockList}>
                    {textBlocks.map((block) => (
                        <li key={block.id} className={styles.blockItem}>
                            <button
                                className={styles.selectButton}
                                onClick={() => handleSelectBlock(block)}
                            >
                                {block.content.slice(0, 20)}...
                            </button>
                            <button
                                className={styles.deleteButton}
                                onClick={() => handleDeleteBlock(block.id)}
                            >
                                Удалить
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {selectedBlock && (
                <div className={styles.editorContainer}>
                    <h3 className={styles.subtitle}>Редактирование</h3>
                    <label className={styles.label}>
                        Content:
                        <textarea
                            className={styles.textarea}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </label>
                    <label className={styles.label}>
                        Text Color:
                        <input
                            type="color"
                            value={blockStyles.color}
                            onChange={(e) => handleStyleChange('color', e.target.value)}
                            className={styles.input}
                        />
                    </label>
                    <label className={styles.label}>
                        Font Size:
                        <input
                            type="number"
                            value={parseInt(blockStyles.fontSize)}
                            onChange={(e) => handleStyleChange('fontSize', `${e.target.value}px`)}
                            min="1"
                            className={styles.input}
                        />
                    </label>
                    <label className={styles.label}>
                        Font Family:
                        <select
                            value={blockStyles.fontFamily}
                            onChange={(e) => handleStyleChange('fontFamily', e.target.value)}
                            className={styles.select}
                        >
                            <option value="Poppins">Poppins</option>
                            <option value="Montserrat Alternates">Montserrat Alternates</option>
                            <option value="Arial">Arial</option>
                            <option value="Verdana">Verdana</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Courier New">Courier New</option>
                            <option value="Times New Roman">Times New Roman</option>
                            <option value="Tahoma">Tahoma</option>
                        </select>
                    </label>
                    <label className={styles.label}>
                        Font Weight:
                        <select
                            value={blockStyles.fontWeight}
                            onChange={(e) => handleStyleChange('fontWeight', e.target.value)}
                            className={styles.select}
                        >
                            <option value="normal">Normal</option>
                            <option value="bold">Bold</option>
                            <option value="lighter">Lighter</option>
                            <option value="bolder">Bolder</option>
                        </select>
                    </label>
                    <label className={styles.label}>
                        Font Style:
                        <select
                            value={blockStyles.fontStyle}
                            onChange={(e) => handleStyleChange('fontStyle', e.target.value)}
                            className={styles.select}
                        >
                            <option value="normal">Normal</option>
                            <option value="italic">Italic</option>
                            <option value="oblique">Oblique</option>
                        </select>
                    </label>
                    <label className={styles.label}>
                        Line Height:
                        <input
                            type="number"
                            step="0.1"
                            value={blockStyles.lineHeight}
                            onChange={(e) => handleStyleChange('lineHeight', parseFloat(e.target.value))}
                            min="1"
                            className={styles.input}
                        />
                    </label>
                    <label className={styles.label}>
                        Text Align:
                        <select
                            value={blockStyles.textAlign}
                            onChange={(e) => handleStyleChange('textAlign', e.target.value)}
                            className={styles.select}
                        >
                            <option value="left">Left</option>
                            <option value="center">Center</option>
                            <option value="right">Right</option>
                            <option value="justify">Justify</option>
                        </select>
                    </label>
                    <label className={styles.label}>
                        List Type:
                        <select
                            value={blockStyles.listType}
                            onChange={(e) => handleStyleChange('listType', e.target.value)}
                            className={styles.select}
                        >
                            <option value="none">None</option>
                            <option value="ordered">Ordered</option>
                            <option value="unordered">Unordered</option>
                        </select>
                    </label>
                    <label className={styles.label}>
                        Add Hyperlink:
                        <input
                            type="text"
                            value={blockStyles.hyperlink}
                            placeholder="Enter URL"
                            onChange={(e) => handleStyleChange('hyperlink', e.target.value)}
                            className={styles.input}
                        />
                    </label>
                    <button className={styles.saveButton} onClick={handleSaveChanges}>
                        Сохранить изменения
                    </button>
                </div>
            )}
        </div>
    );
}

export default EditTextBlock;
