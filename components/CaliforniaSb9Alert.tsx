export function CaliforniaSb9Alert({ cityName }: { cityName: string }) {
  const href = `https://sb9split.com/?utm_source=landsplits&utm_medium=referral&utm_campaign=california-city-page&utm_content=${cityName.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <aside className="border-y border-amber-300 bg-amber-50">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <p className="text-sm leading-6 text-amber-800">
          <strong className="text-charcoal-950">California property owner?</strong> Some qualifying urban
          lot split and housing projects may use California SB 9 pathways. A complete eligible application
          is generally subject to a 60-day local approval-or-denial timeline, but eligibility depends on
          the property, ownership, occupancy, zoning, tenant history, and other statutory and local
          requirements.{" "}
          <a href={href} className="font-semibold text-forest-800 underline underline-offset-4">
            Explore the SB 9 California portal
          </a>
          .
        </p>
      </div>
    </aside>
  );
}
