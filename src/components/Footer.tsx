import { Clock, Mail, Navigation, Phone } from "lucide-react";
import companyLogo from "../assets/logo2.jpg";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  const date = new Date
  const currentYear = date.getFullYear()
  return (
    <>
    <footer className="bg-[#03318C] p-16">
      <div className="lg:flex items-center justify-between ">
        <div className="">
          <h2 className="text-3xl font-semibold text-white">Contact Details</h2>
          <ul className="py-9 space-y-3">
            <li className="flex items-center gap-4 capitalize text-lg text-white">
              <Navigation />
              <span >
                locations: 600, saad zaghloul industrial center, obour, qalyubia
                governorate, egypt
              </span>
            </li>
            <li className="flex items-center gap-4 capitalize text-lg text-white">
              <Phone />
              <span>call us: +20 15 51289512</span>
            </li>
            <li className="flex items-center gap-4 capitalize text-lg text-white">
              <Mail />
              <div>

              Mail us at: <a href="mailto:info@alfamec-ia.com" className="lowercase">info@alfamec-ia.com</a>
              </div>
            </li>
            <li className="flex items-center gap-4 capitalize text-lg text-white">
              <Clock />
              office hours: sat - thurs: 8AM to 5PM
            </li>
          </ul>
        </div>
        <div className="flex justify-end">
          <img src={companyLogo} className="w-80" />
        </div>
      </div>
    </footer>
    <div className="bg-[#021d53] flex justify-between items-center px-6 xl:px-28 py-4">
      <h5 className="text-white text-base">© {currentYear} ALFAMEC . All Rights Reserved</h5>
      <div className="flex gap-7 text-2xl text-white">
        <a href="http://linkedin.com/company/alfamec-integrated-engineering-solutions" className="hover:text-[#55F229] transition-colors"> <FaLinkedin /></a>
        <a href="https://www.facebook.com/alfamec.integrated.engineering.solutions" className="hover:text-[#55F229] transition-colors"><FaFacebook /></a>
        <a href="https://wa.me/message/PTQVP33NLJ5WA1" className="hover:text-[#55F229] transition-colors"><FaWhatsapp /></a>
      </div>
    </div>
    </>
  );
};
export default Footer;
