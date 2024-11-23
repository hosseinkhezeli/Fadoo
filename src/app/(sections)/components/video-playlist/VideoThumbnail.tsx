"use client";
import Image from "next/image";
import TestThumbnail from "@/assets/images/test-album-art.jpg";
import Play from "@/assets/icon-components/Play";
import { useState } from "react";
import SoundWave from "@/assets/icon-components/SoundWave";
export function VideoThumbnail() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  return (
    <div className="overflow-hidden w-[120px] h-[120px] relative group saturate-0 hover:saturate-100">
      <Image src={TestThumbnail} width={120} height={120} alt="test alt" />
      <div className="absolute flex flex-col-reverse w-full h-full bg-[#FFFFFF88] transition-transform  top-0 left-0 translate-y-[100%]  group-hover:translate-y-0 ">
        <button
          className="stroke-white fill-white absolute right-[25%] w-1/2 h-1/2  top-[25%] active:scale-90"
          onClick={() => setIsPlaying((prev) => !prev)}
        >
          {isPlaying ? <SoundWave /> : <Play />}
        </button>
        <span className="w-full bg-primary-main text-center text-white text-sm">
          گلادیاتور
        </span>
      </div>
    </div>
  );
}
