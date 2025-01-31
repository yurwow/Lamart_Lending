import { useEffect, useRef, useState, useMemo } from 'react';
import { getFrames, getImages, getTextBlocks } from '../services/api';
import HeaderFrame from '../Frames/HeaderFrame/HeaderFrame';
import ComputerFrame from '../Frames/ComputerFrame/ComputerFrame';
import PrivilegeFrame from '../Frames/PrivilegeFrame/PrivilegeFrame';
import WhyUsFrame from '../Frames/WhyUsFrame/WhyUsFrame';
import FormFrame from '../Frames/FormFrame/FormFrame';
import ClientsFrame from '../Frames/ClientsFrame/ClientsFrame';
import ReviewsFrame from '../Frames/ReviewsFrame/ReviewsFrame';
import FAQFrame from '../Frames/FAQFrame/FAQFrame';
import FooterFrame from '../Frames/FooterFrame/FooterFrame';
import CookiesWidget from './CookiesWidget/CookiesWidget';


interface IFrame {
    content: string,
    enabled: boolean,
    id: number,
    name: string,
    order: number
}

interface IFramesAll {
    content: string,
    enabled: boolean,
    id: number,
    images: IImages[],
    name: string,
    order: number,
    textBlocks: ITextBlock[]
}


interface ITextBlock {
    content: string,
    id: number,
    is_enabled: boolean,
    styles: IStyles,
    title: string
}

interface IStyles {
    color: string,
    fontFamily: string,
    fontSize: string,
    fontWeight: string,
    mobileFontSize: string
}

interface IImages {
    description: string,
    id: number,
    image: string,
    is_enabled: boolean,
    styles: object
}
const LandingPage = () => {
    const formRef = useRef<HTMLElement | null>(null);
    const [frames, setFrames] = useState<IFramesAll[]>([]);

    const scrollToForm = () => {
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth' });
        }
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
                const [framesData, textBlocksData, imagesData] = await Promise.all([
                    getFrames(),
                    getTextBlocks(),
                    getImages()
                ]);
                console.log(framesData, "framesData")
                console.log(textBlocksData, "textBlocksData")
                console.log(imagesData, "imagesData")

                const framesWithData = framesData.map((frame: IFrame) => ({
                    ...frame,
                    textBlocks: textBlocksData.filter((block: ITextBlock) => block.title === frame.name),
                    images: imagesData.filter((image: IImages) => image.description === frame.name),
                }));
                setFrames(framesWithData);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };

        fetchData();
    }, []);


    const frameComponents = useMemo(() => ({
        Header: HeaderFrame,
        Computer: ComputerFrame,
        Privilege: PrivilegeFrame,
        WhyUs: WhyUsFrame,
        Form: FormFrame,
        Clients: ClientsFrame,
        Reviews: ReviewsFrame,
        FAQ: FAQFrame,
        Footer: FooterFrame,
    }), []);

    return (
        <>
            {frames
                .filter((frame) => frame.enabled)
                .map((frame) => {
                    const FrameComponent = frameComponents[frame.name as keyof typeof frameComponents];
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
