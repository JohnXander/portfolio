import { useState } from 'react'
import countries from '../data/backgroundData'

const Background = ({ background }) => {
    const [openPhotos, setOpenPhotos] = useState(false)

    const handleClick = () => setOpenPhotos(!openPhotos)

    return (
        <div className="container text-center" ref={background}>
            <h2 className='my-4 py-4 border-bottom border-top border-secondary'>Life Before Coding</h2>
            <p className='mb-4'>Before I became a programmer, I taught English as a foreign language in 12 countries.</p>
            <button onClick={handleClick} className='btn btn-primary mb-4'>
                {!openPhotos ? 'Reveal Photos' : 'Hide Photos'}
            </button>
            {openPhotos && <div className="row">
                {countries.map((project, idx) => {
                    return (
                        <div
                            key={idx}
                            className="col-xl-3 col-lg-4 col-md-6 col-12 
                            border border-secondary mb-4 position-relative">
                            <img
                                className='w-100 h-75 mt-4'
                                style={idx !== 6 ? { objectFit: 'cover' } : { objectFit: 'cover', objectPosition: 'left' }}
                                src={project.img}
                                alt={project.name}
                            />
                            <p className='my-3'>{project.name}, {project.year}</p>
                            {project.flag && <img
                                className='position-absolute'
                                style={{ width: '3rem', top: '1.5rem', left: '1.5rem' }}
                                src={project.flag}
                                alt={project.name}
                            />}
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}

export default Background