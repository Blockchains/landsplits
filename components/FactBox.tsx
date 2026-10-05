import type { Jurisdiction } from "@/lib/data";

const statusCopy: Record<Jurisdiction["dataQualityStatus"], string> = {
  MOCK: "Illustrative record. Local facts still need a source check.",
  PARTIAL: "Some framework facts are sourced in outline. Address-level review is still required.",
  VERIFIED: "Recently checked against an authoritative source.",
  STALE: "Previously reviewed, and due for an update.",
  REVIEW_REQUIRED: "A reported change is waiting for review."
};

export function FactBox({ city }: { city: Jurisdiction }) {
  const rows = [
    ["Planning authority", city.subdivisionApprovalAuthority],
    ["Local framework", city.legislationName],
    ["Minimum lot size", city.minLotSizeLabel],
    ["Maximum density", city.maxDensityLabel],
    ["Approval timing", city.estimatedApprovalTimeLabel],
    ["Utility review", city.utilityNote],
    ["Survey and mapping", "Usually required before a legal lot is created"],
    ["Last reviewed", city.lastReviewedAt]
  ];

  return (
    <section className="rounded-sm border border-sand-200 bg-white">
      <div className="flex items-start justify-between gap-4 border-b border-sand-100 px-5 py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-charcoal-500">Local factors</p>
          <h2 className="mt-1 font-serif text-2xl text-charcoal-950">What to verify in {city.cityName}</h2>
        </div>
        <span className="rounded-sm bg-sand-100 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-forest-800">
          {city.dataQualityStatus.replaceAll("_", " ")}
        </span>
      </div>
      <dl className="divide-y divide-sand-100">
        {rows.map(([label, value]) => (
          <div key={label} className="grid gap-1 px-5 py-3 sm:grid-cols-[180px_1fr] sm:gap-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-charcoal-500">{label}</dt>
            <dd className="text-sm leading-6 text-charcoal-800">{value}</dd>
          </div>
        ))}
      </dl>
      <p className="border-t border-sand-100 px-5 py-3 text-xs leading-5 text-charcoal-500">
        Data status {city.dataQualityScore}/100. {statusCopy[city.dataQualityStatus]} Nothing in this box is a determination that a parcel can be subdivided.
      </p>
    </section>
  );
}
