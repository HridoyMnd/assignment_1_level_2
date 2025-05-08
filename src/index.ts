function formatString(input: string, toUpper?: boolean) {
  if (toUpper === true || toUpper === undefined) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
  const HighestRating = items?.filter((item) => item?.rating >= 4);
  return HighestRating;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
  }

