function WithdrawalsTab() {
  return (
    <ul className="flex space-x-14 lg:space-x-1 justify-center py-1 mx-auto bg-gray-800 w-full lg:w-1/2 rounded-full">
      <li className="bg-gray-600 rounded-full px-10 py-1">
        <a href="/withdrawals">Request</a>
      </li>
      <li className="bg-gray-600 rounded-full px-10 py-1">
        <a href="/withdrawals/claims">Claims</a>
      </li>
    </ul>
  );
}

export default WithdrawalsTab;
