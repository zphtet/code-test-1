"use client";

import { useRef } from "react";
import Human from "./human";
import Rectangle from "./rectangle";
import WavyText from "./wavy-text";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const lines = [
  "ブロックチェーンネットワークを使い",
  "世界中の動物好きな人たちにFluffyHUGSの",
  "かわいい動物たちのNFTを届けていきます",
];

const lines2 = [
  "ＦｌｕｆｆｙＨＵＧＳは、",
  "可愛い動物達を描いた３，３３３体の",
  "ジェネラティブＮＦＴで",
  "生成され、世界中にコミュニティの",
  "輪を広げてまいります。",
];

const lines3 = [
  "大好きな動物と一緒に、あなたらしさを",
  "表現するために、ＦｌｕｆｆｙＨＵＧＳ",
  "プロジェクトを開始しました。",
];
const SlideOne = () => {
  const targetRef = useRef(null);
  const firstSectionRef = useRef(null);
  const { scrollYProgress: mainScrollProgress } = useScroll({
    target: targetRef,
  });
  const { scrollYProgress: firstSectionProgress } = useScroll({
    target: firstSectionRef,
    offset: ["start end", "end start"],
  });

  const humanY = useTransform(firstSectionProgress, [0, 1], ["20%", "0%"]);

  const posY = useTransform(mainScrollProgress, [1, 0.5], ["30%", "-60%"]);
  const posX = useTransform(mainScrollProgress, [1, 0.5], ["40%", "70%"]);
  const rotation = useTransform(mainScrollProgress, [1, 0.5], [0, -90]);
  const size = useTransform(mainScrollProgress, [1, 0.5], [300, 140]);
  //   const opacity = useTransform(scrollYProgress, [1, 0.5], [0, 1]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 1 });

  return (
    <div className=" bg-amber-50">
      <div
        ref={firstSectionRef}
        className="h-screen w-screen bg-amber-100 relative overflow-hidden"
      >
        {/* <FadeIn> */}
        <div className="flex flex-col absolute top-30 z-20 left-10 sm:top-auto sm:bottom-15 sm:left-10 space-y-5 justify-center">
          {lines3.map((line, index) => (
            <WavyText
              key={index}
              text={line}
              letterSpacing="0.1em"
              className="text-xl sm:text-2xl text-fluffy font-bold tracking-wider w-full "
            />
          ))}
        </div>
        {/* </FadeIn> */}
        {/* Right side rectangles */}
        <div className="absolute right-0 w-[50%] h-full">
          <div className="absolute right-[45%] top-[25%]">
            <Rectangle bgColor="#FF6B6B" direction="horizontal" />
          </div>
          <div className="absolute right-[30%] top-[65%]">
            <Rectangle bgColor="#4ECDC4" direction="vertical" />
          </div>
          <div className="absolute right-[20%] top-[40%]">
            <Rectangle bgColor="#45B7D1" direction="horizontal" />
          </div>
          <div className="absolute right-[10%] top-[80%]">
            <Rectangle bgColor="#8B5CF6" direction="vertical" />
          </div>
          <div className="absolute right-[5%] top-[15%]">
            <Rectangle bgColor="#FFA500" direction="horizontal" />
          </div>
        </div>
        <motion.div
          style={{
            y: humanY,
          }}
          className="absolute left-1/2 -translate-x-1/2 bottom-10 w-[300px] h-[300px]"
        >
          <Human size={{ width: 300, height: 300 }} />
        </motion.div>
      </div>
      <div className="h-screen overflow-hidden  w-screen bg-amber-100 flex items-center justify-center">
        <div className="relative w-[300px] sm:w-[450px] md:w-[600px] h-[250px] sm:h-[300px] md:h-[400px]">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Rectangle 1 - Top */}
            <motion.div className="absolute -top-16 sm:-top-24 md:-top-32 left-1/2 -translate-x-1/2">
              <Rectangle bgColor="#FF6B6B" direction="horizontal" />
            </motion.div>
            {/* Rectangle 2 - Top Right */}
            <motion.div className="absolute top-[5%] sm:top-[2%] right-[5%] sm:right-[2%]">
              <Rectangle bgColor="#4ECDC4" direction="vertical" />
            </motion.div>
            {/* Rectangle 3 - Right Top */}
            <motion.div className="absolute top-[25%] -right-16 sm:-right-24 md:-right-32">
              <Rectangle bgColor="#45B7D1" direction="horizontal" />
            </motion.div>
            {/* Rectangle 4 - Right Bottom */}
            <motion.div className="absolute top-[75%] -right-16 sm:-right-24 md:-right-32">
              <Rectangle bgColor="#8B5CF6" direction="vertical" />
            </motion.div>
            {/* Rectangle 5 - Bottom Right */}
            <motion.div className="absolute bottom-[5%] sm:bottom-[2%] right-[5%] sm:right-[2%]">
              <Rectangle bgColor="#FFA500" direction="horizontal" />
            </motion.div>
            {/* Rectangle 6 - Bottom */}
            <motion.div className="absolute -bottom-16 sm:-bottom-24 md:-bottom-32 left-1/2 -translate-x-1/2">
              <Rectangle bgColor="#FF69B4" direction="vertical" />
            </motion.div>
            {/* Rectangle 7 - Bottom Left */}
            <motion.div className="absolute bottom-[5%] sm:bottom-[2%] left-[5%] sm:left-[2%]">
              <Rectangle bgColor="#32CD32" direction="horizontal" />
            </motion.div>
            {/* Rectangle 8 - Left Bottom */}
            <motion.div className="absolute top-[75%] -left-16 sm:-left-24 md:-left-32">
              <Rectangle bgColor="#9370DB" direction="vertical" />
            </motion.div>
            {/* Rectangle 9 - Left Top */}
            <motion.div className="absolute top-[25%] -left-16 sm:-left-24 md:-left-32">
              <Rectangle bgColor="#20B2AA" direction="horizontal" />
            </motion.div>
            {/* Rectangle 10 - Top Left */}
            <motion.div className="absolute top-[5%] sm:top-[2%] left-[5%] sm:left-[2%]">
              <Rectangle bgColor="#FF7F50" direction="vertical" />
            </motion.div>
          </motion.div>
          <div className="flex flex-col items-center px-5 justify-center space-y-3 sm:space-y-5 relative z-10 h-full">
            {lines2.map((line, index) => (
              <WavyText
                key={index}
                text={line}
                letterSpacing="0.1em"
                className="text-xl sm:text-2xl text-fluffy font-bold tracking-wider w-full text-center"
              />
            ))}
          </div>
        </div>
      </div>
      <motion.div className="bg-black relative h-screen w-screen overflow-hidden">
        <div className="absolute inset-0">
          {/* Row 1 */}
          {[...Array(20)].map((_, index) => (
            <motion.div
              key={`row1-${index}`}
              className="absolute"
              style={{
                top: `${10 + index * 2}%`,
                left: `-${(index * 20) % 100}%`,
              }}
              animate={{ x: ["0%", "100vw"] }}
              transition={{
                duration: 8 + (index % 4),
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.5,
              }}
            >
              <Rectangle
                bgColor={
                  [
                    "#FF6B6B",
                    "#4ECDC4",
                    "#45B7D1",
                    "#8B5CF6",
                    "#FFA500",
                    "#FF69B4",
                    "#32CD32",
                    "#9370DB",
                    "#20B2AA",
                    "#FF7F50",
                  ][index % 10]
                }
                direction={index % 2 === 0 ? "horizontal" : "vertical"}
              />
            </motion.div>
          ))}

          {/* Row 2 - Opposite direction */}
          {[...Array(20)].map((_, index) => (
            <motion.div
              key={`row2-${index}`}
              className="absolute"
              style={{
                top: `${60 + index * 2}%`,
                right: `-${(index * 20) % 100}%`,
              }}
              animate={{ x: ["0%", "100vw"] }}
              transition={{
                duration: 10 + (index % 5),
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.3,
              }}
            >
              <Rectangle
                bgColor={
                  [
                    "#FF6B6B",
                    "#4ECDC4",
                    "#45B7D1",
                    "#8B5CF6",
                    "#FFA500",
                    "#FF69B4",
                    "#32CD32",
                    "#9370DB",
                    "#20B2AA",
                    "#FF7F50",
                  ][index % 10]
                }
                direction={index % 2 === 0 ? "vertical" : "horizontal"}
              />
            </motion.div>
          ))}

          {/* Middle row */}
          {[...Array(15)].map((_, index) => (
            <motion.div
              key={`middle-${index}`}
              className="absolute"
              style={{
                top: `${35 + index * 2}%`,
                left: `-${(index * 25) % 100}%`,
              }}
              animate={{ x: ["0%", "100vw"] }}
              transition={{
                duration: 12 + (index % 3),
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.4,
              }}
            >
              <Rectangle
                bgColor={
                  [
                    "#FF6B6B",
                    "#4ECDC4",
                    "#45B7D1",
                    "#8B5CF6",
                    "#FFA500",
                    "#FF69B4",
                    "#32CD32",
                    "#9370DB",
                    "#20B2AA",
                    "#FF7F50",
                  ][index % 10]
                }
                direction={index % 2 === 0 ? "horizontal" : "vertical"}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div ref={targetRef} className="h-[200vh] relative">
        <motion.div className="h-screen w-screen snap-start bg-blue-700 relative">
          <div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute top-30 left-16">
                <Rectangle bgColor="#FF6B6B" direction="horizontal" />
              </div>
              <div className="absolute top-32 right-24">
                <Rectangle bgColor="#4ECDC4" direction="vertical" />
              </div>
              <div className="absolute bottom-28 left-1/3">
                <Rectangle bgColor="#45B7D1" direction="horizontal" />
              </div>
              <div className="absolute  bottom-10 right-1/4 ">
                <Rectangle bgColor="#8B5CF6" direction="vertical" />
              </div>
            </div>

            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute flex flex-col items-center justify-center space-y-5 px-5 w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[80vw] top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              {lines.map((line, index) => (
                <WavyText
                  key={index}
                  text={line}
                  letterSpacing="0.1em"
                  className="text-xl sm:text-2xl text-white font-bold tracking-wider w-full text-center"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          id="first"
          className="relative snap-start w-screen h-screen"
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default SlideOne;
