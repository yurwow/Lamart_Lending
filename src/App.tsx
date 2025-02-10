import LandingPage from './components/LandingPage/LandingPage';
import AdminPanel from './components/Admin/AdminPanel';
import { HashRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import AdminHome from './components/AdminPanel/AdminHome/AdminHome';
import NotFound from './components/NotFound/NotFound';
import ForgotPasswordPage from './components/ForgotPasswordPage/ForgotPasswordPage';
import SecondAdmin from './components/SecondAdmin/SecondAdmin';
import FooterFrame from './components/Frames/FooterFrame/FooterFrame';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/adminpanel" element={<AdminHome />} />
                <Route path="/second" element={<SecondAdmin />} />
                <Route path="/header" element={<FooterFrame />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
