import { ButtonComponent, ReportDetailCard } from "@/components";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import { testsforhealthConditions } from "./data";
import { RightArrowSvgIcon } from "@/assets";

const testsforhealthConditionsList = [
  {
    id: 1,
    name: "STD",
  },
  {
    id: 2,
    name: "Cancer",
  },
  {
    id: 3,
    name: "Arthritis",
  },
  {
    id: 4,
    name: "Hypertension",
  },
  {
    id: 5,
    name: "Auto-Immune Disorders",
  },
];

interface TestsForHealthCondition {
  data: ReportDetailCard[];
  type: string;
}

export const TestsForHealthCondition = () => {
  const [data, setData] = React.useState<TestsForHealthCondition>({
    type: "STD",
    data: testsforhealthConditions?.[0]?.data,
  });

  const onChangeType = (type: string) => {
    const filteredData = testsforhealthConditions?.find(
      (i) => i?.name === type
    );
    setData({
      type: type,
      data: filteredData?.data ?? [],
    });
  };

  return (
    <div className="mt-14 md:p-6 lg:p-8 p-4 bg-gradient-to-r from-content1-foreground">
      <div className="flex justify-between gap-4 md:p-0">
        <p className="font-source font-semibold leading-snug text-body3 md:text-h4">
          Tests for Health Conditions
        </p>
        <div
          className="flex gap-6 items-center cursor-pointer"
          onClick={() => false}
        >
          <p className="cursor-pointer text-nowrap font-source font-semibold text-body4 text-primary">
            See All
          </p>
          <RightArrowSvgIcon
            height={12}
            width={12}
            className="fill-content2-400"
          />
        </div>
      </div>
      <div className="flex gap-4 overflow-scroll mt-4">
        {testsforhealthConditionsList?.map((val) => {
          return (
            <div key={val?.id}>
              <ButtonComponent
                baseClassName={`h-[34px] ${
                  val?.name === data?.type
                    ? `!bg-primary bg-gradient-to-r from-content1-200 to-primary-200 text-content1-foreground`
                    : undefined
                }`}
                textClassName="text-body4"
                buttonText={val?.name}
                handleOnClick={()=>onChangeType(val?.name)}
              />
            </div>
          );
        })}
      </div>

      <div className="md:p-0">
        <Swiper
          autoplay={false}
          spaceBetween={20}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Autoplay, Navigation]}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          className="mt-1"
          breakpoints={{
            440: { slidesPerView: 1 }, // Mobile (width < 640px) → 1 slide
            768: { slidesPerView: 2 }, // Mobile (width < 640px) → 1 slide
            1024: { slidesPerView: 3 }, // Web (width > 1024px) → 3 slides
          }}
        >
          {data?.data?.map((item, index) => {
            return (
              <SwiperSlide className="rounded-xl my-4" key={index}>
                <ReportDetailCard {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
