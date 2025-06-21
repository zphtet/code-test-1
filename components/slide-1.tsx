"use client";
import Human from "./human";
import Rectangle from "./rectangle";
const SlideOne = () => {
  return (
    <div className="w-screen min-h-screen bg-amber-100">
      <div className="h-screen w-screen bg-green-200"></div>
      <div id="first" className="relative w-screen h-screen">
        <Human position={{ top: "40%", left: "50%" }} shake shakeSpeed={5} />
        <div className="flex items-center justify-center h-full ">
          <div className="absolute top-40 left-20">
            <Rectangle bgColor="#EF4444" direction="horizontal" />
          </div>
          <div className="absolute top-40 right-32">
            <Rectangle bgColor="#3B82F6" direction="vertical" />
          </div>
          <div className="absolute bottom-40 left-32">
            <Rectangle bgColor="#10B981" direction="horizontal" />
          </div>
          <div className="absolute bottom-20 right-20">
            <Rectangle bgColor="#F59E0B" direction="vertical" />
          </div>
          <div className="absolute top-1/2 left-1/4">
            <Rectangle bgColor="#8B5CF6" direction="horizontal" />
          </div>
          <div className="absolute top-1/3 right-1/4">
            <Rectangle bgColor="#EC4899" direction="vertical" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideOne;
