import EditTextBlock from "./EditTextBlock.jsx";
import EditImageBlock from "./EditImageBlock.jsx";

const AdminPanel = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h2>Admin Panel</h2>
            <EditTextBlock/>
            <EditImageBlock/>
        </div>
    );
};

export default AdminPanel;
