"use client";
import { motion, MotionValue } from "framer-motion";

interface HumanProps {
  position?: {
    top?: string | MotionValue<string>;
    left?: string | MotionValue<string>;
    right?: string;
    bottom?: string;
  };
  rotation?: number | MotionValue<number>;
  shake?: boolean;
  shakeDirection?: "horizontal" | "vertical" | "both";
  shakeSpeed?: number;
  size?: {
    width?: number | MotionValue<number>;
    height?: number | MotionValue<number>;
  };
}

const Human = ({
  position = {},
  rotation = 0,
  shake = false,
  shakeDirection = "both",
  shakeSpeed = 2,
  size = { width: 100, height: 100 },
}: HumanProps) => {
  const getShakeAnimation = () => {
    if (!shake) return {};

    const shakeValue = 5;
    const xShake =
      shakeDirection === "horizontal" || shakeDirection === "both"
        ? [-shakeValue, shakeValue, -shakeValue, shakeValue, -shakeValue]
        : 0;
    const yShake =
      shakeDirection === "vertical" || shakeDirection === "both"
        ? [-shakeValue, shakeValue, -shakeValue, shakeValue, -shakeValue]
        : 0;

    return { x: xShake, y: yShake };
  };

  return (
    <motion.div
      className="absolute "
      style={{
        top: position.top,
        left: position.left,
        right: position.right,
        bottom: position.bottom,
        rotate: rotation,
      }}
      animate={getShakeAnimation()}
      transition={{
        duration: shakeSpeed,
        repeat: shake ? Infinity : 0,
        ease: "easeInOut",
      }}
    >
      <motion.img
        alt="Human"
        src="/images/human.webp"
        style={{
          width: size.width,
          height: size.height,
          objectFit: "contain",
        }}
      />
    </motion.div>
  );
};

export default Human;
