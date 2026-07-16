import Link from "next/link";
import Button from "./Button";

const BOOKING_URL = "https://calendly.com/tncbooking/consultation60";
const PHONE = "+1 (647) 932 0060";
const PHONE_TEL = "+16479320060";
const EMAIL = "info@tncimmigration.com";

export default function CTABand() {
  return (
    <section className="bg-red-600 text-white py-16 mb-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight mb-3 max-w-[560px]">
            Contact us today to get our Post-ITA support
          </h2>
          <p className="text-base leading-relaxed text-white/90 max-w-[520px]">
            The 60-day window moves fast. Talk to a licensed RCIC before the
            clock runs down.
          </p>
        </div>
        
        <div className="flex flex-col items-start gap-4">
          <Button href={BOOKING_URL} variant="light">
            Book now
          </Button>
          <div className="flex flex-col gap-1">
            <Link 
              href={`tel:${PHONE_TEL}`}
              className="text-white text-sm font-semibold no-underline hover:underline"
            >
              {PHONE}
            </Link>
            <Link 
              href={`mailto:${EMAIL}`}
              className="text-white text-sm font-semibold no-underline hover:underline"
            >
              {EMAIL}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}