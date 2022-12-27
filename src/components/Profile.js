import ProfilePic from '../assets/img/profile-pic.jpg'

const Profile = ({ profile }) => {
    return (
        <div className="container text-center" ref={profile}>
            <h2 className='my-4 py-4 border-bottom border-top border-secondary'>Profile</h2>
            <div className="row">
                <div className="col-md-6">
                    <img className="text-center rounded-circle w-75" src={ProfilePic} alt="" />
                </div>
                <div className="col-md-6 text-start d-flex flex-column justify-content-center">
                    <h1 className='mt-3'>John Bloxam</h1>
                    <h4 className='mb-3'>Passionate Full-Stack Developer</h4>
                    <p>🔍 #OpenToWork</p>
                    <p>🌱 Recently a software engineering trainee at Boolean UK</p>
                    <p>🔭 Currently exploring the power of the T3-Stack</p>
                    <p>🎓 My background is in TEFL but I reskilled as a programmer</p>
                    <p>⚡ Fun fact: I can speak Spanish and Russian</p>
                    <div className='my-3'>
                        <a
                            className='btn btn-primary mt-2'
                            style={{ marginRight: '1rem' }}
                            href='https://github.com/JohnXander'
                        >💻 GitHub
                        </a>
                        <a
                            className='btn btn-primary mt-2'
                            style={{ marginRight: '1rem' }}
                            href='https://www.codewars.com/users/JohnXander'
                        >🥷 Codewars
                        </a>
                        <a
                            className='btn btn-primary mt-2'
                            style={{ marginRight: '1rem' }}
                            href='https://www.linkedin.com/in/john-bloxam-210207250'
                        >
                            💼 LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile