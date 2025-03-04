import { cn, Image } from "@heroui/react";
import { ButtonComponent } from "../button";
import { useRouter } from "next/navigation";

interface TopNavBarProps {
  className?: string;
}

export const TopNavBar = ({ className }: TopNavBarProps) => {
  const route = useRouter();
  const items = [
    {
      label: "Home",
    },
    {
      label: "Service",
    },
    {
      label: "Contact us",
    },
    {
      label: "Help",
    },
    {
      label: "Blogs",
    },
  ];

  return (
    <div
      className={cn(
        "h-[60px] flex items-center justify-between px-4",
        className
      )}
    >
      <Image
        src={
          "https://firebasestorage.googleapis.com/v0/b/neigbours-849d3.appspot.com/o/Your%20paragraph%20text%20(1).png?alt=media&token=bd8ad3fd-968a-4856-930c-fe9975f43268"
        }
        alt="Revature"
        className="w-[200px] h-[38px]"
      />
      <div className="flex gap-8 flex-grow justify-center">
        {items?.map((val) => {
          return (
            <p
              className="font-source text-body4 cursor-pointer"
              key={val?.label}
            >
              {val?.label}
            </p>
          );
        })}
      </div>
      <div className="flex gap-2 items-center justify-around">
        <ButtonComponent
          isIcon={false}
          handleOnClick={()=>route.push("/signup")}
          buttonText={"Get Started"}
          baseClassName="bg-primary h-[40px] !w-[120px]"
          textClassName="text-background"
          bgColor="bg-primary"
        />
      </div>
    </div>
  );
};
