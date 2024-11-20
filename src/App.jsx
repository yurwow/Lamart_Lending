import LandingPage from "./components/LandingPage/LandingPage.jsx";
import AdminPanel from "./components/Admin/AdminPanel.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/admin" element={<AdminPanel/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App
