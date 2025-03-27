"use client";

import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { useAppSelector } from "@/lib/hook";

export default function HomeLayout({
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
      <section className="hidden lg:flex w-[30%] h-full bg-slate-300 dark:bg-slate-950 text-gray-900 dark:text-white">
        <Sidebar />
      </section>
      <div
        className="w-full lg:w-[70%] h-full  overflow-y-auto bg-gray-200 dark:bg-slate-900 
      text-gray-900 dark:text-white"
      >
        {children}
      </div>
    </div>
  );
}
