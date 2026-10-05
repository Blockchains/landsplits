import type { Metadata } from "next";

export const metadata: Metadata = { title: "How LandSplits works" };

export default function HowItWorksPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="font-serif text-4xl text-charcoal-950">How LandSplits works</h1>
      <div className="mt-6 space-y-5 text-sm leading-7 text-charcoal-700">
        <p>LandSplits organises public planning information into a city guide, then offers an address screen for a real parcel. The guide is educational. The screen is preliminary. Neither is an approval.</p>
        <p>City pages are generated from a jurisdiction record: authority, framework, lot-size language, utility notes, and a data-quality badge. Missing figures stay labelled as varying or unverified. We do not invent a minimum lot size to fill a fact box.</p>
        <p>Priority cities can be pre-rendered. Long-tail cities are intended for on-demand ISR, with a weekly revalidation window, once the dataset moves from this prototype JSON into a database.</p>
        <p>California pages link to SB9Split.com with source parameters. They do not say a resident qualifies. Eligibility stays property-specific.</p>
      </div>
    </main>
  );
}
