const data = {
  "id": 9,
  "kind": "Education Platform",
  "theme": "mastery",
  "brand": "MASTERY",
  "kicker": "Learn by making what matters",
  "title": "Build the work that changes your trajectory.",
  "intro": "Live, mentor-led programs for ambitious builders who want sharper skills, stronger proof, and a community that keeps showing up.",
  "primary": "Explore programs",
  "secondary": "How it works",
  "metrics": [
    [
      "18k+",
      "active learners"
    ],
    [
      "84%",
      "finish their program"
    ],
    [
      "4.8/5",
      "mentor rating"
    ]
  ],
  "sectionTitle": "Momentum, designed in.",
  "sectionCopy": "A structured six-week rhythm turns passive learning into visible progress you can explain, defend, and ship.",
  "cards": [
    [
      "LIVE",
      "Expert studios",
      "Work through difficult decisions with practitioners who do the work at leading teams."
    ],
    [
      "1:8",
      "Small critique rooms",
      "Get precise feedback from a consistent mentor group—not generic comments from a crowd."
    ],
    [
      "SHIP",
      "Portfolio outcomes",
      "Finish with a serious case study, working product, or strategy you can use immediately."
    ]
  ],
  "showcaseTitle": "Programs starting soon",
  "showcases": [
    [
      "AI Product Systems",
      "Product · 6 weeks",
      "Design reliable AI features from prototype to production.",
      "Sep 08"
    ],
    [
      "Creative Frontend",
      "Engineering · 8 weeks",
      "Build expressive, fast interfaces with motion and depth.",
      "Sep 15"
    ],
    [
      "Brand Strategy Lab",
      "Strategy · 6 weeks",
      "Turn research into a position people can remember.",
      "Oct 02"
    ]
  ],
  "quote": "I arrived with scattered ability and left with a body of work that finally made my level obvious.",
  "quoteBy": "Jon Bell — Creative Frontend, Cohort 12",
  "cta": "Your next chapter needs a deadline.",
  "footerLine": "Serious learning for people in motion."
} as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Mark() {
  return (
    <span className="mark" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

export default function Home() {
  return (
    <main data-theme={data.theme}>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top"><Mark />{data.brand}</a>
        <div className="navLinks">
          <a href="#expertise">Expertise</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </div>
        <a className="navCta" href="#contact">Let&apos;s talk <Arrow /></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow">{data.kicker}</p>
          <h1>{data.title}</h1>
          <p className="lede">{data.intro}</p>
          <div className="actions">
            <a className="button primary" href="#work">{data.primary} <Arrow /></a>
            <a className="button secondary" href="#expertise">{data.secondary}</a>
          </div>
        </div>
        <div className="heroVisual" aria-label="Featured project preview">
          <div className="orb orbOne" />
          <div className="orb orbTwo" />
          <div className="visualTop"><span>Live overview</span><span className="status">● Updated now</span></div>
          <div className="visualCenter">
            <span className="visualLabel">Current signal</span>
            <strong>{data.metrics[0][0]}</strong>
            <span>{data.metrics[0][1]}</span>
          </div>
          <div className="bars" aria-hidden="true">
            {[42, 66, 54, 82, 72, 96, 84].map((height, index) => <i key={index} style={{ height: height + "%" }} />)}
          </div>
          <div className="visualFoot"><span>{data.kind}</span><span>© 2026</span></div>
        </div>
      </section>

      <section className="metrics shell" aria-label="Key metrics">
        {data.metrics.map(([value, label]) => (
          <div className="metric" key={label}><strong>{value}</strong><span>{label}</span></div>
        ))}
      </section>

      <section className="section shell" id="expertise">
        <header className="sectionHead">
          <p className="sectionIndex">01 / Approach</p>
          <div><h2>{data.sectionTitle}</h2><p>{data.sectionCopy}</p></div>
        </header>
        <div className="featureGrid">
          {data.cards.map(([code, title, copy], index) => (
            <article className="feature" key={title}>
              <span className="featureCode">{code}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span className="featureArrow">0{index + 1} <Arrow /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="work">
        <div className="shell">
          <header className="workHead"><p className="sectionIndex">02 / Selected</p><h2>{data.showcaseTitle}</h2></header>
          <div className="showcaseGrid">
            {data.showcases.map(([title, meta, copy, badge], index) => (
              <article className="showcase" key={title}>
                <div className={'art art' + (index + 1)}>
                  <span className="artNumber">0{index + 1}</span>
                  <div className="artShape" />
                  <span className="artBadge">{badge}</span>
                </div>
                <p className="showMeta">{meta}</p>
                <h3>{title}</h3>
                <p>{copy}</p>
                <a href="#contact" aria-label={'Learn more about ' + title}>View details <Arrow /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote shell" id="about">
        <p className="sectionIndex">03 / Perspective</p>
        <blockquote>“{data.quote}”</blockquote>
        <p className="quoteBy">{data.quoteBy}</p>
      </section>

      <section className="contact" id="contact">
        <div className="shell contactInner">
          <p className="eyebrow">Start a conversation</p>
          <h2>{data.cta}</h2>
          <a className="roundLink" href="mailto:hello@example.com" aria-label="Send an email"><Arrow /></a>
        </div>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top"><Mark />{data.brand}</a>
        <p>{data.footerLine}</p>
        <div><a href="#top">Instagram</a><a href="#top">LinkedIn</a><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
