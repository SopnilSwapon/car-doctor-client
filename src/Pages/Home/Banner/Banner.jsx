 import img1 from '../../../assets/images/banner/1.jpg'
 import img2 from '../../../assets/images/banner/2.jpg'
 import img3 from '../../../assets/images/banner/3.jpg'
 import img4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative h-[550px] w-full">
          <img src={img1} className="w-full rounded-lg " />
          <div className="absolute rounded-lg gap-3 bg-gradient-to-r from-[#151515] to-[#15151500] h-full space-y-4 pt-24 pl-16 text-white ">
           <h2 className='text-5xl font-bold '>Affordable <br />Price <br /> For Car <br /> Servicing</h2>
           <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
           <button className='btn btn-warning '>discover</button>
           <button className='btn btn-outline outline-4 ml-2 btn-warning'>latest project</button>
          </div>
          <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative h-[550px] w-full">
          <img src={img2} className="w-full" />
          <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative h-[550px]  w-full">
          <img src={img3} className="w-full" />
          <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative h-[550px] w-full">
          <img src={img4} className="w-full" />
          <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;