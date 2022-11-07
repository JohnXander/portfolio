

const Project = ({ project }) => {
    return (
        <div
            className="col-lg-4 col-md-6 col-12 
            border border-white"
        >
            <h3>{project.name}</h3>
            <a
                className="text-white"
                href={`https://github.com/JohnXander/${project.ghRepoSlug}`}
            >
                Go to {project.name === "Stop the Bus" && <span>Front-End</span>} Repo
            </a>
            {project.ghRepo2Slug &&
                <a
                    className="text-white d-block"
                    href={`https://github.com/JohnXander/${project.ghRepo2Slug}`}
                >
                    Go to Back-End Repo
                </a>
            }
        </div>
    )
}

export default Project