import { useState, useEffect } from 'preact/hooks';
import '../styles/project-carousel.css'

function getClass(slide_index, active_slide, length) {
    if (slide_index == active_slide) {
        return ("left-slide");
    } else if (slide_index == (active_slide + 1) % length) {
        return ("right-slide");
    } else if ((slide_index == (active_slide - 1 + length) % length) || (slide_index == (active_slide - 2 + length) % length)) {
        return ("hide-left");
    } else {
        return ("hide-right");
    }
}

export default function ProjectCarousel({ slides }) {

    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <div class="project-carousel">
            {slides.map((project, index) => (
                <div class={"project-container " + getClass(index, activeSlide, slides.length)}>
                    <img src={project.image} class="project-image" width="588" height="283" />
                    <div class="project-footer">
                        <p class="project-title">{project.title}</p>
                        <p class="subbody2">{project.address}</p>
                    </div>
                    <div class="project-year">
                        {project.year.map((year) => (
                            <p class="body2">{year}</p>
                        ))}
                    </div>
                </div>
            ))}
            <div class="next-btn" onClick={() => setActiveSlide((activeSlide + 1) % slides.length)} />
            <div class="prev-btn" onClick={() => setActiveSlide((activeSlide - 1 + slides.length) % slides.length)} />
        </div>
    )
}