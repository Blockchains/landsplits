"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type FinderCity = {
  cityName: string;
  regionName: string;
  regionSlug: string;
  citySlug: string;
  countryName: string;
  legislationName: string;
};

export function CityFinder({ cities }: { cities: FinderCity[] }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return cities;
    return cities.filter((city) =>
      `${city.cityName} ${city.regionName} ${city.countryName} ${city.legislationName}`.toLowerCase().includes(needle)
    );
  }, [cities, query]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="text-xs uppercase tracking-[0.16em] text-forest-800">Directory</p>
      <h2 className="mt-2 font-serif text-3xl text-charcoal-950">Find a city guide</h2>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search Los Angeles, Toronto, Austin..."
        className="mt-4 w-full border border-sand-200 bg-white px-4 py-3 text-sm outline-none ring-forest-800 focus:ring-2"
      />
      <ul className="mt-4 divide-y divide-sand-200 border-y border-sand-200">
        {results.map((city) => (
          <li key={`${city.regionSlug}-${city.citySlug}`}>
            <Link href={`/${city.regionSlug}/${city.citySlug}`} className="flex items-center justify-between gap-4 py-3 hover:text-forest-800">
              <span>
                <span className="block font-medium text-charcoal-950">{city.cityName}, {city.regionName}</span>
                <span className="text-sm text-charcoal-500">{city.legislationName}</span>
              </span>
              <span className="shrink-0 text-sm text-forest-800">Open</span>
            </Link>
          </li>
        ))}
        {results.length === 0 ? <li className="py-4 text-sm text-charcoal-500">No guide matches that search. Use the property screen and we will still collect the address.</li> : null}
      </ul>
    </section>
  );
}
