import { useEffect, useState } from 'react';
import { addImage, deleteImage, getImages, updateImage } from '../services/api';
import styles from './EditImageBlock.module.css';

const ImageUpload = () => {
    const [imageFile, setImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [editingImageId, setEditingImageId] = useState(null);

    // const BASE_URL = 'http://51.250.75.40:8000/';
    // const BASE_URL = 'http://89.169.147.237:8000/'
    // const BASE_URL = 'http://51.250.75.40:8000/';
    const BASE_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const imagesData = await getImages();
            setImages(imagesData);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(file);
            setImageUrl(URL.createObjectURL(file));
        }
    };

    const handleSaveImage = async () => {
        if (imageFile) {
            const formData = new FormData();
            formData.append('image', imageFile);
            formData.append('description', description);

            try {
                const newImage = await addImage(formData);
                setImages([...images, newImage]);
                resetForm();
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    const handleEditImage = async () => {
        if (imageFile && editingImageId) {
            const formData = new FormData();
            formData.append('image', imageFile);
            formData.append('description', description);

            try {
                const updatedImage = await updateImage(editingImageId, formData);
                setImages(images.map((image) => (image.id === editingImageId ? updatedImage : image)));
                resetForm();
            } catch (error) {
                console.error('Error updating image:', error);
            }
        }
    };

    const handleDeleteImage = async (id) => {
        try {
            await deleteImage(id);
            setImages(images.filter((image) => image.id !== id));
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };

    const resetForm = () => {
        setImageFile(null);
        setImageUrl('');
        setDescription('');
        setEditingImageId(null);
    };

    console.log('images', images);
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Загрузить изображение</h3>
            <div className={styles.uploadSection}>
                <input type="file" onChange={handleImageChange} className={styles.fileInput} />
                <textarea
                    placeholder="Введите описание изображения"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={styles.descriptionInput}
                />
                {imageUrl && <img src={imageUrl} alt="Preview" className={styles.previewImage} />}
                <button onClick={editingImageId ? handleEditImage : handleSaveImage} className={styles.saveButton}>
                    {editingImageId ? 'Заменить изображение' : 'Сохранить изображение'}
                </button>
            </div>

            <h4 className={styles.subtitle}>Загруженные изображения</h4>
            <ul className={styles.imageList}>
                {images.map((image) => (
                    <li key={image.id} className={styles.imageItem}>
                        <img src={`${BASE_URL}${image.image}`} alt="Uploaded" className={styles.uploadedImage} />
                        <p className={styles.imageDescription}>{image.description}</p>
                        <button
                            onClick={() => {
                                setEditingImageId(image.id);
                                setDescription(image.description || '');
                            }}
                            className={styles.editButton}
                        >
                            Изменить
                        </button>
                        <button onClick={() => handleDeleteImage(image.id)} className={styles.deleteButton}>
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ImageUpload;
