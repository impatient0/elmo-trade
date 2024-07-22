import '../styles/project-gallery.css'

export default function ProjectGallery({ slides }) {
    return (
        <div class="project-gallery">
            {slides.map((project) => (
                <div class="project-container" onClick={() => window.location.href = project.link}>
                    <img src={project.image} class="project-image" />
                    <p class="project-year">{project.year}</p>
                    <p class="project-title">{project.title}</p>
                </div>
            ))}
        </div>
    )
}