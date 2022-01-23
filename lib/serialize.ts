export const serialize = (data: any[]) => {
  const serialized = data.map((item) => ({
    ...item,
    _id: JSON.parse(JSON.stringify(item._id)),
  }));
  return serialized;
};
