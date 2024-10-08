import fetchJson from "$lib/fetch-json"

const baseURL = 'https://fdnd-agency.directus.app/items/'

export async function load({params}) {
  const url = `${baseURL}/avl_webinars?filter[slug][_eq]=${params.slug}`

  const webinar = await fetchJson(url)
  
  return {
    webinar: webinar.data[0]
  }
}