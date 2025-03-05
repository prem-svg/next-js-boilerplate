import { SearchIcon } from "@/assets";
import { InputField } from "../inputField";
import { cn, Image } from "@heroui/react";
import { useRouter } from "next/navigation";

export const SearchDescriptionMd = ({
  rootClass = "",
  imgClass = "",
  searchHide = false,
  title = "Lab test",
  description = "Get cutting-edge tests in the comfort of your own home",
  placeholder = "Search for tests",
  image = "https://firebasestorage.googleapis.com/v0/b/neigbours-849d3.appspot.com/o/Group%203%20(2).png?alt=media&token=7c52037e-0642-4a69-8df5-5e7b51cdfee9",
}) => {
  const route = useRouter();

  const handleOnclick = () => {
    return route.push(`/search`);
  };

  return (
    <div
      className={cn(
        "shadow-sm md:mt-10 bg-primary-50 rounded-bl-[20px] rounded-br-[20px] sm:rounded-3xl",
        rootClass
      )}
    >
      <div className="grid grid-cols-12 gap-20 justify-around">
        <div className="col-span-12 md:p-10 lg:p-20 p-10 sm:col-span-6 md:col-span-5 lg:col-span-6">
          <div>
            <p className="font-source font-semibold text-h4">{title}</p>
            <p className="font-source text-secondary-200 font-regular text-body3 leading-snug mt-6">
              {description}
            </p>
          </div>
          {!searchHide && (
            <div className="mt-16 bg-secondary-foreground shadow-xl rounded-xl">
              <div className="bg-primary  mx-20 px-2 py-[8px] rounded-tl-xl rounded-tr-xl">
                <p className="font-source text-body4 text-center font-semibold text-content2-100">
                  Book Now Get 15%
                </p>
              </div>
              <InputField
                inputWrapperClassName="border-1 border-primary"
                placeholder={placeholder}
                endContent={<SearchIcon />}
                onFocus={handleOnclick}
              />
            </div>
          )}
        </div>
        <div className="col-span-12 p-8 sm:col-span-6 md:col-span-7 lg:col-span-6">
          <Image
            src={image}
            alt="blood test"
            className={cn(
              "h-[200px] md:h-[300px] lg:h-[350px] w-full flex justify-center",
              imgClass
            )}
          />
        </div>
      </div>
    </div>
  );
};
