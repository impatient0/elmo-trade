import '../styles/services.css';

export default function Service({ title, description, optimizedSrc, offsets, size, link, id }) {

    return (
        <div class="service-container" id={id} >
            <div 
                class="service-image" 
                id={"bgi_" + id} 
                style={`background-image: url('${optimizedSrc}'); background-position: ${offsets[0]}px ${offsets[1]}px; background-size: ${size[0]}px ${size[1]}px`} 
            />
            <div id={"hdr_" + id} style="opacity:1" class="service-title">{title.map((title_line) => (
                <p>{title_line}</p>
            ))}</div>
            <div class="service" id={"srv_" + id} onclick={"window.location.href='" + link + "';"}>
                <img class="service-icon" src='/icons/lightning.svg' width="115" height="191" />
                <p id={"dsc_" + id}>{description}</p>
                <div id={"btn_" + id} class="service-button">
                    <img src='/icons/buttons/service-button.svg' width="7.5" height="15" />
                </div>
            </div>
        </div>
    )
}