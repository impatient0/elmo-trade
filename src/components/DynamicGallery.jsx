import { useState, useLayoutEffect } from 'preact/hooks';
import '../styles/project-carousel.css';
import '../styles/dynamic-gallery.css';

function convertIntervals(intervals) {
    const numbers = [];
    intervals.forEach(interval => {
        const [start, end] = interval.split('-').map(Number);
        if (end == undefined) {
            numbers.push(...interval.split(', ').map(Number));
        } else if (start <= end) {
            for (let i = start; i <= end; i++) {
                numbers.push(i);
            }
        } else {
            throw new Error('bad interval');
        }
    });
    return numbers;
}

function getSlideState(year, yearList, yearActive, allActive) {
    if (allActive) {
        return true;
    }
    let years = convertIntervals(year);
    for (let i = 0; i < yearList.length; i++) {
        console.log(yearActive[i] + ' ' + yearList[i] + ' ' + years + ' ' + (years.includes(yearList[i])));
        if (yearActive[i] && ((years.includes(yearList[i])) || (i == yearList.length - 1 & years[0] < yearList[i]))) {
            return true;
        }
    }
    return false;
}

export default function DynamicGallery({ slides }) {

    let years = [2024, 2023, 2022, 2021, 2020, 2019, 2018,];

    const [allActive, setAllActive] = useState(true);

    const [yearActive, setYearActive] = useState(new Array(years.length).fill(false));

    const makeAllActive = () => {
        setAllActive(true);
        setYearActive(new Array(years.length).fill(false));
    }

    const toggleActive = (year_index) => {
        setAllActive(false);
        setYearActive((prevState) => {
            const newState = new Array(years.length).fill(false);
            newState[year_index] = !prevState[year_index];
            if (!newState.some(val => val == true)) {
                setAllActive(true);
            }
            return newState;
        });
    }

    return (
        <div class="dynamic-gallery-container">
            <div class="gallery-navigation">
                <button class={"gallery-navigation-button" + (allActive ? " active" : "")} onClick={makeAllActive}>Все проекты</button>
                {years.map((year, year_index) => (
                    <button class={"gallery-navigation-button" + (yearActive[year_index] ? " active" : "")} onClick={() => toggleActive(year_index)}>{year + (year_index == years.length - 1 ? " и ранее" : "")}</button>
                ))}
            </div>
            <div class="dynamic-gallery">
            {slides.map((project, index) => (
                    <div class={"project-container" + (getSlideState(project.year, years, yearActive, allActive) ? "" : " collapsed")}>
                        <div class="project-image" style={`background-image: url('${project.optimizedSrc}'); background-position: ${project.offsets[0]}px ${project.offsets[1]}px; background-size: cover;`} />
                        <div class="project-footer">
                            <p class="project-title">{project.title}</p>
                            <p class="subbody2">{project.address}</p>
                        </div>
                        <div class="project-year">
                            {project.year.map((year) => (
                                <p class="body2">{year != 0 ? year : "Выполнено"}</p>
                            ))}
                        </div>
                        <a href={project.link}>
                            <div class="project-info">
                                <p>{project.info}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}