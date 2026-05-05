const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, "");

export const IMAGES = {
  // Homepage
  HERO_SUNSET: {
    src: `${BASE_URL}/assets/images/other_156.jpeg`,
  },
  ART_SPACE_PILLAR: {
    src: `${BASE_URL}/assets/images/content_052.JPG`,
  },
  RESIDENCY_PILLAR: {
    src: `${BASE_URL}/assets/images/content_061.JPG`,
  },
  EXCHANGE_PILLAR: {
    src: `${BASE_URL}/assets/images/content_124.jpg`,
    srcSet: `${BASE_URL}/assets/images/content_126.jpg 500w, ${BASE_URL}/assets/images/content_121.jpg 1000w, ${BASE_URL}/assets/images/content_124.jpg 2500w`,
  },
  FACILITY_SUNDECK: {
    src: `${BASE_URL}/assets/images/content_084.jpg`,
    srcSet: `${BASE_URL}/assets/images/content_086.jpg 500w, ${BASE_URL}/assets/images/content_081.jpg 1000w, ${BASE_URL}/assets/images/content_084.jpg 2500w`,
  },
  FACILITY_MANGROVE: {
    src: `${BASE_URL}/assets/images/other_155.jpeg`,
  },
  
  // Art Space Page
  ART_SPACE_HERO: {
    src: `${BASE_URL}/assets/images/content_133.jpg`,
    srcSet: `${BASE_URL}/assets/images/content_135.jpg 500w, ${BASE_URL}/assets/images/content_130.jpg 1000w, ${BASE_URL}/assets/images/content_133.jpg 2500w`,
  },
  ART_SPACE_EVENTS: {
    src: `${BASE_URL}/assets/images/content_149.jpg`,
    srcSet: `${BASE_URL}/assets/images/content_151.jpg 500w, ${BASE_URL}/assets/images/content_146.jpg 1000w, ${BASE_URL}/assets/images/content_149.jpg 2500w`,
  },

  // Residency Page
  RESIDENCY_HERO: {
    src: `${BASE_URL}/assets/images/content_153.JPG`,
  },
  RESIDENCY_PRO: {
    src: `${BASE_URL}/assets/images/content_092.jpg`,
    srcSet: `${BASE_URL}/assets/images/content_094.jpg 500w, ${BASE_URL}/assets/images/content_089.jpg 1000w, ${BASE_URL}/assets/images/content_092.jpg 2500w`,
  },
  RESIDENCY_EMERGING: {
    src: `${BASE_URL}/assets/images/content_116.jpg`,
    srcSet: `${BASE_URL}/assets/images/content_118.jpg 500w, ${BASE_URL}/assets/images/content_113.jpg 1000w, ${BASE_URL}/assets/images/content_116.jpg 2500w`,
  },

  // UI
  UI_CART: {
    src: `${BASE_URL}/assets/images/ui_icon_014.png`,
  },
  UI_SOCIAL: {
    src: `${BASE_URL}/assets/images/ui_font_001.svg`,
  }
} as const;
