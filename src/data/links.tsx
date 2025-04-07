import { JSX } from "react";
import { FaFacebook, FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

export const imagesLink =
  "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/OneShotMarketingWebsite/";

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
        ],
      },
      {
        name: "restaurant Industry",
        href: "/industries-we-serve/restaurant-industry",
      },
      {
        name: "immigration Industry",
        href: "/industries-we-serve/immigration-industry",
      },
      {
        name: "beauty Industry",
        href: "/industries-we-serve/beauty-industry",
      },
      {
        name: "clothing Industry",
        href: "/industries-we-serve/clothing-industry",
      },
    ],
  },
  {
    name: "Services",
    href: "/services",
    subLinks: [
      {
        name: "hotel industry",
        // href: "/services/hotel-industry",
        subLinks: [
          {
            name: "performance marketing",
            href: "/services/hotel-industry/performance-marketing",
          },
          {
            name: "social media marketing",
            href: "/services/hotel-industry/social-media-marketing",
          },
          {
            name: "website design & development",
            href: "/services/hotel-industry/website-design-and-development",
          },
          {
            name: "search engine optimization",
            href: "/services/hotel-industry/search-engine-optimization",
          },
          {
            name: "OTA listing - optimization and management",
            href: "/services/hotel-industry/ota-listing-optimization-and-management",
          },
        ],
      },
      {
        name: "restaurant Industry",
        // href: "/services/restaurant-industry",
        subLinks: [
          {
            name: "website design & development",
            href: "/services/restaurant-industry/website-design-and-development",
          },
          {
            name: "search engine optimization",
            href: "/services/restaurant-industry/search-engine-optimization",
          },
          {
            name: "social media marketing",
            href: "/services/restaurant-industry/social-media-marketing",
          },
          {
            name: "performance marketing",
            href: "/services/restaurant-industry/performance-marketing",
          },
        ],
      },
      {
        name: "immigration Industry",
        // href: "/services/immigration-industry",
        subLinks: [
          {
            name: "website design & development",
            href: "/services/immigration-industry/website-design-and-development",
          },
          {
            name: "search engine optimization",
            href: "/services/immigration-industry/search-engine-optimization",
          },
          {
            name: "social media marketing",
            href: "/services/immigration-industry/social-media-marketing",
          },
          {
            name: "performance marketing",
            href: "/services/immigration-industry/performance-marketing",
          },
        ],
      },
      {
        name: "beauty Industry",
        // href: "/services/beauty-industry",
        subLinks: [
          {
            name: "website design & development",
            href: "/services/beauty-industry/website-design-and-development",
          },
          {
            name: "performance marketing",
            href: "/services/beauty-industry/performance-marketing",
          },
          {
            name: "CRM",
            href: "/services/beauty-industry/crm",
          },
          {
            name: "social media marketing",
            href: "/services/beauty-industry/social-media-marketing",
          },
        ],
      },
      {
        name: "clothing Industry",
        // href: "/services/clothing-industry",
        subLinks: [
          {
            name: "website design & development",
            href: "/services/clothing-industry/website-design-and-development",
          },
          {
            name: "search engine optimization",
            href: "/services/clothing-industry/search-engine-optimization",
          },
          {
            name: "CRM",
            href: "/services/clothing-industry/crm",
          },
          {
            name: "social media marketing",
            href: "/services/clothing-industry/social-media-marketing",
          },
          {
            name: "performance marketing",
            href: "/services/clothing-industry/performance-marketing",
          },
        ],
      },
    ],
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
