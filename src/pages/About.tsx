
import Heading from "../components/Heading";
import { Solutions } from "../data";
import { Link } from "react-router-dom";
import { GreaterIcon } from "../Icons";

const About = () => {
  const SolutionsCardRender = Solutions.map(({ img, paragraph }, idx) => (
    <div
      key={idx}
      className="flex flex-col items-center text-center space-y-5 bg-[#fff] border border-[#00000020] p-6 lg:p-9 xl:p-11"
    >
      <img src={`/images/${img}.png`} alt="" className="w-16" />
      <p className="text-lg text-[#848484]">{paragraph}</p>
    </div>
  ));
  return (
    <>
      <section className="h-[350PX] bg-cover bg-center bg-[url('/images/bg-2.jpg')] relative ">
        <div className="absolute bg-[#000000b3] inset-0"></div>
        <div className="z-10 relative max-w-6xl  xl:max-w-7xl px-7 mx-auto flex flex-col justify-between h-full py-5">
          <div className="flex-grow flex justify-center items-center w-full">
            <h2 className="uppercase text-4xl tracking-wider text-[#55F229]  font-semibold">
              about
            </h2>
          </div>
          <div>
            <h5 className="flex items-center capitalize gap-2 text-white">
              <Link to={"/"}> home </Link>
              <GreaterIcon />
              <span className="text-[#55F229]">about</span>
            </h5>
          </div>
        </div>
      </section>

      <section className="py-11 ">
        <Heading classname="font-semibold capitalize">about <span className="uppercase">alfamec</span></Heading>
        <div className="py-8 max-w-xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto space-y-4 text-[#848484] text-lg">
          <p>
            We are a full service engineering and manufacturing firm specialized
            in process equipment and facility infrastructure. Our expertise
            spans automated cooling towers, hydraulic/ pneumatic systems,
            automation, reactors tanks, heat exchangers and MEP solutions.
          </p>
          <p>
            Customized Engineering Solutions ALFAMEC is your strategic
            engineering partner, delivering bespoke, integrated
            electro-mechanical solutions tailored to eliminate production
            bottlenecks. We significantly compress wasted cycle time to elevate
            systemic efficiency, ensuring clients achieve predictable production
            scalability and maximum operational throughput.
          </p>
          <p>
            <span className="text-xl font-bold uppercase text-[#03318C]">Mission </span>Delivers comprehensive, turnkey electro mechanical systems
            and maintenance. Partners with Egyptian industrial clients in
            Chemical, Pharma, Food, and FMCG to achieve superior operational
            excellence, quality, and sustainable commercial growth.
          </p>
          <p>
           <span className="text-xl font-bold uppercase text-[#03318C]">vision </span> Drives the integrated engineering sector globally, defining
            new standards for turnkey quality, innovation, and project
            reliability. Leads as the preferred provider for complex industrial
            solutions across Egypt, the Middle East, and key  export markets.
          </p>
        </div>
      </section>

      <section className="py-11 bg-[#f8f9fa]">
        <Heading classname="font-semibold capitalize">
          <span className="uppercase">alfamec</span> provides customized
          solutions for:
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-16 gap-6 max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl mx-auto ">
          {SolutionsCardRender}
        </div>
      </section>
    </>
  );
};

export default About;
