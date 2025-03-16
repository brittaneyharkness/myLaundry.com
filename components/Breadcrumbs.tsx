"use client";

import { CalciteMenu, CalciteMenuItem } from "@esri/calcite-components-react";
import "@esri/calcite-components/components/calcite-menu"
import "@esri/calcite-components/components/calcite-menu-item"
import { usePathname, useSearchParams } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const state = searchParams.get("state");
  const city = searchParams.get("city");

  const pathSegments = pathname.split("/").filter(Boolean); // Remove empty segments

  return (
    
  );
};

export default Breadcrumbs;
