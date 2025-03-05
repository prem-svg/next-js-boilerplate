import { SearchIcon } from "@/assets";
import { InputField } from "../inputField";
import { LocationSelect } from "../locationSelect";

export const TopBar = () => {
  return (
    <div className="bg-background items-center p-4 border-b-1">
      <div className="grid grid-cols-12 h-full items-center gap-4 justify-around">
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <LocationSelect />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <InputField
            placeholder="Search for tests"
            customHeight="38px"
            endContent={<SearchIcon />}
          />
        </div>
      </div>
    </div>
  );
};
