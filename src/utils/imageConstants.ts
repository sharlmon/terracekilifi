import heroSunset from "../assets/images/hero-architecture.webp";
import artSpacePillar from "../assets/images/communal-garden-swings.webp";
import residencyPillar from "../assets/images/garden-sanctuary.webp";
import exchangePillar from "../assets/images/social-collaboration.webp";
import facilitySundeck from "../assets/images/architectural-detail.webp";
import facilityMangrove from "../assets/images/balcony-office-view.webp";
import residencyPro from "../assets/images/interior-living-space.webp";
import residencyEmerging from "../assets/images/communal-dining.webp";
import uiIcon from "../assets/images/ui_icon_014.png";
import uiFont from "../assets/images/ui_font_001.svg";

export const IMAGES = {
  // Homepage
  HERO_SUNSET: {
    src: heroSunset,
  },
  ART_SPACE_PILLAR: {
    src: artSpacePillar,
  },
  RESIDENCY_PILLAR: {
    src: residencyPillar,
  },
  EXCHANGE_PILLAR: {
    src: exchangePillar,
  },
  FACILITY_SUNDECK: {
    src: facilitySundeck,
  },
  FACILITY_MANGROVE: {
    src: facilityMangrove,
  },

  // Art Space Page
  ART_SPACE_HERO: {
    src: artSpacePillar,
  },
  ART_SPACE_EVENTS: {
    src: residencyEmerging,
  },

  // Residency Page
  RESIDENCY_HERO: {
    src: residencyPillar,
  },
  RESIDENCY_PRO: {
    src: residencyPro,
  },
  RESIDENCY_EMERGING: {
    src: residencyEmerging,
  },

  // UI
  UI_CART: {
    src: uiIcon,
  },
  UI_SOCIAL: {
    src: uiFont,
  },
} as const;

