import type { Metadata } from "next";
import BcpnpCalculator from "@/components/tools/bcpnp/BcpnpCalculator";

export const metadata: Metadata = {
  title: "BCPNP Calculator | TNC Immigration",
  description:
    "Free BC PNP Skills Immigration points calculator. Estimate your registration score out of 200, then speak to TNC Immigration.",
};

export default function BcpnpCalculatorPage() {
  return <BcpnpCalculator />;
}
