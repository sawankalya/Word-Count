"use client";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [dark, setDark] = useState(false);
  const [copied, setCopied] = useState(false);

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpace = text.replace(/\s/g, "").length;
  const sentences = text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphs = text.trim()
    ? text.split(/\n+/).filter(Boolean).length
    : 0;

  const copyResults = () => {
    const result = `
Words: ${words}
Characters: ${chars}
Characters (no spaces): ${charsNoSpace}
Sentences: ${sentences}
Paragraphs: ${paragraphs}
    `;
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a word counter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A word counter is an online tool that counts words, characters, sentences, and paragraphs in a text."
      }
    },
    {
      "@type": "Question",
      "name": "Is this word counter free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, this word counter is completely free and does not require login."
      }
    },
    {
      "@type": "Question",
      "name": "Does this tool save my text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, all text is processed locally in your browser and never stored."
      }
    }
  ]
};
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
/>

  return (
    
    <main className={dark ? "dark" : ""}>
      <div className="container">
        <h1>Word Counter – Free Online Tool</h1>
        <p>
          Paste your text below to instantly count words, characters, sentences,
          and paragraphs.
        </p>

        {/* AD SLOT */}
        <div className="ad">Ad Slot</div>

        <button className="toggle" onClick={() => setDark(!dark)}>
          {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <textarea
          placeholder="Paste or type your text here..."
          value={text}
          onChange={(e) => setText(e.target.value.slice(0, 20000))}

        />

        {/* AD SLOT */}
        <div className="ad">Ad Slot</div>

        <div className="results">
          <div>
            <span>{words}</span>
            <small>Words</small>
          </div>
          <div>
            <span>{chars}</span>
            <small>Characters</small>
          </div>
          <div>
            <span>{charsNoSpace}</span>
            <small>No Spaces</small>
          </div>
          <div>
            <span>{sentences}</span>
            <small>Sentences</small>
          </div>
          <div>
            <span>{paragraphs}</span>
            <small>Paragraphs</small>
          </div>
        </div>

        <button className="copy" onClick={copyResults}>
          {copied ? "Copied!" : "Copy Results"}
        </button>

        {/* FAQ SECTION */}
        <section className="faq">
          <h2>Frequently Asked Questions</h2>

          <h3>What is a word counter?</h3>
          <p>
            A word counter is an online tool that counts words, characters,
            sentences, and paragraphs in a given text.
          </p>

          <h3>Is this word counter free?</h3>
          <p>Yes, this tool is completely free and requires no login.</p>

          <h3>Does this tool store my text?</h3>
          <p>No. All processing happens in your browser. Nothing is saved.</p>

          <h3>Who can use this tool?</h3>
          <p>
            Students, writers, bloggers, teachers, and professionals use this
            tool for essays, resumes, and articles.
          </p>
        </section>

        {/* AD SLOT */}
       <footer className="footer">
  <a href="/about" className="footer-btn">About</a>
  <a href="/contact" className="footer-btn">Contact</a>
  <a href="/privacy-policy" className="footer-btn">Privacy Policy</a>
</footer>


      </div>
    </main>
  );
}
