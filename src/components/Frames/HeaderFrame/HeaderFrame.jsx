import React, {useEffect, useState} from 'react';
import styles from "../../LandingPage/LandingPage.module.css";
import headerIcon from "../../../public/headerIcon.svg";
import mailIcon from "../../../public/mail.png";
import Button from "../../Button/Button.jsx";

const HeaderFrame = ({textBlocks, scrollToForm, images, }) => {
    // console.log("photo",images)
    // console.log("text",textBlocks)
    // console.log("контент",textBlocks)
    console.log("картинки",images)
    return (
        <div className={styles.header_background}>
            <header className={styles.header}>
                <div className={styles.left_header_container}>
                    <img src={images?.[0]?.image ? `http://localhost:8000/${images[0].image}` : headerIcon}
                         alt="Landing icon"/>

                    <div className={styles.header_span_container}>
                        {/*<span className={styles.header_span}>ОТКРЫТЫЕ ИДЕИ</span>*/}
                        {textBlocks?.length > 0 && (
                            <span
                                style={{
                                    color: textBlocks[0].styles?.color || "#000000",
                                    fontSize: textBlocks[0]?.styles?.fontSize || '14px',
                                    fontFamily: textBlocks[0]?.styles?.fontFamily || "Arial",
                                    fontWeight: textBlocks[0].font_weight || "normal",
                                    fontStyle: textBlocks[0].font_style || "normal",
                                    lineHeight: textBlocks[0].line_height || 1.5,
                                    textAlign: textBlocks[0].text_align || "left",
                                    listStyleType: textBlocks[0].list_type || "none",
                                    display: 'inline-block',
                                }}
                            >
                                {textBlocks[0].hyperlink ? (
                                    <a href={textBlocks[0].hyperlink} target="_blank">
                                        {textBlocks[0].content ||
                                            <span className={styles.header_span}>ОТКРЫТЫЕ ИДЕИ</span>}
                                    </a>
                                ) : (
                                    textBlocks[0].content || <span className={styles.header_span}>ОТКРЫТЫЕ ИДЕИ</span>
                                )}
                            </span>
                        )}
                    </div>
                </div>
                <div className={styles.right_header_container}>
                    {/*<a className={styles.email} href="mailto:inbox@aratrum.ru">inbox@aratrum.ru</a>*/}
                    {textBlocks.length > 0 && (
                        <a
                            style={{
                                color: textBlocks[1]?.styles?.color || "#000000",
                                fontSize: `${textBlocks[1].styles.fontSize || "14px"}`,
                                fontFamily: textBlocks[1].styles.font_family || "Arial",
                                fontWeight: textBlocks[1].styles.font_weight || "normal",
                                fontStyle: textBlocks[1].styles.font_style || "normal",
                                lineHeight: textBlocks[1].styles.line_height || 1.5,
                                textAlign: textBlocks[1].styles.text_align || "left",
                                listStyleType: textBlocks[1].styles.list_type || "none",
                                display: 'inline-block',
                            }}
                        >
                            {textBlocks[1].hyperlink ? (
                                <a href={textBlocks[1].hyperlink} target="_blank">
                                    {textBlocks[1].content ||
                                        <span className={styles.header_span}>inbox@aratrum.ru</span>}
                                </a>
                            ) : (
                                textBlocks[1].content || <span className={styles.header_span}>inbox@aratrum.ru</span>
                            )}
                        </a>
                    )}
                    <img src={mailIcon} alt="mail"/>
                </div>
            </header>
            <section>
                <div className={styles.section_one}>
                    {/*<span className={styles.h1}>ИТ-ПРОДУКТ ДЛЯ ПОДАЧИ ПРЕДЛОЖЕНИЙ</span>*/}
                    {textBlocks.length > 0 && (
                        <span
                            style={{
                                color: textBlocks[2].styles.color || "#000000",
                                fontSize: `${textBlocks[2].styles.font_size || 14}px`,
                                fontFamily: textBlocks[2].styles.font_family || "Arial",
                                fontWeight: textBlocks[2].font_weight || "normal",
                                fontStyle: textBlocks[2].font_style || "normal",
                                lineHeight: textBlocks[2].line_height || 1.5,
                                textAlign: textBlocks[2].text_align || "left",
                                listStyleType: textBlocks[2].list_type || "none",
                                display: 'inline-block',
                            }}
                        >
                                {textBlocks[2].hyperlink ? (
                                    <a href={textBlocks[2].hyperlink} target="_blank">
                                        {textBlocks[2].content ||
                                            <span
                                                className={styles.header_span}>ИТ-ПРОДУКТ ДЛЯ ПОДАЧИ ПРЕДЛОЖЕНИЙ</span>}
                                    </a>
                                ) : (
                                    textBlocks[2].content ||
                                    <span className={styles.header_span}>ИТ-ПРОДУКТ ДЛЯ ПОДАЧИ ПРЕДЛОЖЕНИЙ</span>
                                )}
                            </span>
                    )}
                    {/*<span className={styles.span}>ПО УЛУЧШЕНИЮ ПРОЦЕССОВ В КОМПАНИИ</span>*/}
                    {textBlocks.length > 0 && (
                        <span
                            style={{
                                color: textBlocks[3].styles.color || "#000000",
                                fontSize: `${textBlocks[3].styles.font_size || 14}px`,
                                fontFamily: textBlocks[3].styles.font_family || "Arial",
                                fontWeight: textBlocks[3].font_weight || "normal",
                                fontStyle: textBlocks[3].font_style || "normal",
                                lineHeight: textBlocks[3].line_height || 1.5,
                                textAlign: textBlocks[3].text_align || "left",
                                listStyleType: textBlocks[3].list_type || "none",
                                display: 'inline-block',
                            }}
                        >
                                {textBlocks[3].hyperlink ? (
                                    <a href={textBlocks[3].hyperlink} target="_blank">
                                        {textBlocks[3].content ||
                                            <span
                                                className={styles.span}>ПО УЛУЧШЕНИЮ ПРОЦЕССОВ В КОМПАНИИ</span>}
                                    </a>
                                ) : (
                                    textBlocks[3].content ||
                                    <span className={styles.header_span}>ПО УЛУЧШЕНИЮ ПРОЦЕССОВ В КОМПАНИИ</span>
                                )}
                            </span>
                    )}
                    <span className={styles.section_one_span}>Информационная система, разработанная для сбора, оценки и управления предложениями сотрудников по оптимизации различных процессов в компании</span>
                    <Button onClick={scrollToForm} text="ПОЛУЧИТЬ ДЕМОДОСТУП"/>
                </div>
            </section>
        </div>
    );
};

export default HeaderFrame;
