import { useEffect } from "react";

/**
 * @param {number} minDuration - Minimum time (ms) the splash is visible. Default: 2000
 */
export function useSplash(minDuration: number = 2000): void {
  useEffect(() => {
    // Lock scroll while splash is showing
    document.body.classList.add("splash-loading");

    const splash = document.getElementById(
      "splash-screen",
    ) as HTMLElement | null;

    const hideSplash = () => {
      if (!splash) {
        // Ensure scroll is unlocked if splash element isn't found
        document.body.classList.remove("splash-loading");
        return;
      }

      // Trigger CSS fade-out transition
      splash.classList.add("splash-hidden");

      // Unlock scroll as soon as fade starts
      document.body.classList.remove("splash-loading");

      // Remove from DOM entirely after transition finishes (0.8s)
      const handleTransitionEnd = () => {
        splash.remove();
      };

      splash.addEventListener("transitionend", handleTransitionEnd, {
        once: true,
      });
    };

    const timer = setTimeout(hideSplash, minDuration);

    // Cleanup if component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, [minDuration]);
}
