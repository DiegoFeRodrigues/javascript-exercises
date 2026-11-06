
const findTheOldest = function(listaPessoas) {
  listaPessoas.filter(function (pessoa) {
    if ('yearOfDeath' in pessoa == false) {
      const dataAtual = new Date;
      pessoa.yearOfDeath = dataAtual.getFullYear();
    }
  });
  return listaPessoas.sort((p1, p2) =>
    (p1.yearOfDeath - p1.yearOfBirth)
      - (p2.yearOfDeath - p2.yearOfBirth)).at(-1);
};

let people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

findTheOldest(people);

people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

findTheOldest(people);

people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

findTheOldest(people);

// SOLUÇÃO COM ABORDAGEM APRENDIDA NO JavaScript30:
  //const findTheOldest = function(listaPessoas) {
  //  //return listaPessoas.sort((p1, p2) => (p1.yearOfDeath - p1.yearOfBirth) - (p2.yearOfDeath - p2.yearOfBirth));
  //  const maisVelho = listaPessoas.sort(function(p1, p2) {
  //    const ultimo = p1.yearOfDeath - p1.yearOfBirth;
  //    const proximo = p2.yearOfDeath - p2.yearOfBirth;
  //    return ultimo > proximo ? -1 : 1;
  //  });
  //  return maisVelho[0];
  //};
  //
  //findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
