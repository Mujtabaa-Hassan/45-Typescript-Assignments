let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((number) => {
  let sufix = "th";
  if (number === 1) {
    sufix = "st";
  } else if (number === 2) {
    sufix = "nd";
  } else if (number === 3) {
    sufix = "rd";
  }
  console.log(`${number}${sufix}`);
});
