import { useRef } from "react"

import Background from "./components/Background"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Profile from "./components/Profile"
import Projects from "./components/Projects"

const App = () => {
  const profile = useRef(null)
  const projectSection = useRef(null)
  const background = useRef(null)
  const sections = [profile, projectSection, background]

  return (
    <div>
      <Header sections={sections} />
      <Profile profile={profile} />
      <Projects projectSection={projectSection} />
      <Background background={background} />
      <Footer />
    </div>
  )
}

export default App