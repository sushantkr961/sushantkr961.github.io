"use client";

export function Wallpaper() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <img
        src="/wallpaper.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
    </div>
  );
}
