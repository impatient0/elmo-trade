import { useState } from 'preact/hooks';
import '../styles/letters.css';

export default function LettersGallery({ letters }) {

    const [activeSlide, SetActiveSlide] = useState(0);

    return (
        <div class="letters-container">
            <div class="logos">
                {letters.map((letter, index) => (
                    <img src={letter.logo} onMouseEnter={() => SetActiveSlide(index)} />
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
                            <img src={letter.logo} class="letter-logo"/>
                            <p class="title1">{letter.title}</p>
                        </div>
                        <img src={letter.image} />
                    </div>
                ))}
            </div>
        </div>
    );
}