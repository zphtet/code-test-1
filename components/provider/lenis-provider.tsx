"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { FC, useRef } from "react";

type LenisScrollProviderProps = {
  children: React.ReactNode;
};
const LenisScrollProvider: FC<LenisScrollProviderProps> = ({ children }) => {
  const lenisRef = useRef(null);
  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{ lerp: 0.05, duration: 2.5, smoothWheel: true }}
    >
      {/* @ts-expect-error Lenis is not typed */}
      {children}
    </ReactLenis>
  );
};

export default LenisScrollProvider;
