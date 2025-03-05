import { ReportDetailCard } from "@/components";
import { data } from "./data";

export const ListSection = () => {
  return (
    <div className="md:p-6 lg:p-8 p-4 bg-gradient-to-r from-content1-foreground">
      <p className="font-source text-body3 mb-4 font-semibold">Showing 20 Checkups</p>
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {data?.map((item) => {
            return (
                <div key={item?.id} className="col-span-12 md:col-span-3 lg:col-span-4">
                    <ReportDetailCard {...item} />
                </div>
            )
        })}
      </div>
    </div>
  );
};
