import { useEffect,  useState } from "react";

const Slider = () => {
  const Slides = ["slide1", "slide2"];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % Slides.length);
      
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  const SlidesRender = Slides.map((img, idx) => (
    <div key={idx} className="w-full h-full flex-shrink-0">
      <img  src={`/images/${img}.webp`} alt="bg-image" className="w-full h-full object-cover"  />
    </div>
  ));
  return (
    <>

      <section className={`md:h-[600px] overflow-hidden`}>
        <div className={`flex w-full transition-transform duration-700`} style={{transform : `translateX(-${index * 100}%)`}}>{SlidesRender}</div>
      </section>
    </>
  );
};

export default Slider;


