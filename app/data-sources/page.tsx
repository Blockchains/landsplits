import type { Metadata } from "next";

export const metadata: Metadata = { title: "Data sources" };

export default function DataSourcesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="font-serif text-4xl text-charcoal-950">Data sources</h1>
      <p className="mt-5 text-sm leading-7 text-charcoal-700">
        Authoritative sources are municipal codes, zoning by-laws and maps, planning department pages, subdivision ordinances, official plans, fee schedules, and GIS viewers. State and provincial statutes sit above them. Expert review sits beside them. This prototype uses labelled framework language rather than unverified numeric minimums.
      </p>
    </main>
  );
}
