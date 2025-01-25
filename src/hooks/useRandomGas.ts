function useRandomNumber(min: number, max: number) {
  const decimal = 2;

  const random = Math.random() * (max - min) + min;
  return parseFloat(random.toFixed(decimal));
}

export default useRandomNumber;
