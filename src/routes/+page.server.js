import fetchJson from "../lib/fetch-json";

export async function load() {
  const url = 'https://fdnd-agency.directus.app/items/dda_agencies/1'
  const webinars = await fetchJson(url)

  return {
    webinars: webinars.data
  }
}

