import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";

export default function LightPeak() {
  return (
    <div className="w-full flex items-center justify-center gap-16 px-10">
      
      {/* Left Image */}
      <img
        src={pic4}
        alt="Left"
        className="w-[450px] h-[500px] object-cover rounded-xl shadow-lg hover:scale-105 transition duration-300"
      />

      {/* Center Text */}
      <h1 className="text-3xl font-bold text-center min-w-[150px]">
        Surprise! 🎉
      </h1>

      {/* Right Image */}
      <img
        src={pic5}
        alt="Right"
        className="w-[450px] h-[500px] object-cover rounded-xl shadow-lg hover:scale-105 transition duration-300"
      />
    </div>
  );
}