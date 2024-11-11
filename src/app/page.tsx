import { BottomNavigation } from "@/components/BottomNavigation";
import { Discography } from "./(sections)/Discography";
import { Events } from "./(sections)/Events";
import { MainPage } from "./(sections)/MainPage";
import { Videography } from "./(sections)/Videography";
import { WhoAmI } from "./(sections)/WhoAmI";

export default function Home() {
  return (
    <main>
      <div className="h-screen overflow-x-hidden overflow-y-hidden flex">
        <WhoAmI />
        <Videography />
        <MainPage />
        <Discography />
        <Events />
      </div>
      <BottomNavigation />
    </main>
  );
}
