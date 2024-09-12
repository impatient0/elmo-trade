import { useState, useLayoutEffect } from 'preact/hooks';
import '../styles/letters.css';

export default function LettersGallery({ letters }) {

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
            const timer = setTimeout(() => { setActiveSlide((activeSlide + 1) % letters.length) }, 5000);
            return () => clearTimeout(timer);
        }
    }, [activeSlide, timerTicking]);

    return (
        <div class="letters-container">
            <div class="logos">
                {letters.map((letter, index) => (
                    <img src={letter.logo} style={"scale: " + letter.logo_scale * (index == activeSlide ? 1.2 : 1)} onMouseEnter={() => { setActiveSlide(index); stopTimer() }} onMouseLeave={startTimer} />
                ))}
            </div>
            <div class="letter-frame">
                {letters.map((letter, index) => (
                    <div class="letter" style={index == activeSlide ? '' : 'opacity: 0'}>
                        <div class="letter-text">
                            <p class="title2">Рекомендательное письмо</p>
                            <p class="headline2">{letter.title}</p>
                            {letter.text.map((line) => (
                                <p>{line}</p>
                            ))}
                            <img src={letter.logo} class="letter-logo" style={"width: " + letter.logo_scale * 25 + "%; height: auto"}/>
                            <p class="title1">{letter.signature}</p>
                        </div>
                        <img src={letter.image} class="letter-image"/>
                        {/* <iframe src={letter.pdf} height="500px"/> */}
                    </div>
                ))}
            </div>
        </div>
    );
}