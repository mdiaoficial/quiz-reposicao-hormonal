"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { useConsent } from "./ConsentProvider";
import { newEventId, trackCapi, trackPixel } from "@/lib/meta";

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function MetaPixel() {
  const { status } = useConsent();
  const pageViewSent = useRef(false);

  useEffect(() => {
    if (status !== "granted") return;
    if (pageViewSent.current) return;
    if (typeof window === "undefined" || !window.fbq) return;

    const id = newEventId();
    trackPixel("PageView", {}, id);
    void trackCapi("PageView", {}, id);
    pageViewSent.current = true;
  }, [status]);

  if (!PIXEL_ID) return null;
  if (status !== "granted") return null;

  return (
    <>
      <Script
        id="meta-pixel-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
