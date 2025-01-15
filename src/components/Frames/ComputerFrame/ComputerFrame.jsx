import { useState, useRef } from "react";
import styles from "./ComputerFrame.module.css";
import megapolic from "@/megapolis.svg";
import monitorIcon from "@/Celestial-Blue.svg";
import video from "@/video.mp4";

const ComputerFrame = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleSeek = (event) => {
        const seekTime = (event.target.value / 100) * duration;
        videoRef.current.currentTime = seekTime;
        setCurrentTime(seekTime);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(videoRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(videoRef.current.duration);
    };

    return (
        <div>
            <section className={styles.section_two}>
                <div className={styles.section_two_container}>
                    <div className={styles.h2}>ИТ-РЕШЕНИЕ ДЛЯ ВАШЕЙ КОМПАНИИ</div>
                    <div className={styles.text}>
                        С помощью этого решения, сотрудники могут предлагать идеи, рекомендации и предложения по улучшению работы
                        компании, а экспертам и управляющим лицам предоставляется возможность эффективно оценивать и реализовывать
                        эти предложения
                    </div>
                </div>
                <img className={styles.megapolis_icon} src={megapolic} alt="иконка здание" />
            </section>
            <div className={styles.monitorIcon_container}>
                <img className={styles.monitorIcon} src={monitorIcon} alt="monitor icon"/>
                <video
                    className={styles.video}
                    ref={videoRef}
                    autoPlay={isPlaying}
                    loop
                    muted
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                >
                    <source src={video} type="video/mp4" />
                </video>
                <div className={styles.controls}>
                    <button onClick={togglePlayPause} className={styles.controlButton}>
                        {isPlaying ? "Пауза" : "Воспроизвести"}
                    </button>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={(currentTime / duration) * 100 || 0}
                        onChange={handleSeek}
                        className={styles.seekBar}
                    />
                    <span className={styles.timeDisplay}>
                        {Math.floor(currentTime)} / {Math.floor(duration)} сек
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ComputerFrame;
