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

    const [isExpaneded, setIsExpanded] = useState(sections.length ? sections.map((_, i) => i === 0 ? true : false) : []);

    const [activeSlide, setActiveSlide] = useState(new Array(sections.length).fill(0));

    const nextSlide = (section_index) => {
        setActiveSlide((prevState) => {
            const newState = prevState.slice();
            newState[section_index] = (newState[section_index] + 1) % sections[section_index].images.length;
            return newState;
        });
    }

    const prevSlide = (section_index) => {
        setActiveSlide((prevState) => {
            const newState = prevState.slice();
            newState[section_index] = (newState[section_index] + sections[section_index].images.length - 1) % sections[section_index].images.length;
            return newState;
        });
    }

    const setSlide = (section_index, slide_index) => {
        setActiveSlide((prevState) => {
            const newState = prevState.slice();
            newState[section_index] = slide_index;
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

    const onlyExpanded = (section_index) => {
        setIsExpanded((prevState) => {
            const newState = new Array(sections.length).fill(false);
            newState[section_index] = true;
            return newState;
        });
    }

    return (
        <div class="multi-gallery">
            {sections.map((section, section_index) => (
                <div class={"gallery-section " + (isExpaneded[section_index] ? "expanded" : "")}>
                    <div class="divider" style={(section_index == 0 ? "display:none" : "")} />
                    <div class="gallery-tile" onClick={() => onlyExpanded(section_index)}>
                        <p class="division">{section.title}</p>
                        <div class="expand-btn" />
                    </div>
                    <div class="section-container">
                        <div class="gallery-container">
                            {section.images.map((image, slide_index) => (
                                <img src={image} class={"section-image " + getClass(slide_index, activeSlide[section_index], section.images.length)} />
                            ))}
                            <div class="next-btn" onClick={() => nextSlide(section_index)} />
                            <div class="prev-btn" onClick={() => prevSlide(section_index)} />
                        </div>
                        <div class="gallery-navigation">
                            {section.images.map((image, slide_index) => (
                                <div class="navigation-square" style={slide_index == activeSlide[section_index] ? "background-color: #0D7EE1" : ""} onClick={() => setSlide(section_index, slide_index)} />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}