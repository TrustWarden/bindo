import LendBox from "../components/LendBox";

function LendPage() {
  return (
    <>
      {/* <DisableMessage className="inset-y-48" /> */}
      <h1 className="flex justify-center font-thin -mb-3">Lending</h1>
      <span className="flex justify-center font-thin text-sm text-gray-500 mb-5">
        Lend WBTC and eran fees
      </span>
      <LendBox />
    </>
  );
}

export default LendPage;
