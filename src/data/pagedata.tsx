import {
  FlagPolingIcon,
  PermanentResidenceIcon,
  SponsorshipIcon,
  TemporaryResidenceIcon,
} from "./icons";

export const homePageData = {
  bannnerData: {
    title: "Your Trusted Immigration Partner",
    subTitle: "Gateway to Your Canadian Dream",
    description:
      "Unlock your brand’s potential with digital strategies that deliver results.",
    src: "/img/bnr.webp",
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
  services: [
    {
      icon: <TemporaryResidenceIcon />,
      title: "Temporary Residence",
      name: "read more",
      href: "",
      src: "/img/im2.webp",
    },
    {
      icon: <PermanentResidenceIcon />,
      title: "Permanent Residence",
      name: "read more",
      href: "",
      src: "/img/im3.webp",
    },
    {
      icon: <SponsorshipIcon />,
      title: "Family & Sponsorship",
      name: "read more",
      href: "",
      src: "/img/im4.webp",
    },
    {
      icon: <FlagPolingIcon />,
      title: "FlagPoling Application",
      name: "read more",
      href: "",
      src: "/img/im1.webp",
    },
  ],
};
