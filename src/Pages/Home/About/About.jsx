import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="h-[500px]">
           
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                <img src={person} className="max-w-sm rounded-lg shadow-2xl" />
                <img src={parts} className="w-1/2 absolute top-1/2 left-1/3 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5'>
                <h2 className='text-3xl text-orange-500 font-bold text-center mt-10 pt-5'>About US</h2>
                    <h1 className="text-4xl text-center font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-warning">get more info</button>
                </div>
            </div>

        </div>
    );
};

export default About;