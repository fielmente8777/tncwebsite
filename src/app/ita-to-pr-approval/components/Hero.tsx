import Image from "next/image";
import Button from "./Button";
import Clock from "./Clock";

const BOOKING_URL = "https://calendly.com/tncbooking/consultation60";
const CONTACT_URL = "https://tncimmigration.com/contact-us/";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#f5efe8] to-[#efe6dc] py-24 md:py-28 border-b-4 border-red-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-10 right-0 w-[1200px] h-[500px] bg-gradient-to-r from-transparent to-red-600/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] items-center">
        <div>
          <span className="inline-block text-xs font-bold tracking-[0.14em] uppercase text-red-600 mb-5">
            Post-ITA Support · Licensed RCICs
          </span>

          <h1 className="text-5xl md:text-8xl lg:text-[92px] font-extrabold leading-[0.95] tracking-tight uppercase mb-6">
            From ITA to <span className="block text-red-600">PR Approval</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed max-w-[640px] mb-10 text-gray-900">
            You have 60 days. Our licensed RCICs take the burden off your
            shoulders and handle everything for you, so your application is
            accurate, complete, and approval ready.
          </p>

          <Clock />

          <div className="flex flex-wrap gap-4 mb-5">
            <Button href={BOOKING_URL} variant="primary">
              Book a consultation
            </Button>
            <Button href={CONTACT_URL} variant="ghost">
              Contact us
            </Button>
          </div>

          <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#5a6270]">
            Accepting limited applications
          </p>
        </div>
        <div className="relative w-full aspect-[4/5.8]">
          <Image
            src="/DSC09903.jpeg"
            alt="hero"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
