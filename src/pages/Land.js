import { useNavigate } from "react-router-dom";

export default function Land() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-black flex items-center justify-center">

      <button
        onClick={() => navigate("/home")}
        className="w-40 h-40 bg-white/20 backdrop-blur-md text-white text-xl font-semibold 
        rounded-full flex items-center justify-center border border-white/20 
        hover:scale-110 transition duration-300"
      >
        Start
      </button>

    </div>
  );
}