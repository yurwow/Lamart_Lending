import styles from './PrivilegeFrame.module.css';
import Widget from '../../LandingPage/Widget';
import widgetIconFirst from '@/widgetIconFirst.svg';
import firstIconHover from '@/firstIconHover.svg';
import widgetIconSecond from '@/widgetIconSecond.svg';
import secondIconHover from '@/secondIconHover.svg';
import widgetIconThird from '@/widgetIconThird.svg';
import thirdIconHover from '@/thirdIconHover.svg';

interface FrameProps {
    textBlocks?: TextBlock[];
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

const PrivilegeFrame = ({ textBlocks = [] }: FrameProps) => {
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
                    fontFamily: `${textBlocks[0]?.styles?.fontFamily ?? 'Montserrat Alternates'}, sans-serif`,
                    fontWeight: textBlock?.styles?.fontWeight || 'normal',
                    fontStyle: textBlock?.styles?.fontStyle || 'normal',
                    lineHeight: textBlock?.styles?.lineHeight || 1.5,
                    textAlign: textBlock?.styles?.textAlign || 'left',
                    listStyleType: textBlock?.styles?.listType || 'none',
                    display: 'inline-block',
                    marginLeft: isMobileDevice ? '20px' : '14.84vw',
                    width: '58vw',
                }}
            >
                {textBlock?.content || defaultContent}
            </span>
        );
    };

    return (
        <section className={styles.section_three}>
            {renderTextBlock(0, 'ПЛЮСЫ УПРАВЛЕНИЯ ПРЕДЛОЖЕНИЯМИ')}
            <div className={styles.section_three_widgets}>
                <Widget
                    src={widgetIconFirst}
                    srcHover={firstIconHover}
                    title="Централизация и структурирование"
                    text="ИТ-решение централизует предложения, упрощая доступ и предотвращая их утрату.
                         Оно также структурирует данные по категориям для удобного анализа и реализации."
                />
                <Widget
                    src={widgetIconSecond}
                    srcHover={secondIconHover}
                    title="Прозрачность и отслеживаемость"
                    text="ИТ-решение отслеживает статус предложений, позволяет ставить лайки и уведомляет о ходе процесса,
                         улучшая взаимодействие между сотрудниками и руководством."
                />
                <Widget
                    src={widgetIconThird}
                    srcHover={thirdIconHover}
                    title="Объективная оценка и приоритизация"
                    text="Информационная система обеспечивает объективную оценку предложений по заданным критериям,
                         что помогает выбирать лучшие для реализации."
                />
            </div>
        </section>
    );
};

export default PrivilegeFrame;
