import styles from "../../LandingPage/LandingPage.module.css";
import megapolic from "../../../public/megapolis.svg";
import monitorIcon from "../../../public/Celestial-Blue.svg";

const ComputerFrame = () => {
    return (
        <div>
            <section className={styles.section_two}>
                <div className={styles.section_two_container}>
                    <div className={styles.h2}>ИТ-РЕШЕНИЕ ДЛЯ ВАШЕЙ КОМПАНИИ</div>
                    <div className={styles.text}>С помощью этого решения, сотрудники могут предлагать идеи, рекомендации
                        и предложения по улучшению работы компании, а экспертам и управляющим лицам предоставляется
                        возможность эффективно оценивать и реализовывать эти предложения
                    </div>
                </div>
                <img className={styles.megapolis_icon} src={megapolic} alt="иконка здание"/>
            </section>
            <div className={styles.monitorIcon_container}>
                <img className={styles.monitorIcon} src={monitorIcon} alt="monitorIcon"/>
            </div>
        </div>
    );
};

export default ComputerFrame;
