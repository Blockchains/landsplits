import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Subdivision guides",
  description: "Long-form LandSplits.com guides on lot splits, consent, utilities, title, and buying land for its split potential."
};

const guides = [
  ["What a lot split actually is", "A lot split, short plat, severance, or consent creates a new legal parcel only when the mapping document is completed and recorded or registered. A sketch is not a lot."],
  ["Why minimum lot size is not an approval", "Area is one test. Frontage, access, utilities, overlays, and title can refuse a parcel that meets a published minimum."],
  ["Utilities before design", "Water, sewer or septic, drainage, and who pays for an extension should be known before a final line is drawn."],
  ["Title, easements, and lenders", "A mortgage, access easement, or private covenant can block a split the zoning map allows. Read title before spending on engineering."],
  ["US plats and Canadian consents", "The legal instrument differs. A US minor subdivision and an Ontario consent or BC approving-officer decision are not interchangeable."],
  ["California and SB 9", "SB 9 is a specialist, eligibility-gated path. LandSplits does not decide whether a California parcel qualifies. Use a specialist screen and local confirmation."],
  ["Buying a candidate property", "Ask for the survey, zoning district, utility letters, prior denials, and any HOA instruments before offering on land marketed for split potential."],
  ["Costs as categories, not a quote", "Survey, title, fees, engineering, utilities, environmental reports, legal, and construction are separate lines. A single published price would invent precision."]
];

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-xs uppercase tracking-[0.16em] text-forest-800">LandSplits.com</p>
      <h1 className="mt-3 font-serif text-4xl text-charcoal-950">Subdivision guides</h1>
      <p className="mt-4 text-base leading-7 text-charcoal-700">
        These guides are the national layer under the city pages. They explain the instruments and the checks. They do not replace a local code section or a parcel-specific review.
      </p>
      <div className="mt-8 space-y-6">
        {guides.map(([title, body]) => (
          <article key={title} className="border border-sand-200 bg-white p-5">
            <h2 className="font-serif text-2xl text-charcoal-950">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-charcoal-700">{body} A serious file still needs a surveyor, a title review, and the authority that actually decides the application. LandSplits.com is an informational directory. It does not determine eligibility, value, or approval.</p>
          </article>
        ))}
      </div>
      <p className="mt-8 text-sm">
        <Link href="/states" className="text-forest-800 underline underline-offset-4">Browse states and provinces</Link>
      </p>
    </main>
  );
}
