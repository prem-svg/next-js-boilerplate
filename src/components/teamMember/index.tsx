/* eslint-disable @next/next/no-img-element */
import { Card, CardBody } from "@heroui/react";

interface ServiceCardProps {
  name: string;
  position: string;
  img: string;
}

export const TeamMemberCard = ({ name, position, img }: ServiceCardProps) => {
  return (
    <Card
      isPressable={true}
      className="py-[8px] h-[200px] px-[2px] shadow-lg rounded-xl w-full border-content1-50 border-1 bg-foreground-50"
    >
      <CardBody className="h-full py-2 text-center flex items-center mt-5">
        <center>
        <img
          alt="Card background"
          className="object-cover flex justify-center w-[60px] h-[60px] rounded-full"
          src={img}
        />
        </center>
        <p className="font-source text-body3 text-primary font-bold mt-4">{name}</p>
        <p className="font-source text-body4 uppercase leading-tight font-semibold mt-2">
          {position}
        </p>
        {/* <p className="mt-3 font-source text-body4 cursor-pointer">Learn More</p> */}
      </CardBody>
    </Card>
  );
};
