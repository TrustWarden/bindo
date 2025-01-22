import HeaderLanding from "./HeaderLanding";
import LandingFooter from "./LandingFooter";
import PrivacySection from "./PrivacySection";

function Privacy() {
  return (
    <div className="bg-landing">
      <HeaderLanding />
      <div className="min-h-screen content-center pl-4 lg:pl-32 border-b border-gray-300">
        <p className="text-sm text-gray-400">
          Page last updated: January 31, 2024
        </p>
        <h1 className="text-6xl">Bindo Privacy</h1>{" "}
        <h1 className="text-6xl">Notice</h1>
      </div>

      <PrivacySection header="Introduction">
        This Privacy Notice (the “Privacy Notice”) explains how the personal
        data of individuals are handled – the “Data Subjects” or the “Data
        Subject”, or “you”, “your”, in connection with accessing and using the
        website and any services available at https://bindo.vercel.app (together
        referred to as the “Services”). If you are interested in how cookies are
        used and how to change your cookies choice, please go to section
        “Cookies and Automatically Collected Data”
      </PrivacySection>

      <PrivacySection header="Categories of Personal Data Collected, Purposes of and Bases for the Processing">
        When providing the Services, it could be processed certain personal data
        for the following purposes:
        <div className="flex flex-col space-y-5">
          <div className="mt-5 space-y-1">
            <h4 className="font-semibold">Purpose of processing</h4>
            <p>
              Communicating with you regarding your inquiries, questions or
              support tickets
            </p>
            <p>Sending email newsletters</p>
            <p>
              Provides access to users of the website to a decentralized
              protocol, known as “Bindo”
            </p>
            <p>Analyzing website visitors’ actions to improve Services</p>
          </div>
          <div className="mt-5 space-y-1">
            <h4 className="font-semibold">Personal data</h4>
            <p>
              Email address, subject of inquiry and its content, attachments and
              any other information you voluntarily provide
            </p>
            <p>Email address</p>
            <p>Wallet addresses, transaction and balance information</p>
            <p>See section “Cookies and Automatically Collected Data”</p>
          </div>
          <div className="mt-5 space-y-1">
            <h4 className="font-semibold">Legal ground (basis)</h4>
            <p>Legitimate interests / contractual obligations</p>
            <p>Your consent</p>
            <p>Contractual obligations (terms of use)</p>
            <p>Your consent</p>
          </div>

          <p>
            Your personal data are collected directly from you or from other
            parties you have authorized such collection. There is no process for
            special categories of personal data about you unless you voluntarily
            provide such data. If you would like to learn more about the
            definitions used throughout this document such as the “legal
            grounds”, “legitimate interests”, please visit the Information
            Commissioner’s Office’s website.
          </p>
        </div>
      </PrivacySection>

      <PrivacySection header="Cookies and Automatically Collected Data">
        As you navigate through and interact with website and the Services, you
        may be asked to consent to use cookies, which are small files placed on
        the hard drive of your computer or mobile device, and web beacons, which
        are small electronic files located on pages of the website, to collect
        certain information about your equipment, browsing actions, and
        patterns. The data is automatically collected from cookies and web
        beacons may include information from your web browser (such as browser
        type and browser language) and details of your visits to website,
        including traffic data, location data and logs, page views, length of
        visit and website navigation paths as well as information about your
        device and internet connection, including your IP address and how you
        interact with the Services. These data are collected this data in order
        to improve website and Services. The information is collected
        automatically and may also include statistical and performance
        information arising from your use of Services and website. This type of
        data will only be used in an aggregated and anonymized manner. You can
        disable/delete the cookies set by website — please find the appropriate
        instructions by following these links on how to implement the deletion
        in different browsers:
        <p className="border-b border-gray-200 mt-2 mb-2">
          — For Google Chrome browser please refer to this{" "}
          <a href="https://support.google.com/accounts/answer/32050?co=GENIE.Platform%3DDesktop&hl=en">
            instructions
          </a>
        </p>
        <p className="border-b border-gray-200 mt-2 mb-2">
          — For Firefox browser please look up
          <a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox">
            here
          </a>
        </p>
        <p className="border-b border-gray-200 mt-2 mb-2">
          — For Safari browser please
          <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac">
            visit
          </a>
        </p>
        <p className="border-b border-gray-200 mt-2 mb-2">
          — For Internet Explorer browser please{" "}
          <a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies">
            refer to
          </a>
        </p>
        <p>
          If you are a resident of the European Economic Area and you are under
          the age of 16, please do not submit any personal data through the
          Services and the website. Personal Information is not collected or
          processed about a child, where a child under the GDPR is defined as an
          individual below the age of 16 years old.
        </p>
      </PrivacySection>

      <PrivacySection header="Your Rights With Regard to the Personal Data Processing">
        <p>
          In connection with the accessing, browsing of the website and using
          the Services, you shall be entitled to exercise certain rights laid
          down by the GDPR and outlined herein below, however exercise of some
          of those rights may not be possible in relation to the website and
          Services taking account of the Services’ nature, manner, form and
          other applicable circumstances.
        </p>
        <p>
          Right to Access: you may request all personal data via email. Right to
          Rectification: exercise of the given right directly depends on the
          data category concerned: if it concerns online identifiers, then their
          rectification isn’t possible, but such categories of personal data as
          email address may be rectified by sending a request via e-mail. Right
          to Erasure (Right to be Forgotten): the personal data could be deleted
          by a request via e-mail. Consent Withdrawal Right: you shall be
          entitled to withdraw consent to the processing of the personal data to
          which you provided your consent. In particular, you can change your
          cookie choices by using cookie consent tool built in the website. You
          can exercise your right to withdraw consent by unsubscribing from
          email newsletter. Automated Decision-Making, Profiling: neither is
          being carried out, your consent will be sought before carrying out any
          such activities.
        </p>{" "}
        <p>
          You shall have the right to lodge a complaint with a competent data
          protection supervisory authority.
        </p>
      </PrivacySection>

      <PrivacySection header="Personal Data Storage Period or Criteria for Such Storage">
        Your Personal data will be stored till: they are necessary to render you
        the Services; your consent is no longer valid; your personal data have
        been deleted following your data deletion request; in other
        circumstances prescribed by applicable laws. In any event, your personal
        data will not being stored for periods longer than it is necessary for
        the purposes of the processing.
      </PrivacySection>

      <PrivacySection header="Personal Data Recipients and Transfer of Personal Data">
        For the purposes of rendering the Services to you and operating the
        website,your personal data may be shared with certain categories of
        recipients and under circumstances mentioned below: 01providers,
        consultants, advisors, vendors and partners acting as data processors
        (meaning they process your personal data on behalf and according to your
        instructions), which may supply hosting services, web analytics
        services, email marketing and automation services to run and operate the
        website, maintain, deliver and improve the Services. With all such
        parties we enter into data processing agreements required to be
        concluded by the applicable laws between controllers and processors to
        protect and secure the personal data by using appropriate technical and
        organizational measures; 02only in strict compliance with the applicable
        provisions, the personal data may be shared with governmental
        authorities upon their decision, receipt of court orders mandating to
        disclose the personal data. In any such case, it will be strived to
        disclose only a portion of the personal data which is definitely
        required to be disclosed, while continuing to be treated the rest of the
        data in confidence; 03with any other third parties, if it has been
        explicitly requested to do so by you and as long as it doesn’t infringe
        the applicable laws. Keep in mind that the use of services based on
        public blockchains intended to immutably record transactions across wide
        networks of computer systems. Many blockchains are open to forensic
        analysis which can lead to deanonymization and the unintentional
        revelation of personal data, in particular when blockchain data is
        combined with other data. Because blockchains are decentralized or
        third-party networks which are not controlled or operated, they can’t
        erase, modify, or alter personal data from such networks.
      </PrivacySection>

      <PrivacySection header="Security of Processing">
        Your personal data is protected from loss, misuse, or unauthorized
        access. It is utilized to protect the personal data, both during
        transmission and once it is received.
      </PrivacySection>

      <LandingFooter />
    </div>
  );
}

export default Privacy;
