import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CaliforniaSb9Alert } from "@/components/CaliforniaSb9Alert";
import { getJurisdiction, isTopic, jurisdictions, topics, type TopicSlug } from "@/lib/data";
import { costRows, requirementCards, topicIntro, topicTitle } from "@/lib/content";

type Props = { params: Promise<{ state: string; city: string; topic: string }> };

export function generateStaticParams() {
  return jurisdictions.flatMap((city) =>
    topics.map((topic) => ({ state: city.regionSlug, city: city.citySlug, topic: topic.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state, city, topic } = await params;
  const jurisdiction = getJurisdiction(state, city);
  if (!jurisdiction || !isTopic(topic)) return {};
  const title = topicTitle(jurisdiction, topic);
  return {
    title,
    description: topicIntro(jurisdiction, topic),
    alternates: { canonical: `/${jurisdiction.regionSlug}/${jurisdiction.citySlug}/${topic}` }
  };
}

export default async function TopicPage({ params }: Props) {
  const { state, city: citySlug, topic } = await params;
  const city = getJurisdiction(state, citySlug);
  if (!city || !isTopic(topic)) notFound();

  return (
    <>
      {city.regionSlug === "california" ? <CaliforniaSb9Alert cityName={city.cityName} /> : null}
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Breadcrumbs city={city} />
        <p className="mt-6 text-xs uppercase tracking-[0.16em] text-forest-800">{topics.find((item) => item.slug === topic)?.label}</p>
        <h1 className="mt-3 font-serif text-4xl text-charcoal-950">{topicTitle(city, topic)}</h1>
        <p className="mt-4 text-base leading-7 text-charcoal-700">{topicIntro(city, topic)}</p>
        <TopicBody cityName={city.cityName} topic={topic} />
        <p className="mt-8 text-sm text-charcoal-500">
          Part of the <Link className="text-forest-800 underline underline-offset-4" href={`/${city.regionSlug}/${city.citySlug}`}>{city.cityName} subdivision guide</Link>.
          Figures on this page are not a quote or an approval.
        </p>
      </main>
    </>
  );
}

function TopicBody({ cityName, topic }: { cityName: string; topic: TopicSlug }) {
  if (topic === "cost") {
    return (
      <div className="mt-6 border border-sand-200 bg-white">
        {costRows.map(([item, why]) => (
          <div key={item} className="border-b border-sand-100 px-4 py-3 last:border-b-0">
            <p className="font-semibold text-charcoal-950">{item}</p>
            <p className="mt-1 text-sm text-charcoal-700">{why}</p>
          </div>
        ))}
      </div>
    );
  }

  if (topic === "professionals") {
    const roles = ["Land surveyor", "Civil engineer", "Land-use planner", "Land-use attorney", "Title reviewer", "Builder or infill agent"];
    return (
      <ul className="mt-6 space-y-3">
        {roles.map((role) => (
          <li key={role} className="border border-sand-200 bg-white px-4 py-3 text-sm text-charcoal-800">
            {role} serving {cityName}. Confirm licence and coverage before sharing a file.
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="mt-6 space-y-3">
      {requirementCards.slice(0, 6).map(([title, body]) => (
        <li key={title} className="border border-sand-200 bg-white px-4 py-3">
          <p className="font-semibold text-charcoal-950">{title}</p>
          <p className="mt-1 text-sm text-charcoal-700">{body}</p>
        </li>
      ))}
    </ul>
  );
}
