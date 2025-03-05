/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReportDetailCard } from "@/components";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, type SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import { RightArrowSvgIcon, ThumbIcon } from "@/assets";

interface CheckupListProps {
  data: ReportDetailCard[];
  title: string;
  onClickseeAll: () => void;
}

export const CheckupList = ({
  title,
  data,
  onClickseeAll,
}: CheckupListProps) => {
  const swiperRef = useRef<SwiperClass>();

  return (
    <div className="mt-14 md:p-6 lg:p-8 p-4 bg-gradient-to-r from-content1-foreground">
      <div className="flex justify-between md:p-0">
        <p className="font-source leading-tight font-semibold text-body3 md:text-h4">
          {title}
        </p>
        <div
          className="flex gap-4 items-center cursor-pointer"
          onClick={onClickseeAll}
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
      <div className="mt-6 rounded-bl-[4px] rounded-tl-[4px] bg-gradient-to-r flex gap-2 md:w-[400px] px-2 py-2 from-content2-100">
        <ThumbIcon/>
        <p className="font-source font-regular text-body4">Trusted by 1 Mn+ Customers</p>
      </div>
     <div className="md:p-0">
      <Swiper
        autoplay={false}
        spaceBetween={20}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Autoplay, Navigation]}
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        className="mt-1"
        onBeforeInit={(swiper: SwiperClass) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          440: { slidesPerView: 1 }, // Mobile (width < 640px) → 1 slide
          768: { slidesPerView: 2 }, // Mobile (width < 640px) → 1 slide
          1024: { slidesPerView: 3 }, // Web (width > 1024px) → 3 slides
        }}
      >
        {data?.map((item, index) => {
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
