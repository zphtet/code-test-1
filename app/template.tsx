"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // console.log("USE EFFECT WORKING");

    // Scroll to the bottom of the page
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      {isLoading && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/images/loading.webp"
              alt="Loading..."
              width={200}
              height={200}
              className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
            />
          </div>
        </div>
      )}
      <Header />
      {children}
      <Footer />
    </div>
  );
}
