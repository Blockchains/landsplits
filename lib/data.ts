export type CountryCode = "US" | "CA";

export type RegionType = "STATE" | "PROVINCE" | "TERRITORY";

export type DataStatus = "MOCK" | "PARTIAL" | "VERIFIED" | "STALE" | "REVIEW_REQUIRED";

export type Jurisdiction = {
  id: string;
  countryCode: CountryCode;
  countryName: "United States" | "Canada";
  regionSlug: string;
  regionName: string;
  regionType: RegionType;
  citySlug: string;
  cityName: string;
  countyOrRegionalDistrict: string;
  officialWebsite?: string;
  planningDepartmentUrl?: string;
  zoningAuthority: string;
  subdivisionApprovalAuthority: string;
  legislationName: string;
  legislationCitation: string;
  minLotSizeLabel: string;
  maxDensityLabel: string;
  estimatedApprovalTimeLabel: string;
  utilityNote: string;
  septicPossible: boolean;
  publicHearingPossible: boolean;
  localDifference: string;
  relatedCitySlugs: string[];
  dataQualityScore: number;
  dataQualityStatus: DataStatus;
  lastReviewedAt: string;
  published: boolean;
};

export type Region = {
  slug: string;
  name: string;
  countryCode: CountryCode;
  countryName: "United States" | "Canada";
  regionType: RegionType;
  framework: string;
  summary: string;
  caution: string;
};

export const regions: Region[] = [
  {
    slug: "california",
    name: "California",
    countryCode: "US",
    countryName: "United States",
    regionType: "STATE",
    framework: "Subdivision Map Act, local subdivision ordinances, and selected state housing laws including SB 9 where a parcel actually qualifies.",
    summary: "California subdivision is a mix of state statute and intensely local mapping, zoning, and utility rules. Urban lot splits under SB 9 are a separate, eligibility-gated pathway, not a statewide entitlement.",
    caution: "Coastal, wildfire, flood, historic, tenant, and owner-occupancy constraints can remove a parcel from streamlined pathways even when the lot looks large enough."
  },
  {
    slug: "texas",
    name: "Texas",
    countryCode: "US",
    countryName: "United States",
    regionType: "STATE",
    framework: "Local land development codes, municipal subdivision ordinances, and county rules outside city limits.",
    summary: "Texas authority often splits between cities and counties. Extraterritorial jurisdiction, platting, and utility extension rules matter as much as lot area.",
    caution: "A lot that is large on paper may still fail frontage, drainage, or water-service tests."
  },
  {
    slug: "florida",
    name: "Florida",
    countryCode: "US",
    countryName: "United States",
    regionType: "STATE",
    framework: "Local comprehensive plans, land development codes, and plat or lot-split procedures.",
    summary: "Florida cities and counties control most subdivision standards. Flood, drainage, and concurrency reviews are common gating items.",
    caution: "Coastal high-hazard and wetland overlays can dominate an otherwise straightforward split."
  },
  {
    slug: "arizona",
    name: "Arizona",
    countryCode: "US",
    countryName: "United States",
    regionType: "STATE",
    framework: "Municipal subdivision ordinances, county zoning, and assured water supply rules in active management areas.",
    summary: "Arizona feasibility often turns on water, septic or sewer, and hillside or desert wash constraints rather than a single minimum lot size.",
    caution: "Water adequacy and utility will-serve letters should be treated as core facts, not afterthoughts."
  },
  {
    slug: "washington",
    name: "Washington",
    countryCode: "US",
    countryName: "United States",
    regionType: "STATE",
    framework: "Local subdivision codes under the state planning framework, including short plats in many cities.",
    summary: "Short subdivisions are common in Washington cities, but critical areas, shoreline, and tree rules frequently shape the real envelope.",
    caution: "Critical-area buffers can remove buildable area even when gross lot size looks sufficient."
  },
  {
    slug: "oregon",
    name: "Oregon",
    countryCode: "US",
    countryName: "United States",
    regionType: "STATE",
    framework: "Local land division codes within urban growth boundaries, with stricter farm and forest rules outside them.",
    summary: "Oregon land division is highly sensitive to whether a parcel sits inside an urban growth boundary.",
    caution: "Resource land outside an urban growth boundary is often a poor candidate for a conventional lot split."
  },
  {
    slug: "ontario",
    name: "Ontario",
    countryCode: "CA",
    countryName: "Canada",
    regionType: "PROVINCE",
    framework: "Ontario Planning Act, official plans, zoning by-laws, and consent or plan-of-subdivision processes.",
    summary: "In Ontario, creating a new lot is often a consent (severance) rather than a US-style minor plat. Approval authority can sit with a lower-tier, upper-tier, or single-tier municipality.",
    caution: "Do not assume a US municipal template. Frontage, servicing, and official-plan conformity are decisive."
  },
  {
    slug: "british-columbia",
    name: "British Columbia",
    countryCode: "CA",
    countryName: "Canada",
    regionType: "PROVINCE",
    framework: "Land Title Act, local subdivision and zoning bylaws, and approving-officer review.",
    summary: "British Columbia subdivisions are reviewed by an approving officer against provincial legislation and local bylaws. The Ministry of Transportation and Transit can have a role outside some municipal settings.",
    caution: "Approving-officer discretion and servicing standards can block a split that meets a raw area number."
  },
  {
    slug: "alberta",
    name: "Alberta",
    countryCode: "CA",
    countryName: "Canada",
    regionType: "PROVINCE",
    framework: "Municipal Government Act subdivision process, land-use bylaws, and municipal or provincial approval authorities.",
    summary: "Alberta subdivision approval is application-based and tied to land-use district standards, access, and servicing.",
    caution: "Rural parcels and urban infill follow different servicing and access tests."
  }
];

export const jurisdictions: Jurisdiction[] = [
  {
    id: "us-ca-los-angeles-city",
    countryCode: "US",
    countryName: "United States",
    regionSlug: "california",
    regionName: "California",
    regionType: "STATE",
    citySlug: "los-angeles",
    cityName: "Los Angeles",
    countyOrRegionalDistrict: "Los Angeles County",
    officialWebsite: "https://www.lacity.gov/",
    planningDepartmentUrl: "https://planning.lacity.gov/",
    zoningAuthority: "City of Los Angeles",
    subdivisionApprovalAuthority: "City of Los Angeles",
    legislationName: "SB 9 and local subdivision regulations",
    legislationCitation: "California Government Code pathways and the Subdivision Map Act may both be relevant. Eligibility is property-specific.",
    minLotSizeLabel: "Varies by zone, parcel conditions, and any applicable state housing pathway",
    maxDensityLabel: "Varies by zoning district and applicable state housing laws",
    estimatedApprovalTimeLabel: "Varies by application type and completeness. Some complete eligible SB 9 applications have a 60-day decision timeline.",
    utilityNote: "LADWP water and local sewer capacity, access, and hillside or fire constraints often control feasibility.",
    septicPossible: false,
    publicHearingPossible: true,
    localDifference: "Hillside, specific-plan, historic, and tenant-occupancy overlays are common reasons a large Los Angeles lot still cannot split.",
    relatedCitySlugs: ["san-diego", "sacramento", "san-jose"],
    dataQualityScore: 58,
    dataQualityStatus: "PARTIAL",
    lastReviewedAt: "2026-10-05",
    published: true
  },
  {
    id: "us-ca-san-diego-city",
    countryCode: "US",
    countryName: "United States",
    regionSlug: "california",
    regionName: "California",
    regionType: "STATE",
    citySlug: "san-diego",
    cityName: "San Diego",
    countyOrRegionalDistrict: "San Diego County",
    officialWebsite: "https://www.sandiego.gov/",
    planningDepartmentUrl: "https://www.sandiego.gov/planning",
    zoningAuthority: "City of San Diego",
    subdivisionApprovalAuthority: "City of San Diego",
    legislationName: "Local land development code and California subdivision law",
    legislationCitation: "City mapping procedures plus state subdivision and housing statutes where applicable.",
    minLotSizeLabel: "Varies by base zone, planned district, and coastal or brush overlays",
    maxDensityLabel: "Varies by zone and community plan",
    estimatedApprovalTimeLabel: "Project-specific. Coastal and environmental review can extend a simple split.",
    utilityNote: "Water and sewer availability, plus canyon, coastal, and brush-management constraints, should be checked before design.",
    septicPossible: false,
    publicHearingPossible: true,
    localDifference: "Canyon lots and coastal overlay parcels often fail for access or environmentally sensitive land, not lot area.",
    relatedCitySlugs: ["los-angeles", "sacramento"],
    dataQualityScore: 46,
    dataQualityStatus: "PARTIAL",
    lastReviewedAt: "2026-10-05",
    published: true
  },
  {
    id: "us-ca-sacramento-city",
    countryCode: "US",
    countryName: "United States",
    regionSlug: "california",
    regionName: "California",
    regionType: "STATE",
    citySlug: "sacramento",
    cityName: "Sacramento",
    countyOrRegionalDistrict: "Sacramento County",
    officialWebsite: "https://www.cityofsacramento.gov/",
    zoningAuthority: "City of Sacramento",
    subdivisionApprovalAuthority: "City of Sacramento",
    legislationName: "City subdivision rules and California housing statutes",
    legislationCitation: "Confirm the current city code section and any SB 9 local implementation memo.",
    minLotSizeLabel: "Varies by zoning district and lot-split type",
    maxDensityLabel: "Varies by zone",
    estimatedApprovalTimeLabel: "Varies by completeness, utilities, and whether a hearing is required",
    utilityNote: "Municipal water and sewer review is typically required for a new legal lot.",
    septicPossible: false,
    publicHearingPossible: true,
    localDifference: "Infill grid lots and larger suburban parcels follow different frontage and alley-access patterns.",
    relatedCitySlugs: ["los-angeles", "san-jose"],
    dataQualityScore: 42,
    dataQualityStatus: "MOCK",
    lastReviewedAt: "2026-10-05",
    published: true
  },
  {
    id: "us-ca-san-jose-city",
    countryCode: "US",
    countryName: "United States",
    regionSlug: "california",
    regionName: "California",
    regionType: "STATE",
    citySlug: "san-jose",
    cityName: "San Jose",
    countyOrRegionalDistrict: "Santa Clara County",
    officialWebsite: "https://www.sanjoseca.gov/",
    zoningAuthority: "City of San Jose",
    subdivisionApprovalAuthority: "City of San Jose",
    legislationName: "San Jose municipal code and California subdivision law",
    legislationCitation: "Local subdivision ordinance plus state Map Act and housing statutes.",
    minLotSizeLabel: "Varies by zoning district and general-plan designation",
    maxDensityLabel: "Varies by general plan and zoning",
    estimatedApprovalTimeLabel: "Project-specific; utility and tree review can add time",
    utilityNote: "Separate service connections and capacity letters are common conditions.",
    septicPossible: false,
    publicHearingPossible: true,
    localDifference: "Flag-lot and private-drive proposals are scrutinised for emergency access.",
    relatedCitySlugs: ["sacramento", "los-angeles"],
    dataQualityScore: 40,
    dataQualityStatus: "MOCK",
    lastReviewedAt: "2026-10-05",
    published: true
  },
  {
    id: "us-tx-austin-city",
    countryCode: "US",
    countryName: "United States",
    regionSlug: "texas",
    regionName: "Texas",
    regionType: "STATE",
    citySlug: "austin",
    cityName: "Austin",
    countyOrRegionalDistrict: "Travis County",
    officialWebsite: "https://www.austintexas.gov/",
    planningDepartmentUrl: "https://www.austintexas.gov/department/development-services",
    zoningAuthority: "City of Austin",
    subdivisionApprovalAuthority: "City of Austin",
    legislationName: "Austin Land Development Code",
    legislationCitation: "Title 25 standards vary by zoning and subdivision type. Confirm the current code.",
    minLotSizeLabel: "Varies by zoning district and subdivision type",
    maxDensityLabel: "Varies by zoning and development standards",
    estimatedApprovalTimeLabel: "Project-specific. Confirm current review tracks with Development Services.",
    utilityNote: "Water, wastewater, and drainage review are central. Watershed rules can control impervious cover.",
    septicPossible: true,
    publicHearingPossible: true,
    localDifference: "Watershed, heritage-tree, and compatibility rules often matter more than the headline lot minimum.",
    relatedCitySlugs: ["houston", "dallas"],
    dataQualityScore: 44,
    dataQualityStatus: "MOCK",
    lastReviewedAt: "2026-10-05",
    published: true
  },
  {
    id: "us-tx-houston-city",
    countryCode: "US",
    countryName: "United States",
    regionSlug: "texas",
    regionName: "Texas",
    regionType: "STATE",
    citySlug: "houston",
    cityName: "Houston",
    countyOrRegionalDistrict: "Harris County",
    officialWebsite: "https://www.houstontx.gov/",
    zoningAuthority: "No conventional citywide zoning; deed restrictions and development rules apply",
    subdivisionApprovalAuthority: "City of Houston, or Harris County outside city jurisdiction",
    legislationName: "Houston development and platting rules",
    legislationCitation: "Chapter 42-style platting standards and recorded deed restrictions. Confirm the governing instrument.",
    minLotSizeLabel: "Not a single citywide minimum. Lot standards and deed restrictions both apply.",
    maxDensityLabel: "Driven by development rules, parking, and private restrictions rather than a zoning map",
    estimatedApprovalTimeLabel: "Varies by plat type, utility capacity, and whether county review is also required",
    utilityNote: "Utility availability and detention are frequent conditions. Private deed restrictions can prohibit a split the city would otherwise allow.",
    septicPossible: true,
    publicHearingPossible: false,
    localDifference: "Absence of conventional zoning does not mean a lot can be split. Platting and deed restrictions still govern.",
    relatedCitySlugs: ["austin", "dallas"],
    dataQualityScore: 47,
    dataQualityStatus: "PARTIAL",
    lastReviewedAt: "2026-10-05",
    published: true
  },
  {
    id: "us-tx-dallas-city",
    countryCode: "US",
    countryName: "United States",
    regionSlug: "texas",
    regionName: "Texas",
    regionType: "STATE",
    citySlug: "dallas",
    cityName: "Dallas",
    countyOrRegionalDistrict: "Dallas County",
    officialWebsite: "https://dallascityhall.com/",
    zoningAuthority: "City of Dallas",
    subdivisionApprovalAuthority: "City of Dallas",
    legislationName: "Dallas Development Code",
    legislationCitation: "Zoning district lot standards and plat procedures. Confirm the current code.",
    minLotSizeLabel: "Varies by zoning district",
    maxDensityLabel: "Varies by district and overlay",
    estimatedApprovalTimeLabel: "Project-specific; replat versus minor plat tracks differ",
    utilityNote: "Water, wastewater, and drainage capacity should be confirmed before assuming a new lot is buildable.",
    septicPossible: false,
    publicHearingPossible: true,
    localDifference: "Many older lots are controlled by both zoning and a prior plat, so a replat may be required.",
    relatedCitySlugs: ["austin", "houston"],
    dataQualityScore: 39,
    dataQualityStatus: "MOCK",
    lastReviewedAt: "2026-10-05",
    published: true
  },
  {
    id: "us-fl-miami-city",
    countryCode: "US",
    countryName: "United States",
    regionSlug: "florida",
    regionName: "Florida",
    regionType: "STATE",
    citySlug: "miami",
    cityName: "Miami",
    countyOrRegionalDistrict: "Miami-Dade County",
    officialWebsite: "https://www.miami.gov/",
    zoningAuthority: "City of Miami",
    subdivisionApprovalAuthority: "City of Miami",
    legislationName: "Miami 21 and local subdivision procedures",
    legislationCitation: "Transect-based zoning and platting rules. Confirm the current article.",
    minLotSizeLabel: "Varies by transect zone and overlay",
    maxDensityLabel: "Varies by Miami 21 transect",
    estimatedApprovalTimeLabel: "Project-specific. Flood and concurrency review can extend timing.",
    utilityNote: "Stormwater, flood elevation, and utility connections are core feasibility items.",
    septicPossible: false,
    publicHearingPossible: true,
    localDifference: "Flood zone and finished-floor rules can make a technically splittable lot uneconomic to build.",
    relatedCitySlugs: ["tampa"],
    dataQualityScore: 41,
    dataQualityStatus: "MOCK",
    lastReviewedAt: "2026-10-05",
    published: true
  },
  {
    id: "us-fl-tampa-city",
    countryCode: "US",
    countryName: "United States",
    regionSlug: "florida",
    regionName: "Florida",
    regionType: "STATE",
    citySlug: "tampa",
    cityName: "Tampa",
    countyOrRegionalDistrict: "Hillsborough County",
    officialWebsite: "https://www.tampa.gov/",
    zoningAuthority: "City of Tampa",
    subdivisionApprovalAuthority: "City of Tampa",
    legislationName: "Tampa land development code",
    legislationCitation: "Zoning lot standards and subdivision procedures. Confirm the current code.",
    minLotSizeLabel: "Varies by zoning district",
    maxDensityLabel: "Varies by district",
    estimatedApprovalTimeLabel: "Project-specific",
    utilityNote: "Sewer availability and stormwater treatment often decide whether a split is practical.",
    septicPossible: true,
    publicHearingPossible: true,
    localDifference: "Older urban lots and suburban county-edge parcels are reviewed under different servicing assumptions.",
    relatedCitySlugs: ["miami"],
    dataQualityScore: 36,
    dataQualityStatus: "MOCK",
    lastReviewedAt: "2026-10-05",
    published: true
  },
  {
    id: "us-az-phoenix-city",
    countryCode: "US",
    countryName: "United States",
    regionSlug: "arizona",
    regionName: "Arizona",
    regionType: "STATE",
    citySlug: "phoenix",
    cityName: "Phoenix",
    countyOrRegionalDistrict: "Maricopa County",
    officialWebsite: "https://www.phoenix.gov/",
    zoningAuthority: "City of Phoenix",
    subdivisionApprovalAuthority: "City of Phoenix",
    legislationName: "Phoenix zoning ordinance and subdivision regulations",
    legislationCitation: "Lot standards vary by district. Confirm water and sewer will-serve requirements.",
    minLotSizeLabel: "Varies by zoning district",
    maxDensityLabel: "Varies by district",
    estimatedApprovalTimeLabel: "Project-specific; utility and drainage review are common pacing items",
    utilityNote: "Water entitlement and sewer capacity are first-order questions in the Phoenix area.",
    septicPossible: true,
    publicHearingPossible: true,
    localDifference: "Hillside, wash, and heat-island setback patterns can shrink a lot that meets the area minimum.",
    relatedCitySlugs: [],
    dataQualityScore: 38,
    dataQualityStatus: "MOCK",
    lastReviewedAt: "2026-10-05",
    published: true
  },
  {
    id: "us-wa-seattle-city",
    countryCode: "US",
    countryName: "United States",
    regionSlug: "washington",
    regionName: "Washington",
    regionType: "STATE",
    citySlug: "seattle",
    cityName: "Seattle",
    countyOrRegionalDistrict: "King County",
    officialWebsite: "https://www.seattle.gov/",
    planningDepartmentUrl: "https://www.seattle.gov/sdci",
    zoningAuthority: "City of Seattle",
    subdivisionApprovalAuthority: "City of Seattle",
    legislationName: "Seattle municipal code short-subdivision rules",
    legislationCitation: "Lot-area and lot-width standards vary by zone. Confirm current SDCI tip sheets.",
    minLotSizeLabel: "Varies by zone. Some residential zones publish a minimum lot area; exceptions exist.",
    maxDensityLabel: "Varies by zone and unit-density rules",
    estimatedApprovalTimeLabel: "A short plat is often faster than a full subdivision, but completeness controls the clock",
    utilityNote: "Separate side-sewer connections and alley or street access are frequent design constraints.",
    septicPossible: false,
    publicHearingPossible: false,
    localDifference: "Environmentally critical areas, steep slopes, and tree requirements regularly reduce buildable area.",
    relatedCitySlugs: ["portland"],
    dataQualityScore: 49,
    dataQualityStatus: "PARTIAL",
    lastReviewedAt: "2026-10-05",
    published: true
  },
  {
    id: "us-or-portland-city",
    countryCode: "US",
    countryName: "United States",
    regionSlug: "oregon",
    regionName: "Oregon",
    regionType: "STATE",
    citySlug: "portland",
    cityName: "Portland",
    countyOrRegionalDistrict: "Multnomah County",
    officialWebsite: "https://www.portland.gov/",
    zoningAuthority: "City of Portland",
    subdivisionApprovalAuthority: "City of Portland",
    legislationName: "Portland land division code",
    legislationCitation: "Title 33 lot standards vary by base zone. Confirm current code.",
    minLotSizeLabel: "Varies by base zone inside the urban growth boundary",
    maxDensityLabel: "Varies by zone",
    estimatedApprovalTimeLabel: "Project-specific. Land-division and middle-housing tracks differ.",
    utilityNote: "Public street frontage and utility availability are standard review items.",
    septicPossible: false,
    publicHearingPossible: true,
    localDifference: "Flag lots and narrow lots are regulated tightly. Do not confuse Portland, Oregon with Portland, Maine.",
    relatedCitySlugs: ["seattle"],
    dataQualityScore: 43,
    dataQualityStatus: "MOCK",
    lastReviewedAt: "2026-10-05",
    published: true
  },
  {
    id: "ca-on-toronto-city",
    countryCode: "CA",
    countryName: "Canada",
    regionSlug: "ontario",
    regionName: "Ontario",
    regionType: "PROVINCE",
    citySlug: "toronto",
    cityName: "Toronto",
    countyOrRegionalDistrict: "City of Toronto",
    officialWebsite: "https://www.toronto.ca/",
    planningDepartmentUrl: "https://www.toronto.ca/city-government/planning-development/",
    zoningAuthority: "City of Toronto",
    subdivisionApprovalAuthority: "City of Toronto, typically through a consent or plan of subdivision under the Planning Act",
    legislationName: "Ontario Planning Act and City of Toronto official plan and zoning by-law",
    legislationCitation: "Consent versus plan-of-subdivision path depends on the proposal. Confirm the current by-law.",
    minLotSizeLabel: "Varies by zone, frontage, and consent policy. Not a single citywide figure.",
    maxDensityLabel: "Varies by official plan and zoning",
    estimatedApprovalTimeLabel: "Varies by consent versus subdivision path, servicing, and any appeal",
    utilityNote: "Municipal servicing, lane access, and committee-of-adjustment history are common review points.",
    septicPossible: false,
    publicHearingPossible: true,
    localDifference: "Toronto severances are policy-heavy. A wide lot is not, by itself, a consent.",
    relatedCitySlugs: ["ottawa"],
    dataQualityScore: 45,
    dataQualityStatus: "PARTIAL",
    lastReviewedAt: "2026-10-05",
    published: true
  },
  {
    id: "ca-on-ottawa-city",
    countryCode: "CA",
    countryName: "Canada",
    regionSlug: "ontario",
    regionName: "Ontario",
    regionType: "PROVINCE",
    citySlug: "ottawa",
    cityName: "Ottawa",
    countyOrRegionalDistrict: "City of Ottawa",
    officialWebsite: "https://ottawa.ca/",
    zoningAuthority: "City of Ottawa",
    subdivisionApprovalAuthority: "City of Ottawa under the Planning Act",
    legislationName: "Ontario Planning Act and Ottawa official plan and zoning by-law",
    legislationCitation: "Urban and rural Ottawa follow different servicing tests.",
    minLotSizeLabel: "Varies by urban, suburban, and rural designation",
    maxDensityLabel: "Varies by official plan designation",
    estimatedApprovalTimeLabel: "Varies by consent, subdivision, and servicing path",
    utilityNote: "Public service versus private septic is a primary rural-versus-urban fork.",
    septicPossible: true,
    publicHearingPossible: true,
    localDifference: "Rural estate lots and urban infill severances are different products with different tests.",
    relatedCitySlugs: ["toronto"],
    dataQualityScore: 37,
    dataQualityStatus: "MOCK",
    lastReviewedAt: "2026-10-05",
    published: true
  },
  {
    id: "ca-bc-vancouver-city",
    countryCode: "CA",
    countryName: "Canada",
    regionSlug: "british-columbia",
    regionName: "British Columbia",
    regionType: "PROVINCE",
    citySlug: "vancouver",
    cityName: "Vancouver",
    countyOrRegionalDistrict: "Metro Vancouver",
    officialWebsite: "https://vancouver.ca/",
    zoningAuthority: "City of Vancouver",
    subdivisionApprovalAuthority: "City of Vancouver approving officer",
    legislationName: "British Columbia Land Title Act and Vancouver zoning and subdivision bylaws",
    legislationCitation: "Approving-officer review against statute and bylaw. Confirm the current district schedule.",
    minLotSizeLabel: "Varies by zoning district, frontage, and site conditions",
    maxDensityLabel: "Varies by district schedule",
    estimatedApprovalTimeLabel: "Varies by completeness, servicing, and approving-officer review",
    utilityNote: "Lane access, sewer separation, and character-house or rental policies can shape the path.",
    septicPossible: false,
    publicHearingPossible: false,
    localDifference: "Do not confuse Vancouver, British Columbia with Vancouver, Washington. Approval here is an approving-officer decision, not a US plat hearing by default.",
    relatedCitySlugs: ["calgary"],
    dataQualityScore: 48,
    dataQualityStatus: "PARTIAL",
    lastReviewedAt: "2026-10-05",
    published: true
  },
  {
    id: "ca-ab-calgary-city",
    countryCode: "CA",
    countryName: "Canada",
    regionSlug: "alberta",
    regionName: "Alberta",
    regionType: "PROVINCE",
    citySlug: "calgary",
    cityName: "Calgary",
    countyOrRegionalDistrict: "Calgary",
    officialWebsite: "https://www.calgary.ca/",
    zoningAuthority: "City of Calgary",
    subdivisionApprovalAuthority: "City of Calgary subdivision authority",
    legislationName: "Alberta Municipal Government Act and Calgary land use bylaw",
    legislationCitation: "Subdivision approval is application-based. Confirm the current land-use district.",
    minLotSizeLabel: "Varies by land-use district",
    maxDensityLabel: "Varies by district",
    estimatedApprovalTimeLabel: "Varies by application completeness and any circulation to utilities",
    utilityNote: "Servicing agreements and off-site levies can apply when new parcels need infrastructure.",
    septicPossible: false,
    publicHearingPossible: false,
    localDifference: "Infill lot splits and greenfield subdivisions are priced and reviewed very differently.",
    relatedCitySlugs: ["vancouver"],
    dataQualityScore: 36,
    dataQualityStatus: "MOCK",
    lastReviewedAt: "2026-10-05",
    published: true
  }
];

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}

export function getJurisdiction(regionSlug: string, citySlug: string) {
  return jurisdictions.find(
    (item) => item.regionSlug === regionSlug && item.citySlug === citySlug && item.published
  );
}

export function citiesInRegion(regionSlug: string) {
  return jurisdictions.filter((item) => item.regionSlug === regionSlug && item.published);
}

export function relatedCities(city: Jurisdiction) {
  return city.relatedCitySlugs
    .map((slug) => jurisdictions.find((item) => item.citySlug === slug && item.regionSlug === city.regionSlug))
    .filter((item): item is Jurisdiction => Boolean(item));
}

export const topics = [
  { slug: "zoning", label: "Zoning" },
  { slug: "minimum-lot-size", label: "Minimum lot size" },
  { slug: "cost", label: "Costs" },
  { slug: "timeline", label: "Timeline" },
  { slug: "utilities", label: "Utilities" },
  { slug: "professionals", label: "Local experts" }
] as const;

export type TopicSlug = (typeof topics)[number]["slug"];

export function isTopic(value: string): value is TopicSlug {
  return topics.some((topic) => topic.slug === value);
}
