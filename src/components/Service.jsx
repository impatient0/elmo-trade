import '../styles/services.css';
export default function Service({ title, description, image, link, id }) {

    return (
        <div class="service-container" id={id} >
            <div class="service-image" id={"bgi_" + id} style={'background-image: linear-gradient(to bottom, rgba(13, 126, 225, 0.05), rgba(13, 126, 225, 0.2)), url("' + image + '")'} />
            <div id={"hdr_" + id} style="opacity:1" class="service-title">{title.map((title_line) => (
                <p>{title_line}</p>
            ))}</div>
            <div class="service" id={"srv_" + id}>
                <img class="service-icon" src='/icons/lightning.svg' width="115" height="191" />
                <p id={"dsc_" + id}>{description}</p>
                <div id={"btn_" + id} class="service-button" onclick={"window.location.href='" + link + "';"}>
                    <img src='/icons/buttons/service-button.svg' width="7.5" height="15" />
                </div>
            </div>
        </div>
    )
}