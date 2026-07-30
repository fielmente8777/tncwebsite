import type { Metadata } from "next";
import FswCalculator from "@/components/tools/fsw/FswCalculator";

export const metadata: Metadata = {
  title: "FSW Calculator | TNC Immigration",
  description:
    "Free Federal Skilled Worker calculator. Check if you clear the 67-point pass mark for Express Entry eligibility, then speak to TNC Immigration.",
};

export default function FswCalculatorPage() {
  return <FswCalculator />;
}
