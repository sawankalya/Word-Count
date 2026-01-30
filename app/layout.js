import "./globals.css";

export const metadata = {
  title: "Word Counter – Free Online Tool",
  description:
    "Free online word counter to count words, characters, sentences and paragraphs instantly."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <a href="/" className="logo">WordCounter</a>
          <div className="nav-links">
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
