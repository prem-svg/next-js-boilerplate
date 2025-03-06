"use client";

import { SearchDescription, SearchDescriptionMd } from "@/components";
import { CheckupList, MostBookedTests } from "../tests/components";
import { MostBooked } from "../checkups/components";

const test_data = [
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

const checkup_data = [
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
        <MostBookedTests />
        <CheckupList
          title="Most Booked Tests"
          data={test_data}
          onClickseeAll={() => console.log()}
        />
        <div className="mt-12">
          <MostBooked />
        </div>
        <CheckupList
          title="Most Booked Checkups"
          data={checkup_data}
          onClickseeAll={() => console.log()}
        />
      </div>
    </div>
  );
}
