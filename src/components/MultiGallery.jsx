import { useState } from 'preact/hooks';
import '../styles/multi-gallery.css';
import '../styles/project-carousel.css';

function getClass(slide_index, active_slide, length) {
    if (slide_index == active_slide) {
        return ("center-slide");
    } else if ((slide_index == (active_slide - 1 + length) % length) || (slide_index == (active_slide - 2 + length) % length)) {
        return ("hide-left");
    } else {
        return ("hide-right");
    }
}

export default function MultiGallery({ sections }) {

    const [isExpaneded, setIsExpanded] = useState(new Array(sections.length).fill(false));

    const [activeSlide, setActiveSlide] = useState(new Array(sections.length).fill(0));

    const nextSlide = (section_index) => {
        setActiveSlide((prevState) => {
            const newState = prevState.slice();
            newState[section_index] = (newState[section_index] + 1) % sections.length;
            return newState;
        });
    }

    const prevSlide = (section_index) => {
        setActiveSlide((prevState) => {
            const newState = prevState.slice();
            newState[section_index] = (newState[section_index] + sections.length - 1) % sections.length;
            return newState;
        });
    }

    const toggleExpanded = (section_index) => {
        setIsExpanded((prevState) => {
            const newState = prevState.slice();
            newState[section_index] = !newState[section_index];
            return newState;
        });
    }

    return (
        <div class="multi-gallery">
            {sections.map((section, section_index) => (
                <div class="gallery-section">
                    <div class="gallery-tile" onClick={() => toggleExpanded(section_index)}>
                        <p class="division">{section.title}</p>
                        <div class="expand-btn" />
                    </div>
                    <div class={"section-container " + (isExpaneded[section_index] ? "expanded" : "")}>
                        <div class="gallery-container">
                            {section.images.map((image, slide_index) => (
                                <img src={image} class={"section-image " + getClass(slide_index, activeSlide[section_index], section.images.length)} />
                            ))}
                            <div class="next-btn" onClick={() => nextSlide(section_index)} />
                            <div class="prev-btn" onClick={() => prevSlide(section_index)} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}