"use client";
import { SearchDescription, SearchDescriptionMd } from "@/components";
import { MostBooked } from "../checkups/components";
import { ListSection } from "./components";
import { MostBookedTests } from "../tests/components";

export default function Page() {
  return (
    <div>
      <div className="md:m-6 lg:m-10">
        <div className="hidden md:block">
          <SearchDescriptionMd
            imgClass="md:h-[200px] lg:h-[250px]"
            title="Health Checks"
            description="Empowering lives through comparehensive health checkups"
            placeholder="Search checkups"
            image="https://firebasestorage.googleapis.com/v0/b/neigbours-849d3.appspot.com/o/Group%203%20(3).png?alt=media&token=6ff2468a-ccf7-4414-8c6c-058416952121"
          />
        </div>
        <div className="md:hidden">
          <SearchDescription
            title="Health Checks"
            description="Empowering lives through comparehensive health checkups"
            placeholder="Search checkups"
          />
        </div>
      </div>
      <ListSection/>
      <MostBooked />
      <div className="mt-8">
      <MostBookedTests/>
      </div>
    </div>
  );
}
