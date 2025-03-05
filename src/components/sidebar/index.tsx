/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { LogoutIcon } from "@/assets";
import { Button, Divider, cn, Image } from "@heroui/react";
import React from "react";
import { memo } from "react";

interface subListProps {
  listId: number;
  listIcon?: React.ReactNode | string;
  label?: string;
  route?: string;
}

export type NavItemProps = {
  id?: string;
  key: string;
  icon: React.ReactNode;
  route?: string;

  //  id?: number;
  name?: string;
  // icon?: React.ReactNode | string;
  subList?: subListProps[];
  // menuIcon?: React.ReactNode | string;
  // onMainMenuClick: (id: number) => void;
  className?: string;
};
export type SidebarProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  items?: NavItemProps[]; // items for sidebar
  activeKey?: string; // active key for selected item
  onSideBarChange: (data: NavItemProps) => void; // on navigation change callback
  OnPressColorMode?: () => void; // on press color mode callback
  OnPressLogout?: () => void; // on press logout callback
  profileImage?: any; // profile image default revature logo
  isColorMode?: boolean;
  isClinetApp?: boolean;
  className?: string;
};

export const Sidebar = memo((props: SidebarProps) => {
  const {
    className,
    activeKey = "/", // default active key
    items = [], // default items assigned
    onSideBarChange = () => undefined,
    ...rest
  } = props;

  // action items for sidebar footer
  const actionItems = React.useMemo(
    () => [
      {
        key: "logout",
        icon: <LogoutIcon />,
        onPress: () => {
          console.log("logout");
        },
      },
    ],
    []
  );
  
  return (
    <div
      className={cn(
        "h-screen gap-3 bg-background w-[4rem] flex flex-col items-center flex-sh border-r-1",
        className
      )}
      {...rest}
    >
      <div className="p-2.5 shrink-0">
        <Image
          src={
            "https://firebasestorage.googleapis.com/v0/b/neigbours-849d3.appspot.com/o/image%2016.png?alt=media&token=5de6d75f-e8fc-44d3-a118-80d10007d73c"
          }
          alt="Revature"
          className="w-[46px] h-[46px]"
        />
      </div>
      <div className="flex flex-col">
        <div className="grow w-full py-2 gap-3 items-center flex flex-col scroll-smooth overflow-y-auto scrollbar-none ">
          {items?.map((item) => (
            <div key={item?.id}>
              <Button
                id={item?.id}
                className={cn(
                  "self-center rounded-lg h-[2.25rem] min-w-[2.25rem]",
                  item?.route === activeKey
                    ? "!bg-primary-100 !text-primary-300"
                    : ""
                )}
                // color="primary"
                isIconOnly
                radius="sm"
                onPress={() => onSideBarChange?.(item)}
                variant="light"
              >
                {item?.icon}
              </Button>
            </div>
          ))}
        </div>
        <div className="shrink-0 align-bottom">
          <div className="w-full py-3 gap-4 justify-end flex flex-col scroll-smooth overflow-y-auto scrollbar-none">
            <Divider className="bg-content2-200" />
            {actionItems?.map((item: any, index: number) => (
              <Button
                key={String(index) + "actionItems"}
                className="self-center rounded-lg text-content2-400 hover:!text-primary-100 hover:!bg-primary-foreground h-[2.25rem] min-w-[2.25rem]"
                color="primary"
                isIconOnly
                radius="sm"
                onPress={() => item?.onPress?.()}
                variant="light"
              >
                {item?.icon}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

Sidebar.displayName = "Sidebar";
