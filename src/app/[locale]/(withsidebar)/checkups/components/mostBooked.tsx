import { PopularCheckupCard } from "@/components";
import { FamilyIcon, SafeCircleIcon, VirusIcon, WomenIcon } from "@/assets";

const data = [
  {
    id: 1,
    name: "Full Body",
    subTitle: "Checkup",
    icon: <FamilyIcon />,
    isAdd: false,
  },
  {
    id: 2,
    name: "Sexual",
    subTitle: "Health",
    icon: <SafeCircleIcon />,
    isAdd: false,
  },
  {
    id: 3,
    name: "Women's",
    subTitle: "Health",
    icon: <WomenIcon />,
    isAdd: false,
  },
  {
    id: 4,
    name: "Allergy",
    subTitle: "Checkup",
    icon: <VirusIcon />,
    isAdd: false,
  },
];

export const MostBooked = () => {
  return (
    <div className="font-source px-4 md:mt-10 md:px-6 lg:px-10">
      {" "}
      {/* Added overflow-hidden */}
      <div className="grid grid-cols-12 md:gap-12 mt-5">
        <div className="col-span-12 hidden md:block md:col-span-7">
          <p className="font-source font-semibold text-h3 lg:text-h1">
            Popular Health
          </p>
          <p className="font-source font-semibold text-h3 lg:text-h1">
            Checkups
          </p>
          <p className="text-body4 mt-3 leading-4">
            India’s fastest AI powered & temperature - controlled supply chain
            to collect and test your blood in freshest state.
          </p>
        </div>

        <div className="col-span-12 md:col-span-5">
          <p className="font-source md:hidden font-semibold mb-4 text-body3 md:text-h4">
            Popular Health Checkups
          </p>
          <div className="grid grid-cols-12 gap-4">
            {data?.map((val) => (
              <div key={val?.id} className="col-span-6 md:col-span-6">
                <PopularCheckupCard
                  key={val?.id}
                  baseClass={`${
                    val?.isAdd
                      ? "bg-danger-700 from-danger-600 bg-gradient-to-l to-danger-700"
                      : "bg-primary-200  bg-gradient-to-r from-content1-200 to-primary-300"
                  }}`}
                  {...val}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
