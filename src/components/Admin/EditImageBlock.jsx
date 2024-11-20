import { useState } from 'react';
import { addImage, getImages } from '../services/api';

const ImageUpload = () => {
    const [imageFile, setImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [images, setImages] = useState([]);

    // Получаем список изображений
    const fetchImages = async () => {
        const imagesData = await getImages();
        setImages(imagesData);
    };

    // Обрабатываем изменение файла
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(file);
            setImageUrl(URL.createObjectURL(file)); // Предпросмотр изображения
        }
    };

    // Сохраняем изображение
    const handleSaveImage = async () => {
        if (imageFile) {
            const formData = new FormData();
            formData.append('image', imageFile);

            try {
                const newImage = await addImage(formData);
                setImages([...images, newImage]); // Добавляем новое изображение в список
                setImageFile(null);
                setImageUrl('');
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    return (
        <div>
            <h3>Upload Image</h3>
            <input type="file" onChange={handleImageChange} />
            {imageUrl && <img src={imageUrl} alt="Preview" style={{ width: '200px', marginTop: '10px' }} />}
            <button onClick={handleSaveImage}>Save Image</button>

            <h4>Uploaded Images</h4>
            <ul>
                {images.map((image) => (
                    <li key={image.id}>
                        <img src={image.url} alt="Uploaded" style={{ width: '100px', margin: '5px' }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ImageUpload;
