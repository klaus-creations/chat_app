import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

interface ISidebarPeopleNav {
  name: string;
  img: string;
  lastText: string | File;
  status: boolean;
}

export default function SidebarPeoplwNav({
  name,
  img,
  lastText,
  status,
}: ISidebarPeopleNav) {
  return (
    <div className="w-full flex flex-col bg-violet-400/[.2] hover:bg-violet-400/[.3] dark:bg-violet-400/[.06] dark:hover:bg-violet-400/[.1] items-start shrink-0 px-2 py-1 cursor-pointer">
      <div className="flex gap-1 items-center">
        <Avatar className="size-10 flex items-center justify-center rounded-full">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <h2 className="text-sm 2xl:text-base">Cristiano Ronaldo</h2>
      </div>

      <span className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ...
      </span>
    </div>
  );
}
