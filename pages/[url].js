import { useEffect } from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const link = db.results[0].properties.Original.url
  useEffect(() => {
    router.replace(link)
  }, [link, router])
  return <></>
} 