import Project from './Project'
import projects from '../data/projectData'

const Projects = ({ projectSection }) => {
    return (
        <div className="container text-center" ref={projectSection}>
            <h2 className='my-4 py-4 border-bottom border-top border-secondary'>Projects</h2>
            <div className="row">
                {projects.map((project, idx) => {
                    return <Project key={idx} project={project} />
                })}
            </div>
        </div>
    )
}

export default Projects