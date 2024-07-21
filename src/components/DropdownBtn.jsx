import { useState } from 'preact/hooks';
import '../styles/dropdown-btn.css';

export default function DropdownBtn({ btnText, btnLink, menuTexts, menuLinks }) {

    const [isHovered, setIsHovered] = useState(false);

    const HandleHover = () => {
        console.log("hover");
    }

    return (
        <div class="dropdown-container" onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}>
            <a class="dropdown-btn" href={btnLink}>{btnText}</a>
            <ul style={isHovered ? ("display: block; height: " + menuTexts.length * 45 + "px; opacity: 1; transform: translateY(0);") : ""}>
                {
                    menuTexts.map((menuText, index) => (
                        <li style={isHovered ? "display:block" : "display:none"}><a class="dropdown-item" href={menuLinks[index]}>{menuText}</a></li>
                    ))
                }
            </ul>
        </div>
    )
}