export default function OinpCalculatorPage() {
  return (
    <main>
      <iframe
        id="oinp-calculator"
        title="TNC Main Inside"
        src="/oinp-calculator.html"
        className="md:h-[1750px] h-[1000px]"
        style={{
          minWidth: "100%",
          maxWidth: "100%",
          border: "none",
        }}
      />
    </main>
  );
}
