import { useRouter } from "next/router"
import { getOriginURL } from "../lib/notion";
import { useEffect } from "react";

export async function getServerSideProps({ params }) {
  const db = await getOriginURL(params.tmurl);
  return {
    props: {
      db
    }
  }
}

export default function Redirect({ db }) {
  const { asPath } = useRouter();
  useEffect(()=>{
    const link = db.results[0].properties.Original.url
    window.location.href = link
  })
  return (
    <div>Redirect to {asPath}...</div>
  )
}