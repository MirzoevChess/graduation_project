import { useState, useMemo } from "react";

export const useProductFilters = (products) => {
  const [filters, setFilters] = useState({
    priceFromInput: "",
    priceToInput: "",
    discountOnly: false,
    sortBy: "",
  });

  const filteredProducts = useMemo(() => {
    let result = [...products];

    const priceFrom = filters.priceFromInput
      ? Number(filters.priceFromInput)
      : null;
    const priceTo = filters.priceToInput ? Number(filters.priceToInput) : null;

    if (priceFrom !== null) {
      result = result.filter((p) => p.price >= priceFrom);
    }
    if (priceTo !== null) {
      result = result.filter((p) => p.price <= priceTo);
    }
    if (filters.discountOnly) {
      result = result.filter((p) => p.discont_price);
    }

    switch (filters.sortBy) {
      case "priceAsc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "nameAZ":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "nameZA":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    return result;
  }, [products, filters]);

  return { filters, setFilters, filteredProducts };
};
