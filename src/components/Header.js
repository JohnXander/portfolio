
const Header = ({ sections }) => {

    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark bg-dark pt-4 px-3"
            style={{ paddingBottom: '0' }}
        >
            <ul className="navbar-nav">
                <li
                    className="nav-item nav-link"
                    onClick={() => scrollToSection(sections[0])}
                    style={{ cursor: 'pointer', fontSize: '1.25rem', paddingRight: '1.25rem' }}
                >
                    Profile
                </li>
                <li
                    className="nav-item nav-link"
                    onClick={() => scrollToSection(sections[1])}
                    style={{ cursor: 'pointer', fontSize: '1.25rem', paddingRight: '1.25rem' }}
                >
                    Projects
                </li>
                {/* <li
                    className="nav-item nav-link"
                    onClick={() => scrollToSection(sections[2])}
                    style={{ cursor: 'pointer', fontSize: '1.25rem', paddingRight: '1.25rem' }}
                >
                    Background
                </li> */}
            </ul>
        </nav >
    )
}

export default Header