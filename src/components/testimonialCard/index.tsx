/* eslint-disable @next/next/no-img-element */
import { Card, CardBody } from "@heroui/react";

interface ServiceCardProps {
  name: string;
  des: string;
  img: string;
  title: string;
}

export const TestimonialCard = ({
  name,
  title,
  des,
  img,
}: ServiceCardProps) => {
  return (
    <Card
      isPressable={true}
      className="py-[8px] min-h-[200px] shadow-lg rounded-xl w-full border-content1-50 border-1 bg-foreground-50"
    >
      <CardBody className="h-full p-4">
        <img
          alt="Card background"
          className="object-cover w-[60px] h-[60px] rounded-full"
          src={img}
        />
        <p className="font-source text-body3 font-bold mt-5">“{title}”</p>
        <p className="font-source text-content1-300 text-body4 leading-tight font-refular mt-4">
          {des}
        </p>
        <p className="font-source text-primary text-body4 font-bold mt-4">- {name}</p>

      </CardBody>
    </Card>
  );
};
