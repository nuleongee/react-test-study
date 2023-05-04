exports.max = numbers => Math.max(...numbers);

exports.min = numbers => Math.min(...numbers);

exports.avg = numbers => numbers.reduce((acc, current, index, { length }) => acc + current / length, 0);

exports.sort = numbers => numbers.sort((a, b) => a - b);

exports.median = numbers => {
  const middle = Math.floor(numbers.length / 2);

  if (numbers.length % 2) {
    return numbers[middle];
  }
  return (numbers[middle - 1] + numbers[middle]) / 2;
};

exports.mode = numbers => {
  const counts = new Map();
  numbers.forEach(n => {
    const count = counts.get(n) || 0;
    counts.set(n, count + 1);
  });
  const maxCount = Math.max(...counts.values());
  const modes = [...counts.keys()].filter(number => counts.get(number) === maxCount);

  if (modes.length === counts.size) {
    return null;
  }

  if (modes.length > 1) {
    return modes;
  }

  return modes[0];
};
