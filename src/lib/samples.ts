// Real past editions shown on the site as samples ("From the archive").
// Generated from the edition .docx files: production-only parts (suggested tweets,
// section labels, verification notes) are removed and agreed editorial fixes applied.
// To swap a sample, replace its entry here with a newer edition in the same shape.

export type SampleStory = {
  headline: string;
  whatHappened: string;
  secondOrder: string;
  question: string;
  answer: string;
};
export type SampleNumber = {
  indicator: string;
  level: string;
  change: string;
  pct: string;
};
export type SampleDesk = {
  label: string;
  headline: string;
  whatHappened: string;
  secondOrder: string;
};
export type SampleEdition = {
  id: "markets" | "business" | "ai";
  planId: "markets" | "business" | "ai";
  name: string;
  shortName: string;
  dateLabel: string;
  cadence: string;
  readMinutes: number;
  /** Opening line of one of this edition's Answers, word for word. Shown on the homepage front page. */
  overheard: string;
  numbers: SampleNumber[] | null;
  stories: SampleStory[];
  desk: SampleDesk | null;
  plainEnglish: { term: string; paragraphs: string[] };
};

export const sampleEditions: SampleEdition[] = [
  {
    id: "markets",
    planId: "markets",
    name: "Weighted Average Markets",
    shortName: "Markets",
    dateLabel: "Thursday, 20 August 2026",
    cadence: "Every weekday, just after market open",
    numbers: [
      {
        indicator: "Nifty 50",
        level: "24,204 (early trade)",
        change: "+126 pts",
        pct: "+0.52%",
      },
      {
        indicator: "Sensex",
        level: "77,468 (early trade)",
        change: "+558 pts",
        pct: "+0.73%",
      },
      {
        indicator: "USD-INR",
        level: "95.73",
        change: "+0.12",
        pct: "+0.13%",
      },
      {
        indicator: "Brent Crude",
        level: "$91.34",
        change: "+0.33",
        pct: "+0.36%",
      },
      {
        indicator: "Gold (24K, 10g)",
        level: "₹1,52,400",
        change: "+₹1,310",
        pct: "+0.87%",
      },
      {
        indicator: "US Close (Aug 18)",
        level: "Dow 53,459 / S&P 7,745",
        change: "Dow −0.51%",
        pct: "S&P −0.52%",
      },
    ],
    stories: [
      {
        headline: "Nifty Snaps Seven-Day Fall, IT Leads Bounce",
        whatHappened:
          "Nifty 50 broke a seven-session losing streak on Thursday, rising 126 points or 0.52% to 24,204 in early trade, led by an advance in IT shares after global bond yields fell overnight and the US Treasury Department announced a doubling of its debt repurchase programme. Sensex climbed 558 points or 0.73% to 77,468. The recovery was broad-based across sectors, with Infosys, Bajaj Finance, HDFC Bank and L&T among the top Sensex gainers; only Maruti and M&M were in the red. Asian equities advanced sharply on the same bond yield relief, with the Nikkei up over 2%.",
        secondOrder:
          "Seven consecutive sessions of losses on Nifty had taken the index from the 24,500 zone to 24,078 — a fall of about 1.7% — as elevated Brent crude at $91.34, a weakening rupee at 95.73, and the Iran MOU expiry on August 18 combined to drive sustained FII selling. Today’s bounce is driven by a different catalyst: US Treasury yields falling after the government announced it will buy back long-dated bonds to relieve pressure in the bond market. When US yields fall, the dollar weakens, FII appetite for Indian equities improves, and the risk-off trade that had been weighing on Nifty gets a partial unwinding. Whether today’s bounce holds depends on whether Brent stays below $92 through the session.",
        question:
          "Did you see Nifty is up half a percent this morning after seven straight days of losses — the US Treasury doubled its bond repurchase programme and that knocked bond yields down enough to give IT stocks a reason to rally, right?",
        answer:
          "For sure, and the mechanism is worth understanding: higher US bond yields make dollar assets more attractive relative to Indian equities, so FIIs sell India and buy Treasuries. When the Treasury itself buys back long-dated bonds, yields fall, the dollar weakens, and that FII trade partially reverses. Nifty IT was down nearly 11% from its July peak before today; at current valuations, even a 5% earnings upgrade would look meaningful. What I am watching is whether this is a one-day relief bounce or the start of a sustained recovery — the key test is Brent crude, which is holding at $91. If it drops below $88 this week, the macro headwind for India genuinely eases. The real question is whether the Iran situation stabilises enough in the next 7-10 days to bring Brent back toward $85, which is the level at which India’s current account math becomes comfortable again.",
      },
      {
        headline: "RBI Minutes Show Most Hawkish Tone in a Year",
        whatHappened:
          "The Reserve Bank of India released the minutes of its August 2026 Monetary Policy Committee meeting on Thursday, revealing the most hawkish internal language seen in over a year. The MPC unanimously held the repo rate at 5.25% on August 5, but the minutes show Deputy Governor Poonam Gupta warning that “no further easing is possible” and that a case for a rate hike may emerge in FY27 as inflation could peak at 5.9% in Q3. SBI Research, which analysed the minutes, said the language reflected greater caution over inflation and uncertainty than the unanimous hold decision suggested, calling it the “highest hawkishness in the past year.”",
        secondOrder:
          "The minutes create a specific problem for Indian markets: earlier this year, the consensus was that the RBI would cut rates in August. Instead, it held. Now the minutes suggest the next move may be a hike rather than a cut. The driver is inflation: CPI rose to 4.38% in June and food inflation hit 5.32%, and the combination of Brent crude at $91 and the rupee at 95.73 means import-driven inflation has a direct pipeline into Q3 CPI. For home loan borrowers and corporate India, a rate environment that was expected to ease is now potentially tightening — a meaningful shift in the cost of capital that affects investment decisions for the next two to three quarters.",
        question:
          "Have you seen the RBI MPC minutes released today — they unanimously held rates last month, but the language suggests a rate hike may be coming in Q3, which is a complete reversal from where things were six months ago, right?",
        answer:
          "Yeah, and the speed of the reversal is striking. In February 2025 the repo rate was at 6.5%, and four cuts took it to 5.25% by December. Now Deputy Governor Gupta is in the minutes saying no further easing and hinting at a hike. The trigger is oil and food: June CPI at 4.38% is already a little above the 4% target, and the Q3 forecast of 5.9% — which assumes Brent stays above $85 — would take it close to the 6% upper limit of the RBI’s tolerance band. The layered read is that if the Iran situation escalates and Brent moves toward $95-100, the RBI’s hand is forced, and the rate narrative shifts entirely from a cut cycle to a hike cycle within a single financial year. The real question is what happens to the housing market and credit growth if repo goes from 5.25% back toward 5.75-6% — because mortgage EMIs and corporate borrowing costs would reset upward in a market that priced in the cuts.",
      },
      {
        headline: "Iran MOU Expires, Brent Firms Above $91",
        whatHappened:
          "The 60-day US-Iran memorandum of understanding signed on June 18 formally expired on August 18, 2026. When asked if the US would seek an extension, President Trump replied “No,” adding that informal talks with Iran’s Revolutionary Guard were underway but that he was “not in a hurry.” Iran’s foreign ministry said Tehran would shift to an “offensive posture” if diplomacy failed to break the naval blockade the US reimposed on July 14. Brent crude held above $91.34 per barrel — its highest sustained level since the April conflict peak — as the prospect of an extended conflict without a negotiating framework reintroduced the supply disruption premium that markets had partially unwound.",
        secondOrder:
          "The expiry of the MOU matters for India in two directions. At $91 crude, India’s monthly import bill has risen by approximately ₹75,000 crore compared to the $72 low in late June — a swing that worsens the current account deficit, weakens the rupee, and feeds directly into the inflation picture the RBI is already worried about. The second direction is more structural: without an MOU, there is no formal framework for a ceasefire or a Hormuz reopening, which means the $91 premium could persist for weeks or months rather than days. Indian OMCs — HPCL, BPCL, IOC — had returned to marginal profitability when Brent was at $72-78; at $91, the marketing margin pressure resumes.",
        question:
          "Did you see the US-Iran MOU technically expired on Monday and Trump said no extension — so now there’s no peace framework at all and Brent is back above $91, right?",
        answer:
          "Saw that, and the ‘not in a hurry’ comment from Trump is the most market-relevant detail — it signals the US isn’t under domestic pressure to resolve this quickly, which gives the oil premium more room to run. Brent at $91 is 25% above the June low of $72 but still 28% below the April peak of $126; the market is pricing a prolonged conflict without a catastrophic Hormuz closure rather than the worst-case scenario. For India, the IMF estimated in June that every $10 per barrel increase in Brent adds about 0.3% to India’s current account deficit as a share of GDP. At $91, we’ve added nearly $19 from the June low — that’s roughly 0.5-0.6% of GDP in additional current account pressure. The bit nobody is talking about is that this is exactly the environment in which the rupee historically breaches 97-98: high crude, FII outflows, and a hawkish central bank all at once. The real question is whether the informal Trump-Iran talks that are apparently underway produce a new MOU in the next two weeks, because that’s the only circuit-breaker for both oil and the rupee.",
      },
    ],
    desk: null,
    plainEnglish: {
      term: "Debt Repurchase Programme",
      paragraphs: [
        "A debt repurchase programme is when a government’s treasury department buys back its own previously issued bonds from the open market before they mature, which reduces the supply of those bonds available to investors and pushes bond prices up — and bond yields down, since prices and yields move in opposite directions. When US Treasury yields fall, the dollar typically weakens and capital tends to flow toward higher-yielding assets in other countries. In today’s story: the US Treasury’s announcement to double its debt buyback programme sent long-dated Treasury yields lower, which weakened the dollar, improved FII appetite for Indian equities, and triggered the Nifty bounce that snapped seven days of losses — all from a technical bond market intervention that had nothing directly to do with India.",
      ],
    },
    readMinutes: 6,
    overheard: "Yeah, and the speed of the reversal is striking.",
  },
  {
    id: "business",
    planId: "business",
    name: "Weighted Average Business",
    shortName: "Business",
    dateLabel: "Wednesday, 15 July 2026",
    cadence: "Every weekday morning",
    numbers: null,
    stories: [
      {
        headline: "SBI Mutual Fund Lists India’s Biggest AMC",
        whatHappened:
          "SBI Funds Management opened its IPO for subscription on July 14, 2026, with the issue closing July 16 and listing on BSE and NSE on July 21. The offer is a 100% Offer for Sale of 17.10 crore shares at a price band of ₹545–574 per share, raising ₹9,813 crore — the largest public issue in India so far in 2026. SBI is selling down to approximately 54.5% and its French partner Amundi to 32.6% after the issue; no money goes to the company itself. SBI Funds Management is India’s largest AMC by AUM, managing ₹28.67 lakh crore across 4 crore investors, with a 15.3% market share — and India’s largest passive fund manager with ₹3.99 lakh crore in ETFs and index funds, commanding a 29.6% share in that segment.",
        secondOrder:
          "A 100% OFS means this IPO is entirely about SBI and Amundi cashing out a portion of their stakes, not about building the company. The business itself needs no capital — it made ₹2,223 crore net profit in FY26, up 21% year-on-year, on an asset-light model that earns management fees proportional to AUM. The listing is a bet on two things: that India’s mutual fund industry — which crossed ₹74 lakh crore in total AUM in June 2026 — will keep compounding as SIP penetration deepens into Tier 2 and 3 cities, and that a government-backed AMC with SBI’s distribution muscle can defend a 15% market share against faster-growing private players like Nippon and Mirae. Day 1 subscription at 40% suggests the market is cautiously interested but not euphoric.",
        question:
          "Did you see the SBI Mutual Fund IPO opened yesterday — ₹9,813 crore, India’s biggest listing this year, and the entire thing is SBI and Amundi cashing out?",
        answer:
          "Yeah, and the business itself is rock solid — ₹28.67 lakh crore in AUM, 4 crore investors, 21% net profit growth in FY26. What’s interesting is that SBI MF is also India’s largest passive fund manager, which is the segment growing fastest globally. Day 1 subscription was 40% — decent but not the frenzied oversubscription you see in smaller IPOs. The real question is valuation: at the ₹574 upper band, SBI MF is priced at roughly 45x FY26 earnings, which is comparable to Nippon Life AMC’s current market multiple. What I’m watching is whether Amundi’s gradual stake reduction signals any strategic reconsideration of its India partnership — because Amundi has been building its own direct India presence quietly.",
      },
      {
        headline: "Delhivery Moves Into Financial Services",
        whatHappened:
          "The Reserve Bank of India approved Delhivery Financial Services Private Limited — a wholly owned subsidiary of Delhivery — for a Type II Non-Deposit-Taking NBFC licence on July 13, 2026. This follows Delhivery separately incorporating Delhivery Fintech Distribution Private Limited in May 2026 with ₹1 crore seed capital, to distribute insurance, FASTags, fuel cards, and telematics devices to truckers, vendors, and delivery partners across its logistics network. Delhivery operates India’s largest express parcel network, serving 18,500-plus PIN codes and handling over 2.3 million shipments daily for 28,000-plus clients including D2C brands, e-commerce players, and large enterprises.",
        secondOrder:
          "Delhivery’s NBFC licence is not a pivot — it is a logical extension of its existing relationship with 1.5 lakh-plus delivery partners and 28,000-plus business clients who are all underserved by traditional financial institutions. A trucker with a proven 3-year Delhivery transaction history is a far better credit risk than a bank’s cold credit assessment would suggest; the NBFC licence lets Delhivery price that information advantage into a lending product. The pattern here is not unique: PhonePe, Rapido, Zepto, and Juspay have all moved from operating a high-frequency transaction platform into financial services layered on top of that platform. The shared logic is that daily transaction data is the most underutilised credit underwriting asset in India.",
        question:
          "Have you seen Delhivery just got an RBI NBFC licence — a logistics company is now in financial services, using its trucker and vendor network as the credit book?",
        answer:
          "Honestly, this is the most natural embedded finance move I’ve seen. Delhivery touches 1.5 lakh delivery partners and 28,000 business clients every single day — that’s more transaction data on small businesses and gig workers than most NBFCs have seen in a decade. PhonePe did the same thing with payments data; Rapido is doing it with driver income data. The bit nobody is talking about is the credit quality angle — a Delhivery partner who has done 5,000 verified deliveries over two years is a dramatically lower credit risk than a cold loan application, and Delhivery can price that at better rates than any traditional lender. The real question is whether the RBI’s Type II NBFC structure — which restricts public deposit-taking — limits the lending scale they can eventually reach without raising external capital.",
      },
      {
        headline: "Swiggy Instamart’s Speed Problem Has a Name",
        whatHappened:
          "FSSAI issued nine separate notices to Swiggy Instamart on July 11, 2026, following multiple consumer complaints alleging delivery of expired, spoiled, rotten, and contaminated food products. Specific violations cited include: Healthify 100% Whey Protein and Noice Homestyle Madras Mixture delivered after their expiry dates; Akshayakalpa Organic Eggs delivered rotten, emitting a foul odour, with the same contaminated batch re-delivered after the consumer returned it; infant food formulation found in a severely deteriorated and unsafe condition; and Kakke da Paratha delivered in a spoiled condition with no corrective action taken despite escalated complaints. FSSAI also flagged incorrect, invalid, or non-existent FSSAI licence numbers, and food business entities listed under names different from their registered licence. Swiggy has been directed to submit a detailed explanation and compliance report or face legal action under the Food Safety and Standards Act, 2006.",
        secondOrder:
          "Nine notices is not a routine regulatory interaction — it is a pattern finding. The violations FSSAI flagged go beyond individual product incidents: re-delivery of the same contaminated product after a consumer return, non-existent FSSAI licence numbers, and grievance escalations where only a refund was offered without addressing the safety concern. These are structural failures in dark-store inventory management, seller onboarding, compliance verification, and customer service — not isolated warehouse errors. The core tension is architectural: 10-minute delivery requires lean inventory with fast rotation, but fast rotation with inadequate stock monitoring is exactly what produces expired-product deliveries at scale. FSSAI also issued a separate notice to Blinkit over egg quality complaints the same week, suggesting the problem is sector-wide, not Swiggy-specific.",
        question:
          "Did you see FSSAI hit Swiggy Instamart with nine notices at once — expired infant formula re-delivered after a return, contaminated eggs, rotten food, the works?",
        answer:
          "Yeah, and the re-delivery detail is the most damning one. A consumer returned contaminated infant formula and the same product was delivered again — which means the dark-store system re-listed it without any safety check. That’s not a one-off; that’s a process failure baked into how the platform handles returns. FSSAI also gave Blinkit a notice over egg quality the same week, so this is an industry-wide compliance gap, not just a Swiggy problem. Swiggy’s share has already been under pressure — losses were ₹1,092 crore in Q2 FY26 — and a public food safety scandal is the worst possible thing for a platform whose entire value proposition is convenience and trust. What I’m watching is whether FSSAI moves from notices to licence suspensions, because that is when the market share question gets very real very fast.",
      },
    ],
    desk: {
      label: "The Leadership Desk",
      headline: "Bacardi India Gets a New Managing Director",
      whatHappened:
        "Bacardi appointed Mahesh Kanchan as Managing Director for India and Southeast Asia, effective October 1, 2026, as announced on July 14. Kanchan succeeds Sanjit Randhawa, who moves up to become Regional President for Asia, Middle East and Africa and Global Travel Retail. Kanchan joins from Beam Suntory, where he led the Indian business and built the premium whisky portfolio including Maker’s Mark and Laphroaig. Before that he held senior roles at Diageo India. Bacardi’s India portfolio includes Grey Goose vodka, Bombay Sapphire gin, Martini, Dewar’s Scotch, and the flagship Bacardi rum range.",
      secondOrder:
        "Bacardi picking a Beam Suntory veteran to run India signals where they think the growth is: premium and super-premium. Kanchan built Maker’s Mark and Laphroaig in India — categories that barely existed here five years ago — which is exactly the skill set needed to scale Grey Goose and Bombay Sapphire in a market where premium spirits are growing at 15–20% per year while the mass segment is flat. India is now Bacardi’s fourth-largest global market by volume, and the company’s internal calculation is clearly that the next phase of value growth comes from premiumisation, not volume.",
    },
    plainEnglish: {
      term: "Offer for Sale (OFS) vs Fresh Issue — Why It Matters for the SBI MF IPO",
      paragraphs: [
        "In an IPO, a fresh issue creates new shares and raises money for the company to use. An Offer for Sale (OFS) is when existing shareholders sell their own shares — the company gets nothing; the sellers pocket the proceeds. It matters because an OFS tells you the company has no urgent need for capital; it is simply giving shareholders a liquid exit. In today’s SBI Mutual Fund story, the entire ₹9,813 crore IPO is an OFS — SBI reduces its stake and Amundi reduces its stake, and SBI Funds Management itself receives zero rupees from the listing. Investors are essentially buying existing shares, not funding future growth, which means the IPO price must be justified entirely by the company’s current earnings and AUM trajectory, not by any capital deployment plan.",
      ],
    },
    readMinutes: 7,
    overheard: "Yeah, and the re-delivery detail is the most damning one.",
  },
  {
    id: "ai",
    planId: "ai",
    name: "Weighted Average AI in Business",
    shortName: "AI in Business",
    dateLabel: "Week of 13 July 2026",
    cadence: "Every Friday",
    numbers: null,
    stories: [
      {
        headline: "HCLTech's AI Business Grows 62% in a Quarter",
        whatHappened:
          "HCLTech reported Q1 FY27 results on July 13, posting revenue of ₹34,579 crore — up 13.9% year-on-year — and net profit of ₹4,624 crore, up 20.3% year-on-year. The standout number: its Advanced AI business generated $171 million in revenue for the quarter, growing 62.1% year-on-year in constant currency and 10.6% quarter-on-quarter. Net new bookings hit $2.4 billion — the highest Q1 in the company's history. Alongside the results, HCLTech's board approved a ₹3,500 crore investment to build its own AI data centres, targeting 50MW of capacity, marking its entry into AI infrastructure ownership for the first time.",
        secondOrder:
          "The 62% year-on-year growth in Advanced AI revenue is the number that separates HCLTech from the Q1 narrative playing out across the rest of Indian IT. While TCS reports AI annualised revenue at $2.6 billion on a $7.5 billion quarterly base, HCLTech is growing the new category at a rate that will compound quickly if sustained. The data centre announcement is the bigger strategic signal: HCLTech is moving from selling AI services to owning AI infrastructure — which is a different margin structure, a different risk profile, and a different competitive position entirely.",
        question:
          "Did you see HCLTech's AI business grew 62% in a single quarter — and the same day they announced a ₹3,500 crore investment to build their own AI data centres, huh?",
        answer:
          'Yeah, the data centre move is the part that changes the story. HCLTech already has $2.4 billion in new bookings this quarter — their best Q1 ever — and now they are committing ₹3,500 crore to own infrastructure that can scale to 50MW. CEO C Vijayakumar said they want to "benefit disproportionately from AI-native and AI-amplified opportunities" — and owning compute is how you do that rather than just renting it from hyperscalers. The real question is whether ₹3,500 crore is enough to matter at scale, or whether this is a signal of intent that needs a much larger follow-on commitment to be credible. At 50MW, this is roughly a quarter of what Reliance is building for Meta alone in Jamnagar.',
      },
      {
        headline: "TCS Crosses $2.6 Billion in AI Revenue",
        whatHappened:
          "TCS reported Q1 FY27 results on July 9, with consolidated revenue of ₹72,275 crore — up 13.9% year-on-year — and net profit of ₹13,349 crore, up 4.6% year-on-year. Annualised AI revenue reached $2.6 billion, up 13.6% from $2.3 billion in the previous quarter — the fastest sequential AI revenue growth TCS has reported. The company added 9,300 net employees in the quarter, its highest quarterly net addition in over three years. Total contract value stood at $9.5 billion, down from $12 billion in the previous quarter. CEO K. Krithivasan said he expects demand to improve in Q2, and highlighted six mega AI deals signed over the last five quarters, including an $800 million global business transformation deal with Swedish industrial firm SKF.",
        secondOrder:
          "TCS crossing $2.6 billion in annualised AI revenue is the sector's clearest evidence that the transition from talking about AI to billing for AI is underway. The SKF deal — an $800 million global transformation mandate — is the template for what AI-led contracts look like at TCS's scale: long-term, outcome-oriented, and far larger than traditional managed services renewals. The 9,300 net hires also matter: in a quarter where every analyst expected headcount to fall because of AI efficiency, TCS is hiring, which signals that AI transformation work is creating new demand for people, not just replacing them.",
        question:
          "Did you see TCS just added 9,300 employees in a quarter — its highest hiring in three years — while simultaneously growing AI revenue 13.6% to $2.6 billion, huh?",
        answer:
          "For sure, and the SKF deal is the one to understand. An $800 million global transformation with a Fortune 500 industrial manufacturer — that is not a cost-reduction play, it is a full business model rebuild using AI. TCS now has six of those mega AI deals signed in five quarters. The TCV of $9.5 billion this quarter is lower than the $12 billion last quarter, which is the concern — the pipeline is converting but not replenishing at the same rate. What I am watching is whether Infosys and Wipro can show a similar AI revenue cadence when they report next week, or whether TCS and HCLTech are pulling away from the pack on the deals that will matter in FY28 and beyond.",
      },
      {
        headline: "Google Brings Gemini to 25 Indian Languages",
        whatHappened:
          "At the Google I/O Connect India 2026 summit in Bengaluru on July 14, Google announced Gemini Live now supports 25 Indian languages and dialects — including Sanskrit, Bhojpuri, and Maithili — making it the broadest multilingual voice AI deployment in India by any global platform. Google DeepMind simultaneously launched its AI Research Foundations curriculum: a free 56-hour programme in partnership with NASSCOM and IISc Bengaluru to train learners to build and fine-tune large language models. Researchers at AIIMS Delhi are using Google's MedGemma open AI models to develop India-specific diagnostic tools for leprosy and reproductive health — with the resulting models to be released back to the Indian developer community. Google also announced its Android and Play Store ecosystem generated ₹5.3 lakh crore for Indian app publishers and the broader economy in 2025, up 28% year-on-year.",
        secondOrder:
          "Google's 25-language Gemini rollout is the competitive pressure point that Sarvam AI — which built its entire unicorn case on multilingual Indian language models — now has to answer. A free, globally scaled voice AI that speaks Bhojpuri and Maithili, backed by Google's infrastructure and distribution through Android on 600 million Indian devices, is a very different competitive threat than any other multilingual AI deployment that has come before it. The AIIMS-MedGemma collaboration is also significant: Google is embedding its models into India's most credible public health institution, which creates a reference deployment that private hospitals and health-tech companies will find difficult to ignore.",
        question:
          "Have you seen Google just launched Gemini in 25 Indian languages at I/O Connect — including Sanskrit and Bhojpuri — on a platform that reaches 600 million Android devices in India, huh?",
        answer:
          "Honestly, the Sarvam angle is what I keep coming back to. Sarvam raised $234 million at a $1.5 billion valuation in June specifically on the thesis that India needs sovereign multilingual AI. Google just responded by shipping Gemini Live in 25 Indian languages for free, with AIIMS doing real clinical deployments on MedGemma, and 56-hour free LLM training through IISc. Google is not building a sovereign AI model — but at 25 languages and 600 million Android devices, it does not need to. The real question is whether enterprise and government buyers care enough about data sovereignty and local control to pay a premium for Sarvam, or whether free and widely distributed beats sovereign every time when budgets are tight. Curious whether IndiaAI Mission starts steering procurement toward Sarvam more explicitly as a counterweight.",
      },
    ],
    desk: {
      label: "The AI Hire Watch",
      headline: "HCLTech Is Hiring Leaders for Its New Data Centre Unit",
      whatHappened:
        "Alongside its Q1 FY27 results on July 13, HCLTech announced it is building a dedicated team to execute its ₹3,500 crore AI data centre investment — a 50MW facility programme that marks the company's first move into owned AI infrastructure. CEO C. Vijayakumar confirmed the company is hiring infrastructure and AI operations leadership specifically for this initiative, distinct from its existing IT services delivery organisation. The data centre business will operate as a separate strategic unit under the HCLTech portfolio.",
      secondOrder:
        "Standing up a dedicated data centre leadership unit inside an IT services company is a structural hire, not just a talent addition. HCLTech is essentially creating a new business line — one that competes with Yotta, NTT, and eventually Reliance on physical AI infrastructure, rather than with TCS and Infosys on services revenue. The people running this unit will need a completely different background from IT services delivery: real estate, power, cooling, network interconnect, and hyperscaler negotiation — skills that are scarce inside any Indian IT company today.",
    },
    plainEnglish: {
      term: "Total Contract Value (TCV)",
      paragraphs: [
        "Total Contract Value, or TCV, is the full value of a new client deal added up across its entire contracted duration — so a five-year contract worth $100 million per year has a TCV of $500 million, even if revenue is recognised gradually over time.",
        "It matters because TCV is how IT companies signal future revenue — a strong TCV quarter means the company has locked in work that will convert to income over the next several years, while a weak TCV quarter is an early warning that future revenues may slow even if the current quarter looks healthy.",
        "TCS reported a TCV of $9.5 billion this week — down from $12 billion last quarter — which is why analysts are watching whether the next few quarters can replenish the pipeline fast enough to keep revenue growth on track even as the AI transformation deal cycle accelerates.",
      ],
    },
    readMinutes: 6,
    overheard: "Honestly, the Sarvam angle is what I keep coming back to.",
  },
];

export const getSampleEdition = (id: string) =>
  sampleEditions.find((edition) => edition.id === id);
