import { Mail, Phone } from "lucide-react";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";
import { FacebookIcon, GreaterIcon, LinkedInIcon, WhatsappIcon } from "../Icons";

const Contact = () => {
  return (
    <>
      <section className="h-[350PX] bg-cover bg-center bg-[url('/images/bg-3.jpg')] relative">
        <div className="absolute bg-[#000000b3] inset-0"></div>
        <div className="z-10 relative max-w-6xl  xl:max-w-7xl px-7 mx-auto flex flex-col justify-between h-full py-5">
          <div className="flex-grow flex justify-center items-center w-full">
            <h2 className="uppercase text-4xl tracking-wider text-[#55F229]  font-semibold">
              contact
            </h2>
          </div>
          <div>
            <h5 className="flex items-center capitalize gap-2 text-white">
              <Link to={"/"}> home </Link>
              <GreaterIcon />
              <span className="text-[#55F229]">contact</span>
            </h5>
          </div>
        </div>
      </section>
      <section className="py-10">
        <Heading classname="font-bold capitalize">contact details</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:max-w-6xl sm:px-5 2xl:max-w-7xl mx-auto gap-4 py-8">
          <div className="bg-[#f8f9fa] space-y-5 p-3">
            <h3 className="text-2xl font-semibold text-[#03318C]">
              Global Contacts
            </h3>
            <div className="space-y-7">
              <div className="flex items-center gap-4">
                <div className="text-[#03318C]">
                  <Phone />
                </div>
                <div className="space-y-2">
                  <h5 className="text-xl capitalize ">call us:</h5>
                  <h6 className="text-[#848484]">+20 15 51289512</h6>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-[#03318C]">
                  <Mail />
                </div>
                <div className="space-y-2">
                  <h5 className="text-xl capitalize ">Mail us at:</h5>
                  <h6 className="text-[#848484]">info@alfamec-ia.com</h6>
                </div>
              </div>
              <div className="flex gap-10 text-3xl text-[#03318C]">
                <a
                  href="http://linkedin.com/company/alfamec-integrated-engineering-solutions"
                  className="hover:text-[#55F229] transition-colors"
                >
                  <LinkedInIcon aria-label="go to linkedin" />
                </a>
                <a
                  href="https://www.facebook.com/alfamec.integrated.engineering.solutions"
                  className="hover:text-[#55F229] transition-colors"
                >
                  <FacebookIcon aria-label="go to facebook" />
                </a>
                <a
                  href="https://wa.me/message/PTQVP33NLJ5WA1"
                  className="hover:text-[#55F229] transition-colors"
                >
                  <WhatsappIcon aria-label="go to whatsapp" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#f8f9fa] space-y-5 p-3">
            <h3 className="text-2xl font-semibold text-[#03318C] capitalize">
              working hours
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between capitalize text-xl">
                <h5>saturday</h5>
                <h5>08:00AM - 05:00PM</h5>
              </div>
              <div className="flex justify-between capitalize text-xl">
                <h5>sunday</h5>
                <h5>08:00AM - 05:00PM</h5>
              </div>
              <div className="flex justify-between capitalize text-xl">
                <h5>monday</h5>
                <h5>08:00AM - 05:00PM</h5>
              </div>
              <div className="flex justify-between capitalize text-xl">
                <h5>tuseday</h5>
                <h5>08:00AM - 05:00PM</h5>
              </div>
              <div className="flex justify-between capitalize text-xl">
                <h5>wednesday</h5>
                <h5>08:00AM - 05:00PM</h5>
              </div>
              <div className="flex justify-between capitalize text-xl">
                <h5>thursday</h5>
                <h5>08:00AM - 05:00PM</h5>
              </div>
              <div className="flex justify-between capitalize text-xl">
                <h5>friday</h5>
                <h5>closed</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
