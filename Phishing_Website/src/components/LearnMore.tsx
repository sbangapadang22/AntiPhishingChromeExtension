import Header from "./Header";
import Footer from "./Footer";

function LearnMore() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "60px" }}>
      <h1 style={{ textAlign: "center", padding: "40px" }}>
        Learn More About Phishing
      </h1>

      <section id="section1" style={{ marginBottom: "20px" }}>
        <h2>What is a phishing attack?</h2>
        <p>
          Phishing is a deceptive social engineering attack used to steal user
          data, such as login credentials and credit card numbers. Attackers
          impersonate trusted entities, tricking victims into clicking malicious
          links through emails or messages. Consequences can include
          unauthorized purchases, fund theft, and identity theft. Phishing
          attacks are prevalent in both individual and corporate settings,
          leading to severe financial losses and compromising security. Stay
          vigilant to protect against phishing attempts and safeguard sensitive
          information.
        </p>
      </section>
      <section id="section2" style={{ marginBottom: "40px" }}>
        <h2>Phishing techniques</h2>
        <p>
          Email phishing is a strategic numbers game, where attackers send out
          thousands of deceptive messages to obtain valuable information or
          funds. Attackers employ various techniques to increase success rates,
          such as mimicking legitimate emails with matching phrasing, typefaces,
          logos, and signatures. Creating a sense of urgency, often by
          threatening account expiration, manipulates users into acting quickly
          and with less scrutiny. Phishing links may resemble legitimate ones
          but often have misspelled domain names. Another sophisticated form is
          spear phishing, targeting specific individuals or enterprises with
          tailored messages, exploiting knowledge about the organization for
          more profound impact. Recognizing and understanding these phishing
          techniques is crucial to staying vigilant against cyber threats.
        </p>
      </section>
      <section id="section3">
        <h2>How to prevent phishing</h2>
        <p>
          Preventing phishing attacks requires a collaborative effort from both
          users and enterprises. Users can enhance their security by staying
          vigilant, recognizing subtle mistakes in spoofed messages, and
          questioning unexpected emails. For enterprises, implementing
          two-factor authentication (2FA) proves highly effective, adding an
          extra layer of verification during logins. Strict password management
          policies, including regular password changes and avoiding password
          reuse, contribute significantly to security. Educational campaigns
          further empower users with knowledge, promoting secure practices like
          refraining from clicking on external email links. By combining user
          vigilance with robust enterprise measures, the risk of falling victim
          to phishing attacks can be significantly reduced.
        </p>
      </section>
    </div>
  );
}
export default LearnMore;
