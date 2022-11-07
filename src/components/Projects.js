import Project from './Project'

const projects = [
    {
        "name": "Stop the Bus",
        "ghRepoSlug": "stop-the-bus-client",
        "ghRepo2Slug": "stop-the-bus-server",
        "description": "An app version of the popular TEFL classroom game.",
        "date": "Oct 2022"
    },
    {
        "name": "Scratch Match",
        "ghRepoSlug": "scratch-match",
        "ghRepo2Slug": "",
        "description": "A scratch map app where you can network with other travellers.",
        "date": "Aug 2022"
    },
    {
        "name": "JX Problems",
        "ghRepoSlug": "jx-problems",
        "ghRepo2Slug": "",
        "description": "10 katas created for Codewars.",
        "date": "Jul 2022"
    },
    {
        "name": "Mypography",
        "gh-repo-slug": "mypography",
        "ghRepo2Slug": "",
        "description": "An app that turns your handwriting into a font.",
        "date": "Jul 2022"
    },
    {
        "name": "Digital Picture Frame",
        "ghRepoSlug": "digital-picture-frame",
        "ghRepo2Slug": "",
        "description": "An app version of a digital picture frame built as an anniversary present for my girlfriend.",
        "date": "Jun 2022"
    },
    {
        "name": "Bangman",
        "ghRepoSlug": "bang-bang-man",
        "ghRepo2Slug": "",
        "description": "A parody app version of Hangman built as a joke for my coding classmates (one of them had a cat called Bang Bang).",
        "date": "May 2022"
    },
    {
        "name": "Boolean Random Name Picker",
        "ghRepoSlug": "boolean-random-name-picker",
        "ghRepo2Slug": "",
        "description": "A random name picker app built to help my tech coach randomly select students from the class.",
        "date": "May 2022"
    }
]

const Projects = () => {
    return (
        <div className="container text-center bg-primary">
            <div className="row">
                {projects.map(project => {
                    return <Project project={project} />
                })}
            </div>
        </div>
    )
}

export default Projects