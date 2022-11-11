const Project = ({ project }) => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-12 border border-secondary mb-4">
            <video className="mw-100 mt-4 border border-secondary rounded" src={project.video} controls></video>
            <div className="px-4 pt-3 pb-4">
                <h3>{project.name}</h3>
                <p className="text-secondary m-0 mb-2">{project.date}</p>
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
                        Back-End Repo
                    </a>
                }
                {project.website &&
                    <a
                        className="text-white d-block btn btn-primary mb-2"
                        href={project.website}
                    >
                        Website
                    </a>
                }
                <div className="mt-3">
                    <span className="text-secondary"># </span>
                    {project.tags.map((t, idx) => {
                        if (idx === project.tags.length - 1) {
                            return <span className="text-secondary">{t}</span>
                        } else {
                            return <span className="text-secondary">{t}, </span>
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Project