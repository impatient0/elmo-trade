
import { useState, useEffect } from 'preact/hooks';
import '../styles/carousel.css';

export default function Carousel({ images }) {

    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSlideIndex((slideIndex + 1) % images.length);
        }, 5000);
        return () => clearTimeout(timer);
    }, [slideIndex]);

    return (
        <div class="carousel">
            <div>
                {
                    images.map((image, index) => (
                        <div class="slide fade" style={index == slideIndex ? "display:block" : "display:none"}>
                            {/* <div class="numbertext">{index + 1} / {images.length}</div> */}
                            <img src={image} style="width:100%" />
                        </div>
                    ))
                }

                <a class="prev" onClick={() => setSlideIndex((slideIndex - 1) % images.length)}>&#10094;</a>
                <a class="next" onClick={() => setSlideIndex((slideIndex + 1) % images.length)}>&#10095;</a>
            </div>
            
            <div style="text-align:center">
                {
                    images.map((image, index) => (
                        <span class={"dot" + (index == slideIndex ? " active" : "")} onClick={() => setSlideIndex(index)}></span>
                    ))
                }
            </div>
        </div>
    )
}