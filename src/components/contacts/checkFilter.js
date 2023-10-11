const checkFilter = (name, filter) => {
  name = name.toLowerCase();
  filter = filter.toLowerCase();
  return name.startsWith(filter);
};

export default checkFilter;
