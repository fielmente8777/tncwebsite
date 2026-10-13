import { Metadata } from "next";
import Link from "next/link";
import styles from "./our-rcics.module.css";

export const metadata: Metadata = {
  title: "Our RCICs | TNC Immigration",
  description:
    "Meet the RCIC team at TNC Immigration and view their CICC licence numbers.",
  alternates: {
    canonical: "https://tncimmigration.com/our-rcics/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [
    { name: "TNC Immigration", url: "https://tncimmigration.com/our-rcics/" },
  ],
  openGraph: {
    title: "Our RCICs | TNC Immigration",
    description: "Meet the RCIC team at TNC Immigration.",
    url: "https://tncimmigration.com/our-rcics/",
    siteName: "tncimmigration",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://tncimmigration.com/images/tncimmigration-og.png",
        width: 1200,
      },
    ],
  },
};

const rcics = [
  {
    name: "Rhea Patel",
    image: "/images/our-rcics/rhea-patel.png",
    licence: "R530163",
  },
  {
    name: "TJ Singh",
    image: "/images/our-rcics/tj-singh.webp",
    licence: "R731275",
  },
  {
    name: "Bijay Luitel",
    image: "/images/our-rcics/bijay-luitel.webp",
    licence: "R731518",
  },
  {
    name: "Prabhleen Sandhu",
    image: "/images/our-rcics/prabhleen-sandhu.webp",
    licence: "R709754",
  },
  {
    name: "Aninder Baidwan",
    image: "/images/our-rcics/aninder-baidwan.webp",
    licence: "R1056289",
  },
  {
    name: "Chakshu Kapur",
    image: "/images/our-rcics/chakshu-kapur.webp",
    licence: "R706391",
  },
  {
    name: "Sukh Khattra",
    image: "/images/our-rcics/sukh-khattra.webp",
    licence: "R710355",
  },
];

const page = () => {
  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/our-rcics/banner.webp" alt="" fetchPriority="high" />
        <div className={styles.shade}>
          <div className={styles.container}>
            <p className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>/</span>
              Our RCICs
            </p>
            <h1>Our RCICs</h1>
          </div>
        </div>
      </div>

      <section className={styles.rcics}>
        <div className={styles.container}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>TNC Immigration</p>
            <h2 className={styles.title}>Meet our RCICs</h2>
            <p className={styles.lead}>
              Our Regulated Canadian Immigration Consultants are here to guide
              you through your Canadian immigration options.
            </p>
          </div>

          <div className={styles.grid}>
            {rcics.map((person) => (
              <div className={styles.cell} key={person.licence}>
                <article className={styles.card}>
                  <div className={styles.portrait}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      loading="lazy"
                      src={person.image}
                      alt={`${person.name}, TNC Immigration`}
                    />
                  </div>
                  <div className={styles.over}>
                    <h3>{person.name}</h3>
                    <p className={styles.role}>RCIC</p>
                    <p className={styles.lic}>
                      Licence Number: {person.licence}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <div className={styles.cta}>
            <p>Speak with our team about your immigration matter.</p>
            <div className={styles.btns}>
              <Link
                className={`${styles.btn} ${styles.btnRed}`}
                href="/book-appointment"
              >
                Book Appointment
              </Link>
              <Link
                className={`${styles.btn} ${styles.btnGrey}`}
                href="/about-us"
              >
                About TNC
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
