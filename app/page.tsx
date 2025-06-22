"use client";

import { useRef } from "react";
import Human from "@/components/human";
import Rectangle from "@/components/rectangle";
import WavyText from "@/components/wavy-text";

import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useLogoStore } from "@/zustand/store";
// import dynamic from "next/dynamic";

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

// Client-side only component for media query

// Main component that receives isSmallDevice as a prop
const HomePage = () => {
  const targetRef = useRef(null);
  const firstSectionRef = useRef(null);
  const { scrollYProgress: mainScrollProgress } = useScroll({
    target: targetRef,
  });
  const { scrollYProgress: firstSectionProgress } = useScroll({
    target: firstSectionRef,
    offset: ["end end", "start start"],
  });

  const humanY = useTransform(firstSectionProgress, [0, 1], ["0%", "-200%"]);
  const humanRotate = useTransform(firstSectionProgress, [0, 1], [0, -90]);
  const humanSize = useTransform(firstSectionProgress, [0, 1], [200, 400]);

  const { showLogo, setLogoState } = useLogoStore();

  const posY = useTransform(mainScrollProgress, [1, 0.5], ["30%", "-60%"]);
  const posX = useTransform(mainScrollProgress, [1, 0.5], ["40%", "70%"]);
  const rotation = useTransform(mainScrollProgress, [1, 0.5], [0, -90]);
  const size = useTransform(mainScrollProgress, [1, 0.5], [300, 140]);
  //   const opacity = useTransform(scrollYProgress, [1, 0.5], [0, 1]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 1 });

  useMotionValueEvent(firstSectionProgress, "change", (latest) => {
    // console.log("Scroll progress as number:", latest);

    if (latest > 0.5) {
      if (showLogo) {
        setLogoState(false);
      }
    } else {
      if (!showLogo) {
        // console.log("showLogo", showLogo);
        setLogoState(true);
      }
    }
  });

  return (
    <div className=" bg-amber-50">
      <div ref={firstSectionRef}>
        <motion.div className="h-screen w-screen bg-amber-100">
          <div className="flex items-center justify-center w-full h-full">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 205 40"
              xmlSpace="preserve"
              fill="#203D99"
              className="w-[300px] sm:w-[400px] md:w-[500px]"
            >
              <g>
                <path d="M13.5,3H3.8c-1.2,0-2.2,1-2.2,2.2v24.1c0,1.2,1,2.2,2.2,2.2h1.6c1.2,0,2.2-1,2.2-2.2V18.9h5.8c1.2,0,2.2-1,2.2-2.2v-1.4 c0-1.2-1-2.2-2.2-2.2H7.5V8.7h6c1.2,0,2.2-1,2.2-2.2V5.1C15.7,3.9,14.7,3,13.5,3z"></path>
                <path d="M21.4,0.7H20c-1.2,0-2.2,1-2.2,2.2v26.3c0,1.2,1,2.2,2.2,2.2h1.4c1.2,0,2.2-1,2.2-2.2V2.9C23.6,1.7,22.6,0.7,21.4,0.7z"></path>
                <path d="M40.1,12.3h-1.4c-1.2,0-2.2,1-2.2,2.2v8.9c0,0.6,0,1.8-0.4,2.3c-0.2,0.3-0.7,0.4-1.3,0.4c-0.6,0-1-0.1-1.3-0.4 c-0.4-0.5-0.4-1.7-0.4-2.3v-8.9c0-1.2-1-2.2-2.2-2.2h-1.4c-1.2,0-2.2,1-2.2,2.2v9.3c0,1.6,0.2,3.6,1.6,5.4c1.8,2.3,4.5,2.6,5.9,2.6 c1.4,0,4.1-0.3,5.9-2.6c1.4-1.8,1.6-3.8,1.6-5.4v-9.3C42.3,13.3,41.3,12.3,40.1,12.3z"></path>
                <path d="M54.7,0.6L54.7,0.6c-0.4-0.1-1-0.3-1.9-0.3c-1.4,0-6,0.5-6,7.2v4.9c-1,0.2-1.7,1.1-1.7,2.1v1.4c0,1,0.7,1.9,1.7,2.1v11.3 c0,1.2,1,2.2,2.2,2.2h1.4c1.2,0,2.2-1,2.2-2.2V18h1.5c1.2,0,2.2-1,2.2-2.2v-1.4c0-1.2-1-2.2-2.2-2.2h-1.5V7.8 c0-1.1,0.2-1.6,0.2-1.8c0,0,0.1,0,0.2,0c0.3,0,0.3,0,0.3,0c0.7,0.3,1.4,0.2,2-0.2c0.6-0.4,0.9-1.1,0.9-1.8V2.7 C56.2,1.7,55.6,0.9,54.7,0.6z"></path>
                <path d="M68.2,0.6L68.2,0.6c-0.4-0.1-1-0.3-1.9-0.3c-1.4,0-6,0.5-6,7.2v4.9c-1,0.2-1.7,1.1-1.7,2.1v1.4c0,1,0.7,1.9,1.7,2.1v11.3 c0,1.2,1,2.2,2.2,2.2h1.4c1.2,0,2.2-1,2.2-2.2V18h1.5c1.2,0,2.2-1,2.2-2.2v-1.4c0-1.2-1-2.2-2.2-2.2h-1.5V7.8 c0-1.1,0.2-1.6,0.2-1.8c0,0,0.1,0,0.2,0c0.3,0,0.3,0,0.3,0c0.7,0.3,1.4,0.2,2-0.2c0.6-0.4,0.9-1.1,0.9-1.8V2.7 C69.7,1.7,69.1,0.9,68.2,0.6z"></path>
                <path d="M88.5,12.3h-1.7c-0.9,0-1.7,0.5-2,1.3l-3.5,8.6l-4.1-8.7c-0.4-0.8-1.1-1.2-2-1.2h-1.7c-0.7,0-1.4,0.4-1.8,1 c-0.4,0.6-0.4,1.4-0.1,2.1l6.6,14.1l-3.1,7.2c-0.3,0.7-0.2,1.4,0.2,2s1.1,1,1.8,1h1.7c0.9,0,1.7-0.5,2-1.3l9.7-23 c0.3-0.7,0.2-1.4-0.2-2C89.9,12.7,89.3,12.3,88.5,12.3z"></path>
                <path d="M124,3h-1.6c-1.2,0-2.2,1-2.2,2.2v8.1H110V5.1c0-1.2-1-2.2-2.2-2.2h-1.6c-1.2,0-2.2,1-2.2,2.2v24.1c0,1.2,1,2.2,2.2,2.2 h1.6c1.2,0,2.2-1,2.2-2.2V19h10.3v10.3c0,1.2,1,2.2,2.2,2.2h1.6c1.2,0,2.2-1,2.2-2.2V5.1C126.2,3.9,125.2,3,124,3z"></path>
                <path d="M149.1,13.6h-1.6c-1.2,0-2.2,1-2.2,2.2v4.4c0,2.1-0.1,3.1-0.7,4.1c-1,1.6-3.1,1.8-3.8,1.8c-0.6,0-2.8-0.1-3.8-1.8 c-0.6-0.9-0.7-2-0.7-4.1v-4.4c0-1.2-1-2.2-2.2-2.2h-1.6c-1.2,0-2.2,1-2.2,2.2v4.4c0,2.7,0.1,5,1.8,7.4c1.9,2.7,4.9,4.2,8.6,4.2 c3.7,0,6.8-1.5,8.6-4.2c1.6-2.4,1.7-4.7,1.7-7.4v-4.4C151.3,14.6,150.3,13.6,149.1,13.6z"></path>
                <path d="M181.2,15.5h-10.1c-1.2,0-2.2,1-2.2,2.2v1.4c0,1.2,1,2.2,2.2,2.2h5.9c-0.2,0.6-0.5,1.2-0.8,1.6c-0.9,1.4-3.2,3.1-6.6,3.1 c-4.9,0-8.6-3.7-8.6-8.7c0-5,3.8-8.9,8.7-8.9c2.7,0,4.6,1.3,5.5,2c0.6,0.5,1.3,1.3,1.8,2.1c0.3,0.5,0.9,0.9,1.5,1 c0.6,0.1,1.2,0,1.7-0.4l1.3-1c0.9-0.7,1.1-2,0.4-2.9c-1-1.4-2-2.4-3.3-3.5c-1.7-1.3-4.5-3-8.9-3c-4,0-7.7,1.5-10.4,4.1 c-2.8,2.7-4.3,6.4-4.3,10.4c0,8.3,6.3,14.6,14.6,14.6c4.5,0,8.3-1.7,10.8-4.9c2.5-3.2,2.9-7.2,2.9-9.2 C183.4,16.5,182.4,15.5,181.2,15.5z"></path>
                <path d="M199.9,16.2c-1.1-0.8-2.2-1.3-3.9-2.1c-0.4-0.2-0.8-0.4-1.2-0.6l-0.1,0c-2.6-1.3-3-1.6-3-2.7c0-0.5,0.2-2.3,2.3-2.3 c1.3,0,2.2,0.6,2.8,1.8c0.3,0.6,0.9,1,1.5,1.1c0.6,0.1,1.3,0,1.8-0.5l1.2-1c0.8-0.7,1-1.8,0.5-2.7c-1.5-2.9-4.4-4.6-7.8-4.6 c-5.5,0-8.3,4.1-8.3,8.2c0,1.4,0.3,2.7,1.1,3.9c1.2,1.9,2.8,2.8,5.3,4c2.4,1.2,3.5,1.8,3.9,2c1.1,0.7,1.3,1.3,1.3,1.9 c0,1.9-1.6,3.4-3.7,3.4c-1.1,0-2.2-0.5-2.8-1.2c0,0,0,0,0,0c-0.2-0.3-0.7-1-0.9-1.6c-0.2-0.6-0.6-1-1.2-1.3c-0.6-0.2-1.2-0.2-1.8,0 l-1.4,0.7c-1,0.5-1.5,1.6-1.1,2.7c0.2,0.4,0.6,1.8,2,3.3c0.7,0.8,2.8,3.3,7.2,3.3c5.4,0,9.7-4,9.7-9.2 C203.4,18.6,200.7,16.7,199.9,16.2z"></path>
                <path d="M130.9,10.3c0.3,0.3,0.7,0.5,1.1,0.5c0.3,0,0.6-0.1,0.9-0.3l1.7-1.4l1.7,1.4c0.3,0.2,0.6,0.3,0.9,0.3 c0.4,0,0.8-0.2,1.1-0.5c0.5-0.6,0.4-1.5-0.2-2l-1.2-1l1.2-1c0.6-0.5,0.7-1.4,0.2-2c-0.5-0.6-1.4-0.7-2-0.2l-1.7,1.4l-1.7-1.4 c-0.6-0.5-1.5-0.4-2,0.2c-0.5,0.6-0.4,1.5,0.2,2l1.2,1l-1.2,1C130.5,8.8,130.4,9.7,130.9,10.3z"></path>
                <path d="M151.3,4.3c-0.5-0.6-1.4-0.7-2-0.2l-1.7,1.4l-1.7-1.4c-0.6-0.5-1.5-0.4-2,0.2c-0.5,0.6-0.4,1.5,0.2,2l1.2,1l-1.2,1 c-0.6,0.5-0.7,1.4-0.2,2c0.3,0.3,0.7,0.5,1.1,0.5c0.3,0,0.6-0.1,0.9-0.3l1.7-1.4l1.7,1.4c0.3,0.2,0.6,0.3,0.9,0.3 c0.4,0,0.8-0.2,1.1-0.5c0.5-0.6,0.4-1.5-0.2-2l-1.2-1l1.2-1C151.7,5.8,151.8,4.9,151.3,4.3z"></path>
              </g>
            </svg>
          </div>
        </motion.div>
        <motion.div className="h-screen w-screen bg-amber-100 relative ">
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
              rotate: humanRotate,
            }}
            className="absolute left-1/2 -translate-x-1/2 bottom-10 w-[300px] h-[300px]"
          >
            <Human
              shake={true}
              shakeSpeed={5}
              shakeDirection="vertical"
              size={{ width: humanSize, height: humanSize }}
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="h-screen overflow-hidden  w-screen bg-amber-100 flex items-center justify-center">
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
            <motion.div className="absolute -top-8 sm:-top-6 md:-top-8 left-1/2 -translate-x-1/2">
              <Rectangle bgColor="#FF6B6B" direction="horizontal" />
            </motion.div>
            {/* Rectangle 2 - Top Right */}
            <motion.div className="absolute top-[5%] sm:top-[10%] right-[5%] sm:right-[10%]">
              <Rectangle bgColor="#4ECDC4" direction="vertical" />
            </motion.div>
            {/* Rectangle 3 - Right Top */}
            <motion.div className="absolute top-[30%] sm:top-[35%] -right-8 sm:-right-6 md:-right-8">
              <Rectangle bgColor="#45B7D1" direction="horizontal" />
            </motion.div>
            {/* Rectangle 4 - Right Bottom */}
            <motion.div className="absolute top-[70%] sm:top-[65%] -right-8 sm:-right-6 md:-right-8">
              <Rectangle bgColor="#8B5CF6" direction="vertical" />
            </motion.div>
            {/* Rectangle 5 - Bottom Right */}
            <motion.div className="absolute bottom-[5%] sm:bottom-[10%] right-[5%] sm:right-[10%]">
              <Rectangle bgColor="#FFA500" direction="horizontal" />
            </motion.div>
            {/* Rectangle 6 - Bottom */}
            <motion.div className="absolute -bottom-8 sm:-bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2">
              <Rectangle bgColor="#FF69B4" direction="vertical" />
            </motion.div>
            {/* Rectangle 7 - Bottom Left */}
            <motion.div className="absolute bottom-[5%] sm:bottom-[10%] left-[5%] sm:left-[10%]">
              <Rectangle bgColor="#32CD32" direction="horizontal" />
            </motion.div>
            {/* Rectangle 8 - Left Bottom */}
            <motion.div className="absolute top-[70%] sm:top-[65%] -left-8 sm:-left-6 md:-left-8">
              <Rectangle bgColor="#9370DB" direction="vertical" />
            </motion.div>
            {/* Rectangle 9 - Left Top */}
            <motion.div className="absolute top-[30%] sm:top-[35%] -left-8 sm:-left-6 md:-left-8">
              <Rectangle bgColor="#20B2AA" direction="horizontal" />
            </motion.div>
            {/* Rectangle 10 - Top Left */}
            <motion.div className="absolute top-[5%] sm:top-[10%] left-[5%] sm:left-[10%]">
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
      </motion.div>
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
          id="enter_section"
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

export default HomePage;

// // Export the client-side wrapped component
// export default dynamic(() => Promise.resolve(ClientHomePage), {
//   ssr: false,
// });
