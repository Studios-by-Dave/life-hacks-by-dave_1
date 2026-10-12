/**
 * Central information architecture.
 *
 * The six pillars are expandable containers, not permanent limits. Adding a
 * new section to the site should require only an entry here (plus its content
 * and, if it needs a brand-new atmosphere, an entry in `worlds.ts`).
 *
 * URL rules:
 *   /<pillar>/                 → pillar landing page
 *   /<pillar>/<topic-slug>/    → topic cluster page
 *   /<pillar>/<article-slug>/  → article (added with the content layer)
 */

import type { WorldKey } from './worlds';

export interface Topic {
  slug: string;
  title: string;
  blurb: string;
}

export interface Pillar {
  /** Stable internal id (also used as the URL segment). */
  id: string;
  roman: string;
  name: string;
  /** Short archival label used in cards and breadcrumbs. */
  shortName: string;
  tagline: string;
  purpose: string;
  world: WorldKey;
  icon: string;
  topics: Topic[];
}

export const pillars: Pillar[] = [
  {
    id: 'house',
    roman: 'I',
    name: 'The House',
    shortName: 'The House',
    tagline: 'The home as an environment that can be understood',
    purpose:
      'Explore the home as an environment that can be understood, improved, and adapted through practical techniques — air, water, light, materials and the setups that make daily life work better.',
    world: 'atlas',
    icon: 'house',
    topics: [
      {
        slug: 'air-and-ventilation',
        title: 'Indoor Air & Ventilation',
        blurb: 'Air exchange, filtration, cooking exhaust and the quiet ways a house breathes.',
      },
      {
        slug: 'household-products',
        title: 'Household Products & Ingredients',
        blurb: 'Cleaning products, surfactants, fragrances and the alternatives worth testing.',
      },
      {
        slug: 'water',
        title: 'Water Quality & Filtration',
        blurb: 'What is in the tap, what the filters actually remove, and how water is stored.',
      },
      {
        slug: 'lighting',
        title: 'Lighting & the Sleeping Environment',
        blurb: 'Evening light, colour temperature, shades and the dark that rest requires.',
      },
      {
        slug: 'equipment',
        title: 'Equipment & Household Electronics',
        blurb: 'Appliances, motors, standby loads and the devices that shape the room.',
      },
      {
        slug: 'practical-setups',
        title: 'Practical Setups & Organisation',
        blurb: 'Workbenches, storage, workflows and small rebuilds that save time for years.',
      },
      {
        slug: 'observations',
        title: 'Personal Observations & Experiments',
        blurb: 'Long-running household experiments, measurements and field notes.',
      },
    ],
  },
  {
    id: 'clothing',
    roman: 'II',
    name: 'Clothing & Personal Environment',
    shortName: 'Clothing',
    tagline: 'The immediate environment worn against the body',
    purpose:
      'Explore clothing, textiles, personal-care products, fabrics and the choices that shape the immediate environment around the body.',
    world: 'modern',
    icon: 'shirt',
    topics: [
      {
        slug: 'fabrics',
        title: 'Fabrics & Textile Materials',
        blurb: 'Cotton, wool, linen, synthetics — how each material behaves against skin.',
      },
      {
        slug: 'construction',
        title: 'Construction & Comfort',
        blurb: 'Seams, fits, weaves and the small tailoring details that change a whole day.',
      },
      {
        slug: 'laundry',
        title: 'Detergents & Laundry Practice',
        blurb: 'Residue, rinsing, water temperature and what actually remains on the fibre.',
      },
      {
        slug: 'fragrances',
        title: 'Fragrances & Personal-Care Ingredients',
        blurb: 'Scent, preservatives and the ingredients most often left off the label.',
      },
      {
        slug: 'labels',
        title: 'Product Labels & Ingredient Research',
        blurb: 'How to read a label, what the names mean and where to check the record.',
      },
      {
        slug: 'experiments',
        title: 'Clothing Experiments & Comparisons',
        blurb: 'Side-by-side wear tests, wash trials and honest long-term notes.',
      },
    ],
  },
  {
    id: 'yard',
    roman: 'III',
    name: 'The Yard & Natural World',
    shortName: 'The Yard',
    tagline: 'Outdoor ground, growing things and open air',
    purpose:
      'Investigate outdoor environments, gardening, natural materials, plants and practical ways to engage with the natural world.',
    world: 'atlas',
    icon: 'sprout',
    topics: [
      {
        slug: 'plants',
        title: 'Medicinal & Culinary Plants',
        blurb: 'Identification, harvest windows and the plants worth knowing by sight.',
      },
      {
        slug: 'herb-gardens',
        title: 'Herb Gardens & Growing Techniques',
        blurb: 'Beds, containers, propagation and keeping herbs productive year round.',
      },
      {
        slug: 'soil-and-compost',
        title: 'Soil & Compost',
        blurb: 'Structure, life, drainage and turning yard waste back into ground.',
      },
      {
        slug: 'trees-and-shade',
        title: 'Trees, Shade & Outdoor Comfort',
        blurb: 'Placement, pruning and using canopy to cool the spaces you live in.',
      },
      {
        slug: 'water-and-irrigation',
        title: 'Water & Irrigation',
        blurb: 'Catchment, drip lines, timing and moving water where it is needed.',
      },
      {
        slug: 'pest-management',
        title: 'Natural Pest Management',
        blurb: 'Observation, companion planting and non-toxic interventions first.',
      },
      {
        slug: 'grounding',
        title: 'Grounding & Earthing',
        blurb: 'Direct contact with the ground — observations, methods and open questions.',
      },
      {
        slug: 'field-notes',
        title: 'Outdoor Observations & Experiments',
        blurb: 'Seasonal records, weather notes and trials run in the open air.',
      },
    ],
  },
  {
    id: 'power-devices',
    roman: 'IV',
    name: 'Power, Devices & Environmental Exposures',
    shortName: 'Power & Devices',
    tagline: 'Electrical equipment, measurement and lived experience',
    purpose:
      'Examine electrical equipment, modern technologies, environmental measurements and personal approaches to understanding one’s surroundings.',
    world: 'modern',
    icon: 'zap',
    topics: [
      {
        slug: 'household-electrical',
        title: 'Household Electrical Systems',
        blurb: 'Wiring, panels, grounding conductors and how a building is actually wired.',
      },
      {
        slug: 'device-configurations',
        title: 'Electronics & Device Setups',
        blurb: 'Routers, phones, displays and the settings that reduce needless transmission.',
      },
      {
        slug: 'emf-measurements',
        title: 'Electromagnetic Fields & Exposure Measurements',
        blurb: 'What meters read, where readings rise, and how to interpret a number.',
      },
      {
        slug: 'measurement-tools',
        title: 'Measurement Tools & Equipment',
        blurb: 'Meters, probes, calibration and choosing a tool that answers the question.',
      },
      {
        slug: 'comparisons',
        title: 'Practical Environmental Comparisons',
        blurb: 'Before-and-after measurements across rooms, devices and habits.',
      },
      {
        slug: 'vehicles',
        title: 'Vehicle & Transportation Environments',
        blurb: 'Cabin electronics, wiring and the space between garage and road.',
      },
      {
        slug: 'grounding-investigations',
        title: 'Grounding & Earthing Investigations',
        blurb: 'Conductive paths, contact points and measurements taken on contact.',
      },
      {
        slug: 'lived-experience',
        title: 'Hypersensitivity & Lived Experience',
        blurb: 'Personal accounts clearly separated from measured and established fact.',
      },
    ],
  },
  {
    id: 'true-medicine',
    roman: 'V',
    name: 'True Medicine',
    shortName: 'True Medicine',
    tagline: 'Healing roots, herbs, oils & frequency research',
    purpose:
      'Investigate healing roots, herbs and essential oils, traditional remedies, and Dave’s ongoing research into healing frequencies — including Rife frequencies — with careful separation of tradition, personal experience and established science.',
    world: 'botanical',
    icon: 'stethoscope',
    topics: [
      {
        slug: 'roots-and-herbs',
        title: 'Healing Roots & Herbs',
        blurb: 'Roots, barks, leaves and flowers used across generations — preparation and caution.',
      },
      {
        slug: 'essential-oils',
        title: 'Essential Oils',
        blurb: 'Distillation, dilution, applications and the limits of what oils can do.',
      },
      {
        slug: 'traditional-remedies',
        title: 'Traditional & Folk Remedies',
        blurb: 'Old methods worth studying, their origins and their honest boundaries.',
      },
      {
        slug: 'healing-frequencies',
        title: 'Healing Frequencies & Rife Research',
        blurb: 'Sound, frequency protocols and Rife-style research — explored openly as inquiry, never presented as settled medical fact.',
      },
      {
        slug: 'compound-research',
        title: 'Compound & Ingredient Research',
        blurb: 'Reading the studies behind a remedy before it reaches the cupboard.',
      },
      {
        slug: 'experiments',
        title: 'Personal Experiments & Observations',
        blurb: 'Careful self-experiments with dates, doses, results and what did not work.',
      },
    ],
  },
  {
    id: 'faith',
    roman: 'VI',
    name: 'Faith & the Inner Life',
    shortName: 'Faith',
    tagline: 'Conviction, prayer and spiritual resilience',
    purpose:
      'Share the Christian faith, the Holy Spirit, God the Father, Yahweh, Jesus Christ, prayer, spiritual resilience and the spiritual convictions that guide Dave.',
    world: 'sacred',
    icon: 'cross',
    topics: [
      {
        slug: 'foundations',
        title: 'Foundations of the Faith',
        blurb: 'The Gospel, Scripture and the ground the rest of the writing stands on.',
      },
      {
        slug: 'prayer',
        title: 'Prayer & Spiritual Discipline',
        blurb: 'Practices of prayer, fasting, silence and returning to the same words.',
      },
      {
        slug: 'holy-spirit',
        title: 'The Holy Spirit & Guidance',
        blurb: 'Discernment, comfort and learning to recognise leading without presumption.',
      },
      {
        slug: 'perseverance',
        title: 'Suffering, Trials & Resilience',
        blurb: 'What hardship has taught, held and rebuilt over the years.',
      },
      {
        slug: 'everyday-practice',
        title: 'Faith in Everyday Life',
        blurb: 'Work, household, health and the ordinary days where belief is lived out.',
      },
      {
        slug: 'scripture-study',
        title: 'Scripture Study & Notes',
        blurb: 'Passages, cross-references and margin notes from a working study Bible.',
      },
    ],
  },
];

export const pillarById: Record<string, Pillar> = Object.fromEntries(
  pillars.map((p) => [p.id, p]),
);

export function getPillar(id: string): Pillar | undefined {
  return pillarById[id];
}
