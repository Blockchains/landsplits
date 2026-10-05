import type { Metadata } from "next";
import Link from "next/link";
import { regions } from "@/lib/data";

export const metadata: Metadata = { title: "Canada subdivision and severance guides" };

export default function CanadaPage() {
  const items = regions.filter((region) => region.countryCode === "CA");
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="font-serif text-4xl text-charcoal-950">Canada</h1>
      <p className="mt-4 text-sm leading-6 text-charcoal-700">
        Canadian pages do not reuse the US plat template. Ontario consents, British Columbia approving officers, and Alberta subdivision authorities are different roles under provincial statutes.
      </p>
      <ul className="mt-6 divide-y divide-sand-200 border-y border-sand-200">
        {items.map((region) => (
          <li key={region.slug} className="py-4">
            <Link href={`/${region.slug}`} className="font-serif text-2xl text-charcoal-950 hover:text-forest-800">{region.name}</Link>
            <p className="mt-1 text-sm text-charcoal-700">{region.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
