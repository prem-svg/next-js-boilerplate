/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button, Divider, cn } from "@heroui/react";
import Image from "next/image";
import type React from "react";
import { memo} from "react";


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
  onSubMenuClick: (subMenu: subListProps) => void;
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
    profileImage,
    ...rest
  } = props;

  return (
    <div
      className={cn(
        "max-h-screen gap-3 bg-background w-[4rem] flex flex-col items-center flex-sh",
        className
      )}
      {...rest}
    >
      {/* <div className="p-2.5 shrink-0">
        <Image
          src={revatureLogo}
          alt="Revature"
          className="w-[46px] h-[46px]"
        />
      </div> */}
      <div className="grow w-full py-2 gap-4 items-center flex flex-col scroll-smooth overflow-y-auto scrollbar-none ">
        {items?.map((item) => (
          <div key={item?.id}>
            <Button
              id={item?.id}
              className={cn(
                "self-center rounded-lg text-content2-400 hover:!text-primary-100 hover:!bg-primary-foreground h-[2.25rem] min-w-[2.25rem]",
                {
                  "!bg-primary-foreground !text-primary-100":
                    item?.route === activeKey,
                }
              )}
              color="primary"
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
      <div className="shrink-0">
        <Divider className="bg-content2-200" />
        <div className="pb-3 pt-5">
          <Image
            src={profileImage} // default revature logo
            alt="Profile"
            width={40} // Specify the width
            height={40} // Specify the height
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
});

Sidebar.displayName = "Sidebar";
