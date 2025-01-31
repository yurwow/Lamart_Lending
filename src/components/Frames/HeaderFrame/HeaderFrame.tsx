import styles from './HeaderFrame.module.css';
import headerIcon from '@/headerIcon.svg';
import mailIcon from '@/mail.png';
import Button from '../../Button/Button';

interface IHeaderFrame {
    textBlocks?: TextBlock[];
    scrollToForm?: () => void;
    images: IImage[];
}

interface IImage {
    image: string;
}

interface TextBlock {
    content: string;
    styles?: TextBlockStyles;
}

interface TextBlockStyles {
    color?: string;
    fontSize?: string;
    mobileFontSize?: string;
    fontFamily?: string;
    fontWeight?: string;
    fontStyle?: string;
    lineHeight?: string;
    textAlign?: TextAlign;
    listType?: string;
}

type TextAlign = 'left' | 'right' | 'center' | 'justify' | 'start' | 'end';

const HeaderFrame = ({ textBlocks = [], scrollToForm, images }: IHeaderFrame) => {
    const isMobileDevice = window.innerWidth <= 768;

    const renderTextBlock = (index: number, defaultContent: string) => {
        const textBlock = textBlocks[index];
        return (
            <span
                style={{
                    color: textBlock?.styles?.color || '#000000',
                    fontSize: isMobileDevice
                        ? textBlock?.styles?.mobileFontSize
                            ? `${textBlock?.styles?.mobileFontSize}px`
                            : '14px'
                        : textBlock?.styles?.fontSize
                            ? `${textBlock?.styles?.fontSize}px`
                            : '14px',
                    fontFamily: `${textBlock?.styles?.fontFamily ?? 'Montserrat Alternates'}, sans-serif`,
                    fontWeight: textBlock?.styles?.fontWeight || 'normal',
                    fontStyle: textBlock?.styles?.fontStyle || 'normal',
                    lineHeight: textBlock?.styles?.lineHeight || 1.5,
                    textAlign: textBlock?.styles?.textAlign || 'left',
                    listStyleType: textBlock?.styles?.listType || 'none',
                    display: 'inline-block',
                }}
            >
                {textBlock?.content || defaultContent}
            </span>
        );
    };

    return (
        <div className={styles.header_background}>
            <header className={styles.header}>
                <div className={styles.left_header_container}>
                    <img
                        src={images?.[0]?.image ? `http://51.250.75.40:8000/${images[0].image}` : headerIcon}
                        alt="Landing icon"
                        className={styles.img}
                    />
                    <div className={styles.header_span_container}>
                        {renderTextBlock(0, 'ОТКРЫТЫЕ ИДЕИ')}
                    </div>
                </div>
                <div className={styles.right_header_container}>
                    {renderTextBlock(1, 'inbox@aratrum.ru')}
                    <img
                        className={styles.img}
                        src={images?.[1]?.image ? `http://51.250.75.40:8000/${images[1].image}` : mailIcon}
                        alt="mail"
                    />
                </div>
            </header>
            <section>
                <div className={styles.section_one}>
                    {renderTextBlock(2, 'ИТ-ПРОДУКТ ДЛЯ ПОДАЧИ ПРЕДЛОЖЕНИЙ')}
                    {renderTextBlock(3, 'ПО УЛУЧШЕНИЮ ПРОЦЕССОВ В КОМПАНИИ')}
                    {renderTextBlock(4, 'Информационная система, разработанная для сбора, оценки и управления предложениями сотрудников по оптимизации различных процессов в компании')}
                    <Button onClick={scrollToForm} text="ПОЛУЧИТЬ ДЕМОДОСТУП" scaleOnHover={1.2} type="button" />
                </div>
            </section>
        </div>
    );
};

export default HeaderFrame;
