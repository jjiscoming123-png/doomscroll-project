"use client";

import Logo from "../components/Logo";

const feedItems = [
  { time: "03:14", text: "down another 12%. just one more check.", candle: "🕯" },
  { time: "03:19", text: "this thread explains everything. reading it.", candle: "🕯" },
  { time: "03:27", text: "chart looks like it wants to bounce here", candle: "🕯" },
  { time: "03:31", text: "okay putting phone down after this one", candle: "🕯" },
  { time: "03:38", text: "why is the volume so weird at 3am", candle: "🕯" },
  { time: "03:44", text: "new post. new alpha. probably nothing.", candle: "🕯" },
  { time: "03:52", text: "down another 12%. just one more check.", candle: "🕯" },
  { time: "03:57", text: "this thread explains everything. reading it.", candle: "🕯" },
  { time: "04:03", text: "chart looks like it wants to bounce here", candle: "🕯" },
  { time: "04:09", text: "okay putting phone down after this one", candle: "🕯" },
  { time: "04:16", text: "why is the volume so weird at 3am", candle: "🕯" },
  { time: "04:21", text: "new post. new alpha. probably nothing.", candle: "🕯" },
];

export default function Home() {
  return (
    <main style={{ background: "var(--color-bg)", minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      {/* Ambient red glow */}
      <div className="glow-bottom" />

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "1.5rem 2rem", position: "relative", zIndex: 10 }}>
        <Logo size={32} />
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.2em", color: "var(--color-accent)" }}>
          DOOMSCROLL
        </span>
        <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#6b3333" }}>
          $DSCRL
        </span>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "4rem 2rem 3rem", position: "relative", zIndex: 10 }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#6b3333", letterSpacing: "0.2em", marginBottom: "1.5rem" }}>
          03:47 AM
        </p>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(3rem, 10vw, 7rem)", color: "#e8d0d0", lineHeight: 0.9, marginBottom: "0.5rem" }}>
          DOOM
        </h1>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(3rem, 10vw, 7rem)", color: "var(--color-accent)", lineHeight: 0.9, marginBottom: "2rem" }}>
          SCROLL
        </h1>
        <p style={{ color: "#9a5555", fontSize: "1rem", maxWidth: "420px", margin: "0 auto 2.5rem", lineHeight: 1.6 }}>
          One more post. One more chart.<br />One more candle. You can quit anytime.
        </p>

        {/* Red dot / flicker */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginBottom: "2rem" }}>
          <div className="animate-flicker" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-accent)" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#6b3333", letterSpacing: "0.15em" }}>LIVE FEED</span>
        </div>

        <a href="#join" style={{ display: "inline-block", border: "1px solid var(--color-accent)", color: "var(--color-accent)", padding: "0.75rem 2rem", fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.2em", textDecoration: "none" }}>
          BUY $DSCRL
        </a>
      </section>

      {/* Scrolling feed */}
      <section style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto", position: "relative", zIndex: 10 }}>
        <div style={{ overflow: "hidden", height: "320px", maskImage: "linear-gradient(transparent, black 15%, black 85%, transparent)" }}>
          <div className="animate-feed">
            {[...feedItems, ...feedItems].map((item, i) => (
              <div key={i} className="feed-item" style={{ padding: "0.75rem 1rem", marginBottom: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#6b3333", flexShrink: 0 }}>
                    {item.time}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "#c49090", lineHeight: 1.4 }}>
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <section style={{ padding: "4rem 2rem", maxWidth: "700px", margin: "0 auto", position: "relative", zIndex: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", textAlign: "center", marginBottom: "4rem" }}>
          {[
            { label: "avg session", value: "4h 37m" },
            { label: "last price check", value: "2 min ago" },
            { label: "times you said last one", value: "∞" },
          ].map((stat) => (
            <div key={stat.label} style={{ borderTop: "1px solid #330000", paddingTop: "1.25rem" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.1rem", fontWeight: 700, color: "var(--color-accent)", marginBottom: "0.4rem" }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "0.7rem", color: "#6b3333", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderLeft: "2px solid var(--color-dim)", paddingLeft: "1.5rem" }}>
          <p style={{ color: "#9a5555", lineHeight: 1.8, fontSize: "0.95rem" }}>
            You didn't plan to be here at 3am. You were going to sleep early.
            Then the chart moved. Then someone posted. Then you needed to know.
          </p>
          <p style={{ color: "#6b3333", lineHeight: 1.8, fontSize: "0.95rem", marginTop: "1rem" }}>
            $DSCRL is for everyone who refreshes one more time.
          </p>
        </div>
      </section>

      {/* Join section */}
      <section id="join" style={{ padding: "4rem 2rem", textAlign: "center", borderTop: "1px solid #1a0000", position: "relative", zIndex: 10 }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#6b3333", letterSpacing: "0.2em", marginBottom: "1.5rem" }}>
          JOIN THE FEED
        </p>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#e8d0d0", marginBottom: "2rem" }}>
          One more. That is all.
        </h2>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#" style={{ border: "1px solid #330000", color: "#9a5555", padding: "0.65rem 1.5rem", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.15em", textDecoration: "none" }}>
            TWITTER/X →
          </a>
          <a href="#" style={{ border: "1px solid #330000", color: "#9a5555", padding: "0.65rem 1.5rem", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.15em", textDecoration: "none" }}>
            TELEGRAM →
          </a>
          <a href="#" style={{ background: "var(--color-accent)", color: "#04010a", padding: "0.65rem 1.5rem", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.15em", textDecoration: "none", fontWeight: 700 }}>
            BUY $DSCRL →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "2rem", textAlign: "center", borderTop: "1px solid #1a0000" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "#3a1010", letterSpacing: "0.1em" }}>
          © 2025 DOOMSCROLL — $DSCRL — FOR ENTERTAINMENT ONLY — NOT FINANCIAL ADVICE
        </p>
      </footer>
    </main>
  );
}
