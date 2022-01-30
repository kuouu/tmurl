import { useRouter } from "next/router"
import { getOriginURL } from "../lib/notion";
import { useEffect } from "react";
import Head from "next/head";
import * as ga from "../lib/ga";

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
  useEffect(() => {
    const link = db.results[0].properties.Original.url
    ga.pageview(asPath)
    window.location.href = link
  })
  return (
    <>
      <Head>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <div>Redirect to {asPath}...</div>
    </>
  )
}