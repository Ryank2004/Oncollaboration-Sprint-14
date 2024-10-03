import fetchJson from "../lib/fetch-json";

export async function load() {
  const url = 'https://fdnd-agency.directus.app/items/avl_webinars';
  const contouring = 'https://fdnd-agency.directus.app/items/avl_contourings';
  
  const webinars = await fetchJson(url);
  const contourings = await fetchJson(contouring);
  
  return {
    webinars: webinars.data,
    contourings: contourings.data
  };
}
