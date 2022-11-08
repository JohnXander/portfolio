import ProfilePic from '../assets/profile-pic.jpg'

const Profile = () => {
    return (
        <div className="container text-center">
            <h2 className='my-4 py-4 border-bottom border-top border-secondary'>Profile</h2>
            <div className="row">
                <div className="col-md-6">
                    <img className="text-center rounded-circle w-75" src={ProfilePic} alt="" />
                </div>
                <div className="col-md-6 text-start d-flex flex-column justify-content-center">
                    <h1 className='mt-3'>John Bloxam</h1>
                    <h4 className='mb-3'>Full Stack Developer</h4>
                    <p>🔍 Looking for a position as a Junior Developer.</p>
                    <p>🌱 Recent graduate of a six-month, full-time course in software development.</p>
                    <p>🎓 My background is in TEFL but I reskilled as a programmer.</p>
                    <p>⚡ Fun fact: I can speak Spanish and Russian.</p>
                    <p>📧 Email: johnbloxam5@gmail.com</p>
                    <div className='my-3'>
                        <a
                            className='btn btn-primary'
                            style={{ marginRight: '1rem' }}
                            href='https://www.codewars.com/users/JohnXander'
                        >🥷 Codewars
                        </a>
                        <a
                            className='btn btn-primary'
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