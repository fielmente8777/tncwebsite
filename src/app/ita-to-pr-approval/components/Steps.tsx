const steps = [
  {
    title: "A dedicated case manager",
    body: "Your dedicated PR journey companion who handles your application process from start to finish, so you always know your status and what comes next.",
  },
  {
    title: "A personalized document checklist",
    body: "A checklist built around your specific situation, so nothing is missed and every form and supporting document is accounted for.",
  },
  {
    title: "Your own client portal",
    body: "A secure space for document uploads, progress tracking, and direct communication with our team throughout your application.",
  },
  {
    title: "Done-for-you application prep and submission",
    body: "You kick back and relax while our team prepares and submits your complete Post-ITA application without missing anything.",
  },
  {
    title: "Final RCIC review",
    body: "Our RCICs run a final thorough review of your forms, NOC code, and documents to ensure the file is error-free before it goes in.",
  },
  {
    title: "Continued support",
    body: "Our team stays with you until IRCC issues a final decision. If there is a request or concern from IRCC, we handle it for you.",
  },
];

export default function Steps() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-bold tracking-[0.14em] uppercase text-red-600 mb-3">
          Here&apos;s how we do it
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase mb-12">
          What you get when you work with us
        </h2>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e2d6c8] border border-[#e2d6c8]">
          {steps.map((step, i) => (
            <li 
              key={step.title}
              className="bg-white p-9 transition-colors duration-200 hover:bg-[#f5efe8]"
            >
              <span className="block text-sm font-extrabold text-red-600 tracking-[0.1em] mb-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg md:text-xl font-bold mb-3 leading-tight">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#5a6270]">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}