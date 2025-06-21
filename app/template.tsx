"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/header";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/images/loading.webp"
            alt="Loading..."
            width={200}
            height={200}
            className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
            //   className="animate-spin"
          />
          {/* <p className="text-gray-600 text-lg font-medium">Loading...</p> */}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
