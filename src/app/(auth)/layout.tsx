import AuthLayout from "@/components/layout/AuthLayout";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className="w-full h-screen overflow-hidden flex items-center justify-center">
      <AuthLayout>{children}</AuthLayout>
    </main>
  );
}
