'use client'
import { Discography } from "./(sections)/Discography";
import { Events } from "./(sections)/Events";
import { MainPage } from "./(sections)/MainPage";
import { Videography } from "./(sections)/Videography";
import { WhoAmI } from "./(sections)/WhoAmI";


export default function Home() {

  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
};
  return (
   <main >
        <div className="h-screen overflow-x-hidden overflow-y-hidden flex">
    <WhoAmI/>
    <Videography/>
    <MainPage/>
    <Discography/>
    <Events/>
    </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-around shadow-lg">
      <button onClick={() => scrollToComponent('who-am-i')} className="text-blue-500">1</button>
      <button onClick={() => scrollToComponent('videography')} className="text-blue-500">2</button>
      <button onClick={() => scrollToComponent('main-page')} className="text-blue-500">3</button>
      <button onClick={() => scrollToComponent('discography')} className="text-blue-500">4</button>
      <button onClick={() => scrollToComponent('events')} className="text-blue-500">5</button>
  </div>
   </main>
  );
}
