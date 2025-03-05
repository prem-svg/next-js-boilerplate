"use client";

import { SearchDescription, SearchDescriptionMd } from "@/components";
import { CheckupList, MostBookedTests, TestsForHealthCondition } from "./components";

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
            title="Blood Test at Home"
            description="With Orange Health Labs, book a blood or urine lab test at home & get the fastest blood sample collection from home from a Certified lab near you in Bangalore."
          />
        </div>
        <div className="md:hidden">
          <SearchDescription />
        </div>
        <MostBookedTests />
      </div>
      <CheckupList
          title="Most Booked Tests"
          data={data}
          onClickseeAll={() => console.log()}
        />
      <TestsForHealthCondition />
    </div>
  );
}
