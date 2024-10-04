import fetchJson from "../lib/fetch-json";

const baseURL = 'https://fdnd-agency.directus.app/items/'

export async function load() {
  const webinar = `${baseURL}avl_webinars`;
  const contouring = `${baseURL}avl_contourings`;
  
  const webinars = await fetchJson(webinar);
  const contourings = await fetchJson(contouring);
  
  return {
    webinars: webinars.data,
    contourings: contourings.data
  };
}
