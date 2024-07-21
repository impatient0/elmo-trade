import '../styles/services.css';
export default function Service({ title, description, image, id }) {

    return (
        <div class="service-container" id={id} >
            <div class="background-image" style={'background-image: linear-gradient(to bottom, rgba(13, 126, 225, 0.05), rgba(13, 126, 225, 0.2)), url("' + image + '")'} />
            <div class="service" id={"srv_" + id}>
                <a id={"hdr_" + id} style="opacity:1"><b>{title}</b></a>
                <a id={"dsc_" + id}>{description}</a>
                <button id={"btn_" + id}>Подробнее</button>
            </div>
        </div>
    )
}