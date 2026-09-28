import { useMemo, useState } from "react";

const Arrow = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="m5 10 3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Spark = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2c.7 5.3 4.7 9.3 10 10-5.3.7-9.3 4.7-10 10-.7-5.3-4.7-9.3-10-10 5.3-.7 9.3-4.7 10-10Z" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const Logo = () => (
  <a className="logo" href="/" aria-label="Ascend Play home">
    <span className="logo-mark" aria-hidden="true"><span /><span /><span /></span>
    <span>ascend<span className="logo-accent">play</span></span>
  </a>
);

const PageNav = ({ active }: { active?: "consultancy" | "marketing" }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="nav shell" aria-label="Main navigation">
      <Logo />
      <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
        <a className={active === "consultancy" ? "active" : ""} href="/consultancy">Consultancy</a>
        <a className={active === "marketing" ? "active" : ""} href="/marketing">Marketing</a>
        <a href="/#calculator">Growth calculator</a>
        <a href="/#insights">Insights</a>
      </div>
      <a className="nav-cta" href="mailto:shayaan@ascendplay.co.uk">Book a growth call <Arrow /></a>
      <button className="menu-button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span />
      </button>
    </nav>
  );
};

const ButtonLink = ({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "light" }) => (
  <a href={href} className={`button button-${variant}`}>
    <span>{children}</span><Arrow />
  </a>
);

const Kicker = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <p className={`kicker ${light ? "kicker-light" : ""}`}><span className="kicker-dot" />{children}</p>
);

const AccordionItem = ({ number, title, children, open, onClick }: { number: string; title: string; children: React.ReactNode; open: boolean; onClick: () => void }) => (
  <div className={`accordion-item ${open ? "is-open" : ""}`}>
    <button className="accordion-trigger" onClick={onClick} aria-expanded={open}>
      <span className="accordion-number">{number}</span>
      <span>{title}</span>
      <span className="accordion-plus" aria-hidden="true">{open ? "−" : "+"}</span>
    </button>
    <div className="accordion-body"><p>{children}</p></div>
  </div>
);

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [monthlyVisitors, setMonthlyVisitors] = useState(4500);
  const [averageSpend, setAverageSpend] = useState(11);
  const [conversionLift, setConversionLift] = useState(12);

  const opportunity = useMemo(
    () => Math.round(monthlyVisitors * averageSpend * (conversionLift / 100) * 12),
    [monthlyVisitors, averageSpend, conversionLift],
  );

  return (
    <main id="top">
      <nav className="nav shell" aria-label="Main navigation">
        <Logo />
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="/consultancy" onClick={() => setMenuOpen(false)}>Consultancy</a>
          <a href="/marketing" onClick={() => setMenuOpen(false)}>Marketing</a>
          <a href="#calculator" onClick={() => setMenuOpen(false)}>Growth calculator</a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>Our approach</a>
          <a href="#insights" onClick={() => setMenuOpen(false)}>Insights</a>
        </div>
        <a className="nav-cta" href="mailto:shayaan@ascendplay.co.uk">Book a growth call <Arrow /></a>
        <button className="menu-button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
      </nav>

      <section className="hero shell">
        <div className="hero-copy">
          <Kicker>Growth partners for ambitious play businesses</Kicker>
          <h1>Build a soft play business that <em>goes further.</em></h1>
          <p className="hero-lede">Practical consultancy and smarter marketing for UK soft play owners who want more bookings, stronger margins and a business built to last.</p>
          <div className="hero-actions">
            <ButtonLink href="#contact">Book your free growth call</ButtonLink>
            <a className="text-link" href="#calculator">Calculate your opportunity <span>↓</span></a>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack">
              <img src="https://images.unsplash.com/photo-1730295003911-460cbe6a3886?auto=format&fit=crop&w=96&q=80" alt="" />
              <img src="https://images.unsplash.com/photo-1548336614-9dbab95656ff?auto=format&fit=crop&w=96&q=80" alt="" />
              <span>50+</span>
            </div>
            <p><strong>Trusted by independent owners</strong><br />across the UK</p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img src="https://images.unsplash.com/photo-1759330203240-b89ccee8840f?auto=format&fit=crop&w=1400&q=88" alt="A colourful indoor soft play area with slides and a ball pit" />
          </div>
          <div className="metric-card">
            <span className="metric-icon"><Spark /></span>
            <p>Average client growth</p>
            <strong>+27%</strong>
            <small>in the first 12 months</small>
          </div>
          <div className="hero-stamp" aria-hidden="true">
            <span>Strategy • Growth • Marketing •</span>
            <strong>AP</strong>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Our areas of expertise">
        <div>
          <span>Strategy</span><i>✦</i><span>Guest experience</span><i>✦</i><span>Revenue growth</span><i>✦</i><span>Marketing</span><i>✦</i><span>Operations</span><i>✦</i><span>Strategy</span>
        </div>
      </section>

      <section className="intro shell" id="services">
        <div>
          <Kicker>Not another generic agency</Kicker>
          <h2>We know play.<br />We know <em>business.</em></h2>
        </div>
        <div className="intro-copy">
          <p>Running a soft play venue is unlike running any other business. Footfall shifts, costs climb and every guest experience matters. That is why our advice starts with your floor, your numbers and your goals.</p>
          <a className="text-link" href="#approach">Why Ascend Play <Arrow /></a>
        </div>
      </section>

      <section className="services shell">
        <article className="service-card service-primary">
          <div className="service-top">
            <span className="service-number">01 / PRIMARY SERVICE</span>
            <span className="service-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M4 19V9m6 10V5m6 14v-7m4 7H2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></span>
          </div>
          <div>
            <h3>Consultancy that turns busy into profitable.</h3>
            <p>Clear, experienced guidance across pricing, operations, team performance and guest experience. We find the gaps, prioritise the opportunities and help you make change happen.</p>
            <ul>
              <li><Check /> Commercial health check</li>
              <li><Check /> Growth strategy & implementation</li>
              <li><Check /> New venue & expansion support</li>
            </ul>
            <ButtonLink href="/consultancy" variant="light">Explore consultancy</ButtonLink>
          </div>
        </article>
        <article className="service-card service-secondary">
          <div className="service-top">
            <span className="service-number">02 / SECONDARY SERVICE</span>
            <span className="service-icon"><svg viewBox="0 0 24 24" fill="none"><path d="M4 17.5V20h2.5L18.2 8.3l-2.5-2.5L4 17.5Zm13.1-13.1 2.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </div>
          <div>
            <h3>Marketing that fills sessions, not just feeds.</h3>
            <p>Commercially-minded marketing made for local family venues. We connect your brand, campaigns and customer journey to the thing that matters: more valuable visits.</p>
            <ul>
              <li><Check /> Local growth campaigns</li>
              <li><Check /> Brand, website & social strategy</li>
              <li><Check /> Retention & customer journeys</li>
            </ul>
            <ButtonLink href="/marketing" variant="secondary">Explore marketing</ButtonLink>
          </div>
        </article>
      </section>

      <section className="calculator-section" id="calculator">
        <div className="shell calculator-grid">
          <div className="calculator-copy">
            <Kicker light>Your growth opportunity</Kicker>
            <h2>What could a small uplift be worth?</h2>
            <p>Adjust the figures to match your venue. See the potential annual revenue hiding in modest improvements to spend and conversion.</p>
            <div className="calculator-note"><Spark /><span>This is an indicative snapshot, not a promise. On a growth call, we will help you find the real levers in your business.</span></div>
          </div>
          <div className="calculator-card">
            <label>
              <span><strong>Monthly visitors</strong><b>{monthlyVisitors.toLocaleString("en-GB")}</b></span>
              <input type="range" min="1000" max="12000" step="250" value={monthlyVisitors} onChange={(event) => setMonthlyVisitors(Number(event.target.value))} />
              <small><span>1,000</span><span>12,000</span></small>
            </label>
            <label>
              <span><strong>Average guest spend</strong><b>£{averageSpend}</b></span>
              <input type="range" min="6" max="25" value={averageSpend} onChange={(event) => setAverageSpend(Number(event.target.value))} />
              <small><span>£6</span><span>£25</span></small>
            </label>
            <label>
              <span><strong>Target uplift</strong><b>{conversionLift}%</b></span>
              <input type="range" min="3" max="30" value={conversionLift} onChange={(event) => setConversionLift(Number(event.target.value))} />
              <small><span>3%</span><span>30%</span></small>
            </label>
            <div className="calculator-result">
              <span>Potential annual opportunity</span>
              <strong>£{opportunity.toLocaleString("en-GB")}</strong>
              <a href="#contact">Let’s find yours <Arrow /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="approach shell" id="approach">
        <div className="approach-copy">
          <Kicker>How we work</Kicker>
          <h2>Practical support.<br /><em>Measurable progress.</em></h2>
          <p>No dense decks or one-size-fits-all playbooks. We work alongside you, turning insight into a clear, achievable plan.</p>
          <div className="founder-note">
            <img src="https://images.unsplash.com/photo-1730295004949-d3f6c773aedd?auto=format&fit=crop&w=180&q=80" alt="A friendly business adviser" />
            <p><span>“Built for owners, not boardrooms.”</span><strong>The Ascend Play team</strong></p>
          </div>
        </div>
        <div className="accordion">
          <AccordionItem number="01" title="Discover what is really happening" open={activeStep === 0} onClick={() => setActiveStep(0)}>
            We get close to your numbers, team and guest journey to separate assumptions from the opportunities that will genuinely move the needle.
          </AccordionItem>
          <AccordionItem number="02" title="Build your clearest route forward" open={activeStep === 1} onClick={() => setActiveStep(1)}>
            You get a focused roadmap with commercial priorities, practical actions and measures everyone can understand.
          </AccordionItem>
          <AccordionItem number="03" title="Make progress stick" open={activeStep === 2} onClick={() => setActiveStep(2)}>
            We stay alongside you to support your team, review results and adapt the plan as your business grows.
          </AccordionItem>
        </div>
      </section>

      <section className="quote-section">
        <div className="shell quote-grid">
          <div className="quote-mark">“</div>
          <blockquote>
            Ascend helped us see our venue differently. Within weeks, we had a sharper offer, a team that understood the plan and weekends that were working harder for us.
          </blockquote>
          <div className="quote-person">
            <div className="quote-avatar">SM</div>
            <p><strong>Sarah Mitchell</strong><span>Independent venue owner, Midlands</span></p>
          </div>
        </div>
      </section>

      <section className="insights shell" id="insights">
        <div className="section-heading">
          <div><Kicker>Useful from the first visit</Kicker><h2>Ideas to help you<br /><em>run better today.</em></h2></div>
          <a className="text-link" href="#insights">View all insights <Arrow /></a>
        </div>
        <div className="insight-grid">
          <article className="insight-featured">
            <div className="insight-image">
              <img src="https://images.unsplash.com/photo-1780932333368-4995b2e14174?auto=format&fit=crop&w=1100&q=85" alt="Children enjoying a colourful indoor play centre" />
              <span>Guest experience</span>
            </div>
            <div className="insight-content">
              <small>6 MIN READ</small>
              <h3>The 10-minute venue walk that reveals your biggest guest experience gaps</h3>
              <a href="#contact" aria-label="Read article"><Arrow /></a>
            </div>
          </article>
          <div className="insight-list">
            <article>
              <span className="insight-tag">PRICING</span>
              <h3>Are your party packages working hard enough?</h3>
              <p>A practical way to check margin, value and choice without racing to discount.</p>
              <a href="#contact">Read guide <Arrow /></a>
            </article>
            <article>
              <span className="insight-tag">OPERATIONS</span>
              <h3>Five numbers every soft play owner should know weekly</h3>
              <p>A simple scorecard for making faster, calmer commercial decisions.</p>
              <a href="#contact">Read guide <Arrow /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" />
        <div className="contact-inner">
          <Kicker light>A better business starts with a conversation</Kicker>
          <h2>Ready to see how far<br />your venue could go?</h2>
          <p>Book a free, no-pressure 30-minute growth call. We will talk through where you are, what is getting in the way and where the clearest opportunity might be.</p>
          <ButtonLink href="mailto:shayaan@ascendplay.co.uk" variant="light">Book your free growth call</ButtonLink>
          <small>No hard sell. Just a useful conversation.</small>
        </div>
      </section>

      <footer className="footer shell">
        <div className="footer-main">
          <div><Logo /><p>Helping UK soft play businesses<br />grow stronger, smarter and happier.</p></div>
          <div><strong>Explore</strong><a href="/consultancy">Consultancy</a><a href="/marketing">Marketing</a><a href="#insights">Insights</a></div>
          <div><strong>Connect</strong><a href="mailto:shayaan@ascendplay.co.uk">shayaan@ascendplay.co.uk</a><a href="#contact">LinkedIn</a><a href="#contact">Instagram</a></div>
          <div className="footer-news"><strong>Useful ideas, once a month.</strong><p>Practical advice for ambitious venue owners.</p><a href="mailto:shayaan@ascendplay.co.uk?subject=Join the newsletter">Join the newsletter <Arrow /></a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Ascend Play Ltd.</span><span>Privacy &nbsp; Terms</span><span>Made with purpose in the UK</span></div>
      </footer>
    </main>
  );
}

const PageFooter = () => (
  <footer className="footer shell">
    <div className="footer-main">
      <div><Logo /><p>Helping UK soft play businesses<br />grow stronger, smarter and happier.</p></div>
      <div><strong>Explore</strong><a href="/consultancy">Consultancy</a><a href="/marketing">Marketing</a><a href="/#insights">Insights</a></div>
      <div><strong>Connect</strong><a href="mailto:shayaan@ascendplay.co.uk">shayaan@ascendplay.co.uk</a><a href="#contact">LinkedIn</a><a href="#contact">Instagram</a></div>
      <div className="footer-news"><strong>Useful ideas, once a month.</strong><p>Practical advice for ambitious venue owners.</p><a href="mailto:shayaan@ascendplay.co.uk?subject=Join the newsletter">Join the newsletter <Arrow /></a></div>
    </div>
    <div className="footer-bottom"><span>© 2026 Ascend Play Ltd.</span><span>Privacy &nbsp; Terms</span><span>Made with purpose in the UK</span></div>
  </footer>
);

const PageContact = ({ title }: { title: string }) => (
  <section className="contact shell" id="contact">
    <div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" />
    <div className="contact-inner">
      <Kicker light>The first conversation is free</Kicker>
      <h2>{title}</h2>
      <p>Thirty to forty-five minutes. You leave with two or three costed opportunities in your own business, written down — whether or not we ever work together.</p>
      <ButtonLink href="mailto:shayaan@ascendplay.co.uk" variant="light">Book your free growth call</ButtonLink>
      <small>No hard sell. Just a useful conversation.</small>
    </div>
  </section>
);

const diagnosticQuestions = [
  ["01", "What fraction of admissions buy anything at all?", "Your F&B attach rate is often the largest lever in the building."],
  ["02", "What is the margin on your top twenty lines?", "Not the café as a whole — line by line, after waste and labour."],
  ["03", "What does your rota cost on a wet Tuesday?", "Labour is earned or lost by day-part, not as a weekly total."],
  ["04", "How many first-time families return in 90 days?", "The closest thing this industry has to a single health metric."],
  ["05", "What is a party guest worth after the party?", "A room full of local families is your cheapest acquisition channel."],
  ["06", "Which weekly session loses money when it opens?", "Knowing which one changes rotas, pricing and hours in an afternoon."],
];

function ConsultancyPage() {
  const [known, setKnown] = useState<number[]>([]);
  const [admissions, setAdmissions] = useState(38000);
  const [uplift, setUplift] = useState(0.9);
  const toggleQuestion = (index: number) => setKnown((items) => items.includes(index) ? items.filter((item) => item !== index) : [...items, index]);
  const annualValue = Math.round(admissions * uplift);

  return (
    <main>
      <PageNav active="consultancy" />
      <section className="page-hero shell">
        <div>
          <Kicker>Commercial consultancy for soft play & FECs</Kicker>
          <h1>Make more from the business you <em>already have.</em></h1>
          <p className="hero-lede">The commercial discipline larger groups run as standard, at the scale and cost of an independent site. We rebuild the numbers, identify the levers and work alongside your team to make change stick.</p>
          <div className="hero-actions"><ButtonLink href="#contact">Start with your numbers</ButtonLink><a className="text-link" href="#diagnostic">Take the six-question check <span>↓</span></a></div>
        </div>
        <div className="consult-hero-card">
          <span className="service-number">A TYPICAL 38,000-ADMISSION SITE</span>
          <div className="revenue-shift"><div><small>REVENUE / ADMISSION</small><strong>£14.75</strong></div><Arrow /><div><small>ENGINEERED MODEL</small><strong>£16.55</strong></div></div>
          <div className="consult-stat"><strong>+£68,400</strong><span>illustrative annual revenue<br />with admission price held flat</span></div>
          <p>Secondary spend, party architecture and cost control — not one extra family through the door.</p>
        </div>
      </section>

      <section className="principles-strip"><div className="shell"><span>Revenue per admission</span><i /><span>Sales per labour hour</span><i /><span>Visit frequency</span></div></section>

      <section className="diagnostic-section shell" id="diagnostic">
        <div className="diagnostic-heading">
          <div><Kicker>Your 3-minute diagnostic</Kicker><h2>Six questions.<br /><em>How many can you answer?</em></h2></div>
          <div className="diagnostic-score">
            <strong>{known.length}<small>/ 6</small></strong>
            <p>{known.length < 3 ? "There is likely valuable commercial data hiding in your business." : known.length < 6 ? "You have visibility. Now turn those numbers into action." : "Strong foundations. Let’s see how hard the numbers can work."}</p>
          </div>
        </div>
        <div className="diagnostic-grid">
          {diagnosticQuestions.map((question, index) => (
            <button key={question[0]} className={`diagnostic-card ${known.includes(index) ? "is-known" : ""}`} onClick={() => toggleQuestion(index)}>
              <span>{question[0]}</span><span className="diagnostic-check">{known.includes(index) ? "✓" : "+"}</span>
              <strong>{question[1]}</strong><p>{question[2]}</p><small>{known.includes(index) ? "YES, I KNOW THIS" : "CLICK IF YOU KNOW"}</small>
            </button>
          ))}
        </div>
        <p className="diagnostic-disclaimer">This is not a criticism — it is the opportunity. We answer all six from your own source data in the first thirty days.</p>
      </section>

      <section className="engineering-section">
        <div className="shell engineering-grid">
          <div>
            <Kicker light>F&B engineering</Kicker>
            <h2>What is 90p a head <em>really worth?</em></h2>
            <p>Admission is capacity-capped and openly price-compared. Secondary spend is different: it grows inside fixed footfall and is almost entirely within your control.</p>
            <div className="engineering-points">
              <span><b>01</b> Rebuild menu architecture around contribution, not popularity</span>
              <span><b>02</b> Lift attach rate through service moments and placement</span>
              <span><b>03</b> Control waste line-by-line, not at café level</span>
            </div>
          </div>
          <div className="mini-calculator">
            <span className="service-number">SECONDARY SPEND CALCULATOR</span>
            <label><span>Annual admissions <b>{admissions.toLocaleString("en-GB")}</b></span><input type="range" min="10000" max="100000" step="1000" value={admissions} onChange={(event) => setAdmissions(Number(event.target.value))} /></label>
            <label><span>Extra spend per head <b>£{uplift.toFixed(2)}</b></span><input type="range" min=".1" max="3" step=".1" value={uplift} onChange={(event) => setUplift(Number(event.target.value))} /></label>
            <div><small>ADDITIONAL ANNUAL REVENUE</small><strong>£{annualValue.toLocaleString("en-GB")}</strong><p>before one extra admission or square foot</p></div>
          </div>
        </div>
      </section>

      <section className="psychology shell">
        <div className="section-heading"><div><Kicker>Customer journey psychology</Kicker><h2>Two customers.<br /><em>One return decision.</em></h2></div><p>The child wants fun and novelty. The parent wants a clean table, a clear sightline, decent coffee and ninety minutes of not being needed.</p></div>
        <div className="journey-map">
          {["The first 10 seconds", "A table with a sightline", "The counter decision", "The toilet test", "The party host", "The goodbye"].map((item, index) => (
            <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong><p>{index === 0 ? "Recognition before transaction." : index === 1 ? "Comfort removes the urge to leave." : index === 2 ? "Ease and timing lift attach rate." : index === 3 ? "The invisible trust signal." : index === 4 ? "Control is remembered more than décor." : "The moment the next visit begins."}</p></div>
          ))}
        </div>
        <div className="ninety-five"><strong>95%</strong><p>of what decides the return visit is delivered by people and service</p><span>5% equipment</span></div>
      </section>

      <section className="method-section">
        <div className="shell">
          <Kicker light>Foundations first. Measurement second. Marketing last.</Kicker>
          <div className="method-grid">
            <article>
              <h3>Diagnostic</h3>
              <p>P&L, item-level EPOS, bookings, rota, cost of goods and half a day on site. You get six answers and a ranked, valued opportunity list.</p>
            </article>
            <article>
              <h3>Build</h3>
              <p>Service standards, margin and pricing architecture, party structure, then retention mechanics — sequenced so your team can absorb it.</p>
            </article>
            <article>
              <h3>Operate &amp; compound</h3>
              <p>Monthly review against baseline, one lever tested in depth, quarterly reforecast and improvements that survive August and February.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="packages shell">
        <div className="section-heading"><div><Kicker>Ways to work together</Kicker><h2>Matched to how deep<br /><em>you want us in.</em></h2></div><p>Rolling monthly. Thirty days’ notice. No tie-in. Everything we build is documented and handed to your team.</p></div>
        <div className="package-grid package-grid-two">
          <article className="package-featured"><span>GROWTH ADVISORY · MOST CHOSEN</span><h3>£1,500<small>/ month</small></h3><p>For operators actively pushing growth who want a partner, not a report.</p><ul><li><Check />Full commercial diagnostic</li><li><Check />KPI dashboard & monthly strategy session</li><li><Check />Pricing, menu &amp; party architecture</li><li><Check />Retention planning, ROI-tracked</li></ul><ButtonLink href="mailto:shayaan@ascendplay.co.uk" variant="light">Discuss Growth Advisory</ButtonLink></article>
          <article><span>FRACTIONAL COO</span><h3>£3,000<small>/ month</small></h3><p>Senior operational ownership for multi-site or expanding operators.</p><ul><li><Check />Everything in Growth Advisory</li><li><Check />Weekly direct involvement</li><li><Check />On-floor team coaching</li><li><Check />Finance-readiness</li></ul><ButtonLink href="mailto:shayaan@ascendplay.co.uk" variant="secondary">Discuss COO support</ButtonLink></article>
        </div>
        <p className="package-note">All prices exclude VAT. Consultancy clients receive 25% off the marketing package.</p>
      </section>
      <PageContact title="Let’s find the money already in your building." />
      <PageFooter />
    </main>
  );
}

function MarketingPage() {
  const [partySize, setPartySize] = useState(10);
  const [localShare, setLocalShare] = useState(60);
  const [conversion, setConversion] = useState(25);
  const [parties, setParties] = useState(12);
  const [activeFlow, setActiveFlow] = useState(0);
  const localGuests = Math.round(partySize * localShare / 100);
  const yearlyContacts = localGuests * parties * 12;
  const convertedFamilies = Math.round(yearlyContacts * conversion / 100);

  return (
    <main>
      <PageNav active="marketing" />
      <section className="page-hero marketing-hero shell">
        <div>
          <Kicker>Marketing built by operators</Kicker>
          <h1>Your centre does not need reach. It needs <em>Tuesday at eleven.</em></h1>
          <p className="hero-lede">Campaigns aimed at empty hours, party funnels that turn guests into customers and retention systems that bring families back — measured in bookings, not likes.</p>
          <div className="hero-actions"><ButtonLink href="#contact">Build your demand engine</ButtonLink><a className="text-link" href="#party-lab">Try the Party Data Lab <span>↓</span></a></div>
        </div>
        <div className="session-board">
          <div className="session-board-top"><span>LIVE SESSION OPPORTUNITY</span><small>ILLUSTRATIVE WEEK</small></div>
          <div className="week-labels"><span /><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div>
          {["09:30", "11:00", "13:30", "15:30"].map((time, row) => (
            <div className="heat-row" key={time}><span>{time}</span>{[26, 18, 31, 24, 42, 84, 79].map((base, column) => <i key={column} className={base > 70 ? "hot" : base < 30 ? "cold" : "warm"} title={`${base + row * 2}% full`}>{base + row * 2}%</i>)}</div>
          ))}
          <div className="session-callout"><span>Best campaign opportunity</span><strong>Tuesday · 11:00</strong><small>18% filled · fixed costs already paid</small></div>
        </div>
      </section>

      <section className="marketing-rules"><div className="shell"><article><span>01</span><strong>Aimed at empty hours</strong><p>Spend goes to sessions at 27%, never the ones already at 82%.</p></article><article><span>02</span><strong>Measured on bookings</strong><p>Cost per booking and contribution after ad spend. Reach is not a result.</p></article><article><span>03</span><strong>Offers that do not cannibalise</strong><p>Shift demand without discounting the session that would sell anyway.</p></article></div></section>

      <section className="party-lab shell" id="party-lab">
        <div className="section-heading"><div><Kicker>The Party Data Lab</Kicker><h2>A party of ten is not<br />one booking. <em>It is ten journeys.</em></h2></div><p>Every party fills your building with local families. Most centres record the booker and lose everyone else. Model what a consent-led guest journey could create.</p></div>
        <div className="party-tool">
          <div className="party-controls">
            <label><span>Children per party <b>{partySize}</b></span><input type="range" min="5" max="30" value={partySize} onChange={(event) => setPartySize(Number(event.target.value))} /></label>
            <label><span>Local non-customers <b>{localShare}%</b></span><input type="range" min="10" max="100" step="5" value={localShare} onChange={(event) => setLocalShare(Number(event.target.value))} /></label>
            <label><span>Parties each month <b>{parties}</b></span><input type="range" min="2" max="40" value={parties} onChange={(event) => setParties(Number(event.target.value))} /></label>
            <label><span>Guest-to-customer conversion <b>{conversion}%</b></span><input type="range" min="5" max="60" step="5" value={conversion} onChange={(event) => setConversion(Number(event.target.value))} /></label>
          </div>
          <div className="party-result">
            <div className="party-visual">{Array.from({ length: partySize }).map((_, index) => <i key={index} className={index < localGuests ? "local" : ""} />)}</div>
            <span>POTENTIAL FIRST-PARTY CONTACTS / YEAR</span><strong>{yearlyContacts.toLocaleString("en-GB")}</strong>
            <p>With your assumed conversion, that is <b>{convertedFamilies.toLocaleString("en-GB")} new family relationships</b> from parties already happening.</p>
            <small>Illustrative model. Data capture must use clear consent and a compliant privacy process.</small>
          </div>
        </div>
      </section>

      <section className="invite-flow">
        <div className="shell">
          <div className="section-heading"><div><Kicker light>Useful, delightful, measurable</Kicker><h2>The invite becomes<br /><em>the customer journey.</em></h2></div><p>A digital invitation solves a real job for the parent. In return, each guest can choose to begin a direct relationship with your venue.</p></div>
          <div className="flow-tabs">
            {[
              ["01", "Parent creates", "A beautifully branded digital invitation in under two minutes."],
              ["02", "Guests RSVP", "Dietary needs, child’s first name and age range are collected once."],
              ["03", "Consent is earned", "A clear, optional value exchange — never hidden in the small print."],
              ["04", "Experience is personal", "Hosts know the room before the first guest arrives."],
              ["05", "60-day moment", "A useful birthday-planning reminder arrives before the next decision."],
            ].map((step, index) => <button key={step[0]} className={activeFlow === index ? "active" : ""} onClick={() => setActiveFlow(index)}><span>{step[0]}</span><strong>{step[1]}</strong></button>)}
          </div>
          <div className="flow-detail">
            <div><span>LIVE JOURNEY · STEP {activeFlow + 1}</span><h3>{["Make the host parent look organised.", "One tap. No group-chat archaeology.", "Give a reason to stay connected.", "A welcome that feels prepared.", "Arrive before they start searching."][activeFlow]}</h3><p>{[
              "They select a theme, add the details and share a link that feels special enough for the birthday child.",
              "Each parent confirms attendance and useful party information through a mobile-first RSVP.",
              "Offer a free return-play perk or birthday planning checklist in exchange for optional marketing consent.",
              "The venue sees dietary requirements, ages and headcount ahead of time — reducing friction on the day.",
              "An automated reminder 60 days before the child’s birthday opens a personal planning path, not a generic promotion.",
            ][activeFlow]}</p></div>
            <div className="phone-mock">
              <div className="phone-top"><span>ascend<span>play</span></span><i /></div>
              <small>{activeFlow === 4 ? "A little early. Right on time." : "YOU’RE INVITED"}</small>
              <strong>{activeFlow === 4 ? "A birthday is coming…" : "Amelia is turning 7!"}</strong>
              <p>{activeFlow === 4 ? "Want first pick of the best party slots?" : "Saturday 14 June · 12:30"}</p>
              <button>{activeFlow === 4 ? "Explore party ideas" : activeFlow === 1 ? "RSVP in 30 seconds" : "Continue"}</button>
            </div>
          </div>
        </div>
      </section>

      <section className="marketing-stack shell">
        <div><Kicker>The whole demand system</Kicker><h2>From discovery<br />to the <em>next visit.</em></h2></div>
        <div className="stack-grid">
          {[
            ["LOCAL DISCOVERY", "Google Business Profile, local search and review velocity that builds trust before the click."],
            ["TARGETED DEMAND", "Seasonal and school-holiday campaigns pointed at the sessions that need them."],
            ["PARTY CONVERSION", "Enquiry paths, digital invitations, fast follow-up and value-led guest data capture."],
            ["RETENTION FLOWS", "Email and SMS journeys shaped around visit frequency, birthdays and useful moments."],
          ].map((item, index) => <article key={item[0]}><span>0{index + 1}</span><h3>{item[0]}</h3><p>{item[1]}</p><Arrow /></article>)}
        </div>
      </section>

      <section className="packages shell">
        <div className="section-heading"><div><Kicker>Simple, accountable package</Kicker><h2>Everything you need.<br /><em>One clear price.</em></h2></div><p>Ad spend is paid directly to the platform with no markup. You see exactly what was spent and what it returned.</p></div>
        <div className="marketing-packages marketing-single">
          <article className="package-featured marketing-all-in-one"><span>MARKETING ALL-IN-ONE</span><h3>£1,200<small>/ month</small></h3><p>The complete demand system for ambitious venue owners — from discovery to retention, all joined up.</p><ul><li><Check />Local search &amp; Google Business Profile</li><li><Check />Review engine &amp; social calendar</li><li><Check />Paid social to cost-per-booking</li><li><Check />Party enquiry funnel</li><li><Check />Retention flows &amp; landing pages</li><li><Check />Monthly reporting dashboard</li></ul><ButtonLink href="mailto:shayaan@ascendplay.co.uk" variant="light">Get started</ButtonLink></article>
          <div className="report-card"><span>WHAT WE REPORT</span>{["Cost per booking", "Return on ad spend", "Enquiry → booking", "Target-session fill", "Review velocity"].map((item, index) => <p key={item}><strong>{item}</strong><b>{["£", "×", "%", "pts", "trend"][index]}</b></p>)}</div>
        </div>
        <p className="package-note">Prices exclude VAT. Consultancy clients receive 25% off this package.</p>
      </section>
      <PageContact title="Let’s make your quiet hours work harder." />
      <PageFooter />
    </main>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/consultancy") return <ConsultancyPage />;
  if (path === "/marketing") return <MarketingPage />;
  return <HomePage />;
}
