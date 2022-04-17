const guessMyNumber = (clientGuess, correctNumber) => {
  return clientGuess === correctNumber
    ? "correct 😍🎈"
    : clientGuess > correctNumber
    ? "hight "
    : "low";
};

const randomNumber = () => {
  return Math.trunc(Math.random() * 20) + 1;
};
export { guessMyNumber, randomNumber };
