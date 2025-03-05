"use client";
import { TopBar } from "@/components";
import { WithSideBar } from "@/context/withSideBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full">
      {/* side bar component */}
      <WithSideBar />
      <div className="overflow-y-auto flex-grow w-auto h-screen overflow-auto  [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="hidden md:block">
          <TopBar />
        </div>
        <div className="mb-14 md:mb-0">
        {/* Screen section */}
        {children}
        </div>
      </div>
    </div>
  );
}
