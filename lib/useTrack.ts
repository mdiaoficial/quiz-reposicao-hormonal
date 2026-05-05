"use client";

import { useCallback } from "react";
import { useConsent } from "@/components/ConsentProvider";
import {
  newEventId,
  trackCapi,
  trackPixel,
  type MetaCustomData,
  type MetaEventName,
} from "@/lib/meta";

/**
 * Hook que dispara evento browser + servidor com o mesmo event_id,
 * respeitando o consentimento LGPD. Sem consentimento = não dispara.
 */
export function useTrack() {
  const { status } = useConsent();

  return useCallback(
    (name: MetaEventName, data: MetaCustomData = {}) => {
      if (status !== "granted") return;
      const id = newEventId();
      trackPixel(name, data, id);
      void trackCapi(name, data, id);
    },
    [status],
  );
}
