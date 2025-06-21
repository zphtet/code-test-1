"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface HumanProps {
  position?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  rotation?: number;
  shake?: boolean;
  shakeDirection?: "horizontal" | "vertical" | "both";
  shakeSpeed?: number;
}

const Human = ({ 
  position = {}, 
  rotation = 0, 
  shake = false, 
  shakeDirection = "both",
  shakeSpeed = 2 
}: HumanProps) => {
  const getShakeAnimation = () => {
    if (!shake) return {};
    
    const shakeValue = 5;
    const xShake = shakeDirection === "horizontal" || shakeDirection === "both" 
      ? [-shakeValue, shakeValue, -shakeValue, shakeValue, -shakeValue] 
      : 0;
    const yShake = shakeDirection === "vertical" || shakeDirection === "both" 
      ? [-shakeValue, shakeValue, -shakeValue, shakeValue, -shakeValue] 
      : 0;
    
    return { x: xShake, y: yShake };
  };

  return (
    <motion.div
      className="absolute"
      style={{
        top: position.top,
        left: position.left,
        right: position.right,
        bottom: position.bottom,
        transform: `rotate(${rotation}deg)`,
      }}
      animate={getShakeAnimation()}
      transition={{
        duration: shakeSpeed,
        repeat: shake ? Infinity : 0,
        ease: "easeInOut",
      }}
    >
      <Image alt="Human" src={"/images/human.webp"} width={100} height={100} />
    </motion.div>
  );
};

export default Human;
