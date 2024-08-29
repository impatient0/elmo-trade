import { useState, useLayoutEffect } from 'preact/hooks';
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

    const [timerTicking, setTimerTicking] = useState(false);

    const startTimer = () => {
        setTimerTicking(true);
    };

    const stopTimer = () => {
        setTimerTicking(false);
    };

    useLayoutEffect(() => {
        if (timerTicking) {
            const timer = setTimeout(() => {
                setActiveSlide((activeSlide + 1) % slides.length);
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [timerTicking, activeSlide]);

    return (
        <div class="carousel-wrapper">
            <div class="project-carousel">
                {slides.map((project, index) => (
                    <div class={"project-container " + getClass(index, activeSlide, slides.length)} onMouseEnter={stopTimer} onMouseLeave={startTimer}>
                        <div class="project-image" style={`background-image: url('${project.image[0]}'); background-position: ${project.image[1]}px ${project.image[2]}px;` + (project.image[3] != 0 ? ` background-size: ${project.image[3]}px ${project.image[4]}px` : '')} />
                        <div class="project-footer">
                            <p class="project-title">{project.title}</p>
                            <p class="subbody2">{project.address}</p>
                        </div>
                        <div class="project-year">
                            {project.year.map((year) => (
                                <p class="body2">{year}</p>
                            ))}
                        </div>
                        <a href={project.link}>
                            <div class="project-info">
                                <p>{project.info}</p>
                            </div>
                        </a>
                    </div>
                ))}
                <div class="next-btn" onClick={() => setActiveSlide((activeSlide + 1) % slides.length)} />
                <div class="prev-btn" onClick={() => setActiveSlide((activeSlide - 1 + slides.length) % slides.length)} />
            </div>
            <div class="gallery-navigation">
                {slides.map((project, index) => (
                    <div class="navigation-square" style={(index == activeSlide ? "background-color: #0D7EE1" : "")} onClick={() => setActiveSlide(index)} />
                ))}
            </div>
        </div>
    )
}