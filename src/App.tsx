import { Docks, Navbar, Welcome } from "@components"
import { useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import TerminalWindow from "@components/windows/terminal";
gsap.registerPlugin(Draggable);

function App() {

  /* TODO: will make it smooth with animation and move to hook */
  useEffect(() => {
    const images = [
      "/images/wallpaper1.png",
      "/wallpapers/wallpaper-2.jpg",
      "/wallpapers/wallpaper-3.png",
    ];

    let index = 0;
    const rotate = () => {
      document.body.style.backgroundImage = `url(${images[index]})`;
      index = (index + 1) % images.length;
    };
    rotate();
    const interval = setInterval(rotate, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <Navbar />
      <Welcome />
      <Docks />

      {/* window screens */}
      <TerminalWindow />
    </main>
  )
}

export default App
