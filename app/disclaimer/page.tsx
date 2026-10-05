import type { Metadata } from "next";

export const metadata: Metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="font-serif text-4xl text-charcoal-950">Disclaimer</h1>
      <p className="mt-5 text-sm leading-7 text-charcoal-700">
        Information on LandSplits.com is educational and preliminary. Subdivision eligibility, zoning, lot dimensions, access, utilities, title, environmental constraints, financing, local standards, and approval processes must be verified with the relevant authority and qualified professionals. LandSplits.com does not provide legal advice, surveying, engineering, title insurance, municipal approval, or a guarantee of subdivision eligibility.
      </p>
      <p className="mt-4 text-sm leading-7 text-charcoal-700">
        Prototype records marked MOCK or PARTIAL are structural examples for the directory. They are not current certified extracts of a municipal code.
      </p>
    </main>
  );
}
