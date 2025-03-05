import { Card, cn } from "@heroui/react";
import React from "react";

interface PopularCheckupsprops {
  name: string;
  icon: React.ReactNode;
  subTitle: string;
  baseClass?: string;
}

export const PopularCheckupCard = ({
  name,
  icon,
  subTitle,
  baseClass,
}: PopularCheckupsprops) => {
  return (
    <Card
      isPressable
      className={cn(
        "rounded-2xl flex flex-col justify-center items-center w-full md:min-h-[150px] min-h-[130px]",
        baseClass
      )}
    >
      {icon}
      <p className="text-center mt-4 text-content1-foreground font-source font-bold text-body4 md:text-body3">
        {name}
      </p>
      <p className="text-center mt-1 text-content1-foreground font-source font-bold text-body4 md:text-body3">
        {subTitle}
      </p>
    </Card>
  );
};
