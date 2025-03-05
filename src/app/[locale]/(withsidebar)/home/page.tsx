'use client'

import { SearchDescription, SearchDescriptionMd } from "@/components";

export default function Page() {
  return (
    <div>
          <div className="md:m-6 lg:m-10">
            <div className="hidden md:block">
              <SearchDescriptionMd
                searchHide={true}
                imgClass="md:h-[200px] lg:h-[250px]"
                title="Book A Health Checkup"
                description="Empowering lives through comparehensive health checkups"
                placeholder="Search test / checkups"
                image="https://firebasestorage.googleapis.com/v0/b/neigbours-849d3.appspot.com/o/Group%203%20(1).png?alt=media&token=5ff8ef99-0e9a-4b73-8d50-d099e0563a18"
              />
            </div>
            <div className="md:hidden">
              <SearchDescription
                title="Health Checks"
                description="Empowering lives through comparehensive health checkups"
                placeholder="Search test / checkups"
                bannerImg="https://firebasestorage.googleapis.com/v0/b/neigbours-849d3.appspot.com/o/Group%203%20(4).png?alt=media&token=889b6724-e9ce-438a-9631-c3d3c8c791a9"
              />
            </div>
          </div>
    </div>
  );
}
