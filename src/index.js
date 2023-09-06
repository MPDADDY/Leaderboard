import './style.css';

const data = [
  {
    name: 'Amina',
    score: 30,
  },
  {
    name: 'Kagome',
    score: 300,
  },
  {
    name: 'Waweru',
    score: 50,
  },
  {
    name: 'Abujs',
    score: 10,
  },
  {
    name: 'Joe',
    score: 130,
  },
  {
    name: 'Bob',
    score: 100,
  },
];

function render(data) {
  const article = document.getElementById('leaderboard');
  for (let i = 0; i < data.length; i += 1) {
    const { name } = data[i];
    const { score } = data[i];
    const myP = document.createElement('p');
    myP.innerHTML = `${name}: ${score}`;
    article.appendChild(myP);
  }
}

function addClass() {
  const paragraphs = document.querySelectorAll('#leaderboard p');
  for (let i = 0; i < paragraphs.length; i += 1) {
    if (i % 2 === 0) {
      paragraphs[i].classList.add('gray');
    }
  }
}
render(data);
addClass();