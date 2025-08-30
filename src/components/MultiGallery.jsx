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

function getShift(shifts, section_index, slide_index) {
    if (shifts == null) {
        console.log("shifts is null");
        return 0;
    }
    if (!((section_index + "_" + slide_index) in shifts)) {
        console.log("shifts has no " + (section_index + "_" + slide_index));
        return 0;
    }
    console.log("shifts for " + (section_index + "_" + slide_index) + " is " + shifts[(section_index + "_" + slide_index)]);
    return shifts[(section_index + "_" + slide_index)];
}

export default function MultiGallery({ sections, shifts }) {

    const [isExpanded, setIsExpanded] = useState(sections.length ? sections.map((_, i) => i === 0 ? true : false) : []);

    const [activeSlide, setActiveSlide] = useState(new Array(sections.length).fill(0));

    const [isFull, setIsFull] = useState(new Array(sections.length).fill(false));

    const [interacted, setInteracted] = useState(false);

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
        if (!interacted) {
            setInteracted(true);
        }
        setIsExpanded((prevState) => {
            const newState = [...prevState];
            newState[section_index] = !newState[section_index];
            if (!interacted && section_index !== 0) {
                newState[0] = false;
            }
            return newState;
        });
    }

    const toggleFull = (section_index) => {
        setIsFull((prevState) => {
            const newState = prevState.slice();
            newState[section_index] = !newState[section_index];
            return newState;
        });
    }

    const closeFull = () => {
        setIsFull(new Array(sections.length).fill(false));
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
            <div class="dimmer" style={isFull.some((x) => x) ? "display: block; pointer-events: all;" : ""} onClick={closeFull}/>
            {sections.map((section, section_index) => (
                <div class={"gallery-section " + (isExpanded[section_index] ? "expanded " : "") + ((interacted || sections.length == 1) ? "expandable" : "")} id={"section_" + (section_index)}>
                    <div class="gallery-tile" onClick={() => toggleExpanded(section_index)}>
                        <p class="division">{section.title}</p>
                        <div class="expand-btn" />
                    </div>
                    <div class="section-container">
                        <div class="gallery-container">
                            {section.images.map((image, slide_index) => (
                                image.type === 'image' ?
                                    <img src={image.src} class={"section-image " + getClass(slide_index, activeSlide[section_index], section.images.length)} style={"margin-top: " + getShift(shifts, section_index, slide_index) + "pt;" + (slide_index == activeSlide[section_index] ? " cursor: pointer;" : "")} onClick={() => toggleFull(section_index)} />
                                    :
                                    <video controls controlsList="nodownload" autoplay muted loop class={"section-video " + getClass(slide_index, activeSlide[section_index], section.images.length)}>
                                        <source src={image.src} />
                                    </video>
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
                    <div class="divider"/>
                    {section.images[activeSlide[section_index]].type === 'image' &&
                        <img 
                            src={section.images[activeSlide[section_index]].src} 
                            class="section-image-full" 
                            style={isFull[section_index] ? "opacity: 100%" : ""}
                        />
                    }
                </div>
            ))}
        </div>
    )
}