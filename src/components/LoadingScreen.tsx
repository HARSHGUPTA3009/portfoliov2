"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GREETINGS = [
  { text: 'console.log("Hello, World!")', type: "code" },
  { text: "Namaste", type: "word" },
  { text: 'System.out.println("Hello, World!")', type: "code" },
  { text: "Hola", type: "word" },
  { text: 'print("Hello, World!")', type: "code" },
  { text: "Bonjour", type: "word" },
  { text: 'fmt.Println("Hello, World!")', type: "code" },
  { text: "こんにちは", type: "word" },
  { text: 'printf("Hello, World!")', type: "code" },
  { text: "你好", type: "word" },
  { text: 'cout << "Hello, World!"', type: "code" },
  { text: "Ciao", type: "word" },
  { text: 'Console.WriteLine("Hello, World!")', type: "code" },
  { text: "안녕하세요", type: "word" },
];

const DISPLAY_DURATION = 250; // ms per greeting
const TOTAL_DURATION = 3000;

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exiting, setExiting] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const dotRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);

  // Smooth cursor following dot
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouse);

    let dotX = window.innerWidth / 2;
    let dotY = window.innerHeight / 2;

    const animate = () => {
      dotX += (mousePos.current.x - dotX) * 0.12;
      dotY += (mousePos.current.y - dotY) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  // Cycle through greetings
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % GREETINGS.length);
    }, DISPLAY_DURATION);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setExiting(true);
      setTimeout(onComplete, 600);
    }, TOTAL_DURATION);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  const current = GREETINGS[currentIndex];

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#ffffff] via-[#f8fafc] to-[#dbeafe]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Cursor dot — hidden on touch devices */}
          <div
            ref={dotRef}
            className="pointer-events-none fixed z-10 hidden md:block"
            style={{
              top: -4,
              left: -4,
              width: 8,
              height: 8,
              background: "#26272d",
              borderRadius: "50%",
              willChange: "transform",
            }}
            aria-hidden="true"
          />

          <div className="flex flex-col items-center gap-3 select-none">
            {/* Minimal brand mark */}
            

            {/* Greeting text */}
            <div className="min-h-[120px] md:min-h-[150px] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{
                      opacity: 0,
                      y: 20,
                      scale: 0.95,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -20,
                      scale: 1.05,
                    }}
                  transition={{ duration: 0.12, ease: "easeOut" }}
                  className={
                    current.type === "code"
                      ? "font-mono text-2xl md:text-4xl text-ink-secondary tracking-tight"
                       : "font-sans text-4xl md:text-6xl leading-none font-semibold text-ink tracking-tight"
                      
                }
                >
                  {current.text}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Progress line */}
            <motion.div
              className="mt-8 h-px w-24 bg-surface-border overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="h-full bg-ink"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: TOTAL_DURATION / 1000, ease: "linear" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
