const isWinner = (s1, s2) => {
  if (+s1 > +s2) {
    return 'win';
  }
  if (+s1 < +s2) {
    return 'lose';
  }
  return 'draw';
};

export default isWinner;
