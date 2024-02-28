"use client";
import { motion } from "framer-motion";
import Button from "./Button";
import FullPage from "./FullPage";
import Image from "next/image";

export default function Hero() {
  return (
    <FullPage>
      <div className="bg-black h-screen relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          <Image alt="Hero image" fill={true} src="/hero-image.jpeg" />
        </motion.div>

        <div className="absolute top-[64px] left-1/2 translate-x-[-50%] z-10 flex flex-col items-center text-white">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            <Image width={217} height={114} src="/logo-full.svg" alt="Logo" />
          </motion.div>
          <nav className="mt-[32px]">
            <motion.ul
              initial={{ translateY: 100, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.5,
              }}
              className="flex gap-[16px] text-base overflow-hidden"
            >
              <li>Strona główna</li>
              <li>O nas</li>
              <li>Atrakcje</li>
              <li>Udogodnienia</li>
            </motion.ul>
          </nav>
          <div className="mt-[128px] flex flex-col gap-[20px] items-center">
            <motion.h1
              initial={{ translateY: 100, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.6,
              }}
              className="font-serif text-8xl uppercase whitespace-nowrap tracking-wide"
            >
              Miód malina
            </motion.h1>
            <motion.h2
              initial={{ translateY: 100, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.7,
              }}
              className="text-[24px] font-light tracking-widest"
            >
              OSADA ISTEBNA
            </motion.h2>
            <motion.div
              initial={{ translateY: 100, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.8,
              }}
            >
              <Button>Zobacz więcej</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </FullPage>
  );
}
