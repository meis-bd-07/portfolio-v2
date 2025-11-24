import { useEffect, useState } from "react";

export function useBattery() {
  const [battery, setBattery] = useState({
    supported: true,
    level: 1,
    charging: false,
  });

  useEffect(() => {
    let batteryRef;

    async function load() {
      if (!navigator.getBattery) {
        setBattery((b) => ({ ...b, supported: false }));
        return;
      }

      batteryRef = await navigator.getBattery();

      const update = () => {
        setBattery({
          supported: true,
          level: batteryRef.level,      // 0 → 1
          charging: batteryRef.charging,
        });
      };

      update();

      batteryRef.addEventListener("levelchange", update);
      batteryRef.addEventListener("chargingchange", update);
    }

    load();

    return () => {
      if (!batteryRef) return;
      batteryRef.removeEventListener("levelchange", update);
      batteryRef.removeEventListener("chargingchange", update);
    };
  }, []);

  return battery;
}
