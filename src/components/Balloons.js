import { useState } from "react";

export default function Balloons() {
  const colors = ["red", "yellow", "blue"];

  const [balloons] = useState(
    [...Array(50)].map((_, i) => ({
      startX: Math.random() * 100,
      size: Math.random() * 30 + 30,
      duration: Math.random() * 6 + 8,
      delay: Math.random() * 5,
      color: colors[i % colors.length], // rotate colors
    }))
  );

  return (
    <div className="absolute w-full h-full overflow-hidden">
      {balloons.map((b, i) => (
        <div
          key={i}
          className="absolute animate-balloon"
          style={{
            left: b.startX + "%",
            bottom: "-120px",
            animationDuration: b.duration + "s",
            animationDelay: b.delay + "s",
          }}
        >
          {/* Balloon */}
          <div
            style={{
              width: b.size + "px",
              height: b.size * 1.2 + "px",
              backgroundColor: b.color,
              borderRadius: "50% 50% 45% 45%",
            }}
          />

          {/* String */}
          <div
            style={{
              width: "2px",
              height: b.size + "px",
              backgroundColor: "white",
              margin: "0 auto",
            }}
          />
        </div>
      ))}
    </div>
  );
}