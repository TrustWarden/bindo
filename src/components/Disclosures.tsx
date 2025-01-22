import DisclosureBox from "./DisclosureBox";

function Disclosures() {
  return (
    <>
      <h3 className="text-lg text-gray-900 dark:text-gray-300 font-semibold ml-0 lg:ml-20">
        FAQ
      </h3>
      <DisclosureBox title="What is Bindo?">
        Bindo is the name of a family of open-source peer-to-system software
        tools deployed and functioning on the Ethereum and Polygon blockchain
        networks. The software enables users to mint transferable utility
        tokens, which receive rewards linked to the related validation
        activities of writing data to the blockchain, while the tokens can be
        used in other on-chain activities.
      </DisclosureBox>
      <DisclosureBox title="How does Bindo work?">
        While each network works differently, generally, the Bindo protocols
        batch user tokens to stake with validators and route the staking
        packages to network staking contracts. Users mint amounts of stTokens
        which correspond to the amount of tokens sent as stake and they receive
        staking rewards. When they unstake, they burn the stToken to initiate
        the network-specific withdrawal process to withdraw the balance of stake
        and rewards.
      </DisclosureBox>
      <DisclosureBox title="Is it safe to work with Bindo?">
        In order to work safe, Bindo fits the next points:
        <ul>
          <li>Open-sourcing & continuous review of all code.</li>
          <li>
            Committee of elected, best-in-class validators to minimise staking
            risk.
          </li>
          <li>
            Use of non-custodial staking service to eliminate counterparty risk.
          </li>
          <li>Use of DAO for governance decisions & to manage risk factors.</li>
          <li>
            Bindo has been audited by Certora, StateMind, Hexens, ChainSecurity,
          </li>
        </ul>
        Oxorio, MixBytes, SigmaPrime, Quantstamp. Bindo audits can be found in
        more detail here.
        <p>
          Usually when staking ETH you choose only one validator. In the case of
          Bindo you stake across many validators, minimising your staking risk.
        </p>
      </DisclosureBox>
      <DisclosureBox title="What are the risks of staking with Bindo?">
        There exist a number of potential risks when staking using liquid
        staking protocols.
        <ul>
          <li>
            Smart contract security There is an inherent risk that Bindo could
            contain a smart contract vulnerability or bug. The Bindo code is
            open-sourced, audited and covered by an extensive bug bounty program
            to minimise this risk. To mitigate smart contract risks, all of the
            core Bindo contracts are audited. Audit reports can be found{" "}
            <a
              className="text-blue-500"
              href="https://github.com/lidofinance/audits#lido-protocol-audits"
            >
              here
            </a>
            . Besides, Bindo is covered with a massive Immunefi bug bounty
            program.
          </li>
          <li>
            Slashing risk Validators risk staking penalties, with up to 100% of
            staked funds at risk if validators fail. To minimise this risk,
            Bindo stakes across multiple professional and reputable node
            operators with heterogeneous setups, with additional mitigation in
            the form of self-coverage.
          </li>
          <li>
            stToken price risk Users risk an exchange price of stTokens which is
            lower than inherent value due to withdrawal restrictions on Bindo,
            making arbitrage and risk-free market-making impossible. The Bindo
            DAO is driven to mitigate the above risks and eliminate them
            entirely to the extent possible. Despite this, they may still exist
            and, as such, it is our duty to communicate them.
          </li>
        </ul>
        The Bindo DAO is driven to mitigate the above risks and eliminate them
        entirely to the extent possible. Despite this, they may still exist.
      </DisclosureBox>
      <DisclosureBox title="What is Bindo staking APR for Ethereum?">
        Bindo staking APR for Ethereum = Protocol APR * (1 - Protocol fee)
        Protocol APR — the overall Consensus Layer (CL) and Execution Layer (EL)
        rewards received by Bindo validators to total pooled ETH estimated as
        the moving average of the last seven days. Protocol fee — Bindo applies
        a 10% fee on staking rewards that are split between node operators and
        the DAO Treasury. More about Bindo staking APR for Ethereum you could
        find on the{" "}
        <a className="text-blue-500" href="/">
          Ethereum landing page
        </a>{" "}
        and in our Docs.
      </DisclosureBox>
      <DisclosureBox title="What fee is applied by Bindo? What is this used for?">
        The protocol applies a 10% fee on staking rewards. This fee is split
        between node operators and the Bindo DAO. That means the users receive
        90% of the staking rewards returned by the networks.
      </DisclosureBox>
      <DisclosureBox title="What is stETH?">
        stETH is a transferable rebasing utility token representing a share of
        the total ETH staked through the protocol, which consists of user
        deposits and staking rewards. Because stETH rebases daily, it
        communicates the position of the share daily.
      </DisclosureBox>
      <DisclosureBox title="How can I get stETH?">
        You can get stETH many ways, including interacting with the smart
        contract directly. Yet, it is much easier to use a{" "}
        <a className="text-blue-500" href="/stake">
          Bindo Ethereum staking widget
        </a>
        , stake your tokens directly from{" "}
        <a
          className="text-blue-500"
          href="https://www.ledger.com/coin/wallet/ethereum"
        >
          Ledger Ethereum wallet
        </a>
        , or in other DEX Bindo integrations.
      </DisclosureBox>
      <DisclosureBox title="How can I use stETH?">
        You can use your stETH as collateral, for lending.
      </DisclosureBox>
      <DisclosureBox title="Where can I cover my stETH?">
        There are multiple coverage and insurer providers with different
        products for stETH:{" "}
        <ul>
          <li>Idle Finance</li>
          <li>Nexus Mutual</li>
          <li>Ribbon Finance</li>
          <li>Chainproof</li>
        </ul>{" "}
        Check with providers for coverage and insurer conditions.
      </DisclosureBox>
      <DisclosureBox title="How can I unstake stETH?">
        You can use our Withdrawals Request on Withdrawals tabs.
      </DisclosureBox>
    </>
  );
}

export default Disclosures;
