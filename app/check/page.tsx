"use client";

import { FormEvent, useMemo, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const objectives = [
  ["CREATE_SEPARATE_LOT", "Create a separate lot"],
  ["BUILD_ADDITIONAL_HOMES", "Build additional homes"],
  ["SELL_DEVELOPMENT_POTENTIAL", "Sell development potential"],
  ["BUY_PROPERTY", "Check a property before offering"],
  ["FAMILY_HOUSING", "Create family housing"],
  ["RESEARCH", "Research only"]
];

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block text-sm text-charcoal-800">
      <span className="mb-1 block font-semibold">{label}</span>
      {children}
    </label>
  );
}

function CheckForm() {
  const params = useSearchParams();
  const [address, setAddress] = useState(params.get("address") ?? "");
  const [city, setCity] = useState(params.get("city") ?? "");
  const [region, setRegion] = useState(params.get("region") ?? "");
  const [relationship, setRelationship] = useState("OWNER_OCCUPANT");
  const [objective, setObjective] = useState("CREATE_SEPARATE_LOT");
  const [submitted, setSubmitted] = useState(false);

  const california = region.toLowerCase().includes("california");
  const sessionId = useMemo(() => Math.random().toString(36).slice(2, 10), []);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <p className="text-xs uppercase tracking-[0.16em] text-forest-800">Property screen</p>
      <h1 className="mt-3 font-serif text-4xl text-charcoal-950">Check subdivision factors for a real address</h1>
      <p className="mt-4 text-sm leading-6 text-charcoal-700">
        This intake routes a preliminary screen. It does not confirm eligibility, value, or approval.
        Session {sessionId}.
      </p>

      {california ? (
        <aside className="mt-6 border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-800">
          <strong className="text-charcoal-950">This property context is California.</strong> You can use the
          SB 9 specialist screen if the situation may fit that pathway, or stay here for a general subdivision assessment.
          <div className="mt-3 flex flex-wrap gap-3">
            <a className="font-semibold text-forest-800 underline underline-offset-4" href="https://sb9split.com/?utm_source=landsplits&utm_medium=referral&utm_campaign=intake">
              SB 9 eligibility screen
            </a>
            <span className="text-charcoal-500">or continue below</span>
          </div>
        </aside>
      ) : null}

      {!submitted ? (
        <form onSubmit={onSubmit} className="mt-8 space-y-5 border border-sand-200 bg-white p-5">
          <Field label="Street address">
            <input required value={address} onChange={(event) => setAddress(event.target.value)} className="w-full border border-sand-200 bg-sand-50 px-3 py-2 text-sm" />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="City">
              <input required value={city} onChange={(event) => setCity(event.target.value)} className="w-full border border-sand-200 bg-sand-50 px-3 py-2 text-sm" />
            </Field>
            <Field label="State or province">
              <input required value={region} onChange={(event) => setRegion(event.target.value)} className="w-full border border-sand-200 bg-sand-50 px-3 py-2 text-sm" />
            </Field>
          </div>
          <Field label="Your relationship to the property">
            <select value={relationship} onChange={(event) => setRelationship(event.target.value)} className="w-full border border-sand-200 bg-sand-50 px-3 py-2 text-sm">
              <option value="OWNER_OCCUPANT">Owner-occupant</option>
              <option value="INVESTOR">Investor</option>
              <option value="BUYER">Buyer</option>
              <option value="AGENT">Agent</option>
              <option value="ESTATE_REPRESENTATIVE">Estate representative</option>
            </select>
          </Field>
          <Field label="Objective">
            <select value={objective} onChange={(event) => setObjective(event.target.value)} className="w-full border border-sand-200 bg-sand-50 px-3 py-2 text-sm">
              {objectives.map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </Field>
          <button type="submit" className="rounded-sm bg-forest-800 px-4 py-3 text-sm font-semibold text-white">
            Run preliminary screen
          </button>
        </form>
      ) : (
        <section className="mt-8 border border-sand-200 bg-white p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-forest-800">Review required</p>
          <h2 className="mt-2 font-serif text-3xl text-charcoal-950">This address warrants a feasibility review, not a yes.</h2>
          <p className="mt-3 text-sm leading-6 text-charcoal-700">
            We can place {address} in {city}, {region} against a local planning jurisdiction and the objective you selected.
            Before anyone relies on that, a qualified review still has to confirm zoning, dimensions, access, title, easements,
            utilities, and the local approval path.
          </p>
          <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
            <div className="bg-sand-50 p-3"><dt className="text-charcoal-500">Relationship</dt><dd>{relationship.replaceAll("_", " ")}</dd></div>
            <div className="bg-sand-50 p-3"><dt className="text-charcoal-500">Objective</dt><dd>{objective.replaceAll("_", " ")}</dd></div>
          </dl>
          <div className="mt-6 border border-forest-800 p-4">
            <h3 className="font-serif text-xl text-charcoal-950">Verified land split feasibility review</h3>
            <p className="mt-2 text-sm leading-6 text-charcoal-700">
              Essentials from $495, standard around $950, buyer or investor review around $1,500. A preliminary review,
              not a boundary survey, legal opinion, or municipal approval.
            </p>
          </div>
        </section>
      )}
    </main>
  );
}

export default function CheckPage() {
  return (
    <Suspense fallback={<main className="mx-auto max-w-3xl px-4 py-10">Loading screen…</main>}>
      <CheckForm />
    </Suspense>
  );
}
