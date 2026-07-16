export default function Clock() {
  return (
    <div className="inline-flex items-center gap-5 bg-white border border-[#e2d6c8] border-l-[6px] border-l-red-600 px-7 py-5 mb-10">
      <span className="text-6xl md:text-7xl font-extrabold leading-none text-red-600 tracking-tight">
        60
      </span>
      <span className="text-sm font-semibold text-[#5a6270] max-w-[180px] leading-tight uppercase tracking-wide">
        days from your Invitation to Apply
      </span>
    </div>
  );
}