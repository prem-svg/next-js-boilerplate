import { LibraryIcon, TestIcon } from "@/assets";
import { ButtonComponent } from "../button";

export interface ReportDetailCard {
  id:number;
  title: string;
  report?: string;
  parameter?: string;
  test_include?: number;
  amount: number;
  discount_amount?: number;
  dis_percentage?: number;
  type: string;
}

export const ReportDetailCard = ({
  title,
  amount,
  discount_amount,
  dis_percentage,
  report,
  test_include,
}: ReportDetailCard) => {
  return (
    <div className="w-full rounded-xl font-source bg-content1 border-1 rounded-tl-[20px] rounded-tr-[20px]">
      <div className="rounded-xl bg-gradient-to-r min-h-[80px] items-center p-4 justify-between from-content1-200 to-primary-300 flex gap-4">
        <p className="text-secondary-foreground leading-snug font-source text-body4 md:text-body3 font-semibold">
          {title}
        </p>
        <div>
          <div className="flex gap-2">
            {discount_amount && (
              <p className="font-source font-regular text-body4 md:text-body3 line-through text-secondary-foreground">
                ₹{discount_amount}
              </p>
            )}
            <p className="font-source font-bold text-body3 md:text-body2 text-secondary-foreground">
              ₹{amount}
            </p>
          </div>
          {dis_percentage && (
            <p className="float-right mt-2 text-right font-bold text-body4 text-secondary-foreground px-[8px] rounded-sm py-[4px] bg-content1-200 inline-block">
              &nbsp;&nbsp;{dis_percentage}%&nbsp;&nbsp;
            </p>
          )}
        </div>
      </div>
      <div className="flex p-4 justify-between">
        <div className="flex gap-2 md:gap-4 items-center">
          <LibraryIcon />
          <div>
            <p className="text-body4 md:text-body4">Report within</p>
            <p className="text-body4 md:text-body3 text-secondary-200 font-regular mt-2">{report}</p>
          </div>
        </div>
        <div className="flex gap-2 md:gap-4 items-center">
          <TestIcon />
          <div>
            <p className="text-body4 md:text-body4">{test_include} tests</p>
            <p className="text-body4 md:text-body3 font-regular mt-2 text-secondary-200">Included</p>
          </div>
        </div>
      </div>
      <div className="flex pb-4 gap-2 md:gap-4 px-4 mt-1">
        <ButtonComponent
        textClassName="!text-primary text-body4 md:text-body3"
        baseClassName="border-primary w-full border-1"
        buttonText="View Details" 
        />
        <ButtonComponent 
        textClassName="!text-content1-foreground text-body4 md:text-body3"
        baseClassName="bg-gradient-to-t w-full from-content1-200 to-primary-300"
        buttonText="Add to cart" />
      </div>
    </div>
  );
};
