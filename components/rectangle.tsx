"use client";

import { motion } from "framer-motion";

interface RectangleProps {
  size?: number;
  bgColor?: string;
  direction?: "horizontal" | "vertical";
}

const Rectangle = ({
  size = 80,
  bgColor = "#3B82F6",
  direction = "horizontal",
}: RectangleProps) => {
  const shakeAnimation = {
    x: direction === "horizontal" ? [-10, 10, -10, 10, -10] : 0,
    y: direction === "vertical" ? [-10, 10, -10, 10, -10] : 0,
  };

  return (
    <motion.div
      style={{
        width: size,
        height: size,
        backgroundColor: bgColor,
      }}
      animate={shakeAnimation}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="rounded-md w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
    />
  );
};

export default Rectangle;
