"use client";

import { useParams } from "next/navigation";
import { useSuspenseQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";

import { Categories } from "./categories";
import { SearchInput } from "./search-input";
import { BreadcrumbNavigation } from "./breadcrumbs-navigation";

import { DEFAULT_BG_COLOR } from "../../../constants";

export const SearchFilters = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.categories.getMany.queryOptions());

  const params = useParams();
  const categoryParam = params.category as string | undefined;
  const activeCategory = categoryParam || "all";

  const activeCategoryData = data.find(
    (category) => category.slug === activeCategory
  );

  const activeCategoryColor = activeCategoryData?.color || DEFAULT_BG_COLOR;
  const activeCategoryName = activeCategoryData?.name || null;

  const activeSubcategory = params.subcategory as string | undefined;
  const activeSubcategoryName =
    activeCategoryData?.subcategories?.find(
      (subcategory) => subcategory.slug === activeSubcategory
    )?.name || null;

  return (
    <div
      className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full"
      style={{ backgroundColor: activeCategoryColor }}
    >
      <SearchInput />
      <div className="hidden lg:block">
        <Categories data={data} />
        <BreadcrumbNavigation
          activeCategory={activeCategory}
          activeCategoryName={activeCategoryName}
          activeSubcategoryName={activeSubcategoryName}
        />
      </div>
    </div>
  );
};

export const SearchFiltersSkeleton = () => {
  return (
    <div
      className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <SearchInput disabled />
      <div className="hidden lg:block">
        <div className="h-11" />
      </div>
    </div>
  );
};
