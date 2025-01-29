import styles from './ClientsFrame.module.css';
import clickIcon from '@/clickIcon.svg';

const ClientsFrame = ({ textBlocks }) => {
    const isMobileDevice = window.innerWidth <= 768;

    return (
        <section className={styles.section_clients}>
            {/*<span className={styles.section_clients_title}>КЛИЕНТЫ, КОТОРЫЕ ВЫБРАЛИ</span>*/}
            {textBlocks?.length > 0 ? (
                <span
                    style={{
                        color: textBlocks[0].styles?.color || '#000000',
                        fontSize: isMobileDevice
                            ? textBlocks[0]?.styles?.mobileFontSize
                                ? `${textBlocks[0]?.styles?.mobileFontSize}px`
                                : '14px'
                            : textBlocks[0]?.styles?.fontSize
                              ? `${textBlocks[0]?.styles?.fontSize}px`
                              : '14px',
                        fontFamily:
                            `${textBlocks[0]?.styles?.fontFamily}, sans-serif` || 'Montserrat Alternates, sans-serif',
                        fontWeight: textBlocks[0]?.styles?.fontWeight || 'normal',
                        fontStyle: textBlocks[0]?.styles?.fontStyle || 'normal',
                        lineHeight: textBlocks[0]?.styles?.lineHeight || 1.5,
                        textAlign: textBlocks[0]?.styles?.textAlign || 'left',
                        listStyleType: textBlocks[0]?.styles?.listType || 'none',
                        display: 'inline-block',
                        padding: isMobileDevice ? '0px 0px 0px 20px' : '',
                    }}
                >
                    {textBlocks[0].content}
                </span>
            ) : (
                <span className={styles.section_clients_title}>КЛИЕНТЫ, КОТОРЫЕ ВЫБРАЛИ</span>
            )}
            {textBlocks?.length > 0 ? (
                <span
                    style={{
                        color: textBlocks[1].styles?.color || '#000000',
                        fontSize: isMobileDevice
                            ? textBlocks[1]?.styles?.mobileFontSize
                                ? `${textBlocks[1]?.styles?.mobileFontSize}px`
                                : '14px'
                            : textBlocks[1]?.styles?.fontSize
                              ? `${textBlocks[1]?.styles?.fontSize}px`
                              : '14px',
                        fontFamily:
                            `${textBlocks[1]?.styles?.fontFamily}, sans-serif` || 'Montserrat Alternates, sans-serif',
                        fontWeight: textBlocks[1]?.styles?.fontWeight || 'normal',
                        fontStyle: textBlocks[1]?.styles?.fontStyle || 'normal',
                        lineHeight: textBlocks[1]?.styles?.lineHeight || 1.5,
                        textAlign: textBlocks[1]?.styles?.textAlign || 'left',
                        listStyleType: textBlocks[1]?.styles?.listType || 'none',
                        display: 'inline-block',
                        padding: isMobileDevice ? '0px 0px 0px 20px' : '',
                    }}
                >
                    {textBlocks[1].content}
                </span>
            ) : (
                <span className={styles.section_clients_title} style={{ color: '#1E4DC2' }}>
                    ОТКРЫТЫЕ ИДЕИ
                </span>
            )}
            {/*<span className={styles.section_clients_title} style={{color: '#1E4DC2',}}>ОТКРЫТЫЕ ИДЕИ</span>*/}
            <div className={styles.section_clients_container}>
                <div className={styles.section_clients_click}>
                    <img src={clickIcon} alt="click icon" />
                </div>
                <div className={styles.section_clients_click}>
                    <img src={clickIcon} alt="click icon" />
                </div>
                <div className={styles.section_clients_click}>
                    <img src={clickIcon} alt="click icon" />
                </div>
                <div className={styles.section_clients_click}>
                    <img src={clickIcon} alt="click icon" />
                </div>
                <div className={styles.section_clients_click}>
                    <img src={clickIcon} alt="click icon" />
                </div>
                <div className={styles.section_clients_click}>
                    {/*<span className={styles.section_clients_click_span}>СТАТЬ НАШИМ КЛИЕНТОМ</span>*/}
                    {textBlocks?.length > 0 ? (
                        <span
                            style={{
                                color: textBlocks[2].styles?.color || '#000000',
                                fontSize: isMobileDevice
                                    ? textBlocks[2]?.styles?.mobileFontSize
                                        ? `${textBlocks[1]?.styles?.mobileFontSize}px`
                                        : '14px'
                                    : textBlocks[2]?.styles?.fontSize
                                      ? `${textBlocks[2]?.styles?.fontSize}px`
                                      : '14px',
                                fontFamily:
                                    `${textBlocks[2]?.styles?.fontFamily}, sans-serif` ||
                                    'Montserrat Alternates, sans-serif',
                                fontWeight: textBlocks[2]?.styles?.fontWeight || 'normal',
                                fontStyle: textBlocks[2]?.styles?.fontStyle || 'normal',
                                lineHeight: textBlocks[2]?.styles?.lineHeight || 1.5,
                                textAlign: textBlocks[2]?.styles?.textAlign || 'center',
                                listStyleType: textBlocks[2]?.styles?.listType || 'none',
                                display: 'inline-block',
                            }}
                        >
                            {textBlocks[2].content}
                        </span>
                    ) : (
                        <span className={styles.section_clients_click_span}>СТАТЬ НАШИМ КЛИЕНТОМ</span>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ClientsFrame;
