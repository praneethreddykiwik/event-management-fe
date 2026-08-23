export const isEveryFilterSelected = (selectedFilters) => {
  const deleted = selectedFilters.find((filter) => filter.keyMap === "deleted");

  const allOthersSelected = selectedFilters
    .filter((filter) => filter.keyMap !== "deleted")
    .every((filter) => filter.selected);

  return deleted ? deleted.selected && allOthersSelected : allOthersSelected;
};

export const isFilterSelected = (key, selectedFilters) => {
  if (key === "total") {
    return isEveryFilterSelected(selectedFilters);
  }

  return (
    selectedFilters.find((filter) => filter.keyMap === key)?.selected ?? false
  );
};

export const updateFilters = (key, selectedFilters) => {
  if (key === "total") {
    const allSelected = isEveryFilterSelected(selectedFilters);

    return selectedFilters.map((filter) => ({
      ...filter,
      selected: !allSelected,
    }));
  }

  return selectedFilters.map((filter) =>
    filter.keyMap === key
      ? {
          ...filter,
          selected: !filter.selected,
        }
      : filter,
  );
};
