"use client";

import { useEffect, useState } from "react";

// Returns "⌘K" on Mac, "Ctrl K" elsewhere. Empty until mounted to avoid
// a hydration mismatch and the ⌘ tofu glyph on non-Mac platforms.
export function useModKey() {
  const [key, setKey] = useState("");
  useEffect(() => {
    setKey(/Mac|iPhone|iPad/.test(navigator.userAgent) ? "⌘K" : "Ctrl K");
  }, []);
  return key;
}
