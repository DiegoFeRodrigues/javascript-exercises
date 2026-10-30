
const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
];

const getTheTitles = function(livros) {
  return livros.map(l => l.title);
};

getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
