/**
 * The six signature worlds of Life Hacks by Dave.
 *
 * Every subject area on the site inhabits its own atmosphere. World metadata
 * lives here so pages never scatter conditional theme logic — a page (or a
 * pillar) only ever names the world it belongs to.
 */

export type WorldKey = 'atlas' | 'celestial' | 'ether' | 'sacred' | 'botanical' | 'modern';

export interface World {
  key: WorldKey;
  label: string;
  roman: string;
  subtitle: string;
  description: string;
  /** Short palette description used on swatches and credits. */
  palette: string;
  /** Swatch colors for cards and legends. */
  swatch: [string, string, string];
}

export const worlds: Record<WorldKey, World> = {
  atlas: {
    key: 'atlas',
    label: 'The Ancient Atlas',
    roman: 'A',
    subtitle: 'Charts, coastlines & accumulated wisdom',
    description:
      'Aged maps, hand-drawn coastlines, compass roses and faded ink — the world of the house, the yard and the practical techniques of everyday life.',
    palette: 'Parchment · dark-brown ink · antique gold',
    swatch: ['#e9dfc8', '#8a6a3a', '#b79a60'],
  },
  celestial: {
    key: 'celestial',
    label: 'The Celestial Observatory',
    roman: 'B',
    subtitle: 'Star paths, cycles & our place beneath them',
    description:
      'Midnight skies, engraved star charts and planetary diagrams — the world of the stars, natural frequencies and humanity’s place in the universe.',
    palette: 'Deep midnight · engraved gold · starlight',
    swatch: ['#101622', '#1d2a4a', '#b79a60'],
  },
  ether: {
    key: 'ether',
    label: 'The Ether & the Unseen',
    roman: 'C',
    subtitle: 'Personal reflections beyond ordinary perception',
    description:
      'Layered translucent textures in indigo, smoke and soft gold — a contemplative space for Dave’s personal reflections on subtle environments and unseen influences.',
    palette: 'Deep indigo · smoke · muted silver · soft gold',
    swatch: ['#161a2e', '#484278', '#9aa6c0'],
  },
  sacred: {
    key: 'sacred',
    label: 'The Sacred Gallery',
    roman: 'D',
    subtitle: 'Faith, prayer & spiritual resilience',
    description:
      'Renaissance reverence: cathedral arches, sacred light, ultramarine and antique gold — the world of Christian faith and the convictions that guide Dave.',
    palette: 'Ultramarine · warm ivory · muted crimson · gold',
    swatch: ['#1a2f57', '#27406b', '#b79a60'],
  },
  botanical: {
    key: 'botanical',
    label: 'The Botanical Apothecary',
    roman: 'E',
    subtitle: 'Roots, herbs, oils & traditional remedies',
    description:
      'Antique botanical plates, herbarium pages and ink annotations — the world of medicinal plants, essential oils and the investigation of potential healing applications.',
    palette: 'Botanical green · parchment · cream · brass',
    swatch: ['#e6dfc8', '#65765a', '#a58a4d'],
  },
  modern: {
    key: 'modern',
    label: 'The Modern Human Environment',
    roman: 'F',
    subtitle: 'Schematics, exposures & daily choices',
    description:
      'Vintage technical manuals beside modern editorial diagrams — the world of clothing, devices, measurements and practical changes to daily life.',
    palette: 'Deep charcoal · warm white · muted copper',
    swatch: ['#1c2028', '#a86b45', '#f6f0e4'],
  },
};

export const worldList: World[] = Object.values(worlds);

export function getWorld(key: WorldKey): World {
  return worlds[key];
}
