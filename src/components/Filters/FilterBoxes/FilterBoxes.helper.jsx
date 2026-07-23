export const isEveryFilterSelected = (selectedFilters, initialFilters) => {
  if (initialFilters?.length) {
    return initialFilters.every((item) => {
      const record = selectedFilters.find(
        (filter) => filter.keyMap === item.keyMap,
      );

      return record?.selected;
    });
  }

  return selectedFilters.every((filter) => filter.selected);
};

export const isFilterSelected = (key, selectedFilters, initialFilters) => {
  if (key === "total") {
    return isEveryFilterSelected(selectedFilters, initialFilters);
  }

  return selectedFilters.find((filter) => filter.keyMap === key)?.selected;
};

export const updateFilters = (key, selectedFilters, initialFilters) => {
  const filterKey = "keyMap";

  if (key === "total") {
    const allSelected = isEveryFilterSelected(
      selectedFilters,
      initialFilters,
      filterKey,
      filterKey,
    );

    return selectedFilters.map((filter) => ({
      ...filter,
      selected: !allSelected,
    }));
  }

  return selectedFilters.map((filter) =>
    filter[filterKey] === key
      ? {
          ...filter,
          selected: !filter.selected,
        }
      : filter,
  );
};
