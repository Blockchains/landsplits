import type { Metadata } from "next";

export const metadata: Metadata = { title: "About LandSplits" };

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="font-serif text-4xl text-charcoal-950">About</h1>
      <p className="mt-5 text-sm leading-7 text-charcoal-700">
        LandSplits is a North American property-development directory for a narrow question: can this parcel be subdivided, and what would it take? The public layer is city guidance. The commercial layer is an address screen, a paid feasibility review, and a professional directory.
      </p>
    </main>
  );
}
