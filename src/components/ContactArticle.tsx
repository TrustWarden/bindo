import ContactContent from "./ContactContent";

function ContactArticle() {
  return (
    <div className="flex flex-col items-center">
      <ContactContent title="Decentralization:" side="left">
        Empowering Users Decentralization puts control back into your hands,
        removing intermediaries and ensuring greater transparency. By using
        decentralized applications (dApps), you engage directly with blockchain
        technology, fostering a more open and secure digital ecosystem.
      </ContactContent>
      <ContactContent title="Why Responsible dApp Usage Matters:" side="right">
        Your actions on dApps directly influence your experience and security.
        Always verify the legitimacy of the platforms you interact with to
        protect your assets and privacy in the decentralized world.
      </ContactContent>
      <ContactContent
        title="Wallet Security: Your Digital Fortress:"
        side="left"
      >
        Your wallet is your gateway to decentralized finance. Use strong
        passwords, enable two-factor authentication, and never share your
        private keys to keep your funds safe.
      </ContactContent>
      <ContactContent title="Beware of Phishing Scams:" side="right">
        Always double-check website URLs and avoid clicking on unknown links.
        Cybersecurity awareness is key to staying safe while navigating
        decentralized networks.
      </ContactContent>
      <ContactContent title="Keep Your Software Updated:" side="left">
        Regularly update your wallet and dApp software to benefit from the
        latest security features and improvements. Staying up-to-date is an
        essential part of protecting your assets.
      </ContactContent>
      <ContactContent title="Educate Yourself and Stay Informed:" side="right">
        The decentralized space is constantly evolving. Stay informed by
        following reliable sources, participating in communities, and
        continually learning to maximize your benefits while minimizing risks.
      </ContactContent>
      <ContactContent
        title="Understanding Private Keys and Seed Phrases:"
        side="left"
      >
        Private keys and seed phrases are the backbone of your wallet security.
        Never share them with anyone, and store them offline in a secure
        location to prevent unauthorized access.
      </ContactContent>
      <ContactContent title="Verify Smart Contract Permissions:" side="right">
        Before interacting with any dApp, review the permissions you're
        granting. Avoid approving unlimited access to your wallet to maintain
        control over your funds.
      </ContactContent>
      <ContactContent title="Backup Your Wallet Safely:" side="left">
        Always have a secure backup of your wallet. Use hardware solutions or
        encrypted storage to ensure you can recover your assets in case of
        unexpected events.
      </ContactContent>
      <ContactContent title="Support Decentralized Communities:" side="right">
        Engaging with decentralized communities strengthens the ecosystem.
        Contribute, share knowledge, and collaborate responsibly to create a
        more robust network.
      </ContactContent>
      <ContactContent title="Understand Gas Fees and Transactions:" side="left">
        Decentralized networks often require gas fees for transactions. Learn
        how they work, monitor network congestion, and optimize your usage to
        avoid unnecessary costs.
      </ContactContent>
      <ContactContent title="Stay Alert to Emerging Threats:" side="right">
        The blockchain space is dynamic, with new threats emerging constantly.
        Stay vigilant and update your security practices to adapt to evolving
        challenges.
      </ContactContent>
    </div>
  );
}

export default ContactArticle;
