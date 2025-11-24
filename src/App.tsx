import { Docks, Navbar, Welcome } from "@components"
import { useEffect, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import TerminalWindow from "@components/windows/terminal";
import dayjs from "dayjs";
import { HomeIcon, Search, User2 } from "lucide-react";
import { BatteryIcon } from "@components/mobile";
import { useBattery } from "@hooks/use-battery";
gsap.registerPlugin(Draggable);

const getSignalBars = (type) => {
  switch (type) {
    case "4g": return 4;
    case "3g": return 3;
    case "2g": return 2;
    default: return 1;
  }
};

const WifiIcon = ({ bars = 3 }) => {
  return (
    <div className="relative w-[14px] h-[14px]">

      {/* Bar 1 (bottom, always shown if bars >= 1) */}
      {bars >= 1 && (
        <div className="absolute inset-x-0 top-[8px] mx-auto w-[4px] h-[2px] bg-white rounded-full"></div>
      )}

      {/* Bar 2 (middle) */}
      {bars >= 2 && (
        <div className="absolute inset-x-0 top-[5px] mx-auto w-[7px] h-[2px] bg-white rounded-full"></div>
      )}

      {/* Bar 3 (top, full signal) */}
      {bars >= 3 && (
        <div className="absolute inset-x-0 top-[2px] mx-auto w-[10px] h-[2px] bg-white rounded-full"></div>
      )}
    </div>
  );
};


function App() {
  const [bars, setBars] = useState(1);

  useEffect(() => {
    if (!navigator.connection) return;

    console.log(navigator.connection.type) /* TODO: work for this later */

    const update = () => {
      setBars(getSignalBars(navigator.connection.effectiveType));
    };

    update();

    navigator.connection.addEventListener("change", update);
    return () => navigator.connection.removeEventListener("change", update);
  }, []);

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

  const { level, charging } = useBattery();

  return (
    <main>
      <Navbar />
      <Welcome />
      <Docks />

      {/* window screens */}
      <TerminalWindow />

      <div
        className="
          absolute right-10 bottom-10
          w-[380px] max-h-[85vh] h-[85vh]
          rounded-[40px]
          border border-white/20
          bg-white/5
          backdrop-blur-xl
          shadow-[0_8px_30px_rgb(0_0_0/0.25)]
          overflow-hidden
        "
      >

      <div className="flex flex-col h-full min-h-0">

        {/* iPhone Header */}
        <div className="w-full relative select-none">

          {/* Status Bar */}
          <div className="flex items-center justify-between px-5 pt-4 pb-2 text-white/90 text-[13px] font-medium">

            {/* Left side — Time */}
            <time>{dayjs().format('h:mm A')}</time>

            {/* Dynamic Island */}
            <div className="flex justify-center">
              <div className="
                w-[120px] h-[32px]
                bg-black/80
                rounded-full
                backdrop-blur-xl
                shadow-inner shadow-black/30
                border border-white/10
              "></div>
            </div>

            {/* Right side — icons */}
            <div className="flex items-center gap-1.5">
              {/* Signal */}
              <div className="flex items-end gap-[2px]">
                <div className="w-[3px] h-[5px] bg-white rounded-sm opacity-70"></div>
                <div className="w-[3px] h-[7px] bg-white rounded-sm opacity-80"></div>
                <div className="w-[3px] h-[9px] bg-white rounded-sm opacity-90"></div>
                <div className="w-[3px] h-[11px] bg-white rounded-sm"></div>
              </div>

              {/* WiFi */}
              <div className="w-[14px] h-[14px] relative opacity-90">
                <WifiIcon bars={bars} />
              </div>

              {/* Battery */}
              {/* <div className="flex items-center gap-[2px]">
                <div className="w-[18px] h-[10px] border border-white/70 rounded-[3px] p-[1px]">
                  <div className="w-full h-full bg-white rounded-[2px]"></div>
                </div>
                <div className="w-[2px] h-[5px] bg-white/80 rounded-sm"></div>
              </div> */}
              <BatteryIcon level={level} charging={charging} />
            </div>
          </div>
        </div>


        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10">
          <h1 className="text-lg font-semibold text-white">My Portfolio</h1>
        </div>

        {/* Scrollable area: flex-1 + min-h-0 allows overflow */}
        <div className="flex-1 min-h-0 p-6 overflow-y-auto overscroll-contain scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 scrollbar-custom" style={{ WebkitOverflowScrolling: "touch" }}>
          {Array.from({ length: 40 }).map((_, i) => (
            <p key={i} className="text-white/80 mb-3">Item {i + 1} — portfolio content...</p>
          ))}
        </div>

        {/* Footer (optional) */}
        <div className="px-6 py-3 border-t border-white/10" style={{display: 'none'}}>
          <small className="text-white/60">Footer</small>
        </div>

        {/* iPhone Footer */}
        <div className="w-full pb-4 select-none">

          {/* Navigation Bar */}
          <div
            className="
              mx-auto mb-3
              w-[92%] h-[58px]
              rounded-3xl
              bg-white/10 backdrop-blur-xl
              border border-white/10
              shadow-[0_4px_20px_rgba(0,0,0,0.3)]
              flex items-center justify-around
              text-white
            "
          >
            {/* Home Icon */}
            <button className="flex flex-col items-center gap-0.5 text-white/80 hover:text-white transition">
              <div className="w-6 h-6 rounded-xl"><HomeIcon /></div>
              <span className="text-[10px]">Home</span>
            </button>

            {/* Search Icon */}
            <button className="flex flex-col items-center gap-0.5 text-white/80 hover:text-white transition">
              <div className="w-6 h-6 rounded-full"><Search /></div>
              <span className="text-[10px]">Search</span>
            </button>

            {/* Profile Icon */}
            <button className="flex flex-col items-center gap-0.5 text-white/80 hover:text-white transition">
              <div className="w-6 h-6 rounded-full"><User2 /></div>
              <span className="text-[10px]">Profile</span>
            </button>

          </div>

          {/* Home Indicator Bar (the small pill at the bottom) */}
          <div className="flex justify-center">
            <div className="w-28 h-[4px] bg-white/50 rounded-full"></div>
          </div>
        </div>

      </div>
      </div>

    </main>
  )
}

export default App
