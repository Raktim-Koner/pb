import { motion } from "framer-motion";
import Balloons from "../components/Balloons";

export default function FinalPage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen bg-black text-white flex flex-col justify-center items-center relative overflow-hidden"
    >
      <Balloons />

      <h1 className="text-6xl font-bold z-10">
        Happy Birthday
      </h1>

      <h2 className="text-4xl text-red-400 mt-4 z-10">
        Payal Roy
      </h2>

      <p className="mt-6 text-lg max-w-xl text-center z-10">
        With you, even the simplest moments turned into the best memories.
      </p>
    </motion.div>
  );
}