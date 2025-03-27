"use client";

import React from "react";
import { useAppSelector } from "@/lib/hook";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDark = useAppSelector((state) => state.theme.isDark);
  console.log(isDark);

  return (
    <div
      className={`${
        isDark && "dark"
      } w-[95%] sm:w-[90%] lg:w-[85%] m-auto h-[95vh] lg:h-[90vh] flex  overflow-hidden`}
    >
      <section className="size-full bg-gray-200 dark:bg-gray-900 flex flex-col items-center justify-center px-2">
        <div className="flex flex-col items-center gap-4 w-full sm:w-[85%] md:w-[70%] xl:w-[550%] 2xl:w-[40%]">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-[1px] text-violet-600">
            Happy Chat
          </h2>

          {children}
        </div>
      </section>
    </div>
  );
}
