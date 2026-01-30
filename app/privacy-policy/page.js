export const metadata = {
  title: "Privacy Policy – Word Counter",
  description: "Privacy policy for Word Counter tool website."
};

export default function PrivacyPolicy() {
  return (
    <main className="page">
      <h1>Privacy Policy</h1>
        <nav className="breadcrumb">
         <a href="/">Home</a> / <span>Privacy Policy</span>
        </nav>

      <p>
        This Privacy Policy describes how your information is handled when you
        use our Word Counter website.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We do not collect or store any personal data. All text entered into the
        tool is processed locally in your browser.
      </p>

      <h2>Cookies</h2>
      <p>
        We may use cookies from third-party services such as Google AdSense to
        show relevant advertisements.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        Third-party ad providers may use cookies or similar technologies to
        measure ad performance.
      </p>

      <h2>Consent</h2>
      <p>
        By using this website, you consent to this Privacy Policy.
      </p>

      <h2>Updates</h2>
      <p>
        This policy may be updated occasionally. Any changes will be reflected
        on this page.
      </p>
    </main>
  );
}
