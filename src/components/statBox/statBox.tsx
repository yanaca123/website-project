"use client";
import { motion } from "framer-motion";

interface StatBoxProps {
  number: string;
  label: string;
}

const StatBox: React.FC<StatBoxProps> = ({ number, label }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white shadow-xl rounded-2xl p-6 text-center w-48 border-l-4 border-[#009688]"
    >
      <h2 className="text-4xl font-bold text-[#009688]">{number}</h2>
      <p className="text-gray-600 text-lg font-medium mt-2">{label}</p>
    </motion.div>
  );
};

export default StatBox;
