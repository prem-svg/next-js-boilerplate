"use client";

import { TopNavBar } from "@/components";
import { Banner, ServiceProvide } from "./components";

export default function Home() {

  return (
    <div className="bg-foreground-300 h-screen">
      <div className="sticky">
        <TopNavBar />
      </div>
      <div className="pb-4">
        <Banner />
        <ServiceProvide />

     </div>
    </div>
  );
}
