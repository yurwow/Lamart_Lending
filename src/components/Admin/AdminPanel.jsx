import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AdminPanel = ({ initialTitle, onSave }) => {
    const [headerTitle, setHeaderTitle] = useState(initialTitle);

    const handleSave = () => {
        localStorage.setItem('headerTitle', headerTitle);
        onSave(headerTitle);
        alert('Title saved!');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Admin Panel</h2>
            <label>
                Header Title:
                <ReactQuill
                    value={headerTitle}
                    onChange={setHeaderTitle}
                    theme="snow"
                />
            </label>
            <button onClick={handleSave} style={{ marginTop: '10px' }}>Save Changes</button>
        </div>
    );
};

export default AdminPanel;
