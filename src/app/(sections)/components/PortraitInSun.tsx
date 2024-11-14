import Image from "next/image";
import ImgSun from "@/assets/images/Sun.svg";
import ImgLogo from "@/assets/images/Logo.png";
import SvgBrushLine from "@/assets/images/BrushLine.svg";
import SvgPortraitDoodle from "@/assets/images/PortrateDoodle.svg";
export function PortraitInSun() {
  return (
    <>
      <div className="relative">
        <Image
          src={ImgSun}
          width={293}
          height={293}
          quality={100}
          priority={true}
          alt="illustration of sun"
          className="mix-blend-multiply select-none pointer-events-none saturate-150 hue-rotate-[5deg]"
        />

        <Image
          src={ImgLogo}
          width={315}
          height={143}
          alt="Sina fadavi logo type"
          className="absolute -left-1/4 top-0 w-full select-none pointer-events-none"
        />
        <Image
          src={SvgPortraitDoodle}
          width={140}
          height={250}
          alt="illustration of Sina fadavi"
          className=" select-none pointer-events-none opacity-80 h-full w-1/2 -scale-x-100  absolute right-1/4 -bottom-[30%]"
          style={{ imageRendering: "crisp-edges" }}
        />
        <Image
          src={SvgBrushLine}
          width={483}
          height={146}
          alt="illustration of a line"
          className=" select-none pointer-events-none opacity-80 -scale-x-[115%] absolute top-1/2 -right-[80%] "
          style={{ imageRendering: "crisp-edges" }}
        />
      </div>
    </>
  );
}
