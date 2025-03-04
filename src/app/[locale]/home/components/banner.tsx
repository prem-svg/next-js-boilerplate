"use client";

import { ButtonComponent } from "@/components";
import { Image } from "@heroui/react";
import { StatsCard } from "@/components";

export const Banner = () => {

    const stats = [
        {
          label: "Customer satisfaction",
          value: "99",
          prefix: "%",
        },
        {
          label: "Online Patients",
          value: "15",
          prefix: "k",
        },
        {
          label: "Patients Recovered",
          value: "12",
          prefix: "k",
        },
        {
          label: "Company growth",
          value: "240",
          prefix: "%",
        },
      ];

  return (
    <>
      <div className="grid grid-cols-12 gap-4 items-center justify-around mt-8 px-8">
        <div className="col-span-12 flex justify-center md:col-span-4  h-[200px] md:h-auto">
          <Image
            alt="banner"
            className="h-[200px] md:h-auto w-full flex justify-center"
            src="https://firebasestorage.googleapis.com/v0/b/neigbours-849d3.appspot.com/o/Group%203%20(2).png?alt=media&token=7c52037e-0642-4a69-8df5-5e7b51cdfee9"
          />
        </div>
        <div className="col-span-12 md:col-span-7 md:pl-8 mt-8 align-middle">
          <div className="md:text-h3 text-h4 leading-tight">
            <p className="font-source font-semibold">
              Providing Quality{" "}
              <span className="text-primary">Healthcare </span> For A
            </p>
            <p className="font-source mt-1 font-semibold">
              <span className="text-content1-1005">Brighter</span> And{" "}
              <span className="text-content1-1005">Healthy</span> Future
            </p>
          </div>
          <div className="mt-4">
            <p className="font-source text-body3 leading-normal text-secondary-200">
              At our hospital, we are dedicated to providing exceptional medical
              care to our patients and their families. Our experienced team of
              medical professionals, cutting-edge technology, and compassionate
              approach make us a leader in the healthcare industry
            </p>
          </div>
          <div className="flex gap-2 mt-4">
            <ButtonComponent
              isIcon={false}
              buttonText={`${"Book Now"}`}
              baseClassName="bg-primary w-auto px-6"
              textClassName="text-background"
              bgColor="bg-primary"
            />

            <ButtonComponent isIcon={false} buttonText={`Talk to us`} />
          </div>
        </div>
      </div>
      <div className="p-5 bg-primary-50 px-8">
        <p className="text-center text-h4 text-content1-1005 font-semibold font-source">
          Our results in numbers
        </p>
        <div className="grid grid-cols-12 gap-4 justify-around mt-5">
          {stats?.map((val) => {
            return (
              <div key={val?.label} className="col-span-12 md:col-span-3">
                <StatsCard {...val} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 items-center justify-around mt-10 px-8">
       
        <div className="col-span-12 md:col-span-7 md:pl-8 mt-8 align-middle">
          <div className="md:text-h3 text-h4 leading-tight">
            <p className="font-source font-semibold">
              You have a lots of
              <span className="text-primary"> reasons to choose us </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-source text-body3 leading-normal text-secondary-200">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.
            </p>
          </div>
          <div className="flex gap-2 mt-4">
            <ButtonComponent
              isIcon={false}
              buttonText={`Get Started`}
              baseClassName="bg-primary w-auto px-6"
              textClassName="text-background"
              bgColor="bg-primary"
            />

            <ButtonComponent isIcon={false} buttonText={`Talk to sales`} />
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 flex justify-center h-[200px] md:h-auto">
          <Image
            alt="banner"
            className="h-[200px] md:h-auto w-full flex justify-center"
            src="https://firebasestorage.googleapis.com/v0/b/neigbours-849d3.appspot.com/o/Group%203%20(3).png?alt=media&token=6ff2468a-ccf7-4414-8c6c-058416952121"
          />
        </div>
      </div>
    </>
  );
};
