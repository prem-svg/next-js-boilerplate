import { SearchIcon } from "@/assets";
import { InputField } from "../inputField";
import { LocationSelect } from "../locationSelect";
import { useRouter } from "next/navigation";
import { Image } from "@heroui/react";

export const SearchDescription = ({
  title = "Lab test",
  description = "Get cutting-edge tests in the comfort of your own home",
  placeholder = "Search for tests",
  bannerImg = "",
}) => {
  const route = useRouter();

  const handleOnclick = () => {
    return route.push(`/search`);
  };

  return (
    <div className="px-6 shadow-lg py-6 bg-primary-foreground rounded-bl-[20px] rounded-br-[20px] sm:rounded-lg">
      <LocationSelect />
      <div className="text-center mt-8">
        {bannerImg?.length ? (
          <center>
          <Image height={200} src={bannerImg} alt="banner" />
          </center>
        ) : (
          <>
            <p className="font-source font-semibold text-body3">{title}</p>
            <p className="font-source text-secondary-200 font-regular text-body4 leading-snug mt-2">
              {description}
            </p>
          </>
        )}
      </div>
      <div className={`${bannerImg?.length ? 'mt-0':'mt-4'}`}>
        <div className="bg-primary mx-6 px-2 py-[6px] rounded-tl-xl rounded-tr-xl">
          <p className="font-source text-nowrap text-body4 text-center font-semibold text-content2-100">
            Book Now Get 15%
          </p>
        </div>
        <InputField
          inputWrapperClassName="border-1 border-primary"
          placeholder={placeholder}
          customHeight="32px"
          onFocus={handleOnclick}
          endContent={<SearchIcon />}
        />
      </div>
    </div>
  );
};
