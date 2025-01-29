import { useEffect, useRef, useState } from 'react';
import { getFrames, getImages, getTextBlocks } from '../services/api.js';
import HeaderFrame from '../Frames/HeaderFrame/HeaderFrame.jsx';
import ComputerFrame from '../Frames/ComputerFrame/ComputerFrame.jsx';
import PrivilegeFrame from '../Frames/PrivilegeFrame/PrivilegeFrame.jsx';
import WhyUsFrame from '../Frames/WhyUsFrame/WhyUsFrame.jsx';
import FormFrame from '../Frames/FormFrame/FormFrame.jsx';
import ClientsFrame from '../Frames/ClientsFrame/ClientsFrame.jsx';
import ReviewsFrame from '../Frames/ReviewsFrame/ReviewsFrame.jsx';
import FAQFrame from '../Frames/FAQFrame/FAQFrame.jsx';
import FooterFrame from '../Frames/FooterFrame/FooterFrame.jsx';
import CookiesWidget from './CookiesWidget/CookiesWidget.jsx';

const LandingPage = () => {
    const formRef = useRef(null);
    const [frames, setFrames] = useState([]);

    const scrollToForm = () => {
        formRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://embed.tawk.to/674ed4c14304e3196aebb871/1ie5uu539';
        script.async = true;
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const framesData = await getFrames();
                const textBlocksData = await getTextBlocks();
                const imagesData = await getImages();

                const framesWithData = framesData.map((frame) => ({
                    ...frame,
                    textBlocks: textBlocksData.filter((block) => block.title === frame.name),
                    images: imagesData.filter((image) => image.description === frame.name),
                }));

                setFrames(framesWithData);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };

        fetchData();
    }, []);

    const frameComponents = {
        Header: HeaderFrame,
        Computer: ComputerFrame,
        Privilege: PrivilegeFrame,
        WhyUs: WhyUsFrame,
        Form: FormFrame,
        Clients: ClientsFrame,
        Reviews: ReviewsFrame,
        FAQ: FAQFrame,
        Footer: FooterFrame,
    };

    return (
        <>
            {frames
                .filter((frame) => frame.enabled)
                .map((frame) => {
                    const FrameComponent = frameComponents[frame.name];
                    return FrameComponent ? (
                        <FrameComponent
                            key={frame.id}
                            images={frame.images}
                            textBlocks={frame.textBlocks}
                            scrollToForm={frame.name === 'Header' ? scrollToForm : undefined}
                            ref={frame.name === 'Form' ? formRef : undefined}
                        />
                    ) : null;
                })}
            <CookiesWidget />
        </>
    );
};

export default LandingPage;
