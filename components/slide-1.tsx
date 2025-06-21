"use client";

import Human from "./human";
import Rectangle from "./rectangle";
import WavyText from "./wavy-text";
import { motion, useScroll, useTransform } from "framer-motion";

const lines = [
  "ブロックチェーンネットワークを使い",
  "世界中の動物好きな人たちにFluffyHUGSの",
  "かわいい動物たちのNFTを届けていきます",
];
const SlideOne = () => {
  const { scrollYProgress } = useScroll();

  const posY = useTransform(scrollYProgress, [1, 0.5], ["30%", "-60%"]);
  const posX = useTransform(scrollYProgress, [1, 0.5], ["40%", "70%"]);
  const rotation = useTransform(scrollYProgress, [1, 0.5], [0, -90]);
  const size = useTransform(scrollYProgress, [1, 0.5], [300, 140]);
//   const opacity = useTransform(scrollYProgress, [1, 0.5], [0, 1]);
  return (
    <div className="w-screen min-h-screen bg-amber-100">
      <div className="h-screen w-screen bg-green-200 relative">
        <div className="">
          <motion.div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {lines.map((line, index) => (
              <WavyText
                key={index}
                text={line}
                className="text-xl sm:text-2xl  font-bold tracking-wider  max-w-xl mx-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
      <div id="first" className="relative w-screen h-screen">
        <Human
          position={{ top: posY, left: posX }}
          size={{
            width: size,
            height: size,
          }}
          shake
          rotation={rotation}
          shakeSpeed={5}
        />
        <div className="flex items-center justify-center h-full ">
          <div className="absolute top-40 left-20">
            <Rectangle bgColor="#EF4444" direction="horizontal" />
          </div>
          <div className="absolute top-40 right-32">
            <Rectangle bgColor="#3B82F6" direction="vertical" />
          </div>
          <div className="absolute bottom-40 left-32 hidden sm:block">
            <Rectangle bgColor="#10B981" direction="horizontal" />
          </div>
          <div className="absolute bottom-20 right-20">
            <Rectangle bgColor="#F59E0B" direction="vertical" />
          </div>
          <div className="absolute top-1/2 left-1/4">
            <Rectangle bgColor="#8B5CF6" direction="horizontal" />
          </div>
          <div className="absolute top-1/3 right-1/4 hidden sm:block">
            <Rectangle bgColor="#EC4899" direction="vertical" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideOne;
