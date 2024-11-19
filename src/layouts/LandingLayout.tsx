"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
import { useMouseMoveEffect } from "@/utils/useMouseMoveEffect";

export function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // This will run one time after the component mounts
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      setIsLoading(false);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", () => onPageLoad());
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
  useMouseMoveEffect();
  return (
    <>
      {isLoading ? "Loading..." : children}
      <Script
        src="_next/static/chunks/main-app.js" // Replace with your script URL
        strategy="worker" // Load after the page is loaded
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}
