const BatteryIcon = ({ level, charging }) => {
  const width = Math.round(level * 100); // convert to percentage

  return (
    <div className="flex items-center gap-[2px]">
      <div className="w-[20px] h-[10px] border border-white/70 rounded-[3px] p-[1px]">
        <div
          className="h-full bg-white rounded-[2px] transition-all duration-300"
          style={{ width: `${width}%` }}
        ></div>
      </div>

      <div className="w-[2px] h-[5px] bg-white/80 rounded-sm"></div>

      {charging && (
        <span className="text-[8px] text-green-300 ml-1">⚡</span>
      )}
    </div>
  );
};


export default BatteryIcon;