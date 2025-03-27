"use client";

import React, { useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Moon, Settings, SunMoon } from "lucide-react";
import Link from "next/link";
import SidebarChatSearch from "./SidebarChatSearch";
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hook";

import { toggleTheme } from "@/lib/features/slices/theme";
import { Button } from "../ui/button";

export default function SidebarHeader() {
  const store = useAppStore();
  const initialized = useRef(false);
  if (!initialized.current) {
    store.dispatch(toggleTheme());
    initialized.current = true;
  }
  const isDark = useAppSelector((state) => state.theme.isDark);
  const dispatch = useAppDispatch();
  return (
    <div className="w-full h-full flex flex-col  justify-around">
      <div className="w-full flex items-center justify-between">
        <Link
          href={"/"}
          className="text-violet-700 text-base lg:text-xl tracking-[1px] first-letter:text-xl lg:first-letter:text3xl"
        >
          Happy Chat
        </Link>

        <Button
          onClick={() => {
            console.log(isDark);
            dispatch(toggleTheme());
          }}
          className="bg-transparent hover:bg-transparent cursor-pointer p-0 text-gray-900 
          dark:text-gray-100"
        >
          {isDark ? (
            <Moon className="size-6" />
          ) : (
            <SunMoon className="size-6" />
          )}
        </Button>
      </div>
      <div className="w-full flex justify-between">
        <div className="flex gap-2">
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <h2 className="text-base 2xl:text-xl">Cristiano Ronaldo</h2>
        </div>

        <Link href="/">
          <Settings size={25} />
        </Link>
      </div>
      <SidebarChatSearch />
    </div>
  );
}
