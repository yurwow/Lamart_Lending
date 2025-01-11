import EditTextBlock from "./EditTextBlock.jsx";
import EditImageBlock from "./EditImageBlock.jsx";
import AddTextBlockForm from "./AddTextBlockForm.jsx";
import ContentBlocks from "./ContentBlocks.jsx";
import styles from './AdminPanel.module.css'
import icon from "../../public/landIcon.svg";
import ellipse from "../../public/Ellipse.svg";

const AdminPanel = () => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src={icon} alt="logo"/>
                    <div className={styles.span}>ОТКРЫТЫЕ ИДЕИ</div>
                </div>
                <div className={styles.logo}>
                </div>
            </header>
            <AddTextBlockForm/>
            <EditTextBlock/>
            <EditImageBlock/>
            <ContentBlocks/>
        </div>
    );
};

export default AdminPanel;
