import React from 'react';
import styles from '../SecondAdmin.module.css';
import { Image } from '../types';

interface Props {
    image: Image;
    updateImage: (imageId: number, newImageFile: File, description: string) => void;
}

const URL = import.meta.env.VITE_API_URL;

const ImageEditor = ({ image, updateImage }: Props) => {
    return (
        <div key={image.id} className={styles.imageBlock}>
            <div className={styles.imagePreviewContainer}>
                <img src={`${URL}${image.image}`} alt="Изображение" className={styles.imagePreview} />
            </div>
            <input
                type="file"
                onChange={(e) => {
                    const files = e.target.files;
                    if (files && files.length > 0) {
                        updateImage(image.id, files[0], image.description);
                    }
                }}
            />
        </div>
    );
};

export default ImageEditor;
