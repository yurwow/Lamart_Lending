import styles from "./ClientsFrame.module.css";
import clickIcon from "@/clickIcon.svg";

const ClientsFrame = () => {
    return (
        <section className={styles.section_clients}>
            <span className={styles.section_clients_title}>КЛИЕНТЫ, КОТОРЫЕ ВЫБРАЛИ</span>
            <span className={styles.section_clients_title} style={{color: '#1E4DC2', }}>ОТКРЫТЫЕ ИДЕИ</span>
            <div className={styles.section_clients_container}>
                <div className={styles.section_clients_click}>
                    <img src={clickIcon} alt="click icon"/>
                </div>
                <div className={styles.section_clients_click}>
                    <img src={clickIcon} alt="click icon"/>
                </div>
                <div className={styles.section_clients_click}>
                    <img src={clickIcon} alt="click icon"/>
                </div>
                <div className={styles.section_clients_click}>
                    <img src={clickIcon} alt="click icon"/>
                </div>
                <div className={styles.section_clients_click}>
                    <img src={clickIcon} alt="click icon"/>
                </div>
                <div className={styles.section_clients_click}>
                    <span className={styles.section_clients_click_span}>СТАТЬ НАШИМ КЛИЕНТОМ</span>
                </div>
            </div>
        </section>
    );
};

export default ClientsFrame;
