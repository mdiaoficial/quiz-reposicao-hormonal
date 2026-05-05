"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type ConsentStatus = "unknown" | "granted" | "denied";

type ConsentContextValue = {
  status: ConsentStatus;
  grant: () => void;
  deny: () => void;
};

const STORAGE_KEY = "consent.meta.v1";
const SIX_MONTHS_MS = 1000 * 60 * 60 * 24 * 180;

type StoredValue = { value: "granted" | "denied"; ts: number };

const Ctx = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<ConsentStatus>("unknown");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as StoredValue;
      if (Date.now() - parsed.ts > SIX_MONTHS_MS) {
        localStorage.removeItem(STORAGE_KEY);
        return;
      }
      setStatus(parsed.value);
    } catch {
      // ignora storage quebrado
    }
  }, []);

  const persist = useCallback((value: "granted" | "denied") => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ value, ts: Date.now() } satisfies StoredValue),
      );
    } catch {
      // privado/cota cheia — só não persiste
    }
    setStatus(value);
  }, []);

  return (
    <Ctx.Provider
      value={{
        status,
        grant: () => persist("granted"),
        deny: () => persist("denied"),
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

/** Fallback usado em SSR / fora do provider. Status "unknown" garante
 * que nenhum tracking dispare antes do client hidratar. */
const FALLBACK: ConsentContextValue = {
  status: "unknown",
  grant: () => {},
  deny: () => {},
};

export function useConsent(): ConsentContextValue {
  return useContext(Ctx) ?? FALLBACK;
}
