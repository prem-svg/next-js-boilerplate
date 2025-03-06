"use client";

import {
  SearchDescription,
  SearchDescriptionMd,
} from "@/components";
import { Banners, CheckupList,MostBooked } from "./components";

export default function Page() {
  const data = [
    {
      id: 1,
      title: "Complete Blood Count (CBC) with ESR",
      type: "test",
      report: "6 hours",
      test_include: 25,
      amount: 450,
      dis_percentage: 16,
      discount_amount: 534,
    },
    {
      id: 2,
      title: "Complete Blood Count (CBC) with ESR",
      type: "test",
      report: "6 hours",
      test_include: 25,
      amount: 450,
    },
    {
      id: 3,
      title: "Blood Suger",
      type: "test",
      report: "6 hours",
      test_include: 25,
      amount: 450,
    },
    {
      id: 4,
      title: "Complete Blood Count (CBC) with ESR",
      type: "test",
      report: "6 hours",
      test_include: 25,
      amount: 450,
    },
    {
      id: 5,
      title: "Blood Suger",
      type: "test",
      report: "6 hours",
      test_include: 25,
      amount: 450,
    },
  ];

  return (
    <div>
      <div className="md:m-6 lg:m-8">
        <div className="hidden md:block">
          <SearchDescriptionMd
            title="Health Checks"
            description="Empowering lives through comparehensive health checkups"
            placeholder="Search for checkups"
            image="https://firebasestorage.googleapis.com/v0/b/neigbours-849d3.appspot.com/o/Group%203%20(3).png?alt=media&token=6ff2468a-ccf7-4414-8c6c-058416952121"
            
          />
        </div>
        <div className="md:hidden">
          <SearchDescription
            title="Health Checks"
            description="Empowering lives through comparehensive health checkups"
            placeholder="Search for checkups"
          />
        </div>
      </div>
      <CheckupList
        title="Most Booked Checkups"
        data={data}
        onClickseeAll={() => console.log()}
      />
      <MostBooked />
      <CheckupList
        title="Vitamin Profile Checkups"
        data={data}
        onClickseeAll={() => console.log()}
      />
      <Banners/>
    </div>
  );
}
