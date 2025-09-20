import { useState, useEffect, useRef } from 'preact/hooks';
import '../styles/carousel.css';

export default function Carousel({ images, showDots = false, showNavButtons = false, autoplay = true }) {
    const [slideIndex, setSlideIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        if (autoplay && !isPaused && images.length > 0) {
            resetTimeout();
            timeoutRef.current = setTimeout(() => {
                setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 5000);
            return () => resetTimeout();
        }
    }, [slideIndex, isPaused, autoplay, images.length]);

    const goToSlide = (index) => {
        const newIndex = (index + images.length) % images.length;
        setSlideIndex(newIndex);
    };

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    return (
        <div 
            class="carousel" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            role="region"
            aria-roledescription="carousel"
            aria-label="Highlighted Projects"
        >
            <div class="slides-container">
                {images.map((image, index) => (
                    <div
                        class={`slide ${index === slideIndex ? 'active' : ''}`}
                        aria-hidden={index !== slideIndex}
                    >
                        <img
                            src={image.optimizedImageSrc}
                            class="carousel-img"
                            style={{
                                '--bg-pos-x': `${image.offsets[0]}px`,
                                '--bg-pos-y': `${image.offsets[1]}px`,
                            }}
                            loading={index === 0 ? 'eager' : 'lazy'}
                            decoding="async"
                            alt={image.description.headline}
                        />
                        <div class="carousel-banner">
                            <p class="title2">{image.description.title}</p>
                            <p class="headline2">{image.description.headline}</p>
                            {image.description.subbody && (
                                <p class="subbody2">{image.description.subbody}</p>
                            )}
                            <p class="body2">{image.description.body}</p>
                        </div>                        
                        {image.link && (
                            <a href={image.link} class="view-project-btn" aria-label={`View project: ${image.description.headline}`}>
                                <span class="arrow"></span>
                            </a>
                        )}
                    </div>
                ))}
            </div>

            {/* FEATURE: Conditionally render nav buttons based on prop */}
            {showNavButtons && (
                <>
                    <button class="prev" onClick={() => goToSlide(slideIndex - 1)} aria-label="Previous slide">&#10094;</button>
                    <button class="next" onClick={() => goToSlide(slideIndex + 1)} aria-label="Next slide">&#10095;</button>
                </>
            )}

            {/* FEATURE: Conditionally render dots based on prop */}
            {showDots && (
                <div class="dots-container">
                    {images.map((_, index) => (
                        <button
                            class={`dot ${index === slideIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}