import LandingPage from "./components/LandingPage/LandingPage.jsx";
import AdminPanel from "./components/Admin/AdminPanel.jsx";
import {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    const initialTitle = localStorage.getItem('headerTitle') || 'ОТКРЫТЫЕ ИДЕИ';
    const [headerTitle, setHeaderTitle] = useState(initialTitle);

    const updateTitle = (newTitle) => {
        setHeaderTitle(newTitle);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage headerTitle={headerTitle} />}/>
                <Route path="/admin" element={<AdminPanel initialTitle={headerTitle} onSave={updateTitle} />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App
