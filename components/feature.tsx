"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Concise & Functional.
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Save your open browser tabs as sessions and restore them anytime. Stay focused, reduce clutter, and organize your tab workflows.
          </p>
        </div>

      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          User-Friendly & Descriptive.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          A minimal productivity tool to help you save and restore groups of browser tabs.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
           Save your tabs. Access them anytime.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
           Save your open tabs as named sessions and access them anytime. Quickly restore your workspace, stay organized, and reduce tab overload — all from a simple popup.
          </p>
        </div>

      </WobbleCard>

    </div>
  );
}
