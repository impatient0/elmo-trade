import { useState } from 'preact/hooks';
import '../styles/dropdown-btn.css';

export default function DropdownBtn({ btnText, btnLink, menuTexts, menuLinks }) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div class="dropdown-container" onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}>
            <a class="dropdown-btn" href={btnLink}>{btnText}</a>
            <ul style={isHovered ? ("display: block; height: " + menuTexts.length * 45 + "px; opacity: 1; transform: translateY(0); top: 33px") : "top: 0"}>
                {
                    menuTexts.map((menuText, index) => (
                        <li style={isHovered ? "height:45px" : "height:0"}><a class="dropdown-item" href={menuLinks[index]}>{menuText}</a></li>
                    ))
                }
            </ul>
        </div>
    )
}