"use client";
import { useRouter, useSearchParams } from "next/navigation";
import WaveTexture from "@/assets/images/WaveTexture.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { debounce } from "@/utils/methods";

const buttons = [
  { id: "who-am-i", label: "سینا!" },
  { id: "videography", label: "ویدیو" },
  { id: "home", label: "خانه" },
  { id: "discography", label: "موزیک" },
  { id: "events", label: "اجرا" },
];

export function BottomNavigation() {
  const { push: navigateTo } = useRouter();
  const [mounted, setMounted] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const currentView = searchParams.get("view") || "home";
  const currentViewRef = useRef<HTMLElement | null>(null);

  const scrollToComponent = (id: string) => {
    currentViewRef.current = document.getElementById(id);
    navigateTo(`?view=${id}`, { scroll: true });
    if (currentViewRef.current) {
      currentViewRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    currentViewRef.current = document.getElementById(currentView);
    const scrollToCurrentView = () => {
      if (currentViewRef.current) {
        currentViewRef.current.scrollIntoView({ behavior: "instant" });
      }
    };

    window.addEventListener("load", () => setMounted(true));
    if (!mounted) scrollToCurrentView();

    window.addEventListener("resize", debounce(scrollToCurrentView, 100));
    console.log(currentView);

    return () => {
      window.removeEventListener("resize", debounce(scrollToCurrentView, 100));
    };
  }, []);

  return (
    <nav className={className.container}>
      <ol className={className.buttonWrapper}>
        {buttons.map(({ id, label }) => (
          <li key={id} className={className.buttonContainer}>
            <button
              onClick={() => scrollToComponent(id)}
              className={`${className.navButton} ${
                currentView === id ? "text-white border" : "font-medium"
              }`}
            >
              {label}
            </button>
          </li>
        ))}
        <div
          className={`
            ${className.navIndicator} 
            ${calculateTransform(currentView)}`}
        />
      </ol>
      <Image
        width={340}
        height={340}
        src={WaveTexture}
        quality={100}
        alt="wabi-sabi wave texture"
        className={`${className.Image}  ${calculateRotate(currentView)}`}
      />
    </nav>
  );
}

const className: { [key: string]: string } = {
  container: "fixed bottom-0 left-0 right-0 p-4 w-full max-w-[548px] m-auto",
  buttonWrapper: "relative flex justify-evenly",
  buttonContainer:
    "w-full max-w-1/5 z-10  min-h-8 flex justify-center items-center",
  navButton:
    "text-primary-main  border-transparent transition-all duration-300 rounded border hover:border-primary-main px-4",
  navIndicator:
    "absolute left-0 right-0 bottom-0 min-h-8 bg-primary-main w-1/5 transition-transform duration-300 rounded",
  Image:
    "absolute left-0 right-0 -translate-x-[40px] sm:-translate-x-[108px] -top-[150%] -z-10 opacity-20 transition-transform duration-500",
};

const calculateTransform = (currentView: string | null) => {
  switch (currentView) {
    case "who-am-i":
      return "-translate-x-[0%]";
    case "videography":
      return "-translate-x-[100%]";
    case "home":
      return "-translate-x-[200%]";
    case "discography":
      return "-translate-x-[300%]";
    case "events":
      return "-translate-x-[400%]";
    default:
      return "-translate-x-[200%]";
  }
};

const calculateRotate = (currentView: string | null) => {
  switch (currentView) {
    case "who-am-i":
      return "-rotate-[0deg]";
    case "videography":
      return "-rotate-[100deg]";
    case "home":
      return "-rotate-[200deg]";
    case "discography":
      return "-rotate-[300deg]";
    case "events":
      return "-rotate-[400deg]";
    default:
      return "-rotate-[200deg]";
  }
};
