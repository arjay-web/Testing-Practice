export function analyzeArray(arr) {
  const result = arr.reduce(
    (acc, curr) => {
      acc.sum += curr;

      if (curr < acc.min) acc.min = curr;
      if (curr > acc.max) acc.max = curr;

      return acc;
    },
    {
      sum: 0,
      min: arr[0],
      max: arr[0],
    },
  );

  return {
    average: result.sum / arr.length,
    min: result.min,
    max: result.max,
    length: arr.length,
  };
}
