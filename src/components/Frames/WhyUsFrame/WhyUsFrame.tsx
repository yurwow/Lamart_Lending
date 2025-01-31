import styles from './WhyUsFrame.module.css';
import puzzleIcon from '@/puzzle.svg';
import SecondWidget from '../../LandingPage/SecondWidget';
import { TextAlign } from '../ClientsFrame/ClientsFrame';

export interface FrameProps {
    textBlocks?: TextBlock[];
}

export interface TextBlock {
    content: string;
    styles?: TextBlockStyles;
}

export interface TextBlockStyles {
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

const WhyUsFrame = ({ textBlocks = [] }: FrameProps) => {
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
                    marginTop: index === 0 ? '40px' : '30px',
                }}
            >
                {textBlock?.content || defaultContent}
            </span>
        );
    };

    return (
        <div>
            <section className={styles.section_four}>
                <div className={styles.section_two_container}>
                    {renderTextBlock(0, 'ПОЧЕМУ ИМЕННО МЫ?')}
                    {renderTextBlock(1, 'Мы помогаем развивать технологические инновации в компаниях')}
                </div>
                <div className={styles.puzzle_container}>
                    <img className={styles.puzzleIcon} src={puzzleIcon} alt="puzzle icon" />
                </div>
            </section>
            <section className={styles.widget_container}>
                <div className={styles.section_four_widgets}>
                    <SecondWidget
                        title="Функции"
                        text="Платформа включает систему сбора и управления инициативами сотрудников, BI-аналитики и базу знаний"
                    />
                    <SecondWidget
                        title="Поддержка"
                        text="Круглосуточная служба технической поддержки help@aratrum.ru"
                    />
                    <SecondWidget
                        title="Стоимость"
                        text="Рассчитывается в индивидуальном порядке через оформление заявки или почту inbox@aratrum.ru"
                    />
                </div>
            </section>
        </div>
    );
};

export default WhyUsFrame;
