
const Header = ({ sections }) => {

    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary p-4">
            <ul className="navbar-nav">
                <li
                    className="nav-item nav-link"
                    onClick={() => scrollToSection(sections[0])}
                    style={{ cursor: 'pointer' }}
                >
                    Profile
                </li>
                <li
                    className="nav-item nav-link"
                    onClick={() => scrollToSection(sections[1])}
                    style={{ cursor: 'pointer' }}
                >
                    Projects
                </li>
                <li
                    className="nav-item nav-link"
                    onClick={() => scrollToSection(sections[2])}
                    style={{ cursor: 'pointer' }}
                >
                    Background
                </li>
            </ul>
        </nav>
    )
}

export default Header