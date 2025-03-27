import React from "react";
import SidebarHeader from "./SidebarHeader";

export default function Sidebar() {
  return (
    <aside className="size-full p-3">
      <header className="w-full h-[20%] py-1">
        <SidebarHeader />
      </header>

      <section className="w-full h-[80%] py-1 overflow-x-hidden overflow-y-auto ">
        Sidebar Main
      </section>
    </aside>
  );
}
