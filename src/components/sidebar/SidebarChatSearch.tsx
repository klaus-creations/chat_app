"use client";

import React from "react";
import { Input } from "../ui/input";

export default function SidebarChatSearch() {
  return (
    <form className="w-full h-12">
      <Input
        type="text"
        className="size-full text-xs 2xl:text-base tracking-[1px] border-violet-500 focus:outline-violet-500"
        placeholder="Search your chats"
      />
    </form>
  );
}
