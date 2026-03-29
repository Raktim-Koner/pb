import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import pic6 from "../assets/pic6.jpeg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen relative bg-gradient-to-br from-pink-200 to-purple-200 overflow-hidden">

      {/* 🎈 Background */}
      <div className="absolute w-full h-full pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-400 text-xl animate-pulse"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
          >
            🎈
          </div>
        ))}
      </div>

      {/* 🔥 Happy (Top Left - Bigger + Lower) */}
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute top-16 left-12 text-7xl font-extrabold text-black rotate-[-5deg]"
      >
        Happy
      </motion.h1>

      {/* 🎂 Birth (Perfectly Centered Under Image) */}
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-36 left-[700px] -translate-x-1/2 text-6xl font-bold text-pink-600"
      >
        Birth
      </motion.h1>

      {/* 🎉 Day (Bottom Right - Bigger + Higher) */}
      <motion.h1
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-10 right-12 text-7xl font-extrabold text-purple-700 rotate-[5deg]"
      >
        Day
      </motion.h1>

      {/* 🖼️ Image (Center) */}
      <div className="flex justify-center items-center h-full">
        <motion.img
          src={pic6}
          alt="birthday"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-72 h-72 object-cover rounded-full border-4 border-white shadow-xl z-10"
        />
      </div>

      {/* 🎁 Button (Center Bottom) */}
      <div className="absolute bottom-14 w-full flex justify-center">
        <motion.button
          onClick={() => navigate("/light")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-8 py-3 bg-black text-white text-lg rounded-lg shadow-lg z-10"
        >
          Click Here 🎁
        </motion.button>
      </div>

    </div>
  );
}