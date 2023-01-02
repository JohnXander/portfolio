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
                    <h4 className='mb-3'>Junior Full-Stack Software Developer</h4>
                    <p>🌱 Recent graduate of a 6 month coding bootcamp</p>
                    <p>🔭 Currently learning TypeScript, NextJS & tRPC</p>
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