import kh from '../assets/kh.jpg'
import vn from '../assets/vn.jpg'
import mm from '../assets/mm.jpg'
import my from '../assets/my.jpg'
import ua from '../assets/ua.jpg'
import kz from '../assets/kz.jpg'
import uz from '../assets/uz.jpg'
import ae from '../assets/ae.jpg'
import khFlag from '../assets/khFlag.png'
import vnFlag from '../assets/vnFlag.png'
import mmFlag from '../assets/mmFlag.png'
import myFlag from '../assets/myFlag.png'
import uaFlag from '../assets/uaFlag.png'
import kzFlag from '../assets/kzFlag.png'
import uzFlag from '../assets/uzFlag.png'
import aeFlag from '../assets/aeFlag.png'

const countries = [
    { name: "Cambodia", year: 2015, img: kh, flag: khFlag },
    { name: "Vietnam", year: 2016, img: vn, flag: vnFlag },
    { name: "Myanmar", year: 2016, img: mm, flag: mmFlag },
    { name: "Malaysia", year: 2017, img: my, flag: myFlag },
    { name: "Ukraine", year: 2019, img: ua, flag: uaFlag },
    { name: "Kazakhstan", year: 2019, img: kz, flag: kzFlag },
    { name: "Uzbekistan", year: 2019, img: uz, flag: uzFlag },
    { name: "UAE", year: 2021, img: ae, flag: aeFlag }
]

const Background = () => {
    return (
        <div className="container text-center">
            <h2 className='my-4 py-4 border-bottom border-top border-secondary'>Life Before Coding</h2>
            <p className='mb-4'>Before I became a programmer, I taught English as a foreign language in 12 countries.</p>
            <div className="row">
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
            </div>
        </div>
    )
}

export default Background