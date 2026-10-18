import type { Jurisdiction } from "./data";

export const extraCities: Jurisdiction[] = [
  city("us-ca-san-francisco", "california", "California", "san-francisco", "San Francisco", "San Francisco County", "City of San Francisco", "San Francisco Planning Code and California subdivision law", "Hillside, density, and rent-control context often matter more than raw lot area."),
  city("us-ca-oakland", "california", "California", "oakland", "Oakland", "Alameda County", "City of Oakland", "Oakland planning code and California subdivision law", "Hillside and fire-zone parcels need a separate feasibility pass from flat grid lots."),
  city("us-ca-long-beach", "california", "California", "long-beach", "Long Beach", "Los Angeles County", "City of Long Beach", "Local development code and California subdivision law", "Coastal and specific-plan areas can change an otherwise ordinary split."),
  city("us-ca-fresno", "california", "California", "fresno", "Fresno", "Fresno County", "City of Fresno", "City subdivision rules and California subdivision law", "Agricultural edge parcels and urban infill are reviewed differently."),
  city("us-ca-sacramento-county-note", "california", "California", "stockton", "Stockton", "San Joaquin County", "City of Stockton", "Local subdivision ordinance and California law", "Floodplain and levee-adjacent sites deserve early screening."),
  city("us-ca-riverside", "california", "California", "riverside", "Riverside", "Riverside County", "City of Riverside", "City land development code and California subdivision law", "Hillside and citrus-belt overlays can reduce buildable area."),
  city("us-ca-irvine", "california", "California", "irvine", "Irvine", "Orange County", "City of Irvine", "Planned-community and local subdivision rules", "Master-planned tracts often have private covenants that sit on top of city rules."),
  city("us-ca-anaheim", "california", "California", "anaheim", "Anaheim", "Orange County", "City of Anaheim", "Anaheim municipal code and California subdivision law", "Specific plans and theme-park adjacency constraints are common."),
  city("us-tx-fort-worth", "texas", "Texas", "fort-worth", "Fort Worth", "Tarrant County", "City of Fort Worth", "Fort Worth subdivision ordinance and local development code", "ETJ and drainage rules can matter as much as city-limit zoning."),
  city("us-tx-el-paso", "texas", "Texas", "el-paso", "El Paso", "El Paso County", "City of El Paso", "El Paso subdivision regulations", "Arroyo and hillside lots need drainage and access checks first."),
  city("us-tx-arlington", "texas", "Texas", "arlington", "Arlington", "Tarrant County", "City of Arlington", "Arlington subdivision and zoning code", "Frontage and utility extension are frequent gating items."),
  city("us-tx-plano", "texas", "Texas", "plano", "Plano", "Collin County", "City of Plano", "Plano zoning and subdivision regulations", "Mature suburban lots often fail on frontage or HOA instruments, not area."),
  city("us-tx-corpus-christi", "texas", "Texas", "corpus-christi", "Corpus Christi", "Nueces County", "City of Corpus Christi", "Local subdivision ordinance", "Coastal flood and drainage review is a core fact."),
  city("us-fl-orlando", "florida", "Florida", "orlando", "Orlando", "Orange County", "City of Orlando", "Orlando land development code", "Concurrency, wetlands, and stormwater often control the file."),
  city("us-fl-jacksonville", "florida", "Florida", "jacksonville", "Jacksonville", "Duval County", "City of Jacksonville", "Jacksonville land development procedures", "A consolidated city-county means the reviewing body is city government."),
  city("us-fl-st-petersburg", "florida", "Florida", "st-petersburg", "St. Petersburg", "Pinellas County", "City of St. Petersburg", "Local land development regulations", "Coastal high-hazard and flood zones should be checked before design."),
  city("us-fl-hialeah", "florida", "Florida", "hialeah", "Hialeah", "Miami-Dade County", "City of Hialeah", "Local zoning and plat rules", "County and city layers can both touch a Miami-Dade parcel."),
  city("us-az-tucson", "arizona", "Arizona", "tucson", "Tucson", "Pima County", "City of Tucson", "Tucson land use code and subdivision regulations", "Wash, floodplain, and water-service facts are first-order constraints."),
  city("us-az-mesa", "arizona", "Arizona", "mesa", "Mesa", "Maricopa County", "City of Mesa", "Mesa subdivision and zoning code", "Assured water and utility will-serve should be treated as core documents."),
  city("us-az-scottsdale", "arizona", "Arizona", "scottsdale", "Scottsdale", "Maricopa County", "City of Scottsdale", "Scottsdale zoning and subdivision standards", "Environmentally sensitive and hillside districts change the envelope."),
  city("us-az-chandler", "arizona", "Arizona", "chandler", "Chandler", "Maricopa County", "City of Chandler", "Chandler development code", "Infill versus fringe lots follow different utility tests."),
  city("us-wa-tacoma", "washington", "Washington", "tacoma", "Tacoma", "Pierce County", "City of Tacoma", "Tacoma land use code and short-plat procedures", "Critical areas and shoreline can remove buildable area."),
  city("us-wa-spokane", "washington", "Washington", "spokane", "Spokane", "Spokane County", "City of Spokane", "Spokane subdivision and zoning code", "Short plats are common, but access and utilities still decide them."),
  city("us-wa-bellevue", "washington", "Washington", "bellevue", "Bellevue", "King County", "City of Bellevue", "Bellevue land use code", "Steep slope and tree rules frequently shape the real split."),
  city("us-wa-vancouver", "washington", "Washington", "vancouver-wa", "Vancouver", "Clark County", "City of Vancouver, Washington", "Vancouver municipal code", "Do not confuse this city with Vancouver, British Columbia."),
  city("us-or-salem", "oregon", "Oregon", "salem", "Salem", "Marion County", "City of Salem", "Salem development code and Oregon land-use framework", "Urban growth boundary location is the first factual fork."),
  city("us-or-eugene", "oregon", "Oregon", "eugene", "Eugene", "Lane County", "City of Eugene", "Eugene land use code", "River, flood, and tree constraints are common on otherwise large lots."),
  city("us-or-gresham", "oregon", "Oregon", "gresham", "Gresham", "Multnomah County", "City of Gresham", "Gresham development code", "Inside-UGB status should be confirmed before any layout."),
  city("ca-on-mississauga", "ontario", "Ontario", "mississauga", "Mississauga", "Peel Region", "City of Mississauga", "Ontario Planning Act and Mississauga official plan", "Consent versus plan of subdivision is the key procedural fork."),
  city("ca-on-brampton", "ontario", "Ontario", "brampton", "Brampton", "Peel Region", "City of Brampton", "Ontario Planning Act and Brampton official plan", "Servicing and official-plan designation usually decide a severance."),
  city("ca-on-hamilton", "ontario", "Ontario", "hamilton", "Hamilton", "City of Hamilton", "City of Hamilton", "Ontario Planning Act and Hamilton official plan", "Urban and rural Hamilton are different products."),
  city("ca-on-london", "ontario", "Ontario", "london", "London", "Middlesex County", "City of London", "Ontario Planning Act and London official plan", "Single-tier review still requires official-plan and zoning fit."),
  city("ca-on-markham", "ontario", "Ontario", "markham", "Markham", "York Region", "City of Markham", "Ontario Planning Act and Markham official plan", "Upper-tier and lower-tier roles should be confirmed for the file."),
  city("ca-bc-surrey", "british-columbia", "British Columbia", "surrey", "Surrey", "Metro Vancouver", "City of Surrey", "BC Land Title Act and Surrey bylaws", "Approving-officer review is the statutory frame."),
  city("ca-bc-burnaby", "british-columbia", "British Columbia", "burnaby", "Burnaby", "Metro Vancouver", "City of Burnaby", "BC Land Title Act and Burnaby zoning", "District schedules control minimums more than a single citywide number."),
  city("ca-bc-richmond", "british-columbia", "British Columbia", "richmond", "Richmond", "Metro Vancouver", "City of Richmond", "BC Land Title Act and Richmond bylaws", "Flood construction level and dike context are first-order facts."),
  city("ca-bc-victoria", "british-columbia", "British Columbia", "victoria", "Victoria", "Capital Regional District", "City of Victoria", "BC Land Title Act and Victoria zoning", "Heritage and character policies can shape an infill split."),
  city("ca-ab-edmonton", "alberta", "Alberta", "edmonton", "Edmonton", "Edmonton", "City of Edmonton", "Alberta Municipal Government Act and Edmonton zoning", "Infill lot splits and greenfield subdivisions are priced differently."),
  city("ca-ab-red-deer", "alberta", "Alberta", "red-deer", "Red Deer", "Red Deer", "City of Red Deer", "Alberta Municipal Government Act and local land use bylaw", "Servicing agreements can dominate the real cost."),
  city("ca-ab-lethbridge", "alberta", "Alberta", "lethbridge", "Lethbridge", "Lethbridge", "City of Lethbridge", "Alberta Municipal Government Act and local bylaw", "Confirm the land-use district before treating area as decisive.")
];

function city(
  id: string,
  regionSlug: string,
  regionName: string,
  citySlug: string,
  cityName: string,
  county: string,
  authority: string,
  legislation: string,
  localDifference: string
): Jurisdiction {
  const countryCode = regionSlug === "ontario" || regionSlug === "british-columbia" || regionSlug === "alberta" ? "CA" : "US";
  return {
    id,
    countryCode,
    countryName: countryCode === "CA" ? "Canada" : "United States",
    regionSlug,
    regionName,
    regionType: countryCode === "CA" ? "PROVINCE" : "STATE",
    citySlug,
    cityName,
    countyOrRegionalDistrict: county,
    zoningAuthority: authority,
    subdivisionApprovalAuthority: authority,
    legislationName: legislation,
    legislationCitation: `Confirm the current ${cityName} code section before relying on a summary.`,
    minLotSizeLabel: "Varies by zone, district schedule, or land-use by-law",
    maxDensityLabel: "Varies by district and applicable overlays",
    estimatedApprovalTimeLabel: "Varies by application type, completeness, and any hearing or appeal",
    utilityNote: `Water, sewer or septic, drainage, and access capacity in ${cityName} should be confirmed before a final lot line is drawn.`,
    septicPossible: ["fresno", "stockton", "tucson", "salem", "eugene", "ottawa", "hamilton"].includes(citySlug),
    publicHearingPossible: countryCode === "US",
    localDifference,
    relatedCitySlugs: [],
    dataQualityScore: 34,
    dataQualityStatus: "MOCK",
    lastReviewedAt: "2026-10-18",
    published: true
  };
}

export function longNarrative(city: Jurisdiction) {
  return [
    `${city.cityName} does not have a single subdivision answer that applies to every parcel. ${city.zoningAuthority} reviews land use, and ${city.subdivisionApprovalAuthority} is the usual approval body for creating a new legal lot. ${city.legislationName} is the framework. It is not a promise that a particular address can be divided.`,
    `The first factual fork is the district itself. A minimum lot size, where one is published, is ${city.minLotSizeLabel.toLowerCase()}. Frontage, width, access, and shape can refuse a lot that meets area. Overlays for flood, slope, heritage, coastal, wildfire, or environmentally sensitive land can remove buildable area even when the zoning map looks permissive.`,
    `Ownership and title come next. A boundary survey or current legal description is the evidence base. Preliminary title should be read for easements, covenants, mortgages, and access gaps before design money is spent. Lender consent is often required if the property is financed, because a split changes the security and the legal description.`,
    `Utilities are a separate decision from zoning. ${city.utilityNote} Each proposed lot generally needs its own feasible water and wastewater path, whether that is a municipal connection or, where allowed, a private system. Drainage leaving the site cannot be assumed. Off-site work, if required, is usually a condition and a cost, not a formality.`,
    `Process length is ${city.estimatedApprovalTimeLabel.toLowerCase()} A short administrative path and a fully engineered multi-lot subdivision are different products. Incomplete studies, utility design, and appeals are the usual reasons a file slips. A tentative layout is not a legal lot until the relevant mapping, consent, or plan is completed and recorded or registered.`,
    city.localDifference,
    `LandSplits publishes this ${city.cityName} guide as an informational directory. It does not determine eligibility, value, or approval. A qualified local surveyor, planner, or land-use lawyer should confirm the current code section, the parcel-specific constraints, and the application type before anyone relies on a plan.`
  ];
}

export function expandedFaqs(city: Jurisdiction) {
  const money = city.countryCode === "CA" ? "CAD" : "USD";
  return [
    { question: `Is every large lot in ${city.cityName} divisible?`, answer: `No. Area is one test. ${city.localDifference} Frontage, access, utilities, title, and overlays can all refuse a parcel that looks large enough on a map.` },
    { question: `What document actually creates the new lot in ${city.cityName}?`, answer: `Approval alone is not the new parcel. The mapping, consent, or plan has to be completed and recorded or registered. Until that happens, the layout is still one legal lot.` },
    { question: `Who should be hired first in ${city.cityName}?`, answer: `Usually a surveyor, so area, frontage, and encroachments are known, and a title review so easements and lender rights are visible. A planner or civil engineer follows if access, grading, or servicing is non-trivial.` },
    { question: `Are application fees the full cost in ${city.cityName}?`, answer: `No. Fees are one line. Survey, title, engineering, utility work, environmental reports, legal, and any required construction are separate categories, typically discussed in ${money}.` },
    { question: `Can an owner start construction after a tentative approval in ${city.cityName}?`, answer: `Not on the assumption that the new lot already exists. Building permits generally follow a completed division, and may also need their own zoning and servicing checks.` },
    { question: `Does ${city.cityName} allow flag lots?`, answer: `Some codes allow a flag or panhandle with width and emergency-access rules. Many do not. This has to be read in the local standard, not assumed from a neighbouring city.` },
    { question: `What if the parcel is in an HOA or has private covenants?`, answer: `Private instruments can be stricter than the public code. They do not replace zoning, but they can block a split the city would otherwise process.` },
    { question: `How should a buyer use this ${city.cityName} guide?`, answer: `As a checklist before offering on land marketed for split potential. Ask for the survey, title, zoning district, utility letters, and any prior denials. Do not treat a listing claim as an approval.` }
  ];
}
