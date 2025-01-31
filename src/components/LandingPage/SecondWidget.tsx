import Arm from '../../public/Arm.svg';
import styles from './SecondWidget.module.css';

interface ISecondWidget {
    title: string;
    text: string;
}

const SecondWidget = ({ title, text }: ISecondWidget) => {
    return (
        <div className={styles.second_widget_container}>
            <div className={styles.second_widget_icon}>
                <img src={Arm} alt="Arm Icon" />
            </div>
            <span className={styles.widget_title}>{title}</span>
            <p className={styles.widget_text}>{text}</p>
        </div>
    );
};

export default SecondWidget;
