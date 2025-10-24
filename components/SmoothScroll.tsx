"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    let isScrolling = false;
    let velocity = 0;
    let animationFrame: number;
    const maxVelocity = 10;

    function smoothScroll() {
      if (Math.abs(velocity) > 0.5) {
        window.scrollBy(0, velocity);
        velocity *= 0.92;
        animationFrame = requestAnimationFrame(smoothScroll);
      } else {
        isScrolling = false;
        velocity = 0;
      }
    }

    function handleWheel(e: WheelEvent) {
      const delta = e.deltaY;
      velocity += delta * 0.15;
      velocity = Math.max(-maxVelocity, Math.min(maxVelocity, velocity));

      if (!isScrolling) {
        isScrolling = true;
        if (animationFrame) cancelAnimationFrame(animationFrame);
        animationFrame = requestAnimationFrame(smoothScroll);
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return null;
}
