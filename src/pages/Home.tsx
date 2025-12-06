import { Link } from "react-router-dom";
import { Products, Strenghts } from "../data";
import Slider from "../components/Slider";


const Home = () => {
  
  const RenderCards = Strenghts.map(({ description, img, title ,alt}, idx) => (
    <div
    key={idx} 
      className="flex flex-col items-center space-y-3 p-9 bg-[#222] text-white hover:scale-110 hover:shadow-2xl hover:shadow-black transition-all"
    >
      <img src={`/images/${img}.png`} className="w-20" loading="lazy" alt={alt} />
      <div className="text-center space-y-3">
        <h3 className="text-xl">{title}</h3>
        <p className="text-base">{description}</p>
      </div>
    </div>
  ));

  const RenderProducts = Products.map(({description ,img ,title ,alt,to,path} ,idx) => (
    <a href={`${path}#${to}`} key={idx}>
    <div  className="flex flex-col shadow-md rounded-lg  ">
      <h2 className="text-[#03318C] py-5 px-2  text-lg font-semibold relative before:content-[''] before:absolute before:border-2 before:left-0 before:top-3 before:border-[#55F229] before:h-10 before:rounded-md">
        {title}
      </h2>
      <img
        src={`/images/${img}.webp`}
        className="h-48 w-full object-contain"
        loading="lazy"
        alt={alt}
      />
      <p className="text-sm text-[#848484] p-4">{description}</p>
    </div>
    </a>
  ));
  return (
    <>
      {/* start section one */}
      {/* <section className="h-[600PX] bg-cover bg-center bg-[url('/images/slide1.webp')]">

      </section> */}
      <Slider/>
      {/* end section one */}

      {/* start section two */}
      <section className="bg-cover bg-center bg-[url('/images/about-bg.jpg')]">
        <h2 className="relative uppercase text-center py-8 text-4xl text-[#03318C] font-bold after:content-[''] after:absolute after:right-1/2  after:bottom-0 after:border-2 after:border-[#55F229] after:w-24 after:rounded-md after:translate-x-1/2">
          about alfamec
        </h2>
        <div className=" md:max-w-4xl px-6 lg:px-0 lg:max-w-5xl xl:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 py-12 items-center">
          <img
            src="/images/about-1.webp"
            className="lg:col-span-1"
            loading="lazy"
            alt="about alfamec"
          />
          <div className="lg:col-span-2 space-y-6 xl:space-y-12">
            <p className="text-2xl text-[#393939] font-semibold">
              We are a full service engineering and manufacturing firm.
              specialized in process equipment and facility infrastructure Our
              expertise spans automated cooling towers, hydraulic/ pneumatic
              systems, automation, reactors tanks, heat exchangers and MEP
              solutions.
            </p>
            <button className=" bg-[#55F229] hover:bg-[#87da71] transition-colors py-3 px-4 uppercase text-white font-bold rounded-md">
              <Link to="/about">more about us</Link>
            </button>
          </div>
        </div>
      </section>
      {/* end section two */}

      {/* start section three */}
      <section className="py-12 px-6 bg-cover bg-center bg-[url('/images/section3-bg.jpg')]">
        <h2 className="text-center text-[#55F229] capitalize text-4xl font-semibold">
          our strength
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-14 max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto gap-1 ">
          {RenderCards}
        </div>
        <p className="text-[#55F229] text-2xl max-w-3xl text-center mx-auto">
          ALFAMEC has the capability and confidence to provide designing,
          consultancy and guidance on product installation, on-site testing and
          commissioning for any MEPF project, regardless of size and complexity.
        </p>
      </section>
      {/* end section three */}

      {/* start section four */}
      <section className="py-20 px-10 xl:px-20">
        <h2 className="relative py-6 text-center capitalize text-[#03318C] text-5xl font-semibold after:content-[''] after:absolute after:right-1/2  after:bottom-0 after:border-2 after:border-[#55F229] after:w-24 after:rounded-md after:translate-x-1/2">
          our services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 py-16  gap-6 ">
          {RenderProducts}
        </div>
      </section>
      {/* end section four */}
    </>
  );
};

export default Home;
