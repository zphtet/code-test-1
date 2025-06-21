"use client";

import { motion } from "framer-motion";

interface WavyTextProps {
  text: string;
  className?: string;
}

export default function WavyText({ text, className = "" }: WavyTextProps) {
  const characters = text.split("");

  return (
    <div className={`flex overflow-hidden ${className}`}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: 0 }}
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.1, // Stagger effect
          }}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}
