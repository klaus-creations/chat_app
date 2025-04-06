import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarPeoplwNav from "./SidebarPeoplwNav";

export default function Sidebar() {
  return (
    <aside className="size-full p-3">
      <header className="w-full h-[20%] py-1">
        <SidebarHeader />
      </header>

      <section className="w-full h-[80%] py-1 flex flex-col gap-3 overflow-x-hidden overflow-y-auto ">
        {Array.from({ length: 20 }, (_, i) => {
          return (
            <SidebarPeoplwNav
              img="github.com"
              lastText={"hello world"}
              name="Hello"
              status={true}
            />
          );
        })}
      </section>
    </aside>
  );
}
