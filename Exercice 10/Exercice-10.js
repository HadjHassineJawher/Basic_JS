const computeSumOfThreeElements = (array) => {
  if (!Array.isArray(array) || array.length !== 3 || array.some(isNaN)) {
    console.error("Error: Please provide an array of three numerical elements.");
    return NaN;
  }
  const sum = array.reduce((acc, current) => acc + current, 0);
  return sum;
}

const tab = [2, 5, 8];
const sum = computeSumOfThreeElements(tab);

if (!isNaN(sum)) {
  console.log(`Sum of the three elements [${tab}] is equal to  ${sum} .`);
}
