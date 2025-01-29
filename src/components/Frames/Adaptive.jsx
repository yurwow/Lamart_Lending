import HeaderFrame from './HeaderFrame/HeaderFrame.jsx';
import ComputerFrame from './ComputerFrame/ComputerFrame.jsx';
import PrivilegeFrame from './PrivilegeFrame/PrivilegeFrame.jsx';
import WhyUsFrame from './WhyUsFrame/WhyUsFrame.jsx';
import FormFrame from './FormFrame/FormFrame.jsx';
import ClientsFrame from './ClientsFrame/ClientsFrame.jsx';
import ReviewsFrame from './ReviewsFrame/ReviewsFrame.jsx';
import FAQFrame from './FAQFrame/FAQFrame.jsx';
import FooterFrame from './FooterFrame/FooterFrame.jsx';

const Adaptive = () => {
    return (
        <>
            <HeaderFrame />
            <ComputerFrame />
            <PrivilegeFrame />
            <WhyUsFrame />
            <FormFrame />
            <ClientsFrame />
            <ReviewsFrame />
            <FAQFrame />
            <FooterFrame />
        </>
    );
};

export default Adaptive;
