import { Link } from "react-router-dom";
import { ProductsPage } from "../data";
import { GreaterIcon } from "../Icons";

const Product = () => {
  const ProductsRender = ProductsPage.map(
    ({ description, img, title,alt }, idx) => (
      <section
        key={idx}
        className={`${idx % 2 ? "bg-transparent" : "bg-[#f2f4f7]"} py-5`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-9 items-center px-9 xl:max-w-7xl mx-auto">
          {idx % 2 ? (
            <>
              <div className="md:col-span-1">
                <img src={`/images/${img}.jpg`} alt={alt}/>
              </div>
              <div className="md:col-span-2 space-y-5">
                <h2 className="text-4xl text-[#03318C] font-semibold">
                  {title}
                </h2>
                <p className="text-xl text-[#848484] leading-loose">
                  {description}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="md:col-span-2 space-y-5">
                <h2 className="text-4xl text-[#03318C] font-semibold">
                  {title}
                </h2>
                <p className="text-xl text-[#848484] leading-loose">
                  {description}
                </p>
              </div>
              <div className="md:col-span-1">
                <img src={`/images/${img}.jpg`} alt={alt} />
              </div>
            </>
          )}
        </div>
      </section>
    )
  );
  return (
    <>
      <section className="h-[350PX] bg-cover bg-center bg-[url('/images/hero.webp')] relative">
      <div className="absolute bg-[#000000b3] inset-0"></div>
      <div className="z-10 relative max-w-6xl  xl:max-w-7xl px-7 mx-auto flex flex-col justify-between h-full py-5">
        <div className="flex-grow flex justify-center items-center w-full">
          <h2 className="uppercase text-4xl tracking-wider text-[#55F229]  font-semibold">products</h2>
        </div>
        <div>
          <h5 className="flex items-center capitalize gap-2 text-white">
            <Link to={"/"}> home </Link>
            <GreaterIcon /> 
            <span className="text-[#55F229]">products</span>
          </h5>
        </div>
      </div>
      
      </section>
      {ProductsRender}
    </>
  );
};
export default Product;
