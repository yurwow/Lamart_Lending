import { FC, useMemo } from 'react';
import styles from '../SecondAdmin.module.css';
import birdIcon from '../../../public/birdIcon.svg'
import filterIcon from '../../../public/filterIcon.png'
import { FrameTemplate } from '../types';

interface SidebarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (value: boolean) => void;
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    addFrame: (frame: FrameTemplate) => Promise<void>;
    frameTemplates: FrameTemplate[];
}

const Sidebar: FC<SidebarProps> = ({
                                       isSidebarOpen,
                                       setIsSidebarOpen,
                                       searchQuery,
                                       setSearchQuery,
                                       addFrame,
                                       frameTemplates,
                                   }) => {

    const filteredFrames = useMemo(() => frameTemplates.filter((frame) => {
        return (
            frame.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            frame.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }), [searchQuery, frameTemplates]);

    return (
        <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : styles.closed}`}>
            <button className={styles.toggleButton} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <img src={birdIcon} alt="bird icon" />
            </button>
            {isSidebarOpen && (
                <>
                    <div className={styles.filter_container}>
                        <input
                            type="text"
                            placeholder="Поиск..."
                            className={styles.searchInput}
                            value={searchQuery}
                            onChange={(event) => setSearchQuery(event.target.value)}
                        />
                        <img src={filterIcon} alt="filter icon" />
                    </div>
                    <ul className={styles.ul}>
                        {(searchQuery ? filteredFrames : frameTemplates).map((frame) => (
                            <li key={frame.id} onClick={() => addFrame(frame)} className={styles.frameItem}>
                                <div className={styles.framePreview}>
                                    <img className={styles.miniIcon} src={frame?.image} alt="icon" />
                                    <strong>{frame.name}</strong>
                                    <p>{frame.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default Sidebar;
