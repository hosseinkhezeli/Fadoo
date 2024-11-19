import Image from "next/image";

import { PortraitInSun } from "./components/PortraitInSun";
import ImgBrush from "@/assets/images/Brushes2.png";
import ImgBirds from "@/assets/images/Birds.png";
import ImgBrush2 from "@/assets/images/Brushes3.png";
import { Container } from "@/components/Container";
export function WhoAmI() {
  return (
    <Container id={"who-am-i"}>
      <div className="flex h-full  w-full max-w-[1024px] items-start gap-14">
        <div className="basis-1/2 h-3/4 flex items-center justify-center">
          <PortraitInSun />
        </div>
        <div className="basis-1/2 flex flex-col items-end gap-14">
          <Image
            src={ImgBirds}
            width={387}
            height={259}
            alt="illustration of birds"
            className="movable mix-blend-darken"
          />
          <div className="movable  relative">
            <Image
              src={ImgBrush}
              width={633}
              height={450}
              alt="brush mark"
              className="scale-125"
            />
            <p className="absolute text-sm p-6  -top-6 left-0 right-0 leading-loose">
              {ABOUT_ME_L1}.
              <br />
              {ABOUT_ME_L2}.
              <br />
              {ABOUT_ME_L3}.
              <br />
              {ABOUT_ME_L4}.
              <br />
              {ABOUT_ME_L4}.
              <br />
              {ABOUT_ME_L5}.
              <br />
              {ABOUT_ME_L6}.
            </p>
          </div>
          <Image
            src={ImgBrush2}
            width={74}
            height={61}
            alt="brush mark"
            className="movable"
          />
        </div>
      </div>
    </Container>
  );
}

const ABOUT_ME_L1 = "من سینام!";
const ABOUT_ME_L2 =
  " یه آرتیست مستقل که توی ژانر های آر ان بی  و پاپ فعالیت میکنه";
const ABOUT_ME_L3 =
  "آرتیست بودن رویای نوجوونی منه و از همون سن سعی کردم احساسات خودم رو از طریق موسیقی با مخاطبم در میون بذارم";
const ABOUT_ME_L4 =
  "توی همه ی این سال ها ساز زدم,آهنگ نوشتم و خوندم و احساس میکنم بالاخره موقع این رسیده که این آهنگ ها رو باشما هم به اشتراک بذارم";
const ABOUT_ME_L5 =
  "امیدوارم بتونم احساساتم رو اونطور که شایسته است به گوش شما برسونم";
const ABOUT_ME_L6 =
  "اگر گوش کردید و دوست داشتید یه حمایت کوچیک میتونه تاثیر بزرگی روی ادامه ی این راه داشته باشه";
