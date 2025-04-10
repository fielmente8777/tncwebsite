import {
  FlagPolingIcon,
  InstagramIconSecond,
  PermanentResidenceIcon,
  SponsorshipIcon,
  TemporaryResidenceIcon,
} from "./icons";
import { imagesLink } from "./links";

export const homePageData = {
  bannnerData: {
    title: "Your Trusted Immigration Partner",
    subTitle: "Gateway to Your Canadian Dream",
    description:
      "Unlock your brand’s potential with digital strategies that deliver results.",
    src: "/tnc/bnr.webp",
    links: [
      {
        name: "View Services",
        href: "",
      },
      {
        name: "About Us",
        href: "",
      },
    ],
  },
  about: {
    title: "About Us",
    subTitle: "We’re Trusted Immigration Consultant",
    desc: "Our legal professionals take their time to understand the needs of our clients. We ensure that our clients are dealt professionally and provided all the suitable options. We provide immigration services to our clients inside Canada and also cater to our clients globally. We pride ourselves in providing professional services to a diversity of clients.",
    src: "",
    links: [
      {
        name: "Read More",
        href: "",
      },
      {
        name: "book Appointment",
        href: "",
      },
    ],
  },
  services: [
    {
      icon: <TemporaryResidenceIcon />,
      title: "Temporary Residence",
      name: "read more",
      href: "",
      src: "/tnc/im2.webp",
    },
    {
      icon: <PermanentResidenceIcon />,
      title: "Permanent Residence",
      name: "read more",
      href: "",
      src: "/tnc/im3.webp",
    },
    {
      icon: <SponsorshipIcon />,
      title: "Family & Sponsorship",
      name: "read more",
      href: "",
      src: "/tnc/im4.webp",
    },
    {
      icon: <FlagPolingIcon />,
      title: "FlagPoling Application",
      name: "read more",
      href: "",
      src: "/tnc/im1.webp",
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
          href: "",
        },
      },
      {
        image: {
          src: imagesLink + "social-2.webp",
        },
        link: {
          href: "",
        },
      },
      {
        image: {
          src: imagesLink + "social-3.webp",
        },
        link: {
          href: "",
        },
      },
      {
        image: {
          src: imagesLink + "social-5.webp",
        },
        link: {
          href: "",
        },
      },
      {
        image: {
          src: imagesLink + "social-6.webp",
        },
        link: {
          href: "",
        },
      },
      {
        image: {
          src: imagesLink + "social-7.webp",
        },
        link: {
          href: "",
        },
      },
      {
        image: {
          src: imagesLink + "social-8.webp",
        },
        link: {
          href: "",
        },
      },
      {
        image: {
          src: imagesLink + "social-9.webp",
        },
        link: {
          href: "",
        },
      },
      {
        image: {
          src: imagesLink + "social-10.webp",
        },
        link: {
          href: "",
        },
      },
      {
        image: {
          src: imagesLink + "social-11.webp",
        },
        link: {
          href: "",
        },
      },
      {
        image: {
          src: imagesLink + "social-12.webp",
        },
        link: {
          href: "",
        },
      },
      {
        image: {
          src: imagesLink + "social-13.webp",
        },
        link: {
          href: "",
        },
      },
      {
        image: {
          src: imagesLink + "social-14.webp",
        },
        link: {
          href: "",
        },
      },
      {
        image: {
          src: imagesLink + "social-15.webp",
        },
        link: {
          href: "",
        },
      },
      {
        image: {
          src: imagesLink + "social-16.webp",
        },
        link: {
          href: "",
        },
      },
    ],
    buttons: [
      {
        label: "Load More",
      },
      {
        label: "Follow on Instagram",
        icon: <InstagramIconSecond className="w-1" />,
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
            href: "https://calendly.com/tncbooking/consultation?month=2023-09",
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
            href: "https://calendly.com/tncbooking/consultation?month=2023-09",
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
            href: "https://calendly.com/tncbooking/consultation?month=2023-09",
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
            href: "https://calendly.com/tncbooking/consultation?month=2023-09",
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
            href: "https://calendly.com/tncbooking/consultation?month=2023-09",
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
            href: "https://calendly.com/tncbooking/consultation?month=2023-09",
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
          icon: "",
          title: "Federal Skilled Worker",
          links: [
            {
              name: "Book Consultation",
              href: "",
            },
            {
              name: "Read More",
              href: "",
            },
          ],
        },
        {
          icon: "",
          title: "Federal Skilled Trade Workers",
          links: [
            {
              name: "Book Consultation",
              href: "",
            },
            {
              name: "Read More",
              href: "",
            },
          ],
        },
        {
          icon: "",
          title: "Canadian Experience Class",
          links: [
            {
              name: "Book Consultation",
              href: "",
            },
            {
              name: "Read More",
              href: "",
            },
          ],
        },
        {
          icon: "",
          title: "Provincial Nominee Programs",
          links: [
            {
              name: "Book Consultation",
              href: "",
            },
            {
              name: "Read More",
              href: "",
            },
          ],
        },
      ],
    },
    {
      title: "Temporary Residence",
      cards: [
        {
          icon: "",
          title: "Study Permit",
          links: [
            {
              name: "Book Consultation",
              href: "",
            },
            {
              name: "Read More",
              href: "",
            },
          ],
        },
        {
          icon: "",
          title: "Intra-Company Transfer",
          links: [
            {
              name: "Book Consultation",
              href: "",
            },
            {
              name: "Read More",
              href: "",
            },
          ],
        },
        {
          icon: "",
          title: "Work Permit",
          links: [
            {
              name: "Book Consultation",
              href: "",
            },
            {
              name: "Read More",
              href: "",
            },
          ],
        },
        {
          icon: "",
          title: "Super Visa",
          links: [
            {
              name: "Book Consultation",
              href: "",
            },
            {
              name: "Read More",
              href: "",
            },
          ],
        },
        {
          icon: "",
          title: "LMIA Exemptions",
          links: [
            {
              name: "Book Consultation",
              href: "",
            },
            {
              name: "Read More",
              href: "",
            },
          ],
        },
        {
          icon: "",
          title: "Visitor",
          links: [
            {
              name: "Book Consultation",
              href: "",
            },
            {
              name: "Read More",
              href: "",
            },
          ],
        },
        {
          icon: "",
          title: "Post-Graduate Work Permits",
          links: [
            {
              name: "Book Consultation",
              href: "",
            },
            {
              name: "Read More",
              href: "",
            },
          ],
        },
      ],
    },
    {
      title: "Family & Sponsorship Applications",
      cards: [
        {
          icon: "",
          title: "Spousal PR Sponsorship",
          links: [
            {
              name: "Book Consultation",
              href: "",
            },
            {
              name: "Read More",
              href: "",
            },
          ],
        },
        {
          icon: "",
          title: "Child Or Other Dependent Sponsorship",
          links: [
            {
              name: "Book Consultation",
              href: "",
            },
            {
              name: "Read More",
              href: "",
            },
          ],
        },
        {
          icon: "",
          title: "Spousal Work Permit",
          links: [
            {
              name: "Book Consultation",
              href: "",
            },
            {
              name: "Read More",
              href: "",
            },
          ],
        },
        {
          icon: "",
          title: "Parents, Grandparents Sponsorship",
          links: [
            {
              name: "Book Consultation",
              href: "",
            },
            {
              name: "Read More",
              href: "",
            },
          ],
        },
      ],
    },
  ],
};
