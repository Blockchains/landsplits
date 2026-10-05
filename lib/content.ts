import type { Jurisdiction, TopicSlug } from "./data";

export function cityIntro(city: Jurisdiction) {
  return `Subdividing a lot in ${city.cityName}, ${city.regionName} depends on zoning or land-use rules, lot dimensions, frontage, legal access, utilities, title, site conditions, and the local approval path. The responsible authority is generally ${city.subdivisionApprovalAuthority}. Minimum lot size is only one part of that review.`;
}

export function cityFaqs(city: Jurisdiction) {
  const currency = city.countryCode === "CA" ? "CAD" : "USD";
  return [
    {
      question: `What is the minimum lot size in ${city.cityName}?`,
      answer: `${city.minLotSizeLabel}. A published minimum, where one exists, still has to be read with frontage, access, overlays, and the type of subdivision or consent being requested.`
    },
    {
      question: `Who approves subdivisions in ${city.cityName}?`,
      answer: `${city.subdivisionApprovalAuthority}. ${city.legislationCitation}`
    },
    {
      question: `Do I need a survey to subdivide in ${city.cityName}?`,
      answer: "A current boundary survey or legal description is usually required before a serious application. It confirms area, frontage, encroachments, and whether the proposed line conflicts with easements."
    },
    {
      question: `Can a mortgaged property be split in ${city.cityName}?`,
      answer: "Often only with lender consent. A split can affect the security, the legal description, and any new financing. Title and lender review should happen before money is spent on design."
    },
    {
      question: `Does each new lot need road frontage in ${city.cityName}?`,
      answer: "Legal and physical access is a standard test. Some places allow a flag lot or private drive; many do not, or they impose width and emergency-access rules. This has to be checked against the local code."
    },
    {
      question: `How much does a lot split cost in ${city.cityName}?`,
      answer: `There is no reliable single figure. Survey, title, application fees, engineering, utility work, and legal costs are separate categories, typically quoted in ${currency}. Use the cost guide as a checklist, not a quote.`
    },
    {
      question: `How long does approval take in ${city.cityName}?`,
      answer: city.estimatedApprovalTimeLabel
    },
    {
      question: `Can the new lot be sold separately?`,
      answer: "Only after the relevant authority has approved the division and the mapping, consent, or plan has been completed and registered or recorded. A tentative layout is not a legal lot."
    }
  ];
}

export function topicTitle(city: Jurisdiction, topic: TopicSlug) {
  switch (topic) {
    case "zoning":
      return `${city.cityName} zoning and land-use rules for subdivision`;
    case "minimum-lot-size":
      return `${city.cityName} minimum lot size rules for subdivision`;
    case "cost":
      return `What it costs to subdivide land in ${city.cityName}`;
    case "timeline":
      return `How long subdivision takes in ${city.cityName}`;
    case "utilities":
      return `${city.cityName} utility requirements for lot splits`;
    case "professionals":
      return `Subdivision professionals in ${city.cityName}`;
  }
}

export function topicIntro(city: Jurisdiction, topic: TopicSlug) {
  switch (topic) {
    case "zoning":
      return `${city.zoningAuthority} controls land use in ${city.cityName}. ${city.legislationName} is the starting framework, not a guarantee that a particular parcel can be divided.`;
    case "minimum-lot-size":
      return city.minLotSizeLabel;
    case "cost":
      return `Costs in ${city.cityName} should be planned by category. A city fee schedule, where published, is only one line in the budget.`;
    case "timeline":
      return city.estimatedApprovalTimeLabel;
    case "utilities":
      return city.utilityNote;
    case "professionals":
      return `A ${city.cityName} lot split usually needs a surveyor first, then a planner or civil engineer if access, grading, or servicing is non-trivial.`;
  }
}

export const processSteps = [
  "Confirm the parcel, ownership, and which municipality or county actually reviews the land.",
  "Read the zoning or land-use district, overlays, and the subdivision or consent standard that would apply.",
  "Order preliminary title and a boundary survey so easements, access, and area are known.",
  "Test access, utilities, drainage, flood, slope, and environmental constraints before drawing a final line.",
  "Use a pre-application meeting where the authority offers one.",
  "Prepare and submit the subdivision, plat, consent, or other applicable application.",
  "Satisfy conditions, then record or register the mapping documents that actually create the new parcel."
];

export const costRows = [
  ["Survey and legal description", "Defines the existing boundary and the proposed division."],
  ["Title and easement review", "Finds access gaps, mortgages, covenants, and encumbrances."],
  ["Application fees", "Cover municipal or provincial review. They are not the full cost."],
  ["Civil engineering", "Access, grading, drainage, roads, and utility design where required."],
  ["Utility studies and connections", "Capacity letters, new services, and possible off-site work."],
  ["Environmental reports", "Floodplain, wetland, tree, heritage, wildfire, or contamination review."],
  ["Legal and registration", "Lender consent, documentation, and recording or land-title registration."],
  ["Servicing construction", "Any road, drainage, water, sewer, or power work made a condition."]
];

export const requirementCards = [
  ["Zoning and land use", "The district or by-law has to allow the proposed lots and any future dwellings."],
  ["Lot area", "A minimum, where one exists, is necessary but not sufficient."],
  ["Width and frontage", "Narrow or flag shapes often fail even when area is met."],
  ["Legal access", "Each lot needs a recognised route to a public road, or a permitted private alternative."],
  ["Water and sewer", "Municipal service, septic, or a well has to be feasible for every new lot."],
  ["Drainage", "Stormwater leaving the site cannot simply be assumed."],
  ["Survey", "A current survey is the evidence base for the application."],
  ["Title", "Easements, covenants, and lender rights can block a split the zoning map allows."],
  ["Hazards and environment", "Flood, wildfire, slope, wetland, coastal, and heritage overlays are common refusals."],
  ["Notice or hearing", "Some paths are administrative. Others require notice, a hearing, or an appeal window."]
];
