import data from '../db/db.json'
import Project from './Project'

const Projects = () => {
    return (
        <div className="container text-center bg-primary">
            <div className="row">
                {data.projects.map(project => {
                    return <Project project={project} />
                })}
            </div>
        </div>
    )
}

export default Projects