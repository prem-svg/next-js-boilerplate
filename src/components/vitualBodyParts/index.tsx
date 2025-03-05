import { Card, Image } from "@heroui/react";

interface VirtualBodyParts {
  name: string;
  img: string;
}

export const VirtualBodyParts = ({ name, img }: VirtualBodyParts) => {
  return (
    <div className="w-full">
      <Card isPressable className="shadow-sm w-full rounded-2xl">
        <div className="shadow-sm rounded-2xl bg-gradient-to-b flex flex-col justify-center items-center md:min-h-[100px] min-h-[80px] from-primary-100">
          <Image height={40} src={img} alt={name} />
        </div>
      </Card>

      <p className="text-center mt-4 font-source font-regular text-body4">
        {name}
      </p>
      
    </div>
  );
};
