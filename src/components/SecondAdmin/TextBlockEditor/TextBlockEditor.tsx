import styles from '../SecondAdmin.module.css';
import { Styles, TextBlock } from '../types';

interface TextBlockEditorProps {
    block: TextBlock;
    handleContentChange: (blockId: number, content: string) => void;
    handleStyleChange: (blockId: number, styleKey: string, value: string) => void;
    handleSaveChanges: (blockId: number, originalContent: string, originalStyles: Styles) => void;
}

const TextBlockEditor = ({block, handleContentChange, handleStyleChange, handleSaveChanges}: TextBlockEditorProps) => {
    return (
        <div className={styles.textBlockEditor}>
            <textarea
                defaultValue={block.content}
                onChange={(e) =>
                    handleContentChange(
                        block.id,
                        e.target.value,
                    )
            }
                className={styles.textarea}
            />
            <div className={styles.styleEditor}>
                <label>Шрифт:</label>
                <select
                    defaultValue={
                        block.styles?.fontFamily || ''
                    }
                    onChange={(e) =>
                        handleStyleChange(
                            block.id,
                            'fontFamily',
                            e.target.value,
                        )
                    }
                >
                    <option value="Poppins">Poppins</option>
                    <option value="Montserrat Alternates">
                        Montserrat Alternates
                    </option>
                    <option value="Arial">Arial</option>
                    <option value="Times New Roman">
                        Times New Roman
                    </option>
                </select>
                <label>Цвет текста:</label>
                <input
                    type="color"
                    defaultValue={
                        block.styles?.color || '#000000'
                    }
                    onChange={(e) =>
                        handleStyleChange(
                            block.id,
                            'color',
                            e.target.value,
                        )
                    }
                />
                <label>Размер текста:</label>
                <input
                    type="text"
                    defaultValue={
                        block.styles?.fontSize || ''
                    }
                    onChange={(e) =>
                        handleStyleChange(
                            block.id,
                            'fontSize',
                            e.target.value,
                        )
                    }
                />
                <label>
                    Размер текста для мобильной версии:
                </label>
                <input
                    type="text"
                    defaultValue={
                        block.styles?.mobileFontSize || ''
                    }
                    onChange={(e) =>
                        handleStyleChange(
                            block.id,
                            'mobileFontSize',
                            e.target.value,
                        )
                    }
                />
                <label>Толщина текста:</label>
                <select
                    defaultValue={
                        block.styles?.fontWeight || 'normal'
                    }
                    onChange={(e) =>
                        handleStyleChange(
                            block.id,
                            'fontWeight',
                            e.target.value,
                        )
                    }
                >
                    <option value="normal">Обычный</option>
                    <option value="bold">Жирный</option>
                    <option value="lighter">Тонкий</option>
                </select>
            </div>
            <div className={styles.buttonContainer}>
                <button
                    onClick={() =>
                        handleSaveChanges(
                            block.id,
                            block.content,
                            block.styles,
                        )
                    }
                    className={styles.saveButton}
                >
                    Сохранить изменения
                </button>
            </div>
        </div>
    );
};

export default TextBlockEditor;
