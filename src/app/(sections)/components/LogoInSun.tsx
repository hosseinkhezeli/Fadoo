import Image from "next/image";
import ImgSun from "@/assets/images/Sun.svg";
import ImgLogo from "@/assets/images/Logo.png";

export function LogoInSun() {
  return (
    <div className="relative">
      <Image
        src={ImgSun}
        width={293}
        height={293}
        quality={100}
        priority={true}
        alt="illustration of sun"
        className="mix-blend-multiply select-none pointer-events-none saturate-150 hue-rotate-[5deg] "
        style={{ imageRendering: "crisp-edges" }}
      />
      <Image
        src={ImgLogo}
        width={315}
        height={143}
        alt="Sina fadavi logo type"
        className="absolute left-0 right-0 bottom-[40%] select-none pointer-events-none"
      />
    </div>
  );
}
