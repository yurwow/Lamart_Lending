import { useState, useEffect } from 'react';
import { getFrames, addFrame, updateFrame, deleteFrame } from '../services/api';
import styles from './ContentBlocks.module.css';

const ContentBlocks = () => {
    const [block, setBlock] = useState([]);
    const [newFrameName, setNewFrameName] = useState('');
    const [newFrameType, setNewFrameType] = useState('Header');
    const [selectedFrame, setSelectedFrame] = useState(null);
    const [updatedContent, setUpdatedContent] = useState('');
    const [updatedType, setUpdatedType] = useState('');

    const frameTypes = [
        'Header',
        'ComputerFrame',
        'PrivilegeFrame',
        'WhyUsFrame',
        'FormFrame',
        'ClientsFrame',
        'ReviewsFrame',
        'FAQFrame',
        'FooterFrame',
    ];

    useEffect(() => {
        fetchBlocks();
    }, []);

    const fetchBlocks = async () => {
        try {
            const data = await getFrames();
            setBlock(data);
        } catch (error) {
            console.error('Error fetching block:', error);
        }
    };

    const handleAddFrame = async () => {
        try {
            const newFrame = await addFrame({
                name: newFrameName,
                enabled: true,
                order: 0,
                content: newFrameType,
            });
            setBlock([...block, newFrame]);
            setNewFrameName('');
            setNewFrameType('Header');
        } catch (error) {
            console.error('Error adding frame:', error);
        }
    };

    const handleUpdateFrame = async () => {
        if (!selectedFrame) return;

        try {
            const updatedFrame = await updateFrame(selectedFrame.id, {
                name: updatedContent || selectedFrame.name,
                content: updatedType || selectedFrame.content,
            });
            setBlock(block.map((frame) => (frame.id === updatedFrame.id ? updatedFrame : frame)));
            setSelectedFrame(null);
            setUpdatedContent('');
            setUpdatedType('');
        } catch (error) {
            console.error('Error updating frame:', error);
        }
    };

    const handleDeleteFrame = async (id) => {
        try {
            await deleteFrame(id);
            setBlock(block.filter((frame) => frame.id !== id));
        } catch (error) {
            console.error(`Error deleting frame with ID ${id}:`, error);
        }
    };

    const toggleFrameEnabled = async (id, currentEnabled) => {
        try {
            const updatedFrame = await updateFrame(id, { enabled: !currentEnabled });
            setBlock(block.map((frame) => (frame.id === updatedFrame.id ? updatedFrame : frame)));
        } catch (error) {
            console.error(`Error toggling frame with ID ${id}:`, error);
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Фреймы</h2>

            <div className={styles.addBlock}>
                <h3 className={styles.subtitle}>Добавить новый фрейм</h3>
                <input
                    type="text"
                    placeholder="Enter frame name"
                    value={newFrameName}
                    onChange={(e) => setNewFrameName(e.target.value)}
                    className={styles.addInput}
                />
                <select
                    value={newFrameType}
                    onChange={(e) => setNewFrameType(e.target.value)}
                    className={styles.select}
                >
                    {frameTypes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
                <button onClick={handleAddFrame} className={styles.addButton}>
                    Добавить фрейм
                </button>
            </div>

            <div>
                <h3 className={styles.subtitle}>Фреймы</h3>
                <ul className={styles.blockList}>
                    {block.map((frame) => (
                        <li key={frame.id} className={styles.blockItem}>
                            <div>
                                <strong>Frame ID:</strong> {frame.id}
                                <p>
                                    <strong>Frame Name:</strong> {frame.name || 'No Content'}
                                </p>
                                <p>
                                    <strong>Type:</strong> {frame.content}
                                </p>
                                <p>
                                    <strong>Status:</strong> {frame.enabled ? 'Enabled' : 'Disabled'}
                                </p>
                                <button
                                    onClick={() => toggleFrameEnabled(frame.id, frame.enabled)}
                                    className={styles.toggleButton}
                                >
                                    {frame.enabled ? 'Disable' : 'Enable'}
                                </button>
                                <button
                                    onClick={() => setSelectedFrame(selectedFrame?.id === frame.id ? null : frame)}
                                    className={styles.viewButton}
                                >
                                    {selectedFrame?.id === frame.id ? 'Collapse' : 'Edit'}
                                </button>
                                <button onClick={() => handleDeleteFrame(frame.id)} className={styles.deleteButton}>
                                    Delete
                                </button>
                            </div>

                            {selectedFrame?.id === frame.id && (
                                <div className={styles.updateBlock}>
                                    <textarea
                                        placeholder="Update name"
                                        value={updatedContent}
                                        onChange={(e) => setUpdatedContent(e.target.value)}
                                        className={styles.updateTextarea}
                                    />
                                    <select
                                        value={updatedType || selectedFrame.content}
                                        onChange={(e) => setUpdatedType(e.target.value)}
                                        className={styles.select}
                                    >
                                        {frameTypes.map((type) => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                    <button onClick={handleUpdateFrame} className={styles.updateButton}>
                                        Update Frame
                                    </button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ContentBlocks;
