type Item = {
  _id: string;
  updatedAt?: string;
};

export function mergeItems<T extends Item>(current: T[], next: T[]): T[] {
  const result = [...current];

  next.forEach((item) => {
    const index = result.findIndex((i) => i._id === item._id);

    if (index === -1) {
      result.push(item);
    } else {
      const currentTimestamp = new Date(result[index].updatedAt || '');
      const nextTimestamp = new Date(item.updatedAt || '');

      if (nextTimestamp > currentTimestamp) {
        result.splice(index, 1, item);
      }
    }
  });

  return result;
}
