"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
export function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(document?.readyState);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // This will run one time after the component mounts
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = (data) => {
      setIsLoading(false);
      console.log(data);

      // do something else
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad(document.readyState);
    } else {
      window.addEventListener("load", (data) => onPageLoad(data));
      window.addEventListener("loadeddata", (data) =>
        console.log("loadeddata", data)
      );
      window.addEventListener("loadstart", (data) =>
        console.log("loadstart", data)
      );

      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
  return (
    <>
      {isLoading ? "Loading..." : children}{" "}
      <Script
        src="http://localhost:3000/_next/static/chunks/main-app.js" // Replace with your script URL
        strategy="worker" // Load after the page is loaded
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}
