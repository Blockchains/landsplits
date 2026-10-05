import Link from "next/link";
import { AddressForm } from "@/components/AddressForm";
import { CityFinder } from "@/components/CityFinder";
import { citiesInRegion, jurisdictions, regions } from "@/lib/data";

const hubs = [
  ["Lot splits", "The difference between a lot split, a short plat, a severance, and a full subdivision."],
  ["Zoning", "Why the district, overlay, and official plan decide more than a single area number."],
  ["Minimum lot size", "How to read a minimum without treating it as an approval."],
  ["Utilities", "Water, sewer, septic, and who pays for the extension."],
  ["Cost and timing", "The categories that actually make up a budget and a calendar."],
  ["Buying a candidate", "Questions to ask before offering on land marketed for its split potential."]
];

const services = [
  "Land surveyors",
  "Civil engineers",
  "Land-use planners",
  "Land-use attorneys",
  "Title and escrow",
  "Subdivision lenders"
];

export default function HomePage() {
  const us = regions.filter((region) => region.countryCode === "US");
  const ca = regions.filter((region) => region.countryCode === "CA");

  return (
    <main>
      <section className="bg-forest-950 text-sand-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-sand-200">North American land subdivision directory</p>
            <h1 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-white sm:text-6xl">
              Find out what your land could become
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-sand-100 sm:text-lg">
              Explore local subdivision rules, minimum lot sizes, approval processes, utility considerations,
              and professional support for cities across the United States and Canada.
            </p>
            <div className="mt-8 max-w-xl rounded-sm bg-sand-50 p-3 text-charcoal-950">
              <AddressForm />
              <p className="px-1 pt-3 text-xs leading-5 text-charcoal-500">
                Start with a free preliminary property screen. Results are informational and require local verification.
              </p>
            </div>
          </div>
          <aside className="border border-white/10 bg-forest-800/40 p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-sand-200">A directory, not a promise</p>
            <p className="mt-4 font-serif text-2xl leading-snug text-white">
              Lot area is the start of the file, not the decision.
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-sand-100">
              <li>Zoning, frontage, access, and servicing can all refuse a large lot.</li>
              <li>US plats and Canadian consents are different legal instruments.</li>
              <li>California SB 9 is a specialist path, linked out only where the state is California.</li>
            </ul>
            <Link href="/how-it-works" className="mt-6 inline-block text-sm font-semibold text-white underline underline-offset-4">
              How LandSplits works
            </Link>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-forest-800">Browse</p>
            <h2 className="mt-2 font-serif text-3xl text-charcoal-950">Subdivision rules by state or province</h2>
          </div>
          <p className="hidden text-sm text-charcoal-500 sm:block">{jurisdictions.length} city guides in this release</p>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <RegionColumn title="United States" items={us} />
          <RegionColumn title="Canada" items={ca} />
        </div>
      </section>

      <CityFinder
        cities={jurisdictions.map((city) => ({
          cityName: city.cityName,
          regionName: city.regionName,
          regionSlug: city.regionSlug,
          citySlug: city.citySlug,
          countryName: city.countryName,
          legislationName: city.legislationName
        }))}
      />

      <section className="bg-sand-100">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-3">
          {[
            ["01", "Search the city or the property", "Find the local framework and the factors that usually decide a split."],
            ["02", "Read the pathway, not a slogan", "Lot size, frontage, utilities, cost categories, and timing, with the limits labelled."],
            ["03", "Verify with specialists", "Surveyors, planners, engineers, and title professionals when the screen is worth pursuing."]
          ].map(([step, title, body]) => (
            <article key={step}>
              <p className="font-serif text-sm text-forest-800">{step}</p>
              <h3 className="mt-2 font-serif text-2xl text-charcoal-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-charcoal-700">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-3xl text-charcoal-950">Guides that hold up under a planning counter</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hubs.map(([title, body]) => (
            <article key={title} className="border border-sand-200 bg-white p-5">
              <h3 className="font-serif text-xl text-charcoal-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-charcoal-700">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="grid gap-8 border border-sand-200 bg-white p-6 lg:grid-cols-[1fr_1.2fr] lg:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-forest-800">Directory</p>
            <h2 className="mt-2 font-serif text-3xl text-charcoal-950">Find local land development professionals</h2>
            <p className="mt-3 text-sm leading-6 text-charcoal-700">
              Listings are a routing layer. Licence, insurance, and coverage still have to be confirmed with the firm and the regulator.
            </p>
            <Link href="/professionals" className="mt-5 inline-block text-sm font-semibold text-forest-800 underline underline-offset-4">
              View the professional directory
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-3 text-sm">
            {services.map((service) => (
              <li key={service} className="border border-sand-200 bg-sand-50 px-3 py-3 text-charcoal-800">{service}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

function RegionColumn({ title, items }: { title: string; items: typeof regions }) {
  return (
    <div>
      <h3 className="font-serif text-2xl text-charcoal-950">{title}</h3>
      <ul className="mt-4 divide-y divide-sand-200 border-y border-sand-200">
        {items.map((region) => (
          <li key={region.slug}>
            <Link href={`/${region.slug}`} className="flex items-center justify-between py-3 hover:text-forest-800">
              <span className="font-medium text-charcoal-950">{region.name}</span>
              <span className="text-sm text-charcoal-500">{citiesInRegion(region.slug).length} guides</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
