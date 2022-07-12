import axios from 'axios';

// log the pageview with their URL
export const pageview = (url) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  })
}

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag('event', action, params)
}

export const trackEvent = async (url) => {
  const data = {
    // API Version.
    v: '1',
    // Tracking ID / Property ID.
    tid: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    // Anonymous Client Identifier. Ideally, this should be a UUID that
    // is associated with particular user, device, or browser instance.
    cid: '555',
    // Event hit type.
    t: 'event',
    // Event category.
    ec: 'pageview',
    // Event action.
    ea: 'click',
    // Event label.
    el: 'url',
    // Event value.
    ev: url,
  };
  axios.get(
    'http://www.google-analytics.com/debug/collect',
    { params: data }
  )
}