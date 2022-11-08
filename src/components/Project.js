
const Project = ({ project }) => {
    return (
        <div
            className="col-xl-3 col-lg-4 col-md-6 col-12 
            border border-white"
        >
            <video className="mw-100 pt-4" src={project.video} controls></video>
            <div className="px-4 py-4">
                <h3>{project.name}</h3>
                <p>{project.date}</p>
                <p>{project.description}</p>
                <a
                    className="text-white d-block btn btn-primary mb-2"
                    href={`https://github.com/JohnXander/${project.repoSlug}`}
                >
                    {project.repo2Slug && <span>Front-End</span>} Repo
                </a>
                {project.repo2Slug &&
                    <a
                        className="text-white d-block btn btn-primary mb-2"
                        href={`https://github.com/JohnXander/${project.repo2Slug}`}
                    >
                        Go to Back-End Repo
                    </a>
                }
                {project.tags.map((t, idx) => {
                    if (idx === project.tags.length - 1) {
                        return <span className="text-secondary">{t}</span>
                    } else {
                        return <span className="text-secondary">{t}, </span>
                    }
                })}
            </div>
        </div>
    )
}

export default Project