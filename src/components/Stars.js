import { useState } from "react";

export default function Stars() {
  const [stars] = useState(
    [...Array(120)].map(() => ({
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
    }))
  );

  return (
    <div className="absolute w-full h-full overflow-hidden">
      {stars.map((star, i) => (
        <div
          key={i}
          className="bg-white rounded-full absolute animate-star"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            top: star.startY + "%",
            left: star.startX + "%",
            animationDuration: star.duration + "s",
            animationDelay: star.delay + "s",
          }}
        />
      ))}
    </div>
  );
}