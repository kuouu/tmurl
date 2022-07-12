import { trackEvent } from "../../lib/ga"
import { getOriginURL } from "../../lib/notion"

const handler = async (req, res) => {
  const { url } = req.query
  await trackEvent(url)
  const db = await getOriginURL(url)
  const link = db.results[0].properties.Original.url
  res.redirect(302, link)
}

export default handler