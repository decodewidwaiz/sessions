"use client";

import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button } from "@/components/ui/moving-border";
import { WobbleCardDemo } from "@/components/feature";
import { ExternalLink } from "lucide-react";

const BackgroundBeamsWithCollisionDemo = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-12 ">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <span>Crafted with ❤️ by Waiz</span>
        </HoverBorderGradient>

        <BackgroundBeamsWithCollision>
          <div className="flex items-center flex-col">
            {/* Valid h2 without div inside */}
            <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
              <span>
                <ContainerTextFlip
                  words={["Supercharge", "Streamline", "Reimagine", "Awesome"]}
                />
              </span>{" "}
              your Browser workflow with
            </h2>


<h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center font-sans tracking-tight">
  <span className="flex justify-center items-center bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-transparent bg-clip-text">
    Session
  </span>
</h2>


            <div className="mt-6">
              <a
                href="https://github.com/decodewidwaiz/session"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  borderRadius="2rem"
                  className="px-6 py-4 rounded-md bg-gradient-to-b from-[#2c3e50] to-[#1a252f] text-white font-bold shadow-inner border border-[#3a4a5a]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Button>
              </a>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="my-10 text-2xl md:text-2xl lg:text-4xl font-bold text-center text-black dark:text-white">
          What we offer
        </h1>
        <WobbleCardDemo />
      </div>

      <div className="h-[10vh] flex flex-col items-center justify-center">
        All rights reserved &copy; decodedwidwaiz
      </div>
    </>
  );
};

export default BackgroundBeamsWithCollisionDemo;
