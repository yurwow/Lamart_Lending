import { useEffect, useRef, useState } from "react";
import { getFrames, getImages, getTextBlocks } from "../services/api.js";
import HeaderFrame from "../Frames/HeaderFrame/HeaderFrame.jsx";
import ComputerFrame from "../Frames/ComputerFrame/ComputerFrame.jsx";
import PrivilegeFrame from "../Frames/PrivilegeFrame/PrivilegeFrame.jsx";
import WhyUsFrame from "../Frames/WhyUsFrame/WhyUsFrame.jsx";
import FormFrame from "../Frames/FormFrame/FormFrame.jsx";
import ClientsFrame from "../Frames/ClientsFrame/ClientsFrame.jsx";
import ReviewsFrame from "../Frames/ReviewsFrame/ReviewsFrame.jsx";
import FAQFrame from "../Frames/FAQFrame/FAQFrame.jsx";
import FooterFrame from "../Frames/FooterFrame/FooterFrame.jsx";
import CookiesWidget from "./CookiesWidget/CookiesWidget.jsx";

const LandingPage = () => {
    const formRef = useRef(null);
    const [textBlocks, setTextBlocks] = useState([]);
    const [images, setImages] = useState([]);
    const [frames, setFrames] = useState([]);

    const scrollToForm = () => {
        formRef.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        getImages().then(setImages);
        getTextBlocks().then(setTextBlocks);
        getFrames().then(setFrames);
        const script = document.createElement("script");
        script.src = "https://embed.tawk.to/674ed4c14304e3196aebb871/1ie5uu539";
        script.async = true;
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    console.log("frames", frames);

    const frameComponents = {
        Header: <HeaderFrame images={images} textBlocks={textBlocks} scrollToForm={scrollToForm} />,
        Computer: <ComputerFrame />,
        Privilege: <PrivilegeFrame />,
        WhyUs: <WhyUsFrame />,
        Form: <FormFrame ref={formRef} />,
        Clients: <ClientsFrame />,
        Reviews: <ReviewsFrame />,
        FAQ: <FAQFrame />,
        Footer: <FooterFrame />,
    };

    return (
        <>
            {frames
                .filter((frame) => frame.enabled)
                .map((frame) => frameComponents[frame.name] || null)}
            <CookiesWidget />
        </>
    );
};

export default LandingPage;
