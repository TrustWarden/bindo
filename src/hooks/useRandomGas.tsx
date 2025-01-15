function useRandomGas() {
  const min = 7;
  const max = 10.5;
  const decimal = 2;

  const random = Math.random() * (max - min) + min;
  return parseFloat(random.toFixed(decimal));
}

export default useRandomGas;
