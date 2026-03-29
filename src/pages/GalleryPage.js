import { useNavigate } from "react-router-dom";

import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";

export default function GalleryPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-fuchsia-100 to-pink-100 flex flex-col items-center justify-center px-6">

      <h1 className="text-4xl font-bold mb-8">Memories ❤️</h1>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">

        {/* pic2 FIRST (swapped) */}
        <div className="w-full h-[320px] overflow-hidden rounded-xl shadow-lg hover:scale-110 transition duration-300">
          <img src={pic2} alt="Memory 1" className="w-full h-full object-cover" />
        </div>

        {/* pic1 SECOND */}
        <div className="w-full h-[320px] overflow-hidden rounded-xl shadow-lg hover:scale-110 transition duration-300">
          <img src={pic1} alt="Memory 2" className="w-full h-full object-cover" />
        </div>

        {/* pic3 THIRD */}
        <div className="w-full h-[320px] overflow-hidden rounded-xl shadow-lg hover:scale-110 transition duration-300">
          <img src={pic3} alt="Memory 3" className="w-full h-full object-cover" />
        </div>

      </div>

      <p className="mt-6 text-lg max-w-xl text-center">
        These moments are special and unforgettable.
      </p>

      {/* 🔥 NEW ENTER BUTTON */}
      <button
  onClick={() => navigate("/final")}
  className="relative mt-8 px-10 py-3 rounded-lg bg-black text-white text-lg overflow-hidden group"
>
  {/* ⭐ Stars INSIDE button */}
  <div className="absolute inset-0">
    {[...Array(25)].map((_, i) => (
      <span
        key={i}
        className="absolute bg-white rounded-full animate-star-btn"
        style={{
          width: Math.random() * 2 + "px",
          height: Math.random() * 2 + "px",
          top: Math.random() * 100 + "%",
          left: Math.random() * 100 + "%",
          animationDuration: Math.random() * 3 + 2 + "s",
        }}
      />
    ))}
  </div>

  <span className="relative z-10 group-hover:tracking-widest transition-all duration-300">
    Enter ✨
  </span>
</button>

    </div>
  );
}