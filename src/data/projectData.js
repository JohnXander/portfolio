import KVid from '../assets/vid/kubud.mp4'
import STBVid from '../assets/vid/stop-the-bus.mp4'
import CMVid from '../assets/vid/cohort-manager.mp4'
import SMVid from '../assets/vid/scratch-match.mp4'
import JXVid from '../assets/vid/jx-problems.mp4'
import MYVid from '../assets/vid/mypography.mp4'
import DPFVid from '../assets/vid/digital-picture-frame.mp4'
import BMVid from '../assets/vid/bangman.mp4'
import BRNPVid from '../assets/vid/boolean-random-name-picker.mp4'

const projects = [
    {
        "name": "Kubud",
        "repoSlug": "kubud",
        "description": "An app that generates recipes based on the ingredients you have in your cupboard.",
        "date": "Dec 2022",
        "video": KVid,
        "website": "https://kubud-johnxander.vercel.app",
        "tags": ["TypeScript", "NextJS", "tRPC", "Prisma", "TailwindCSS", "Vercel"]
    },
    {
        "name": "Stop the Bus",
        "repoSlug": "stop-the-bus-client",
        "repo2Slug": "stop-the-bus-server",
        "description": "An app version of the popular TEFL classroom game.",
        "date": "Oct 2022",
        "video": STBVid,
        "tags": ["JavaScript", "Postgres", "React", "Express", "Node", "Prisma", "Insomnia", "CSS"]
    },
    {
        "name": "Cohort Manager",
        "repoSlug": "team-dev-client-c6",
        "repo2Slug": "team-dev-server-c6",
        "description": "Team project at Boolean UK.",
        "date": "Oct 2022",
        "video": CMVid,
        "website": "https://cohortmanager.netlify.app",
        "tags": ["JavaScript", "Postgres", "React", "Express", "Node", "Prisma", "Insomnia", "Material UI", "Agile", "Scrum", "AWS", "Netlify"]
    },
    {
        "name": "Scratch Match",
        "repoSlug": "scratch-match",
        "repo2Slug": "",
        "description": "A scratch map app where you can network with other travellers.",
        "date": "Aug 2022",
        "video": SMVid,
        "tags": ["JavaScript", "React", "CSS"]
    },
    {
        "name": "JX Problems",
        "repoSlug": "jx-problems",
        "repo2Slug": "",
        "description": "10 JavaScript katas created for Codewars with testing.",
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
        "website": "https://johnxander.github.io/mypography/",
        "tags": ["JavaScript", "HTML", "CSS"]
    },
    {
        "name": "Digital Picture Frame",
        "repoSlug": "digital-picture-frame",
        "repo2Slug": "",
        "description": "An app version of a digital picture frame built as an anniversary present for my girlfriend.",
        "date": "Jun 2022",
        "video": DPFVid,
        "website": "https://johnxander.github.io/digital-picture-frame/",
        "tags": ["JavaScript", "HTML", "CSS"]
    },
    {
        "name": "Bangman",
        "repoSlug": "bang-bang-man",
        "repo2Slug": "",
        "description": "A parody app version of Hangman built as a joke for my coding classmates (one of them had a cat called Bang Bang).",
        "date": "May 2022",
        "video": BMVid,
        "website": "https://johnxander.github.io/bang-bang-man/",
        "tags": ["JavaScript", "HTML", "CSS"]
    },
    {
        "name": "Boolean Random Name Picker",
        "repoSlug": "boolean-random-name-picker",
        "repo2Slug": "",
        "description": "A random name picker app built to help my tech coach randomly select students from the class.",
        "date": "May 2022",
        "video": BRNPVid,
        "website": "https://johnxander.github.io/boolean-random-name-picker/",
        "tags": ["JavaScript", "HTML", "CSS"]
    }
]

export default projects