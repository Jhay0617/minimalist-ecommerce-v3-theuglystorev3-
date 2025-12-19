import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

export const useFilterProducts = () => {
  const [filter, setFilter] = useState("all");

  async function fetchData() {
    const res = await fetch("https://fakestoreapi.com/products");

    const data = await res.json();

    return data;
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
    staleTime: 1000 * 60 * 1,
  });

  const itemsToDisplay = useMemo(() => {
    if (!data) return [];

    if (filter === "all") {
      return data;
    } else {
      return data.filter((item) => item.category === filter);
    }
  }, [data, filter]);

  const categories = useMemo(() => {
    if (!data) return ["all"];

    const unique = [...new Set(data.map((item) => item.category))];

    return ["all", ...unique];
  }, [data]);

  return { itemsToDisplay, categories, isLoading, error, setFilter, filter };
};
