import kh from '../assets/img/kh.jpg'
import vn from '../assets/img/vn.jpg'
import mm from '../assets/img/mm.jpg'
import my from '../assets/img/my.jpg'
import ua from '../assets/img/ua.jpg'
import kz from '../assets/img/kz.jpg'
import uz from '../assets/img/uz.jpg'
import ae from '../assets/img/ae.jpg'
import khFlag from '../assets/img/khFlag.png'
import vnFlag from '../assets/img/vnFlag.png'
import mmFlag from '../assets/img/mmFlag.png'
import myFlag from '../assets/img/myFlag.png'
import uaFlag from '../assets/img/uaFlag.png'
import kzFlag from '../assets/img/kzFlag.png'
import uzFlag from '../assets/img/uzFlag.png'
import aeFlag from '../assets/img/aeFlag.png'

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

const Background = ({ background }) => {
    return (
        <div className="container text-center" ref={background}>
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