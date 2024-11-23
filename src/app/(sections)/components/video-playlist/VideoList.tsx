"use client";
import { useEffect, useRef } from "react";
import { VideoThumbnail } from "./VideoThumbnail";

export function VideoList() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (event: WheelEvent) => {
    event.preventDefault();
    if (!scrollRef.current) return;
    const scrollTop = scrollRef.current.scrollTop;
    // Determine the scroll direction
    const delta = event.deltaY;
    // Calculate the new scroll position
    let newScrollTop: number;
    if (delta > 0) {
      // Scrolling down
      newScrollTop =
        Math.ceil(scrollTop + 124) - Math.ceil((scrollTop + 124) % 124);
    } else {
      // Scrolling up
      newScrollTop =
        Math.ceil(scrollTop - 124) - Math.ceil((scrollTop - 124) % 124);
    }

    // Set the scroll position
    scrollRef.current.scrollTo({
      top: newScrollTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const scrollableElement = scrollRef.current;

    // Add event listener
    if (scrollableElement) {
      scrollableElement.addEventListener("wheel", handleScroll, {
        passive: false,
      });
    }

    // Cleanup
    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="grid grid-cols-3 pl-2 w-max max-h-[252px] overflow-y-auto gap-x-2 gap-y-2"
    >
      {Array.from("123456789123456789").map(() => {
        return <VideoThumbnail />;
      })}
    </div>
  );
}
