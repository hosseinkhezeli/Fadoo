"use client";
import Image from "next/image";
import ImgBrushes from "@/assets/images/Brushes1.png";
import SvgBrushLine from "@/assets/images/BrushLine.svg";
import SvgPortraitDoodle from "@/assets/images/PortrateDoodle.svg";
export function Portrait() {
  return (
    <>
      <div className="relative w-screen">
        <Image
          src={ImgBrushes}
          width={446}
          height={301}
          alt="brush mark"
          className=" select-none pointer-events-none opacity-80 absolute -left-48 -top-32 "
          style={{ imageRendering: "crisp-edges" }}
        />
        <Image
          src={SvgPortraitDoodle}
          width={160}
          height={286}
          alt="illustration of Sina fadavi"
          className=" select-none pointer-events-none opacity-80 absolute left-12 -top-20 "
          style={{ imageRendering: "crisp-edges" }}
        />
      </div>
      <Image
        src={SvgBrushLine}
        width={623}
        height={191}
        alt="illustration of a line"
        className=" select-none pointer-events-none opacity-80 absolute -left-32 bottom-96 "
        style={{ imageRendering: "crisp-edges" }}
      />
    </>
  );
}
