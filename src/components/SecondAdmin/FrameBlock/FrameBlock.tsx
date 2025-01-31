import { FC, ReactNode } from 'react';
import styles from '../SecondAdmin.module.css';
import { frameComponents } from '../SecondAdmin';
import { FrameAll } from '../types';

interface FrameBlockProps {
    frame: FrameAll;
    isEditing: boolean;
    onRemove: (id: number) => void;
    onToggleEdit: (id: number) => void;
    children?: ReactNode;
}

const FrameBlock: FC<FrameBlockProps> = ({ frame, isEditing, onRemove, onToggleEdit, children }) => {
    const FrameComponent = frameComponents[frame.name as keyof typeof frameComponents];

    return (
        <div className={styles.frameBlock}>
            <div className={styles.frameHeader}>
                <span className={styles.frame_name}>{frame.name}</span>
                <div className={styles.edit_container}>
                    <button onClick={() => onRemove(frame.id)} className={styles.deleteButton}>
                        Удалить
                    </button>
                    <button onClick={() => onToggleEdit(frame.id)} className={styles.editButton}>
                        {isEditing ? 'Закрыть' : 'Редактировать'}
                    </button>
                </div>
            </div>
            <div className={styles.frameContent}>
                {FrameComponent && <FrameComponent textBlocks={frame.textBlocks || []} images={frame.images || []} />}
                {isEditing && children}
            </div>
        </div>
    );
};

export default FrameBlock;
