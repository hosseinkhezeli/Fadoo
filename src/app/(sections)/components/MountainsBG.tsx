import ImgMountains from "@/assets/images/mountains.jpg";
import Image from "next/image";
export function MountainsBG() {
  return (
    <div className="absolute">
      <div className="w-screen h-screen py-16 flex items-start justify-center relative">
        <div className="movable  w-1/2 relative aspect-[1.8] max-w-[794px] max-h-[427px] bg-gradient-to-t from-[#00000000] to-black opacity-10 rounded-tl-[9999px] rounded-tr-[9999px]" />
        <Image
          src={ImgMountains}
          alt="illustration of mountains"
          width={1919}
          height={590}
          className="movable  mix-blend-multiply absolute bottom-0 -z-10 opacity-20"
        />
      </div>
    </div>
  );
}
