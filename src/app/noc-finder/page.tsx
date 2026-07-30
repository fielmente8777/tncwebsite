import type { Metadata } from "next";
import NocFinder from "@/components/tools/noc/NocFinder";

export const metadata: Metadata = {
  title: "NOC Finder | TNC Immigration",
  description:
    "Search the NOC 2021 code list by job title or code and filter by TEER category, then confirm your NOC with TNC Immigration.",
};

export default function NocFinderPage() {
  return <NocFinder />;
}
