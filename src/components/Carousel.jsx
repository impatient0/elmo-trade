import { useState, useEffect } from 'preact/hooks';
import '../styles/carousel.css';

export default function Carousel({ images }) {

    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        if (images.length > 0) {
            const timer = setTimeout(() => {
                setSlideIndex((slideIndex + 1) % images.length);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [slideIndex]);

    return (
        <div class="carousel">
            <div>
                {
                    images.map((image, index) => (
                        <div class="slide fade" style={index == slideIndex ? "display:block" : "display:none"}>
                            {/* <div class="numbertext">{index + 1} / {images.length}</div> */}
                            <div style={`background-image: url('${image.image[0]}'); background-position: ${image.image[1]}px ${image.image[2]}px; background-size: ` + (image.image[3] > 0 ? `${image.image[3]}px ${image.image[4]}px` : "cover")} class="carousel-img" />
                            <div class="carousel-banner">
                                <p class="title2">{image.description.title}</p>
                                <p class="headline2">{image.description.headline}</p>
                                <p class="subbody2" style={image.description.subbody.length > 0 ? "" : "margin:0"}>{image.description.subbody}</p>
                                <p class="body2">{image.description.body}</p>
                            </div>
                            <a href={image.link} class="project-link"/>
                        </div>
                    ))
                }

                {/* <a class="prev" onClick={() => setSlideIndex((slideIndex - 1) % images.length)}>&#10094;</a>
                <a class="next" onClick={() => setSlideIndex((slideIndex + 1) % images.length)}>&#10095;</a> */}
            </div>

            {/* <div style="text-align:center">
                {
                    images.map((image, index) => (
                        <span class={"dot" + (index == slideIndex ? " active" : "")} onClick={() => setSlideIndex(index)}></span>
                    ))
                }
            </div> */}
        </div>
    )
}