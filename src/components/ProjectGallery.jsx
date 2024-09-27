import '../styles/project-gallery.css'

export default function ProjectGallery({ slides }) {
    return (
        <div class="project-gallery">
            {slides.map((project) => (
                <div class="project-container" onClick={() => window.location.href = project.link}>
                    <div class="project-image" style={`background-image: url('${project.image[0]}'); background-position: ${project.image[1]}px ${project.image[2]}px; background-size: ${project.image[3]}px ${project.image[4]}px`} />
                    <p class="project-year">{project.year != 0 ? project.year : "Выполнено"}</p>
                    <p class="project-title">{project.title}</p>
                </div>
            ))}
        </div>
    )
}