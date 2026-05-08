// CDN URLs for all SGR Design project photos and branding assets
const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310419663031581976/EwCYT3qyrKgvKV5RtZocBw";

export const images = {
  // Hero / Key images
  heroWide: `${CDN}/stone_entry_wide_58a1b0c8.webp`,
  heroCloseup: `${CDN}/stone_entry_closeup_b3fa3d40.webp`,

  // Exteriors
  exteriorCraftsman: `${CDN}/exterior_craftsman_8f126292.jpg`,
  exteriorTraditional: `${CDN}/exterior_traditional_75d4bdad.jpg`,
  exteriorEstate: `${CDN}/exterior_estate_fd5b1da2.jpg`,

  // Interiors - Living
  interiorLivingKitchen: `${CDN}/interior_living_kitchen_0d940308.jpg`,
  interiorLivingDark: `${CDN}/interior_living_dark_62682ea2.jpg`,
  interiorKitchenOpen: `${CDN}/interior_kitchen_open_b7920fd6.jpg`,

  // Interiors - Kitchens
  interiorWhiteKitchen: `${CDN}/interior_white_kitchen_499070e8.jpg`,
  interiorKitchenView: `${CDN}/interior_kitchen_view_f32c3eda.jpg`,
  interiorKitchenDarkCounters: `${CDN}/interior_kitchen_dark_counters_5ee920bd.jpg`,
  interiorKitchenWhite: `${CDN}/interior_kitchen_white_9e04182f.jpg`,
  interiorKitchenBeams: `${CDN}/interior_kitchen_beams_104787f9.jpg`,

  // Interiors - Bedrooms/Bathrooms
  interiorMasterBedroom: `${CDN}/interior_master_bedroom_394b397e.jpg`,
  interiorBathroomTub: `${CDN}/interior_bathroom_tub_9eb72aeb.jpg`,
  interiorBathroomShower: `${CDN}/interior_bathroom_shower_5f1f139a.jpg`,
  interiorBathroomModern: `${CDN}/interior_bathroom_modern_1cbf9a78.jpg`,
  interiorBathroomVanity: `${CDN}/interior_bathroom_vanity_495ed929.jpg`,

  // Details
  detailStaircase: `${CDN}/detail_staircase_968111b0.jpg`,
  detailArchedDoor: `${CDN}/detail_arched_door_babbd0b5.jpg`,
  detailGlassStaircase: `${CDN}/detail_glass_staircase_360f05b4.jpg`,

  // Other interiors
  interiorWalkinCloset: `${CDN}/interior_walkin_closet_0b165781.jpg`,
  interiorPowderRoom: `${CDN}/interior_powder_room_71dbdbac.jpg`,
  interiorLaundry: `${CDN}/interior_laundry_134ae42a.jpg`,

  // Multi-Family Projects
  blindBayAerial01: `${CDN}/blindbay_aerial_01_6f80bde7.jpg`,
  blindBayAerial02: `${CDN}/blindbay_aerial_02_a81d0bcb.jpg`,
  predatorRidgeUnit: `${CDN}/predatorridge_unit_01_1ad8af24.jpg`,
  predatorRidgeAerial: `/manus-storage/predator_ridge_district_a2f4c9e1.jpg`,

  // Custom Homes - Featured
  copleyRidgeAerial: `/manus-storage/copley_ridge_28b08bec.jpg`,

  // New hero and featured project images
  heroOakLeaf: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663031581976/jtmnPErTUSdafpPR.webp",
  rupertCourtyard: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663031581976/FJXZHSiIxjKHLylS.jpg",
  mallardOceanview: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663031581976/aTrnUkKcULAHNLEi.webp",
  oakLeafAerial: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663031581976/duFHpPllwkAfuXQn.webp",

  // Branding
  logoCard: `${CDN}/logo_card_dcafd860.png`,
  logoBrochure: `${CDN}/logo_from_brochure_5e5805e8.png`,
} as const;
