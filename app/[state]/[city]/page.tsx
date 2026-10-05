import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddressForm } from "@/components/AddressForm";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CaliforniaSb9Alert } from "@/components/CaliforniaSb9Alert";
import { FactBox } from "@/components/FactBox";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { StickyAddressBar } from "@/components/StickyAddressBar";
import { cityFaqs, cityIntro, costRows, processSteps, requirementCards } from "@/lib/content";
import { getJurisdiction, jurisdictions, relatedCities, topics } from "@/lib/data";

type Props = { params: Promise<{ state: string; city: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return jurisdictions.filter((item) => item.published).map((item) => ({
    state: item.regionSlug,
    city: item.citySlug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state, city } = await params;
  const jurisdiction = getJurisdiction(state, city);
  if (!jurisdiction) return {};
  const title = `How to subdivide your lot in ${jurisdiction.cityName}, ${jurisdiction.regionName}`;
  const description = `Review zoning, minimum lot size, utilities, costs, timelines, and local professional support for subdivision in ${jurisdiction.cityName}, ${jurisdiction.regionName}.`;
  return {
    title,
    description,
    alternates: { canonical: `/${jurisdiction.regionSlug}/${jurisdiction.citySlug}` },
    openGraph: { title, description, type: "article" }
  };
}

export default async function CityPage({ params }: Props) {
  const { state, city: citySlug } = await params;
  const city = getJurisdiction(state, citySlug);
  if (!city) notFound();
  const faqs = cityFaqs(city);
  const nearby = relatedCities(city);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer }
          }))
        }}
      />
      {city.regionSlug === "california" ? <CaliforniaSb9Alert cityName={city.cityName} /> : null}
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Breadcrumbs city={city} />
        <p className="mt-6 text-xs uppercase tracking-[0.16em] text-forest-800">
          {city.countyOrRegionalDistrict} · {city.countryName}
        </p>
        <h1 className="mt-3 max-w-4xl font-serif text-4xl leading-tight text-charcoal-950 sm:text-5xl">
          How to subdivide your lot in {city.cityName}, {city.regionName}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-charcoal-700">
          Understand local zoning, lot size, access, utility, survey, title, and approval requirements before you plan a subdivision in {city.cityName}.
        </p>
        <div className="rule mt-6 max-w-xs" />

        <nav className="mt-6 flex gap-4 overflow-x-auto text-sm text-forest-800">
          {topics.map((topic) => (
            <Link key={topic.slug} href={`/${city.regionSlug}/${city.citySlug}/${topic.slug}`} className="whitespace-nowrap underline-offset-4 hover:underline">
              {topic.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-12">
            <section>
              <h2 className="font-serif text-3xl text-charcoal-950">Can you subdivide a lot in {city.cityName}?</h2>
              <p className="mt-4 max-w-prose text-base leading-7 text-charcoal-700">{cityIntro(city)}</p>
              <p className="mt-4 max-w-prose text-base leading-7 text-charcoal-700">{city.localDifference}</p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-charcoal-950">Key requirements in {city.cityName}</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {requirementCards.map(([title, body]) => (
                  <article key={title} className="border border-sand-200 bg-white p-4">
                    <h3 className="font-serif text-lg text-charcoal-950">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-charcoal-700">{body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="utilities">
              <h2 className="font-serif text-3xl text-charcoal-950">Understanding {city.cityName} utilities</h2>
              <p className="mt-4 max-w-prose text-base leading-7 text-charcoal-700">{city.utilityNote}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-charcoal-700">
                <li>Is municipal water available to the parcel, or only to the street?</li>
                <li>Is public sewer available, or is {city.septicPossible ? "a septic route sometimes possible" : "septic generally unlikely in this city"}?</li>
                <li>Will each new lot need its own connection, meter, and capacity confirmation?</li>
                <li>Who pays if an extension, main upgrade, or off-site work is required?</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-charcoal-950">The subdivision process in {city.cityName}</h2>
              <ol className="mt-5 space-y-4">
                {processSteps.map((step, index) => (
                  <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-3">
                    <span className="font-serif text-lg text-forest-800">0{index + 1}</span>
                    <p className="text-sm leading-6 text-charcoal-700">{step}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-sm text-charcoal-500">
                A public hearing is {city.publicHearingPossible ? "possible on some paths" : "not the default path in every case"}, but the application type decides it.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-charcoal-950">What it costs to split a lot in {city.cityName}</h2>
              <p className="mt-4 max-w-prose text-sm leading-6 text-charcoal-700">
                These are categories, not a local total. Publishing a single price would invent precision the fee schedule and the site do not support.
              </p>
              <div className="mt-4 overflow-hidden border border-sand-200 bg-white">
                {costRows.map(([item, why]) => (
                  <div key={item} className="grid gap-1 border-b border-sand-100 px-4 py-3 last:border-b-0 sm:grid-cols-2">
                    <p className="text-sm font-semibold text-charcoal-950">{item}</p>
                    <p className="text-sm text-charcoal-700">{why}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-charcoal-950">How long a subdivision takes in {city.cityName}</h2>
              <p className="mt-4 max-w-prose text-base leading-7 text-charcoal-700">
                {city.estimatedApprovalTimeLabel} A boundary adjustment or consent can be much shorter than a fully serviced multi-lot subdivision. Appeals, incomplete studies, and utility design are the usual reasons a file slips.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-charcoal-950">Questions owners ask</h2>
              <FaqList faqs={faqs} />
            </section>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
            <FactBox city={city} />
            <div className="border border-forest-800 bg-forest-950 p-5 text-sand-50">
              <p className="text-xs uppercase tracking-[0.16em] text-sand-200">Address screen</p>
              <h2 className="mt-2 font-serif text-2xl text-white">Check a real property in {city.cityName}</h2>
              <p className="mt-2 text-sm leading-6 text-sand-100">
                We identify the likely jurisdiction and collect the facts needed for a preliminary screen. This is not an approval.
              </p>
              <div className="mt-4">
                <AddressForm cityName={city.cityName} regionName={city.regionName} placeholder={`Enter a ${city.cityName} address`} />
              </div>
            </div>
            <div className="border border-sand-200 bg-white p-5">
              <h2 className="font-serif text-xl text-charcoal-950">Sources to open next</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {city.officialWebsite ? <li><a className="text-forest-800 underline underline-offset-4" href={city.officialWebsite}>Official website</a></li> : null}
                {city.planningDepartmentUrl ? <li><a className="text-forest-800 underline underline-offset-4" href={city.planningDepartmentUrl}>Planning department</a></li> : null}
                <li className="text-charcoal-700">{city.legislationCitation}</li>
              </ul>
            </div>
          </aside>
        </div>

        {nearby.length > 0 ? (
          <section className="mt-14">
            <h2 className="font-serif text-2xl text-charcoal-950">Related guides</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {nearby.map((item) => (
                <li key={item.id}>
                  <Link href={`/${item.regionSlug}/${item.citySlug}`} className="border border-sand-200 bg-white px-3 py-2 text-sm text-charcoal-800 hover:border-forest-800">
                    {item.cityName}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </main>
      <StickyAddressBar cityName={city.cityName} regionName={city.regionName} />
    </>
  );
}
