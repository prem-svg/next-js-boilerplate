"use client";

import { CheckUpIcon, Home, RecordIcon, TestIcon } from "@/assets";
import { Navbars, Sidebar } from "@/components";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const WithSideBar = () => {
  const route = useRouter();
  const pathname = usePathname();
  const onSideBarChange = (path?: string) => {
    if (path) {
      route.push(path);
    }
  };

  const bottomNavData = [
    {
      label: "Home",
      uniqeId: "home",
      icon: <Home />,
      route: "/home",
    },
    {
      label: "Tests",
      uniqeId: "tests",
      icon: <TestIcon />,
      route: "/tests",
    },
    {
      label: "Checkups",
      uniqeId: "checkups",
      icon: <CheckUpIcon />,
      route: "/checkups",
    },
    {
      label: "Record",
      uniqeId: "record",
      icon: <RecordIcon />,
    },
  ];
  return (
    <div>
      <div className="hidden md:block">
        <Sidebar
        
          items={[
            {
              id: "1",
              key: "home",
              route: "home",
              name: "Home",
              icon: <Home />,
            },
            {
              id: "2",
              key: "tests",
              name: "Tests",
              route: "tests",
              icon: <TestIcon />,
            },
            {
              id: "3",
              key: "checkup",
              name: "Checkups",
              route: "checkups",
              icon: <CheckUpIcon />,
            },
            {
              id: "4",
              key: "record",
              name: "Record",
              icon: <RecordIcon />,
            },
          ]}
          activeKey={pathname?.slice(4)}
          onSideBarChange={(item)=>onSideBarChange(item?.route)}
        />
      </div>
      <div className="md:hidden">
        <Navbars
          items={bottomNavData}
          uniqeId={pathname?.slice(4)}
          onPress={(item)=>onSideBarChange(item?.route)}

        />
      </div>
    </div>
  );
};
