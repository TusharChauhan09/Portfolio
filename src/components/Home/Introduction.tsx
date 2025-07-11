"use client";
import { motion } from "motion/react";
import { useThemeMode } from "@/hooks/useThemeMode";
import Image from "next/image";
import IntroductionImage from "../../../public/images/IntroductionImage.png";
import { useEffect, useState } from "react";

export default function Introduction({ name }: { name: string }) {
  const theme = useThemeMode();
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      setShowGlow(true);
      const timeout = setTimeout(() => setShowGlow(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [theme]);
  return (
    <div className="w-full px-10 flex flex-col space-y-10">
      {/* Introduction */}
      <motion.div className="flex items-center justify-between pt-2 max-[425px]:flex-col max-[425px]:items-center max-[425px]:gap-4">
        {/* Left: Heading and Name/Handle */}
        <div className="flex flex-col gap-1 max-[425px]:order-2 w-full max-[425px]:items-center">
          <motion.h1 className="text-sm smalll mb-1">Hey It's me</motion.h1>
          <div className="flex items-center gap-3 max-[425px]:justify-center max-[425px]:w-full">
            <motion.h1
              className={`jap text-4xl ${theme === "dark" ? "demon-red" : ""}`}
            >
              {name}
            </motion.h1>
            <div className="flex items-center">
              <motion.h1 className="text jap text-3xl mr-1">/</motion.h1>
              <motion.h1 className="text smalll text-sm mt-3">
                @Tushar
                <span className={` ${theme === "dark" ? "demon-red" : ""}`}>
                  Chau09
                </span>
              </motion.h1>
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex items-center max-[425px]:order-1 max-[425px]:mb-2">
          <Image
            src={IntroductionImage}
            alt="Japanese Name Logo"
            width={110}
            height={110}
            className={`rounded-2xl border-2 border-neutral-800 ${
              showGlow ? "red-glow" : ""
            }`}
          />
        </div>
      </motion.div>

      {/* testimonial */}
      <div className="flex flex-col smalll text-md w-full break-words leading-loose space-y-3">
        <div>
          Hey! I’m a Full Stack Engineer who loves building things that don’t
          just work—but feel right.
        </div>
        <div>
          I don’t just build UIs—I build expressive, end-to-end experiences.
          From smooth interfaces to solid backends, I create thoughtful products
          with clean code and smart design.
        </div>
        <div>
          Lately, I’ve been diving into DevOps and Web3, exploring how modern
          apps can be faster, smarter, and more secure.
        </div>
        <div>
          When I’m not coding, I’m usually hacking on side projects or breaking
          things just to see how they tick.
        </div>
      </div>
    </div>
  );
}
