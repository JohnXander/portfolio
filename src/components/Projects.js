import Project from './Project'
import STBVid from '../assets/stop-the-bus.mp4'
import SMVid from '../assets/scratch-match.mp4'
import JXVid from '../assets/jx-problems.mp4'
import MYVid from '../assets/mypography.mp4'
import DPFVid from '../assets/digital-picture-frame.mp4'
import BMVid from '../assets/bangman.mp4'
import BRNPVid from '../assets/boolean-random-name-picker.mp4'

const projects = [
    {
        "name": "Stop the Bus",
        "repoSlug": "stop-the-bus-client",
        "repo2Slug": "stop-the-bus-server",
        "description": "An app version of the popular TEFL classroom game.",
        "date": "Oct 2022",
        "video": STBVid,
        "tags": ["JavaScript", "PostgreSQL", "React", "Express", "Node", "Prisma", "Insomnia", "HTML", "CSS"]
    },
    {
        "name": "Scratch Match",
        "repoSlug": "scratch-match",
        "repo2Slug": "",
        "description": "A scratch map app where you can network with other travellers.",
        "date": "Aug 2022",
        "video": SMVid,
        "tags": ["JavaScript", "React", "HTML", "CSS"]
    },
    {
        "name": "JX Problems",
        "repoSlug": "jx-problems",
        "repo2Slug": "",
        "description": "10 katas created for Codewars.",
        "date": "Jul 2022",
        "video": JXVid,
        "tags": ["JavaScript", "Jasmine"]
    },
    {
        "name": "Mypography",
        "repoSlug": "mypography",
        "repo2Slug": "",
        "description": "An app that turns your handwriting into a font.",
        "date": "Jul 2022",
        "video": MYVid,
        "tags": ["JavaScript", "HTML", "CSS"]
    },
    {
        "name": "Digital Picture Frame",
        "repoSlug": "digital-picture-frame",
        "repo2Slug": "",
        "description": "An app version of a digital picture frame built as an anniversary present for my girlfriend.",
        "date": "Jun 2022",
        "video": DPFVid,
        "tags": ["JavaScript", "HTML", "CSS"]
    },
    {
        "name": "Bangman",
        "repoSlug": "bang-bang-man",
        "repo2Slug": "",
        "description": "A parody app version of Hangman built as a joke for my coding classmates (one of them had a cat called Bang Bang).",
        "date": "May 2022",
        "video": BMVid,
        "tags": ["JavaScript", "HTML", "CSS"]
    },
    {
        "name": "Boolean Random Name Picker",
        "repoSlug": "boolean-random-name-picker",
        "repo2Slug": "",
        "description": "A random name picker app built to help my tech coach randomly select students from the class.",
        "date": "May 2022",
        "video": BRNPVid,
        "tags": ["JavaScript", "HTML", "CSS"]
    }
]

const Projects = () => {
    return (
        <div className="container text-center">
            <h2>Projects</h2>
            <div className="row">
                {projects.map((project, idx) => {
                    return <Project key={idx} project={project} />
                })}
            </div>
        </div>
    )
}

export default Projects