import Script from "next/script";

export function VercelAnalytics() {
  const isDev = process.env.NODE_ENV === "development";

  const src = isDev
    ? "https://va.vercel-scripts.com/v1/script.debug.js"
    : "/api/data/script.js";

  return (
    <>
      <Script id="analytics" strategy="afterInteractive">
        {`window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };`}
      </Script>
      <Script async data-endpoint="/api/data" src={src} strategy="lazyOnload" />
    </>
  );
}

export function VercelSpeedInsights() {
  const isDev = process.env.NODE_ENV === "development";

  const src = isDev
    ? "https://va.vercel-scripts.com/v1/speed-insights/script.debug.js"
    : "/api/perf/script.js";

  return (
    <>
      <Script id="web-vitals" strategy="afterInteractive">
        {`window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };`}
      </Script>
      <Script
        async
        data-endpoint="/api/perf/vitals"
        src={src}
        strategy="lazyOnload"
      />
    </>
  );
}
