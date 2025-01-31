import { FC } from 'react';
import TextBlockEditor from '../TextBlockEditor/TextBlockEditor';
import ImageEditor from '../ImageEditor/ImageEditor';
import AiSection from '../AiSection/AiSection';
import styles from '../SecondAdmin.module.css'
import { FrameAll, Styles } from '../types';

interface FrameEditorProps {
    frame: FrameAll;
    editingTextBlockId: number | null;
    onTextBlockToggle: (blockId: number) => void;
    onContentChange: (blockId: number, content: string) => void;
    onStyleChange: (blockId: number, styleKey: string, value: string) => void;
    onSaveChanges: (blockId: number, originalContent: string, originalStyles: Styles) => void;
    onImageChange: (imageId: number, newImageFile: File, description: string) => void;
}

const FrameEditor: FC<FrameEditorProps> = ({
                                               frame,
                                               editingTextBlockId,
                                               onTextBlockToggle,
                                               onContentChange,
                                               onStyleChange,
                                               onSaveChanges,
                                               onImageChange
                                           }) => {
    return (
        <div className={styles.editorContainer}>
            <h4>Редактирование</h4>
            <div className={styles.textEditor}>
                <h5>Тексты</h5>
                {frame.textBlocks.map((block) => (
                    <div key={block.id} className={styles.textBlock}>
                        <div
                            className={styles.textPreview}
                            onClick={() => onTextBlockToggle(block.id)}
                        >
                            <p>{block.content}</p>
                        </div>
                        {editingTextBlockId === block.id && (
                            <TextBlockEditor
                                block={block}
                                handleContentChange={onContentChange}
                                handleStyleChange={onStyleChange}
                                handleSaveChanges={onSaveChanges}
                            />
                        )}
                    </div>
                ))}
            </div>
            <div className={styles.imageEditor}>
                <h5>Изображения</h5>
                {frame.images.map((image) => (
                    <ImageEditor
                        key={image.id}
                        image={image}
                        updateImage={onImageChange}
                    />
                ))}
            </div>
            <AiSection />
        </div>
    );
};

export default FrameEditor;
