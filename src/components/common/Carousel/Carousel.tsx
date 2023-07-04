import styles from './Carousel.module.scss';
import photo_01 from '../../../assets/images/photo-01.jpg';
import photo_02 from '../../../assets/images/photo-02.png';
import photo_03 from '../../../assets/images/photo-03.jpg';
import { useEffect, useState } from 'react';

const Carousel: React.FC = () => {
    const images = [photo_01, photo_02, photo_03];
    const [currentIndex, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            currentIndex === images.length - 1 ? 0 : currentIndex;
        }, 2500);
    }, [currentIndex]);

    return (
        <div className={styles.carousel}>
            {images.map(
                (image, index) =>
                    index == currentIndex && <img src={image} alt='' />
            )}
        </div>
    );
};

export default Carousel;
