"use client";
import { useRouter, useSearchParams } from "next/navigation";
import WaveTexture from "@/app/assets/images/WaveTexture.png";
import Image from "next/image";
const buttons = [
  { id: "who-am-i", label: "سینا!" },
  { id: "videography", label: "ویدیو" },
  { id: "home", label: "خانه" },
  { id: "discography", label: "موزیک" },
  { id: "events", label: "اجرا" },
];

export function BottomNavigation() {
  //Dependencies
  const { push: navigateTo } = useRouter();
  const searchParams = useSearchParams();
  const currentView = searchParams.get("view") || "home";

  //Handlers
  const scrollToComponent = (id: string) => {
    const element = document.getElementById(id);
    navigateTo(`?view=${id}`, { scroll: true });
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <div className={className.container}>
      <div className={className.buttonWrapper}>
        {buttons.map(({ id, label }) => (
          <div key={id} className={className.buttonContainer}>
            <button
              onClick={() => scrollToComponent(id)}
              className={`${className.navButton}  ${
                currentView === id ? "text-white border" : ""
              }`}
            >
              {label}
            </button>
          </div>
        ))}
        <div
          className={`
            ${className.navIndicator} 
            ${calculateTransform(currentView)}`}
        />
      </div>
      <Image
        width={340}
        height={340}
        src={WaveTexture}
        quality={100}
        alt="wabi-sabi wave texture"
        className={`${className.Image} ${calculateRotate(currentView)}`}
      />
    </div>
  );
}

const className: { [key: string]: string } = {
  container: "fixed bottom-0 left-0 right-0 p-4 w-1/3 max-w-[548px] m-auto",
  buttonWrapper: "relative flex justify-evenly",
  buttonContainer:
    "w-full max-w-1/5 z-10  min-h-8 flex justify-center items-center",
  navButton:
    "text-primary-main  border-transparent transition-all duration-300 rounded border hover:border-primary-main px-4",
  navIndicator:
    "absolute left-0 right-0 bottom-0 min-h-8 bg-primary-main w-1/5 transition-transform duration-300 rounded",
  Image:
    "absolute left-0 right-0 -translate-x-[108px] -top-[150%] -z-10 opacity-15 transition-transform duration-500",
};

const calculateTransform = (currentView: string | null) => {
  switch (currentView) {
    case "who-am-i":
      return "-translate-x-[0%]";
    case "videography":
      return "-translate-x-[100%]";
    case "main-page":
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
    case "main-page":
      return "-rotate-[200deg]";
    case "discography":
      return "-rotate-[300deg]";
    case "events":
      return "-rotate-[400deg]";
    default:
      return "-rotate-[200deg]";
  }
};
