import { JSX } from "react";
import { FaFacebook, FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

export const imagesLink =
  "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/tnc/";

interface NveLinksProps {
  name: string;
  href?: string;
  icon?: string;
  subLinks?: NveLinksProps[];
}

interface FooterLinksProps {
  title: string;
  links: {
    title?: string;
    name: string;
    href?: string;
    icon?: JSX.Element;
    links?: {
      name: string;
      href: string;
      icon: JSX.Element;
    }[];
  }[];
}

interface SocialLinksProps {
  name: string;
  href: string;
  icon: JSX.Element;
}

export const SocialLinks: SocialLinksProps[] = [
  {
    name: "facebook",
    href: "https://www.facebook.com/TNCImmigration/",
    icon: <FaFacebook />,
  },
  {
    name: "tiktok",
    href: "https://www.tiktok.com/@tncimmigration.rhea?lang=en",
    icon: <FaTiktok />,
  },
  {
    name: "linkedin",
    href: "https://ca.linkedin.com/in/rhea-patel-a194391b0",
    icon: <IoLogoLinkedin />,
  },
  {
    name: "youtube",
    href: "https://www.youtube.com/c/TrueNorthConsultancy",
    icon: <FaYoutube />,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/tncimmigration/?hl=en",
    icon: <FaInstagram />,
  },
];

export const NaveLinks: NveLinksProps[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "our services",
    href: "/services",
    subLinks: [
      {
        name: "temporary residence",
        href: "/temporary-residence",
        subLinks: [
          {
            name: "visitor visa",
            href: "/visitor-visa",
          },
          {
            name: "study permit",
            href: "/study-permit",
          },
          {
            name: "work permit",
            href: "/work-permit",
          },
          {
            name: "spousal Work Permit",
            href: "/spousal-work-permit",
          },
          {
            name: "LMIA For Employers",
            href: "/lmia-for-employers",
          },
        ],
      },
      {
        name: "Temporary Resident Visas Continued",
        href: "#",
        subLinks: [
          {
            name: "Visitor to Student conversion",
            href: "/visitor-to-student-conversion",
          },
          {
            name: "Post Grad Open Work Permit",
            href: "/post-grad-open-work-permit",
          },
        ],
      },
      {
        name: "Family Class",
        href: "#",
        subLinks: [
          {
            name: "Spousal and Common law",
            href: "/spousal-and-common-law",
          },
          {
            name: "parents, Grandparents Sponsorship",
            href: "/parents-grandparents-sponsorship",
          },
          {
            name: "last living Relative program",
            href: "/last-living-relative-program",
          },
          {
            name: "child or other Dependent Sponsorship",
            href: "/child-or-other-dependent-sponsorship",
          },
          {
            name: "Orphan program",
            href: "/orphan-program",
          },
        ],
      },
      {
        name: "Economic Class (PR)",
        href: "#",
        subLinks: [
          {
            name: "home childcare program",
            href: "/home-childcare-program",
          },
          {
            name: "Agripilot program",
            href: "/agripilot-program",
          },
        ]
      },
      {
        name: "Express Entry",
        href: "/express-entry",
      },
      {
        name:"procedural Fairness Letters",
        href:"/procedural-fairness-letters"
      },
      {
        name:"sponsor your sibling for PR",
        href:"sponsor-your-sibling-for-pr",
      },
      {
        name:"Spousal Sponsorship",
        href:"/spousal-sponsorship",
      },
      {
        name:"Spousal open work permit",
        href:"/spousal-open-work-permit",
      },
      {
        name:"Post Grad Open Work Permit",
        href:"/post-grad-open-work-permit",
      },
      {
        name:"Extension within canada",
        href:"/extension-within-canada",
      },
      {
        name:"other services",
        href:"#",
        subLinks: [
          {
            name:"PR Renewal",
            href:"/pr-renewal",
          },
          {
            name:"citizenship application",
            href:"/citizenship-application",
          },
          {
            name:"citizenship hand down",
            href:"/citizenship-hand-down",
          },
          {
            name:"canada recovering lost",
            href:"/canada-recovering-lost",
          },
          
        ]
      }
    ],
  },
  {
    name: "Score Calculator",
    href: "#",
    subLinks: [
      {
        name: "BC PNP Score Calculator",
        href: "/bc-pnp-score-calculator",
      },
      {
        name: "FSW Score Calculator",
        href: "/fsw-score-calculator",
      },
    ],
  },
  {
    name: "Our locations",
    href: "#",
    subLinks: [
      {
        name: "Surrey, BC",
        href: "/surrey",
      },
      {
        name: "Mississauga, ON",
        href: "/mississauga",
      },
      {
        name: "Kelowna, BC",
        href: "/kelowna-bc",
      },
    ],
  },
  {
    name: "FAQs",
    href: "/faqs",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];

export const NavbarUpperLinks = [
  {
    name: "Surrey : +1 (236) 818 5558",
    href: "tel:+1 (236) 818 5558",
    // icon:<PhoneIcon/>
  },
  {
    name: "Mississauga : +1 (647) 9320060",
    href: "tel:+1 (647) 9320060",
    // icon:<PhoneIcon/>
  },
  {
    name: "book Appointment",
    href: "#",
  },
  {
    name: "Start Assessments",
    href: "#",
  },
];

export const FooterLinks: FooterLinksProps[] = [
  {
    title: "Quick Links",
    links: [
      {
        name: "Home",
        href: "/about-us",
      },
      {
        name: "about us",
        href: "/about-us",
      },
      {
        name: "Assessment",
        href: "/industries-we-serve",
      },
      {
        name: "Provincial Attestation Letters",
        href: "/services",
      },
      {
        name: "Book Appointment",
        href: "/contact-us",
      },
      {
        name: "FAQs",
        href: "/our-work",
      },
      {
        name: "Score Calculator",
        href: "/our-work",
      },
      {
        name: "Contact Us",
        href: "/our-work",
      },
    ],
  },
  {
    title: "",
    links: [
      {
        title: "Surrey,BC",
        name: "15957 84 Ave #303, Surrey, BC V4N 0W7, Canada",
        // href: "/services/hotel-industry",
      },
      {
        title: "Mississauga,Ontario",
        name: "1030 Kamato Rd #210, Mississauga, ON L4W 2W4",
      },
      {
        title: "Kelowna, BC",
        name: "201 – 2903 Pandosy Street Kelowna B.C V1Y 1W1",
      },
    ],
  },
  {
    title: "",
    links: [
      {
        title: "Contact Us",
        name: "3064 Hurontario St. Mississauga, Ontario",
        href: "/contact-us",
      },
      {
        name: "+1 236 818 5558",
        href: "/tel:+1 236 818 5558",
      },
      {
        name: "info@tncimmigration.com",
        href: "/mailto:info@tncimmigration.com",
      },
      {
        title: "Our Social Links",
        name: "",
        links: SocialLinks,
      },
    ],
  },
];
