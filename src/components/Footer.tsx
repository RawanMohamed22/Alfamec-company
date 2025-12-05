import companyLogo from "../assets/logo2.jpg";
import { FooterData, SocialMedia } from "../data";
const Footer = () => {
  const FooterDataRender = FooterData.map(({ data, icon }, idx) => (
    <li key={idx} className="flex items-center gap-4  text-white">
      <div className="text-2xl">{icon}</div>
      <span className="text-lg" >{data}</span>
    </li>
  ));

  const SocialMediaRender = SocialMedia.map(({icon , data} , idx) => (
    <a
      href={data}
      className="hover:text-[#55F229] transition-colors"
      key={idx}
      target="_blank"
    >
      {icon}
    </a>
  ));
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <>
      <footer className="bg-[#03318C] p-8 sm:p-16 ">
        <div className="lg:flex items-center justify-between ">
          <div>
            <h2 className="text-3xl font-semibold text-white">
              Contact Details
            </h2>
            <ul className="py-9 space-y-3">{FooterDataRender}</ul>
          </div>
          <div className="flex justify-end">
            <img src={companyLogo} className="w-80" alt="Alfamec company logo"/>
          </div>
        </div>
      </footer>
      <div className="bg-[#021d53] flex-col gap-3 sm:flex-row  flex justify-between items-center px-6 xl:px-28 py-4">
        <h5 className="text-white text-base">
          © {currentYear} ALFAMEC . All Rights Reserved
        </h5>
        <div className="flex gap-7 text-2xl text-white">
          {SocialMediaRender}
        </div>
      </div>
    </>
  );
};
export default Footer;
