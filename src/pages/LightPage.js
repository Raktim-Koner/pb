import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lightpic from "../components/Lightpic";

export default function LightPage() {
  const [on, setOn] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`h-screen flex flex-col justify-center items-center transition duration-500 
      ${on ? "bg-gradient-to-br from-pink-300 to-yellow-200" : "bg-black text-white"}`}
    >
      {/* Replace text with component */}
      <div className="mb-6">
        {on ? <Lightpic /> : <h1 className="text-3xl">Click the on</h1>}
      </div>

      <button
        onClick={() => setOn(!on)}
        className="px-6 py-3 bg-pink-500 text-white rounded"
      >
        Turn {on ? "OFF" : "ON"}
      </button>

      {on && (
        <button
          onClick={() => navigate("/gallery")}
          className="mt-6  w-[115px] h-[50px] bg-black text-blue-400 rounded text-4xl"
        >
          ➜
        </button>
      )}
    </div>
  );
}