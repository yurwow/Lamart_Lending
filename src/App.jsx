import LandingPage from './components/LandingPage/LandingPage.jsx';
import AdminPanel from './components/Admin/AdminPanel.jsx';
import { HashRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage.jsx';
import RegisterUser from './components/Admin/Register.jsx';
import AdminHome from './components/AdminPanel/AdminHome/AdminHome.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import ForgotPasswordPage from './components/ForgotPasswordPage/ForgotPasswordPage.jsx';
import SecondAdmin from './components/SecondAdmin/SecondAdmin.jsx';
import FooterFrame from './components/Frames/FooterFrame/FooterFrame.jsx';
import Adaptive from './components/Frames/Adaptive.jsx';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/register" element={<RegisterUser />} />
                <Route path="/adminpanel" element={<AdminHome />} />
                <Route path="/second" element={<SecondAdmin />} />
                <Route path="/header" element={<FooterFrame />} />
                <Route path="/adaptive" element={<Adaptive />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
