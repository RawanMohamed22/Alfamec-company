import { Clock, Mail, Navigation, Phone } from "lucide-react";
import type { ICards, IFooter, IPage, ISolutions } from "../interfaces";
import { FacebookIcon, LinkedInIcon, WhatsappIcon } from "../Icons";

export const Strenghts: ICards[] = [
  {
    img: "expertise",
    title: "Experience and Expertise",
    description:"ALFAMEC has been catering to clients in various verticals since its establishment in 2014.",
    alt : "experience"
  },
  {
    img: "qualified",
    title: "Highly Qualified In-House Team",
    description:" We have a team of highly qualified, skilled, experienced and dedicated engineers.",
    alt : "qualified"
  },
  {
    img: "reliable",
    title: "Reliable, On-Time Service Delivery",
    description:" We take pride in our reputation of delivering quality and prompt services to our clients.",
    alt : "reliable"
  },
  {
    img: "support",
    title: "Dependable Support",
    description:"Our commitment to prompt and dependable support is endorsed by our valued customers.",
    alt : "support"
  },
];

export const Products : ICards[] = [
  {
    img : "first-service",
    title : "Automation, Control & Power Panels" ,
    description : "The operational center of your plant. We design and build robust panels for centralized power distribution, motor control, and reliable system monitoring",
    alt : "Automation,Control & Power Panels",
    to :"powerpanels",
    path : "service"
  },
  {
    img : "service two",
    title : "Reactors" ,
    description : "Core to process safety and yield. We design and manufacture custom industrial reactors optimized for chemical and thermal efficiency across all key industry requirements.",
    alt : "Reactors",
    to : "reactors",
    path : "product"
  },
  {
    img : "prooooduct",
    title : " Piping" ,
    description : "Seamless integration of critical process lines. Our professional installation and welding guarantee hygienic integrity, regulatory compliance, and maximum flow efficiency.",
    alt : "Piping",
    to : "piping",
    path : "service"
  },
  {
    img : "service four",
    title : "Fire Fighting Systems" ,
    description : "Comprehensive, compliant safety solutions. We install and commission full fire fighting systems, protecting critical assets and ensuring personnel safety standards.",
    alt : "Fire Fighting Systems",
    to : "firefighting",
    path : "service"
  }
]

export const Solutions : ISolutions[] = [
  {
    img : "solution-1" ,
    paragraph : "Design & preparation of layouts for Cooling Towers"
  },
  {
    img : "solution-2" ,
    paragraph : "Detailed design and drawing of fire-fighting and fire suppression systems for any kind of infrastructure"
  },
  {
    img : "solution-3" ,
    paragraph : "Electrical designs for plants and utilities, including medium & low voltage electrical distribution systems"
  },
  {
    img : "solution-4" ,
    paragraph : "Co-ordinate with detailed layout drawings for system, power, control and wiring schematics"
  }

]

export const Service : ICards[] = [
  {
    img : "product1" ,
    title : "Machine Upgrade" ,
    description : " Extends the lifecycle of your existing assets. We enhance performance, integrate modern controls, and bring older machinery up to current operational standards efficiently.",
    alt : "Machine Upgrade"
  },
  {
    img : "product2" ,
    title : "fire alarm systems" ,
    description : " Advanced detection and immediate warning systems. Ensures rapid response to thermal or smoke events, minimizing damage and guaranteeing business continuity.",
    alt : "fire alarm systems"
  },
  {
    img : "product3" ,
    title : "Automation" ,
    description : " Implementing intelligent PLC and SCADA systems. We enhance efficiency, reduce manual error, and provide remote monitoring for total plant optimization.",
    alt : "Automation"
  },
  {
    img : "product4" ,
    title : "Control & Power Panels" ,
    description : "The operational center of your plant. We design and build robust panels for centralized power distribution, motor control, and reliable system monitoring",
    alt : "Control & Power Panels",
    id : "powerpanels"
  },
  {
    img : "product7" ,
    title : "Electrical Works" ,
    description : "Full-scale, professional electrical infrastructure installation. Ensures system reliability, minimizes downtime, and complies strictly with all safety codes.",
    alt : "Electrical Works"
  },
  {
    img: "customized",
    title : "Customized Solutions",
    description: "Engineering expertise focused on unique challenges. We design bespoke systems that perfectly bridge gaps where standard equipment fails to meet specific process needs.",
    alt: "Customized Solutions"
  },
   {
    img: "fire-fighting" ,
    title : "Fire Fighting Systems" ,
    description : " Comprehensive, compliant safety solutions. We install and commission full fire fighting systems, protecting critical assets and ensuring personnel safety standards." ,
    alt: "Fire Fighting Systems",
    id : "firefighting"
  },
  {
    img : "service three" ,
    title : "Stainless Steel Piping" ,
    description : "Seamless integration of critical process lines. Our professional installation and welding guarantee hygienic integrity, regulatory compliance, and maximum flow efficiency.",
    alt : "Piping",
    id : "piping"
  }
]

export const ProductsPage : ICards[] = [
   {
    img : "one" ,
    title : "Tanks" ,
    description : "High-quality stainless steel fabrication for storage and process vessels. Ensures secure, compliant, and durable containment solutions tailored to volume and temperature needs.",
    alt :"Tanks"
  },
   {
    img : "five" ,
    title : "Mixers" ,
    description : "Ensures homogeneous blending across all viscosities. Our high precision industrial mixers deliver repeatable product quality and process efficiency consistently.",
    alt :"Mixers"
  },
   {
    img : "two" ,
    title : "Reactors" ,
    description : " Core to process safety and yield. We design and manufacture custom industrial reactors optimized for chemical and thermal efficiency across all key industry requirements. ",
    alt :"Reactors",
    id : "reactors"
  },
   {
    img : "four" ,
    title : "Heat Exchangers" ,
    description : " Optimized thermal management systems for heating and cooling cycles. Increases system efficiency, minimizes energy use, and maintains critical process temperatures.",
    alt :"Heat Exchangers"
  },
   {
    img : "ten" ,
    title : "Conveyors & Handling Equipments" ,
    description : "Custom systems for efficient material movement. Optimizes production flow, reduces handling time, and integrates smoothly into your processing lines.",
    alt :"Conveyors & Handling Equipments"
  },
  {
    img: "cooling" ,
    title: "Cooling Towers" ,
    description : " Provides reliable, cost-effective  industrial water cooling. Engineered for maximum heat  rejection, durability, and minimal operational maintenance requirements." ,
    alt : "Cooling Towers"
  },
     {
    img : "six" ,
    title : "Lab Racks" ,
    description : " Engineered stainless steel racks for sample and equipment storage. Provides durable, space-efficient, and easy-to-clean vertical solutions for demanding QC environments",
    alt :"Lab Racks"
  },
   {
    img : "three" ,
    title : "Lab Cupboards" ,
    description : "Purpose-built, hygienic storage for sensitive lab materials. Ensures compliance, organization, and a secure environment for reagents, samples, and essential lab tools.",
    alt :"Lab Cupboards"
  },
   {
    img: "trolley" ,
    title : "Lab Table Trolley" ,
    description : " Versatile, mobile stainless steel work surfaces. Designed for seamless movement of equipment and samples, enhancing flexibility and efficiency within the laboratory workspace." ,
    alt: "Lab Table Trolley"
  },
    {
    img : "nine" ,
    title : "Lab Homogenizers" ,
    description : "Achieves superior particle reduction and stable emulsions at the bench scale. Crucial for developing stable, high-quality products before scaling up production.",
    alt :"Lab Homogenizers"
  },
    {
    img : "seven" ,
    title : "Lab Mixers" ,
    description : "Essential for small-batch formulation and testing. Our mixers ensure precise, repeatable blending and dispersion, guaranteeing sample consistency for critical R&D work.",
    alt :"Lab Mixers"
  },
   {
    img : "eight" ,
    title : "Homogenizers" ,
    description : "High-shear, high-pressure equipment for emulsion and dispersion. Delivers superior product texture, stability, and particle size control across sensitive formulations.",
    alt :"Homogenizers"
  }
]

export const FooterData : IFooter[] = [
  {
    icon : <Navigation />,
    data : " Locations: 600, Saad Zaghloul Industrial Center, Obour, Qalyubia Governorate, Egypt"
  },
  {
    icon : <Phone />,
    data : "Call Us: +20 15 51289512"
  },
  {
    icon : <Mail />,
    data : "Mail Us At: info@alfamec-ia.com"
  },
  {
    icon : <Clock />,
    data : "Office Hours: Sat - Thurs: 8AM to 5PM"
  },
]

export const SocialMedia : IFooter [] = [
  {
    icon : <LinkedInIcon aria-label="go to linkedin" />,
    data : "http://linkedin.com/company/alfamec-integrated-engineering-solutions"
  },
  {
    icon : <FacebookIcon aria-label="go to facebook"/>,
    data : "https://www.facebook.com/alfamec.integrated.engineering.solutions"
  },
  {
    icon : <WhatsappIcon aria-label="go to whatsapp" />,
    data : "https://wa.me/message/PTQVP33NLJ5WA1"
  }
]

export const Pages : IPage [] = [
  {
    title : "home",
    to : "/"
  },
  {
    title : "about",
    to : "/about"
  },
  {
    title : "services",
    to : "/service"
  },
  {
    title : "products",
    to : "/product"
  },
  {
    title : "contact",
    to: "/contact"
  }
]

