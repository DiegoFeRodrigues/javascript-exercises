
const findTheOldest = function(listaPessoas) {
  listaPessoas.filter(function (pessoa) {
    if (!pessoa.yearOfDeath) {
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

/*

** SOLUÇÕES ODIN: **

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function (people) {
  return people.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    return oldestAge < currentAge ? currentPerson : oldest;
  });
};

 ** ALTERNATIVE SOLUTION **
const getAge = function (person) {
  // The nullish coalescing assignment operator
  // only does the assignment if the left side is "nullish" (evaluates to undefined or null)
  // if the left side has any other value, no assignment happens
  // here, we use ??= to set the current year for our subtraction below only if there is no year of death
  person.yearOfDeath ??= new Date().getFullYear();

  return person.yearOfDeath - person.yearOfBirth;
};

const findTheOldest = function (people) {
  const peopleOldestToYoungest = people.toSorted(
    (person, nextPerson) => getAge(nextPerson) - getAge(person),
  );

  const oldestPerson = peopleOldestToYoungest[0];
  return oldestPerson;
};
*/

// Do not edit below this line
module.exports = findTheOldest;
