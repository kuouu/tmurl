import { useEffect } from "react";
import { getOriginURL } from "../lib/notion";
import { trackEvent } from "../lib/ga";

export async function getServerSideProps({ params }) {
  const db = await getOriginURL(params.url);
  await trackEvent(params.url)
  return {
    props: { db }
  }
}

export default function RedirectPage({ db }) {
  const link = db.results[0].properties.Original.url
  useEffect(() => {
    window.location.replace(link)
  }, [link])
  return <></>
} 