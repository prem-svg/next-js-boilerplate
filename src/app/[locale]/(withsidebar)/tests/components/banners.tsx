import { Card, Image } from "@heroui/react";

export const Banners = () => {
  return (
    <div className="block md:hidden">
    <div className="grid grid-cols-12 md:gap-2 mt-2 md:p-6 lg:p-8 p-4">
      <div className="col-span-12 md:col-span-6">
        <Card isPressable className="w-full">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/neigbours-849d3.appspot.com/o/1.png?alt=media&token=e64128a9-0324-4670-966d-e23a2a765ada"
            alt="test labe"
            className="w-full object-cover md:h-[600px]"
          />
        </Card>
      </div>
      <div className="col-span-12 md:col-span-6 mt-4">
        <Card isPressable className="w-full">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/neigbours-849d3.appspot.com/o/2.png?alt=media&token=a4158e99-fc3d-442a-a67f-9d346ca8340c"
            alt="test labe"
            className="w-full object-cover md:h-[300px]"
          />
        </Card>
      </div>
    </div>
    </div>
  );
};
