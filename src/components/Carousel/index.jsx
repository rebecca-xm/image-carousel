import { useRef } from 'react';
import styles from './Carousel.module.scss';

const moveRef = (element, direction) => {
    if (direction === 'left') element.current.scrollLeft += 300;
    if (direction === 'right') element.current.scrollLeft -= 300;

    // if (element.current.scrollLeft >= 300) element.current.scrollLeft = 0;
    // if (element.current.scrollLeft === 0) element.current.scrollLeft = 314;
};

function Carousel() {
    const carouselref = useRef();

    return (
        <div className={styles.body}>
            <div className={styles.carousel} ref={carouselref}>
                <div className={styles.wrapperImg}>
                    <div className={styles.images}>
                        <img src='https://picsum.photos/id/100/200/300' alt='' />
                        <img src='https://picsum.photos/id/200/200/300' alt='' />
                        <img src='https://picsum.photos/id/300/200/300' alt='' />
                        <img src='https://picsum.photos/id/400/200/300' alt='' />
                        <img src='https://picsum.photos/id/500/200/300' alt='' />
                        <img src='https://picsum.photos/id/600/200/300' alt='' />
                        <img src='https://picsum.photos/id/700/200/300' alt='' />
                        <img src='https://picsum.photos/id/800/200/300' alt='' />
                        <img src='https://picsum.photos/id/900/200/300' alt='' />
                    </div>
                </div>
            </div>
            <div className={styles.carouselBtns}>
                <button
                    className={styles.btn}
                    onClick={() => moveRef(carouselref, 'right')}>
                    {'<'}
                </button>
                <button
                    className={styles.btn}
                    onClick={() => moveRef(carouselref, 'left')}>
                    {'>'}
                </button>
            </div>
        </div>
    );
};

export default Carousel;