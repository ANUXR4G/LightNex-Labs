"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/ui/site-header";

// Companies array
const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "YouTube",
  "Instagram",
  "Uber",
  "Spotify",
];

// Words to animate
const flipWords = [
  "SaaS Companies.",
  "Startups.",
  "Future Unicorns.",
  "Next-Gen Platforms",
];

// Y-axis slide animation component
function WordSlipperY() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % flipWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      style={{
        display: "inline-block",
        position: "relative",
        minWidth: "11em",
        minHeight: "1.5em",
        overflow: "hidden",
        verticalAlign: "middle",
        borderRadius: "0.6em",
        padding: "0.2em 0.8em",
        boxShadow: "0 1px 6px 0 rgba(0,0,0,0.09)",
      }}
      className="box-y-slip text-[#302620]"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={flipWords[index]}
          initial={{ y: direction * 48, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: direction * -48, opacity: 0 }}
          transition={{
            duration: 0.45,
            type: "spring",
            stiffness: 320,
            damping: 27,
          }}
          style={{
            position: "absolute",
            left: 0,
            width: "100%",
            textAlign: "center",
            fontWeight: 400,
            whiteSpace: "nowrap",
            top: 0,
            color: "#635953",
          }}
        >
          {flipWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Newhero() {
  return (
    <>
      <SiteHeader />
      <div className="min-h-screen w-full overflow-hidden bg-black text-[calc(var(--_size)*0.022)] [--_factor:min(1000px,100vh)] [--_size:min(var(--_factor),100vw)]">
        <div className="relative flex flex-col min-h-screen w-full items-center justify-center lg:pt-10 md:pt-10 px-4 md:px-0 pb-0 pt-0">
          <div className="z-10 flex min-h-10 items-center justify-center pb-0 py-9 pb-3 lg:pt-16">
            <div
              className={cn(
                "group rounded-full border border-white/10 bg-transparent text-[#86868b] transition-all ease-in hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-0.5 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 text-xs sm:text-sm md:text-base">
                <span>✨ Global Web Development Agency</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </div>
          
          <motion.div
            className="absolute h-full w-full max-w-[44em]"
            initial={{ opacity: 0.3, scale: 1.2 }}
            animate={{ opacity: 0.8, scale: 1.2 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute h-full w-full rounded-[100em] opacity-60 shadow-[inset_0_0_4em_3em_rgba(238,200,175,0.2),inset_0_0_2em_0.4em_rgba(238,200,175,0.2),0_0_0.1em_0.1em_rgba(238,200,175,0.2),0_0_1em_0.4em_rgba(238,200,175,0.3)]"
              initial={{ translateY: "-70%" }}
              animate={{ translateY: "-64%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute h-full w-full rounded-[100em] opacity-60 shadow-[inset_0_0_4em_3em_rgba(238,200,175,0.2),inset_0_0_2em_0.4em_rgba(238,200,175,0.2),0_0_0.1em_0.1em_rgba(238,200,175,0.2),0_0_1em_0.4em_rgba(238,200,175,0.3)]"
              initial={{ translateY: "70%" }}
              animate={{ translateY: "64%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </motion.div>

          <div className="relative z-10 text-center pb-10">
            <h1 className="text-[2em] sm:text-[2.5em] md:text-[4em] lg:text-[4.5em] xl:text-[5em] font-extralight leading-[1.0625] tracking-[-0.009em] text-[#c8c2bd]">
              Digital Partner For
              <br />
              <motion.span
                className="relative inline-block"
                initial={{ scale: 1 }}
                animate={{ scale: 1.02 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <span className="relative z-10 text-transparent">
                  <WordSlipperY />
                </span>
              </motion.span>
              <br />
            </h1>
            <Button
              variant="outline"
              className="text-black hover:from-[#bdc2c9] hover:to-[#e7dfd6] bg-gradient-to-r from-[#86868b] to-[#bdc2c9] border-none mt-5 text-sm sm:text-base md:text-lg"
              size="lg"
              onClick={() => (window.location.href = "/mockup-home")}
            >
              Create Video Ad <ArrowRightIcon className="h-3 w-3" />
            </Button>
            <p className="absolute left-0 right-0 mx-auto sm:mt-[6em] max-w-[28em] bg-gradient-to-b from-[#86868b] to-[#bdc2c9] bg-clip-text text-center font-light text-transparent text-xs sm:text-sm md:text-base lg:text-lg">
              We Provide Solutions To{" "}
              <WordSlipperY />
              . We specialize in web and app development, delivering seamless UI/UX that elevates your brand and engages your users.
            </p>
          </div>
        </div>
        <Companies />
        <svg
          className="absolute z-[-1] h-0 w-0"
          width="1440px"
          height="300px"
          viewBox="0 0 1440 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ...Your original SVG filter code here... */}
        </svg>
      </div>
    </>
  );
}

// Companies remains unchanged
function Companies() {
  return (
    <section id="companies" className="bg-black py-10 mt-10">
      <div className="py-14 mt-0 lg:mt-20">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center text-xs sm:text-sm md:text-base font-semibold text-[#86868b]">
            TRUSTED BY LEADING TEAMS
          </h3>
          <div className="relative mt-6 overflow-hidden">
            {/* Marquee container */}
            <div className="w-full overflow-hidden">
              <div
                className="flex items-center gap-8 min-w-fit animate-marquee"
                style={{
                  animation: "marquee 22s linear infinite",
                }}
              >
                {/* Double the logos for seamless looping */}
                {[...companies, ...companies].map((logo, idx) => (
                  <img
                    key={idx}
                    src={`https://cdn.magicui.design/companies/${logo}.svg`}
                    className="h-8 w-32 sm:h-10 sm:w-40 px-2 brightness-0 invert flex-shrink-0"
                    alt={logo}
                  />
                ))}
              </div>
            </div>
            {/* Fade edge gradients for polish */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent"></div>
          </div>
        </div>
      </div>
      {/* Tailwind can't see this animation so use a <style> tag */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
