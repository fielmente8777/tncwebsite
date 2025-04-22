import { InstaIcon } from "@/app/(home)/components/OurSocailMedia";
import {
  FlagPolingIcon,
  PermanentResidenceIcon,
  SponsorshipIcon,
  TemporaryResidenceIcon,
} from "./icons";
import { imagesLink } from "./links";

export const homePageData = {
  bannnerData: {
    title: "Your Trusted Immigration Partner",
    subTitle: "Gateway to Your Canadian Dream",
    src: "/tnc/bnr.webp",
    links: [
      {
        name: "View Services",
        href: "/services",
      },
      {
        name: "About Us",
        href: "/about-us",
      },
    ],
  },
  about: {
    title: "About Us",
    subTitle: "We’re Trusted Immigration Consultant",
    desc: "Our legal professionals take their time to understand the needs of our clients. We ensure that our clients are dealt professionally and provided all the suitable options. We provide immigration services to our clients inside Canada and also cater to our clients globally. We pride ourselves in providing professional services to a diversity of clients.",
    src: "/Image1.webp",
    links: [
      {
        name: "Read More",
        href: "/about-us",
      },
      {
        name: "book Appointment",
        href: "https://calendly.com/tncbooking/",
      },
    ],
  },
  services: [
    {
      icon: <TemporaryResidenceIcon />,
      title: "Temporary Residence",
      name: "read more",
      href: "/temporary-residence",
      src: imagesLink + "im2.webp",
    },
    {
      icon: <PermanentResidenceIcon />,
      title: "Permanent Residence",
      name: "read more",
      href: "/permanent-residence",
      src: imagesLink + "im3.webp",
    },
    {
      icon: <SponsorshipIcon />,
      title: "Family & Sponsorship",
      name: "read more",
      href: "/family-sponsorship",
      src: imagesLink + "im4.webp",
    },
    {
      icon: <FlagPolingIcon />,
      title: "FlagPoling Application",
      name: "read more",
      href: "/flagpoling",
      src: imagesLink + "im1.webp",
    },
  ],
  social: {
    title: "Our Social media",
    content: [
      {
        image: {
          src: imagesLink + "social-1.webp",
        },
        link: {
          href: "https://www.instagram.com/p/DCAcvoDSiAH/",
        },
      },
      {
        image: {
          src: imagesLink + "social-2.webp",
        },
        link: {
          href: "https://www.instagram.com/reel/DB_8ivVSdAq/",
        },
        isIcon: true,
      },
      {
        image: {
          src: imagesLink + "social-3.webp",
        },
        link: {
          href: "https://www.instagram.com/p/DB9W_PFPn_t/",
        },
      },
      {
        image: {
          src: imagesLink + "social-4.webp",
        },
        link: {
          href: "https://www.instagram.com/p/DB9MrEjzJe1/",
        },
      },
      {
        image: {
          src: imagesLink + "social-5.webp",
        },
        link: {
          href: "https://www.instagram.com/reel/DB64EVTSpyJ/",
        },
        isIcon: true,
      },
      {
        image: {
          src: imagesLink + "social-6.webp",
        },
        link: {
          href: "https://www.instagram.com/p/DB6rVOWz5RH/",
        },
      },
      {
        image: {
          src: imagesLink + "social-7.webp",
        },
        link: {
          href: "https://www.instagram.com/p/DB4ACi1Pjdu/",
        },
      },
      {
        image: {
          src: imagesLink + "social-8.webp",
        },
        link: {
          href: "https://www.instagram.com/p/DB3_r9vya0M/",
        },
      },
      {
        image: {
          src: imagesLink + "social-9.webp",
        },
        link: {
          href: "https://www.instagram.com/p/DB1gL3xyZWT/",
        },
      },
      {
        image: {
          src: imagesLink + "social-10.webp",
        },
        link: {
          href: "https://www.instagram.com/reel/DB1QSwhPO8m/",
        },
        isIcon: true,
      },
      {
        image: {
          src: imagesLink + "social-11.webp",
        },
        link: {
          href: "https://www.instagram.com/p/DBz01elS9D7/",
        },
      },
      {
        image: {
          src: imagesLink + "social-12.webp",
        },
        link: {
          href: "https://www.instagram.com/p/DBzrd3zxt_y/",
        },
      },
      {
        image: {
          src: imagesLink + "social-13.webp",
        },
        link: {
          href: "https://www.instagram.com/reel/DBy0VJ3PbZB/",
        },
        isIcon: true,
      },
      {
        image: {
          src: imagesLink + "social-14.webp",
        },
        link: {
          href: "https://www.instagram.com/reel/DBxJYQmy6BS/",
        },
        isIcon: true,
      },
      {
        image: {
          src: imagesLink + "social-15.webp",
        },
        link: {
          href: "https://www.instagram.com/reel/DBwQFDiPuJ2/",
        },
        isIcon: true,
      },
      {
        image: {
          src: imagesLink + "social-16.webp",
        },
        link: {
          href: "https://www.instagram.com/reel/DBuoQtNSIK6/",
        },
        isIcon: true,
      },
    ],
    buttons: [
      {
        label: "Load More",
      },
      {
        label: "Follow on Instagram",
        icon: <InstaIcon className="w-1" />,
        href: "https://www.instagram.com/tncimmigration/",
      },
    ],
  },
  typeOfServices: {
    title: "Services",
    subTitle: "Our Services",
    bgSrc: imagesLink + "bnr2.webp",
    cards: [
      {
        src: "",
        title: "Study Permit",
        links: [
          {
            name: "book consultation",
            href: "https://calendly.https://linktr.ee/tncimmigration?fbclid=PAAaZcdpHEtzmz4H9VTAxdoweGom3XSZOz0gQOrhd8mjeusnOd27LB6mYjewU_aem_AeYJ20W5NUOFeyEsqeskkjoSnYPfhO63ZGUhY_1MH1vYnYHE0GwayXJTAkP1NBMDrf8com/tncbooking/consultation?month=2023-09",
          },
          {
            name: "Read More",
            href: "/study-permit/",
          },
        ],
      },
      {
        src: "",
        title: "Work Permit",
        links: [
          {
            name: "book consultation",
            href: "https://calendly.https://linktr.ee/tncimmigration?fbclid=PAAaZcdpHEtzmz4H9VTAxdoweGom3XSZOz0gQOrhd8mjeusnOd27LB6mYjewU_aem_AeYJ20W5NUOFeyEsqeskkjoSnYPfhO63ZGUhY_1MH1vYnYHE0GwayXJTAkP1NBMDrf8com/tncbooking/consultation?month=2023-09",
          },
          {
            name: "Read More",
            href: "/study-permit/",
          },
        ],
      },
      {
        src: "",
        title: "FlagPoling",
        links: [
          {
            name: "book consultation",
            href: "https://calendly.https://linktr.ee/tncimmigration?fbclid=PAAaZcdpHEtzmz4H9VTAxdoweGom3XSZOz0gQOrhd8mjeusnOd27LB6mYjewU_aem_AeYJ20W5NUOFeyEsqeskkjoSnYPfhO63ZGUhY_1MH1vYnYHE0GwayXJTAkP1NBMDrf8com/tncbooking/consultation?month=2023-09",
          },
          {
            name: "Read More",
            href: "/study-permit/",
          },
        ],
      },
      {
        src: "",
        title: "Visitor Visa",
        links: [
          {
            name: "book consultation",
            href: "https://calendly.https://linktr.ee/tncimmigration?fbclid=PAAaZcdpHEtzmz4H9VTAxdoweGom3XSZOz0gQOrhd8mjeusnOd27LB6mYjewU_aem_AeYJ20W5NUOFeyEsqeskkjoSnYPfhO63ZGUhY_1MH1vYnYHE0GwayXJTAkP1NBMDrf8com/tncbooking/consultation?month=2023-09",
          },
          {
            name: "Read More",
            href: "/study-permit/",
          },
        ],
      },
      {
        src: "",
        title: "Family Sponsorship",
        links: [
          {
            name: "book consultation",
            href: "https://calendly.https://linktr.ee/tncimmigration?fbclid=PAAaZcdpHEtzmz4H9VTAxdoweGom3XSZOz0gQOrhd8mjeusnOd27LB6mYjewU_aem_AeYJ20W5NUOFeyEsqeskkjoSnYPfhO63ZGUhY_1MH1vYnYHE0GwayXJTAkP1NBMDrf8com/tncbooking/consultation?month=2023-09",
          },
          {
            name: "Read More",
            href: "/study-permit/",
          },
        ],
      },
      {
        src: "",
        title: "Spousal Sponsorship",
        links: [
          {
            name: "book consultation",
            href: "https://calendly.https://linktr.ee/tncimmigration?fbclid=PAAaZcdpHEtzmz4H9VTAxdoweGom3XSZOz0gQOrhd8mjeusnOd27LB6mYjewU_aem_AeYJ20W5NUOFeyEsqeskkjoSnYPfhO63ZGUhY_1MH1vYnYHE0GwayXJTAkP1NBMDrf8com/tncbooking/consultation?month=2023-09",
          },
          {
            name: "Read More",
            href: "/study-permit/",
          },
        ],
      },
    ],
  },
  applicationProcess: {
    title: "Embark on your Canadian dream journey with TNC Immigration.",
    subTitle: "",
  },
};

export const AboutPageData = {
  bannerData: {
    title: "About Us",
    src: imagesLink + "bg-slider-02.webp",
  },
  about: {
    title: "TNC True North Consultancy",
    src: imagesLink + "ad5.webp",
    desc: [
      "TNC True North Consultancy Ltd. is one of the leading immigration consulting firms in the Lower Mainland of BC, Canada with offices to serve our clients at their best convenience.",
      "Our main office is based in the heart of Surrey and is easily accessible to our clients. We at True North Consultancy Ltd. handle independent clients from Asia, Europe, Africa and Latin America. We are a Certified Canadian Immigration Consultant Firm (CICC) and are in good standing with CICC which can safeguard your peace of mind. We are competent and up to date with immigration rules and regulations.",
      "The firm is led by Rhea Patel and her partner, TJ Singh and their professionally qualified team members. Presently, TNC is a team of 20+ professionals working round the clock to provide the best immigration services to their clients. TNC specializes in immigration to Canada helping independent applicants and businesses. TNC is 100% committed to giving clients our full support at every step of their immigration process. We recognize that every individual has a specific need and choice, so we provide options suiting the best interest of our clients.",
      "We at TNC specialize in the following: work permits, study permits, visitor visas, express entry, intra company transfer, labour market impact assessments (LMIA), provincial nominee programs (PNP), spousal sponsorships, permanent residency (PR), citizenship and other immigration related services. You can reach out to us with your immigration inquiry and a professional will be in touch with you.",
    ],
  },
  images: [
    imagesLink + "ad6.webp",
    imagesLink + "ad4.webp",
    imagesLink + "ad3.webp",
  ],
  teamMembers: {
    title: "Team Members",
    desc: "Our Group of Qualified and Trained Professionals are here to assist you in every Step",
    cards: [
      {
        name: "Rhea Patel",
        src: imagesLink + "tm1.webp",
        post: "RCIC",
      },
      {
        name: "TJ Singh",
        src: imagesLink + "tm2.webp",
        post: "RCIC",
      },
      {
        name: "Prabhleen Sandhu",
        src: imagesLink + "tm3.webp",
        post: "RCIC",
      },
      {
        name: "Bijay Luitel",
        src: imagesLink + "tm4.webp",
        post: "RCIC",
      },
      {
        name: "Richa Bhardwaj",
        src: imagesLink + "tm5.webp",
        post: "Legal Associate",
      },
      {
        name: "Megha Sharma",
        src: imagesLink + "tm6.webp",
      },
      {
        name: "Simran Kaur",
        src: imagesLink + "tm7.webp",
      },
      {
        name: "Tania Kakkar",
        src: imagesLink + "tm8.webp",
      },
      {
        name: "Harminder Kaur",
        src: imagesLink + "tm9.webp",
      },
      {
        name: "Deep Simran Kaur",
        src: imagesLink + "tm10.webp",
      },
      {
        name: "Maneet Longia",
        src: imagesLink + "tm11.webp",
      },
      {
        name: "Gaby Kaur",
        src: imagesLink + "tm12.webp",
      },
      {
        name: "Dilman Singh",
        src: imagesLink + "tm13.webp",
      },
      {
        name: "Amanpreet Singh",
        src: imagesLink + "tm14.webp",
      },
      {
        name: "Kasturi",
        src: imagesLink + "tm15.webp",
      },
    ],
  },
};

export const servicePageData = {
  banner: {
    src: imagesLink + "bg-slider-02.webp",
    title: "our services",
  },
  services: [
    {
      title: "Permanent Residence",
      cards: [
        {
          icon: imagesLink + "icon/Icon.webp",
          title: "Federal Skilled Worker",
          links: [
            {
              name: "Book Consultation",
              href: "https://linktr.ee/tncimmigration?fbclid=PAAaZcdpHEtzmz4H9VTAxdoweGom3XSZOz0gQOrhd8mjeusnOd27LB6mYjewU_aem_AeYJ20W5NUOFeyEsqeskkjoSnYPfhO63ZGUhY_1MH1vYnYHE0GwayXJTAkP1NBMDrf8",
            },
            {
              name: "Read More",
              href: "/federal-skilled-worker",
            },
          ],
        },
        {
          icon: imagesLink + "icon/Icon.webp",
          title: "Federal Skilled Trade Workers",
          links: [
            {
              name: "Book Consultation",
              href: "https://linktr.ee/tncimmigration?fbclid=PAAaZcdpHEtzmz4H9VTAxdoweGom3XSZOz0gQOrhd8mjeusnOd27LB6mYjewU_aem_AeYJ20W5NUOFeyEsqeskkjoSnYPfhO63ZGUhY_1MH1vYnYHE0GwayXJTAkP1NBMDrf8",
            },
            {
              name: "Read More",
              href: "/federal-skilled-trade-workers",
            },
          ],
        },
        {
          icon: imagesLink + "icon/Icon.webp",
          title: "Canadian Experience Class",
          links: [
            {
              name: "Book Consultation",
              href: "https://linktr.ee/tncimmigration?fbclid=PAAaZcdpHEtzmz4H9VTAxdoweGom3XSZOz0gQOrhd8mjeusnOd27LB6mYjewU_aem_AeYJ20W5NUOFeyEsqeskkjoSnYPfhO63ZGUhY_1MH1vYnYHE0GwayXJTAkP1NBMDrf8",
            },
            {
              name: "Read More",
              href: "/canadian-experience-class",
            },
          ],
        },
        {
          icon: imagesLink + "icon/Icon.webp",
          title: "Provincial Nominee Programs",
          links: [
            {
              name: "Book Consultation",
              href: "https://linktr.ee/tncimmigration?fbclid=PAAaZcdpHEtzmz4H9VTAxdoweGom3XSZOz0gQOrhd8mjeusnOd27LB6mYjewU_aem_AeYJ20W5NUOFeyEsqeskkjoSnYPfhO63ZGUhY_1MH1vYnYHE0GwayXJTAkP1NBMDrf8",
            },
            {
              name: "Read More",
              href: "/provincial-nominee-programs",
            },
          ],
        },
      ],
    },
    {
      title: "Temporary Residence",
      cards: [
        {
          icon: imagesLink + "icon/Symbol.webp",
          title: "Study Permit",
          links: [
            {
              name: "Book Consultation",
              href: "https://linktr.ee/tncimmigration?fbclid=PAAaZcdpHEtzmz4H9VTAxdoweGom3XSZOz0gQOrhd8mjeusnOd27LB6mYjewU_aem_AeYJ20W5NUOFeyEsqeskkjoSnYPfhO63ZGUhY_1MH1vYnYHE0GwayXJTAkP1NBMDrf8",
            },
            {
              name: "Read More",
              href: "/study-permit",
            },
          ],
        },
        {
          icon: imagesLink + "icon/Symbol2.webp",
          title: "Intra-Company Transfer",
          links: [
            {
              name: "Book Consultation",
              href: "https://linktr.ee/tncimmigration?fbclid=PAAaZcdpHEtzmz4H9VTAxdoweGom3XSZOz0gQOrhd8mjeusnOd27LB6mYjewU_aem_AeYJ20W5NUOFeyEsqeskkjoSnYPfhO63ZGUhY_1MH1vYnYHE0GwayXJTAkP1NBMDrf8",
            },
            {
              name: "Read More",
              href: "/intra-company-transfer",
            },
          ],
        },
        {
          icon: imagesLink + "icon/Icon2.webp",
          title: "Work Permit",
          links: [
            {
              name: "Book Consultation",
              href: "https://linktr.ee/tncimmigration?fbclid=PAAaZcdpHEtzmz4H9VTAxdoweGom3XSZOz0gQOrhd8mjeusnOd27LB6mYjewU_aem_AeYJ20W5NUOFeyEsqeskkjoSnYPfhO63ZGUhY_1MH1vYnYHE0GwayXJTAkP1NBMDrf8",
            },
            {
              name: "Read More",
              href: "/work-permit",
            },
          ],
        },
        {
          icon: imagesLink + "icon/Icon2.webp",
          title: "Super Visa",
          links: [
            {
              name: "Book Consultation",
              href: "https://linktr.ee/tncimmigration?fbclid=PAAaZcdpHEtzmz4H9VTAxdoweGom3XSZOz0gQOrhd8mjeusnOd27LB6mYjewU_aem_AeYJ20W5NUOFeyEsqeskkjoSnYPfhO63ZGUhY_1MH1vYnYHE0GwayXJTAkP1NBMDrf8",
            },
            {
              name: "Read More",
              href: "/super-visa",
            },
          ],
        },
        {
          icon: imagesLink + "icon/Icon3.webp",
          title: "LMIA Exemptions",
          links: [
            {
              name: "Book Consultation",
              href: "https://linktr.ee/tncimmigration?fbclid=PAAaZcdpHEtzmz4H9VTAxdoweGom3XSZOz0gQOrhd8mjeusnOd27LB6mYjewU_aem_AeYJ20W5NUOFeyEsqeskkjoSnYPfhO63ZGUhY_1MH1vYnYHE0GwayXJTAkP1NBMDrf8",
            },
            {
              name: "Read More",
              href: "/lmia-for-employers",
            },
          ],
        },
        {
          icon: imagesLink + "icon/Icon4.webp",
          title: "Visitor",
          links: [
            {
              name: "Book Consultation",
              href: "https://linktr.ee/tncimmigration?fbclid=PAAaZcdpHEtzmz4H9VTAxdoweGom3XSZOz0gQOrhd8mjeusnOd27LB6mYjewU_aem_AeYJ20W5NUOFeyEsqeskkjoSnYPfhO63ZGUhY_1MH1vYnYHE0GwayXJTAkP1NBMDrf8",
            },
            {
              name: "Read More",
              href: "/visitor-visa",
            },
          ],
        },
        {
          icon: imagesLink + "icon/Symbol3.webp",
          title: "Post-Graduate Work Permits",
          links: [
            {
              name: "Book Consultation",
              href: "https://linktr.ee/tncimmigration?fbclid=PAAaZcdpHEtzmz4H9VTAxdoweGom3XSZOz0gQOrhd8mjeusnOd27LB6mYjewU_aem_AeYJ20W5NUOFeyEsqeskkjoSnYPfhO63ZGUhY_1MH1vYnYHE0GwayXJTAkP1NBMDrf8",
            },
            {
              name: "Read More",
              href: "/post-grad-open-work-permit",
            },
          ],
        },
      ],
    },
    {
      title: "Family & Sponsorship Applications",
      cards: [
        {
          icon: imagesLink + "icon/Symbol4.webp",
          title: "Spousal PR Sponsorship",
          links: [
            {
              name: "Book Consultation",
              href: "https://linktr.ee/tncimmigration?fbclid=PAAaZcdpHEtzmz4H9VTAxdoweGom3XSZOz0gQOrhd8mjeusnOd27LB6mYjewU_aem_AeYJ20W5NUOFeyEsqeskkjoSnYPfhO63ZGUhY_1MH1vYnYHE0GwayXJTAkP1NBMDrf8",
            },
            {
              name: "Read More",
              href: "/spousal-pr-sponsorship",
            },
          ],
        },
        {
          icon: imagesLink + "icon/Symbol5.webp",
          title: "Child Or Other Dependent Sponsorship",
          links: [
            {
              name: "Book Consultation",
              href: "https://linktr.ee/tncimmigration?fbclid=PAAaZcdpHEtzmz4H9VTAxdoweGom3XSZOz0gQOrhd8mjeusnOd27LB6mYjewU_aem_AeYJ20W5NUOFeyEsqeskkjoSnYPfhO63ZGUhY_1MH1vYnYHE0GwayXJTAkP1NBMDrf8",
            },
            {
              name: "Read More",
              href: "/child-or-other-dependent-sponsorship",
            },
          ],
        },
        {
          icon: imagesLink + "icon/Icon5.webp",
          title: "Spousal Work Permit",
          links: [
            {
              name: "Book Consultation",
              href: "https://linktr.ee/tncimmigration?fbclid=PAAaZcdpHEtzmz4H9VTAxdoweGom3XSZOz0gQOrhd8mjeusnOd27LB6mYjewU_aem_AeYJ20W5NUOFeyEsqeskkjoSnYPfhO63ZGUhY_1MH1vYnYHE0GwayXJTAkP1NBMDrf8",
            },
            {
              name: "Read More",
              href: "/spousal-work-permit",
            },
          ],
        },
        {
          icon: imagesLink + "icon/Icon6.webp",
          title: "Parents, Grandparents Sponsorship",
          links: [
            {
              name: "Book Consultation",
              href: "https://linktr.ee/tncimmigration?fbclid=PAAaZcdpHEtzmz4H9VTAxdoweGom3XSZOz0gQOrhd8mjeusnOd27LB6mYjewU_aem_AeYJ20W5NUOFeyEsqeskkjoSnYPfhO63ZGUhY_1MH1vYnYHE0GwayXJTAkP1NBMDrf8",
            },
            {
              name: "Read More",
              href: "/parents-grandparents-sponsorship",
            },
          ],
        },
      ],
    },
  ],
};

export const temporaryResidence = {
  bannerData: {
    title: "Temporary Residence",
    src: imagesLink + "bg-slider-02.webp",
  },

  application: {
    title: "Various Temporary Residence Applications",
    card: [
      {
        title: "Study Permit",
        image: {
          src: "/tnc/ad13.webp",
          alt: "",
          // className: "aspect-[4/4]",
        },
        buttons: [
          {
            label: "Read More",
            href: "/study-permit",
          },
          {
            label: "Assessment",
            href: "/start-assessment",
            className: "bg-prime-red",
          },
        ],
      },
      {
        title: "Work Permit",
        image: {
          src: "/tnc/ad2.webp",
          alt: "",
        },
        buttons: [
          {
            label: "Read More",
            href: "/work-permit",
          },
          {
            label: "Assessment",
            href: "/start-assessment",
            className: "bg-prime-red",
          },
        ],
      },
      {
        title: "Spousal Open Work Permit",
        image: {
          src: "/tnc/ad12.webp",
          alt: "",
        },
        buttons: [
          {
            label: "Read More",
            href: "/spousal-open-work-permit",
          },
          {
            label: "Assessment",
            href: "/start-assessment",
            className: "bg-prime-red",
          },
        ],
      },
      {
        title: "Visitor",
        image: {
          src: "/tnc/ad9.webp",
          alt: "",
        },
        buttons: [
          {
            label: "Read More",
            href: "/visitor-visa",
          },
          {
            label: "Assessment",
            href: "/start-assessment",
            className: "bg-prime-red",
          },
        ],
      },
      {
        title: "LMIA Exemptions",
        image: {
          src: "/tnc/ad11.webp",
          alt: "",
        },
        buttons: [
          {
            label: "Read More",
            href: "/lmia-for-employers",
          },
          {
            label: "Assessment",
            href: "/start-assessment",
            className: "bg-prime-red",
          },
        ],
      },
      {
        title: "Post-Graduate Work Permits",
        image: {
          src: "/tnc/ad14.webp",

          alt: "",
        },
        buttons: [
          {
            label: "Read More",
            href: "/post-grad-open-work-permit",
          },
          {
            label: "Assessment",
            href: "/start-assessment",
            className: "bg-prime-red",
          },
        ],
      },
      {
        title: "Super Visa",
        image: {
          src: "/tnc/ad8.webp",
          alt: "",
        },
        buttons: [
          {
            label: "Read More",
            href: "/super-visa",
          },
          {
            label: "Assessment",
            href: "/start-assessment",
            className: "bg-prime-red",
          },
        ],
      },
      {
        title: "Spousal Open Work Permit",
        image: {
          src: "/tnc/ad7.webp",
          alt: "",
        },
        buttons: [
          {
            label: "Read More",
            href: "/spousal-open-work-permit-2",
          },
          {
            label: "Assessment",
            href: "/start-assessment",
            className: "bg-prime-red",
          },
        ],
      },
    ],
  },
};

export const familySponsorship = {
  bannerData: {
    title: "Family & Sponsorship",
    src: imagesLink + "bg-slider-02.webp",
  },

  application: {
    title: "Family & Sponsorship Applications",
    card: [
      {
        title: "Spousal PR Sponsorship",
        image: {
          src: imagesLink + "f1.webp",
          alt: "",
        },
        buttons: [
          {
            label: "Read More",
            href: "/spousal-pr-sponsorship",
            className: "bg-prime-red",
          },
        ],
      },
      {
        title: "Spousal Work Permit",
        image: {
          src: imagesLink + "f2.webp",
          alt: "",
          className: "aspect-[5/6]",
        },
        buttons: [
          {
            label: "Read More",
            href: "/spousal-work-permit",
            className: "bg-prime-red",
          },
        ],
      },
      {
        title: "Child Or Other Dependent Sponsorship",
        image: {
          src: imagesLink + "f3.webp",
          alt: "",
        },
        buttons: [
          {
            label: "Read More",
            href: "/child-or-other-dependent-sponsorship",
            className: "bg-prime-red",
          },
        ],
      },
      {
        title: "Parents, Grandparents Sponsorship",
        image: {
          src: imagesLink + "f4.webp",
          alt: "",
        },
        buttons: [
          {
            label: "Read More",
            href: "/parents-grandparents-sponsorship",
            className: "bg-prime-red",
          },
        ],
      },
    ],
  },
};

export const permanentResidence = {
  bannerData: {
    title: "Permanent Residence",
    src: imagesLink + "bg-slider-02.webp",
  },

  application: {
    title: "Permanent Residence",
    card: [
      {
        title: "Federal Skilled Worker",
        image: {
          src: imagesLink + "p1.webp",
          alt: "",
        },
        buttons: [
          {
            label: "Read More",
            href: "/federal-skilled-worker",
            className: "bg-prime-red",
          },
        ],
      },
      {
        title: "Federal Skilled Trade Workers",
        image: {
          src: imagesLink + "p2.webp",
          alt: "",
          className: "aspect-[5/6]",
        },
        buttons: [
          {
            label: "Read More",
            href: "/federal-skilled-trade-workers",
            className: "bg-prime-red",
          },
        ],
      },
      {
        title: "Canadian Experience Class",
        image: {
          src: imagesLink + "p3.webp",
          alt: "",
        },
        buttons: [
          {
            label: "Read More",
            href: "/canadian-experience-class",
            className: "bg-prime-red",
          },
        ],
      },
      {
        title: "Provincial Nominee Programs",
        image: {
          src: imagesLink + "p4.webp",
          alt: "",
        },
        buttons: [
          {
            label: "Read More",
            href: "/provincial-nominee-programs",
            className: "bg-prime-red",
          },
        ],
      },
    ],
  },
};

export const FaqPageData = {
  bannerData: {
    title: "FAQs",
    src: imagesLink + "bg-slider-02.webp",
  },
  faqSection: {
    title: "FAQs",
    subTitle: "Frequently asked immigration questions",
    images: [imagesLink + "ad1.webp", imagesLink + "ad16.webp"],
    faqs: [
      {
        question: "What services does TNC Immigration offer?",
        answer: [
          "TNC Immigration provides a range of services including visa applications, permanent residency consultations, study permits, work permits, family sponsorships, and citizenship applications.",
        ],
      },
      {
        question: "Where are TNC Immigration's offices located?",
        answer: [
          "TNC Immigration has multiple locations across Canada, including Toronto (Mississauga) & Vancouver (Surrey, Kelowna)  Please visit our website for specific addresses and contact details.",
        ],
      },
      {
        question: "What types of visas can TNC Immigration help with?",
        answer: [
          "We assist with various visa applications including tourist visas, student visas, work visas, and business visas.",
        ],
      },
      {
        question: "How long does the visa application process take?",
        answer: [
          "The processing time varies depending on the type of visa and the applicant's circumstances. On average, it can take anywhere from a few weeks to several months. Our consultants will provide a more accurate timeline based on your specific case.",
          "Permanent Residency",
          "Q: What are the different pathways to permanent residency in Canada?",
          "A: There are several pathways including Express Entry, Provincial Nominee Programs (PNP), Family Sponsorship, and the Canadian Experience Class (CEC). Our consultants will help determine the best pathway for you.",
        ],
      },
      {
        question:
          "What are the different pathways to permanent residency in Canada?",
        answer: [
          "There are several pathways including Express Entry, Provincial Nominee Programs (PNP), Family Sponsorship, and the Canadian Experience Class (CEC). Our consultants will help determine the best pathway for you.",
        ],
      },
      {
        question: "Can TNC Immigration assist with Express Entry applications?",
        answer: [
          "Yes, we offer comprehensive support for Express Entry applications, including eligibility assessment, document preparation, and application submission.",
        ],
      },
      {
        question: "How can TNC Immigration help with obtaining a study permit?",
        answer: [
          "We assist with every step of the study permit process, from selecting the right institution to preparing and submitting your application, and providing post-arrival support in Canada",
        ],
      },
      {
        question: "What are the requirements for a study permit in Canada?",
        answer: [
          "Requirements include a letter of acceptance from a Canadian educational institution, proof of sufficient funds, a valid passport, and sometimes additional documentation depending on your home country.",
        ],
      },
      {
        question: "What types of work permits are available?",
        answer: [
          "There are several types of work permits including employer-specific work permits, open work permits, and post-graduation work permits. Our consultants can help you determine which one suits your situation.",
        ],
      },
      {
        question:
          "How can TNC Immigration assist with obtaining a work permit?",
        answer: [
          "We provide guidance on eligibility, help gather necessary documentation, and submit your application. We also offer support throughout the entire process to ensure a smooth experience.",
        ],
      },
      {
        question: "Who can I sponsor for immigration to Canada?",
        answer: [
          "You can sponsor your spouse, common-law partner, dependent children, parents, and grandparents. There are specific eligibility criteria that must be met for each category.",
        ],
      },
      {
        question: "What are the requirements for Canadian citizenship?",
        answer: [
          "Requirements include being a permanent resident, having lived in Canada for at least 3 out of the last 5 years, passing a citizenship test, and demonstrating proficiency in English or French.",
        ],
      },
      {
        question:
          "How can TNC Immigration help with my citizenship application?",
        answer: [
          "We offer assistance with eligibility assessment, document preparation, application submission, and preparation for the citizenship test.",
        ],
      },
      {
        question: "How can I book a consultation with TNC Immigration?",
        answer: [
          "You can book a consultation by visiting our website, calling our office, or emailing us. We offer both in-person and virtual consultations to accommodate your needs.",
        ],
      },
      {
        question: "What should I bring to my consultation?",
        answer: [
          "Please bring any relevant documents such as your passport, previous visa or immigration application details, educational credentials, and any correspondence with immigration authorities.",
        ],
      },
    ],
  },
};
