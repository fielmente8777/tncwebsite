import CTABand from "./components/CTABand";
import Hero from "./components/Hero";
import Steps from "./components/Steps";

export const metadata = {
  title: "Post-ITA to PR Approval Support | TNC Immigration",
  description:
    "You have 60 days after your ITA. TNC Immigration's licensed RCICs prepare and submit your complete Express Entry PR application so it is accurate, complete, and approval ready.",
  alternates: { canonical: "https://tncimmigration.com/post-ita-support/" },
  openGraph: {
    title: "Post-ITA to PR Approval Support | TNC Immigration",
    description:
      "Licensed RCICs handle your full Post-ITA application within the 60-day window. Dedicated case manager, personalized checklist, client portal, and final RCIC review.",
    url: "https://tncimmigration.com/post-ita-support/",
    siteName: "TNC Immigration",
    type: "website",
  },
};

// const BOOKING_URL = "https://calendly.com/tncbooking/consultation60";
// const CONTACT_URL = "https://tncimmigration.com/contact-us/";
// const PHONE = "+1 (647) 932 0060";
// const PHONE_TEL = "+16479320060";
// const EMAIL = "info@tncimmigration.com";

export default function PostITASupportPage() {
  return (
    <main className="pita">
      {/* Hero */}
      
      <Hero />
      <Steps />
      <CTABand />

    </main>
  );
}
