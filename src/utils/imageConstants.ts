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
    src: `${BASE_URL}/assets/images/content_133.jpg?v=2`,
    srcSet: `${BASE_URL}/assets/images/content_135.jpg?v=2 500w, ${BASE_URL}/assets/images/content_130.jpg?v=2 1000w, ${BASE_URL}/assets/images/content_133.jpg?v=2 2500w`,
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
  // Residency Cinematic Series (262A* series)
  RES_HERO: {
    src: `${BASE_URL}/assets/images/262A9450.JPG`,
  },
  RES_PRO_MAIN: {
    src: `${BASE_URL}/assets/images/262A9496.JPG`,
  },
  RES_EMERGING_MAIN: {
    src: `${BASE_URL}/assets/images/262A9540.JPG`,
  },
  RES_COLLAB: {
    src: `${BASE_URL}/assets/images/262A9574.JPG`,
  },
  RES_TERRACE_WORK: {
    src: `${BASE_URL}/assets/images/262A9614.JPG`,
  },

  // About Page - Dedicated
  ABOUT_HERO: {
    src: `${BASE_URL}/assets/images/content_061.JPG`,
  },
  TEAM_ARTISTIC_DIRECTION: {
    src: `${BASE_URL}/assets/images/content_066.jpg`,
    srcSet: `${BASE_URL}/assets/images/content_065.jpg 500w, ${BASE_URL}/assets/images/content_067.jpg 1000w, ${BASE_URL}/assets/images/content_066.jpg 2500w`,
  },
  TEAM_RESIDENCY: {
    src: `${BASE_URL}/assets/images/content_075.jpg`,
    srcSet: `${BASE_URL}/assets/images/content_074.jpg 500w, ${BASE_URL}/assets/images/content_076.jpg 1000w, ${BASE_URL}/assets/images/content_075.jpg 2500w`,
  },
  TEAM_COMMUNITY_PARTNERS: {
    src: `${BASE_URL}/assets/images/content_070.jpg`,
    srcSet: `${BASE_URL}/assets/images/content_069.jpg 500w, ${BASE_URL}/assets/images/content_071.jpg 1000w, ${BASE_URL}/assets/images/content_070.jpg 2500w`,
  },

  // Exchange Page - Dedicated
  EXCHANGE_BACKGROUND: {
    src: `${BASE_URL}/assets/images/content_140.jpg`,
  },

  // UI
  UI_CART: {
    src: `${BASE_URL}/assets/images/ui_icon_014.png`,
  },
  UI_SOCIAL: {
    src: `${BASE_URL}/assets/images/ui_font_001.svg`,
  }
} as const;
