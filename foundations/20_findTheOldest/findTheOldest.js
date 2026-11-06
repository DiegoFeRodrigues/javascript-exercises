
const findTheOldest = function(pessoas) {
  //if (!'yearOfDeath ' in pessoas) {
  //  const dataAtual = new Date;
  //  pessoas.yearOfDeath = dataAtual.getFullYear();
  //}
  const pessoasFiltradas = pessoas.filter(function (pessoa) {
    if ('yearOfDeath' in pessoa == false) {
      const dataAtual = new Date;
      pessoa.yearOfDeath = dataAtual.getFullYear();
    }
  })

  console.table(pessoas);

  const pessoasOrdenadas = pessoas.sort((p1, p2) =>
    (p1.yearOfDeath - p1.yearOfBirth) - (p2.yearOfDeath - p2.yearOfBirth));
  return pessoasOrdenadas.at(-1);
};

const testaCarly = function (lista) {
  return lista.find(p => p.name == "Carly");
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

console.log(findTheOldest(people));
console.table(testaCarly(people));

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

console.log(findTheOldest(people));
console.table(testaCarly(people));

// SOLUÇÃO COM ABORDAGEM APRENDIDA NO JavaScript30:
  //const findTheOldest = function(pessoas) {
  //  //return pessoas.sort((p1, p2) => (p1.yearOfDeath - p1.yearOfBirth) - (p2.yearOfDeath - p2.yearOfBirth));
  //  const maisVelho = pessoas.sort(function(p1, p2) {
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
