import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import { Service } from "../data";
import { GreaterIcon } from "../Icons";
const Services = () => {


  const ServicesRender = Service.map(({ description, img, title ,alt}, idx) => (
    <section
      key={idx}
      className={`${idx % 2 ? "bg-transparent" : "bg-[#f2f4f7]"} py-3`}
    >
      <Heading classname="font-semibold capitalize">{title}</Heading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-9 items-center px-9 xl:max-w-7xl mx-auto">
        {idx % 2 ? (
          <>
            <div className="md:col-span-1">
              <img src={`/images/${img}.jpg`} alt={alt} />
            </div>
            <div className="md:col-span-2">
              <p className="text-xl text-[#848484] leading-loose">
                {description}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="md:col-span-2">
              <p className="text-xl text-[#848484] leading-loose">
                {description}
              </p>
            </div>
            <div className="md:col-span-1">
              <img src={`/images/${img}.jpg`} alt="" className="" />
            </div>
          </>
        )}
      </div>
    </section>
  ));
  return (
    <>
      <section className="h-[350PX] bg-cover bg-center bg-[url('/images/about-bg-2.jpg')] relative">
      <div className="absolute bg-[#000000b3] inset-0"></div>
      <div className="z-10 relative max-w-6xl  xl:max-w-7xl px-7 mx-auto flex flex-col justify-between h-full py-5">
        <div className="flex-grow flex justify-center items-center w-full">
          <h2 className="uppercase text-4xl tracking-wider text-[#55F229]  font-semibold">services</h2>
        </div>
        <div>
          <h5 className="flex items-center capitalize gap-2 text-white">
            <Link to={"/"}> home </Link>
            <GreaterIcon/> 
            <span className="text-[#55F229]">services</span>
          </h5>
        </div>
      </div>
      
      </section>

      <section className="py-11">
        <div className="xl:max-w-6xl mx-auto text-[#03318C] space-y-3 px-8 xl:px-0">
          <h2 className="capitalize font-semibold text-4xl">
            <span className="uppercase">mep</span> solutions
          </h2>
          <p className="text-xl tracking-widest capitalize">
            <span>alfamec</span> delivers specialized infrastructure and safety
            systems: integrated Fire Fighting, Fire Alarm Systems, comprehensive
            industrial Piping, and Electrical Works. We guarantee regulatory
            compliance and robust system integration, ensuring client facilities
            are predictable, safe, and operationally reliable.
          </p>
        </div>
      </section>

      {ServicesRender}
    </>
  );
};

export default Services;
