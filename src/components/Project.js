const Project = ({ project }) => {
    return (
        <div
            className="col-lg-4 col-md-6 col-12 
            border border-white"
        >
            <h3>{project.name}</h3>
        </div>
    )
}

export default Project