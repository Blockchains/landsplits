import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddressForm } from "@/components/AddressForm";
import { citiesInRegion, getRegion, regions } from "@/lib/data";

type Props = { params: Promise<{ state: string }> };

export function generateStaticParams() {
  return regions.map((region) => ({ state: region.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;
  const region = getRegion(state);
  if (!region) return {};
  return {
    title: `How to subdivide land in ${region.name}`,
    description: region.summary,
    alternates: { canonical: `/${region.slug}` }
  };
}

export default async function RegionPage({ params }: Props) {
  const { state } = await params;
  const region = getRegion(state);
  if (!region) notFound();
  const cities = citiesInRegion(region.slug);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="text-xs uppercase tracking-[0.16em] text-forest-800">
        {region.countryName} · {region.regionType.toLowerCase()}
      </p>
      <h1 className="mt-3 max-w-3xl font-serif text-4xl text-charcoal-950 sm:text-5xl">
        How to subdivide land in {region.name}
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-7 text-charcoal-700">{region.summary}</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <section className="space-y-8">
          <article className="border border-sand-200 bg-white p-6">
            <h2 className="font-serif text-2xl text-charcoal-950">Legislative framework</h2>
            <p className="mt-3 text-sm leading-6 text-charcoal-700">{region.framework}</p>
          </article>
          <article className="border border-amber-300 bg-amber-50 p-6">
            <h2 className="font-serif text-2xl text-charcoal-950">Regional variation</h2>
            <p className="mt-3 text-sm leading-6 text-charcoal-700">{region.caution}</p>
          </article>
          <section>
            <h2 className="font-serif text-2xl text-charcoal-950">City guides</h2>
            <ul className="mt-4 divide-y divide-sand-200 border-y border-sand-200">
              {cities.map((city) => (
                <li key={city.id}>
                  <Link href={`/${city.regionSlug}/${city.citySlug}`} className="flex items-center justify-between py-4 hover:text-forest-800">
                    <span>
                      <span className="block font-medium text-charcoal-950">{city.cityName}</span>
                      <span className="text-sm text-charcoal-500">{city.legislationName}</span>
                    </span>
                    <span className="text-sm text-forest-800">Open guide</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </section>
        <aside className="h-fit border border-sand-200 bg-white p-5">
          <h2 className="font-serif text-xl text-charcoal-950">Check a {region.name} property</h2>
          <p className="mt-2 text-sm leading-6 text-charcoal-700">
            An address screen identifies the likely jurisdiction. It does not approve a split.
          </p>
          <div className="mt-4">
            <AddressForm regionName={region.name} placeholder={`Address in ${region.name}`} />
          </div>
        </aside>
      </div>
    </main>
  );
}
