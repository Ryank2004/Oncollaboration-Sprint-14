import fetchJson from "../lib/fetch-json";

export async function load() {
  const url = 'https://fdnd-agency.directus.app/items/avl_webinars'
  const webinars = await fetchJson(url)
  
  return {
    webinars: webinars.data
  }
}

