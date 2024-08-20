const names = ["oleh", "ilona", "volodia"];

// const newArray = names.with(0, "ihor");
// console.log(newArray)
// const capitalNames = names.map(function (name) {
// return name.toUpperCase();
// });
// console.log(capitalNames);
// console.log(names.indexOf('oleh') !== -1)

const people = [
  { name: "Oleh", budget: 400 },
  { name: "Ilona", budget: 500 },
  { name: "Volodia", budget: 10000 },
  { name: "Nestor", budget: 20000 },
];

/* not neccessary method of cufficent object

// let findedPesron;

// for (let person of people) {
//   if (person.budget === 400) {
//     findedPesron = person;
//   }
// };
*/

// more better method of find sufficient onject

/* const findedPesron = people.findIndex(function (person) {
  return person.budget === 300;
});
*/

/* best method of find sufficient onject
const findedPesron = people.find((p) => p.budget === 300);
*/

/* filter */

// const filtered = people.filter(function (p) {
//   return p.budget > 9000;
// });

// let sumBudget = 0;

// filtered.forEach(function (p) {
//   sumBudget += p.budget;
// });

/*
const filtered2 = people.filter((p) => p.budget > 10000);
*/

// const byBudget = (p) => p.budget > 5000;
// const toNumber = (p) => p.budget;

// const sumBudget2 = people
//   .filter(byBudget)
//   .map(toNumber)
//   .reduce((acc, p) => acc + p, 0);

// console.log(sumBudget2);

const string = "hi, bro";

const reversed = string.split("").toReversed().join("");

console.log(reversed);
