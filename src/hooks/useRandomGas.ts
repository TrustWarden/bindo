function useRandomGas() {
  const min = 7.8;
  const max = 10.2;
  const decimal = 2;

  const random = Math.random() * (max - min) + min;
  return parseFloat(random.toFixed(decimal));
}

export default useRandomGas;
