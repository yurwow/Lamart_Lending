import styles from './Button.module.css'
import {useState} from "react";

const Button = ({text, onClick, type, scaleOnHover}) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <button
            type={type}
            onClick={onClick}
            className={styles.btn}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: isHovered ? `scale(${scaleOnHover})` : 'scale(1)',
                transition: 'transform 0.3s ease',
            }}
        >
            <div className={styles.rectangle}></div>
            {text}
            <div className={styles.rectangle}></div>
        </button>
    );
};

export default Button;
