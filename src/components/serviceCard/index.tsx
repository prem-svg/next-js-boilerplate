/* eslint-disable @next/next/no-img-element */
import { Card, CardBody } from "@heroui/react";

interface ServiceCardProps {
  name: string;
  des: string;
  img: string;
}

export const ServiceCard = ({ name, des, img }: ServiceCardProps) => {
  return (
    <Card
      isPressable={true}
      className="py-[8px] w-full px-[2px] shadow-lg rounded-xl border-content1-50 border-1 bg-foreground-50"
    >
      <CardBody className="overflow-visible py-2">
        <img
          alt="Card background"
          className="object-fill w-full h-[140px] rounded-lg"
          src={img}
        />
        <p className="font-source text-body3 font-bold mt-4">{name}</p>
        <p className="font-source text-body4 leading-tight font-regular mt-2">
          {des}
        </p>
        {/* <p className="mt-3 font-source text-body4 cursor-pointer">Learn More</p> */}
      </CardBody>
    </Card>
  );
};
