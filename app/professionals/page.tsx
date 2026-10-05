import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Subdivision professionals" };

const services = [
  ["Land surveyors", "Boundary evidence before anyone draws a new line."],
  ["Civil engineers", "Access, grading, drainage, and servicing."],
  ["Land-use planners", "Which path the local code actually offers."],
  ["Land-use attorneys", "Complex entitlement, appeals, and title conflicts."],
  ["Title and escrow", "Easements, mortgages, and whether a new legal lot can close."],
  ["Subdivision lenders", "Financing that survives a change in the legal description."]
];

export default function ProfessionalsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="font-serif text-4xl text-charcoal-950">Professionals</h1>
      <p className="mt-4 text-sm leading-6 text-charcoal-700">
        The directory is a match layer, not a certification. A lead is shared only after the user agrees to a stated number of recipients.
      </p>
      <div className="mt-6 grid gap-3">
        {services.map(([title, body]) => (
          <article key={title} className="border border-sand-200 bg-white p-4">
            <h2 className="font-serif text-xl text-charcoal-950">{title}</h2>
            <p className="mt-1 text-sm text-charcoal-700">{body}</p>
          </article>
        ))}
      </div>
      <Link href="/check" className="mt-6 inline-block text-sm font-semibold text-forest-800 underline underline-offset-4">
        Start with a property, then request a match
      </Link>
    </main>
  );
}
