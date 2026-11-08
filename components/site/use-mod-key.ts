"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// The server snapshot is empty; the OS-specific hint appears after hydration.
export function useModKey() {
  return useSyncExternalStore(subscribe, () => /Mac|iPhone|iPad/.test(navigator.userAgent) ? "⌘K" : "Ctrl K", () => "");
}
