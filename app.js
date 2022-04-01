const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

const test1 = Math.floor(Math.random() * 6 + 1);
const test2 = Math.floor(Math.random() * 6 + 1);

img1.src = `images/dice${test1}.png`;
img2.src = `images/dice${test2}.png`;

const h1 = document.querySelector("h1");

if (test1 > test2) {
  h1.textContent = "Player 1 win !";
} else if (test1 < test2) {
  h1.textContent = "Player 2 win !";
} else if (test1 == test2) {
  h1.textContent = "Draw!";
}

const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  const img1 = document.querySelector(".img1");
  const img2 = document.querySelector(".img2");

  const test1 = Math.floor(Math.random() * 6 + 1);
  const test2 = Math.floor(Math.random() * 6 + 1);

  img1.src = `images/dice${test1}.png`;
  img2.src = `images/dice${test2}.png`;

  const h1 = document.querySelector("h1");

  if (test1 > test2) {
    h1.textContent = "Player 1 win !";
  } else if (test1 < test2) {
    h1.textContent = "Player 2 win !";
  } else if (test1 == test2) {
    h1.textContent = "Draw!";
  }

  const button = document.querySelector(".btn");
});
