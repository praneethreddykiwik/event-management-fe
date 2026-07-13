export const isEveryFilterSelected = (
  selectedFilters,
  initialFilters,
  filterKey = "value",
  initialFilterKey = "value",
) => {
  if (initialFilters?.length) {
    return initialFilters.every((item) => {
      const record = selectedFilters.find(
        (filter) => filter[filterKey] === item[initialFilterKey],
      );

      return record?.selected;
    });
  }

  return selectedFilters.every((filter) => filter.selected);
};

export const isFilterSelected = (
  key,
  selectedFilters,
  totalKey,
  initialFilters,
  filterKey = "value",
  initialFilterKey = "value",
) => {
  if (key === totalKey) {
    return isEveryFilterSelected(
      selectedFilters,
      initialFilters,
      filterKey,
      initialFilterKey,
    );
  }

  return selectedFilters.find(
    (filter) => filter[filterKey] === key,
  )?.selected;
};

export const updateFilters = (
  key,
  selectedFilters,
  totalKey,
  initialFilters,
  filterKey = "value",
  initialFilterKey = "value",
) => {
  if (key === totalKey) {
    const allSelected = isEveryFilterSelected(
      selectedFilters,
      initialFilters,
      filterKey,
      initialFilterKey,
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