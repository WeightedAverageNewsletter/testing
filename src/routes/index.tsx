import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, ArrowRight, TrendingUp, BriefcaseBusiness, Sparkles, Clock3, Check, Plus, MoveUpRight, AudioLines, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { newsletters, plans } from "@/lib/newsletters";
import { sampleEditions, type SampleEdition } from "@/lib/samples";
import { Brand, logoUrl } from "@/components/brand";
import heroImage from "@/assets/awkward_meeting_hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Weighted Average — Morning newsletters on markets, business & AI" },
    { name: "description", content: "Three stories. A sharper perspective. Morning newsletters for Indian professionals on markets, business and AI. Plans from ₹99 a month." },
    { property: "og:title", content: "Weighted Average — Morning newsletters on markets, business & AI" },
    { property: "og:description", content: "Know what happened, what it means, and what to say. Explore our Indian markets, business and AI newsletters." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const sampleIdForTheme: Record<string, SampleEdition['id']> = { market: 'markets', business: 'business', ai: 'ai' };
const themeForSample: Record<SampleEdition['id'], string> = { markets: 'market', business: 'business', ai: 'ai' };

const meetingLines = [
  { topic: 'Markets', boss: '“So, what do we make of the FII outflows?”', before: '“Yes. The outflows. Very… flowy.”', after: '“I’d look at whether domestic buying is offsetting them. The index alone won’t tell us the whole story.”' },
  { topic: 'Business', boss: '“Thoughts on our competitor’s acquisition?”', before: '“Definitely an acquisition. Of all time.”', after: '“Buying reach is the easy part. I’m more interested in how they integrate the two businesses.”' },
  { topic: 'AI', boss: '“Should we be doing more with AI?”', before: '“Absolutely. We should… AI harder.”', after: '“Which routine task would we improve first, and how would we measure whether it actually helps?”' },
] as const;

const steps = [
  { title: 'What happened.', text: 'The facts. The numbers. The names that matter. No noise.' },
  { title: 'The second order.', text: 'What it means one layer deeper, the way a sharp colleague would explain it over coffee.' },
  { title: 'The Weighted Average Question.', text: 'One line to bring the story up yourself. Be the person who starts the good conversation.' },
  { title: 'The Weighted Average Answer.', text: 'Something worth saying when someone else brings it up first. Keep the conversation going.' },
];

function Index() {
  const [meetingTopic, setMeetingTopic] = useState(0);
  const [hasRead, setHasRead] = useState(false);
  const meeting = meetingLines[meetingTopic] ?? meetingLines[0];
  const [selectedPlan, setSelectedPlan] = useState<(typeof plans)[number] | null>(null);
  return (
    <>
      <header className="site-wrap site-header">
        <Brand />
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#the-name" className="nav-secondary">The name</a>
          <a href="#newsletters">The newsletters</a>
          <a href="#how-it-works">How it works</a>
          <a href="#sample">Read a sample</a>
          <a href="#pricing">Pricing</a>
          <Button variant="editorial" size="default" className="nav-cta" asChild><a href="#pricing">Subscribe <ArrowUpRight /></a></Button>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-heading">
          <img src={heroImage} width={1536} height={1024} className="hero-art" alt="Playful clay characters in an awkward office meeting: a surprised team and one confident colleague in a lime suit" fetchPriority="high" />
          <div className="site-wrap hero-inner">
            <div className="eyebrow"><span className="status-dot" /> <span>THREE MORNING NEWSLETTERS<span className="hidden sm:inline">&nbsp;· MARKETS, BUSINESS, AI</span></span></div>
            <h1 id="hero-heading"><span>Weighted</span><span>Average<span className="!inline text-primary">.</span></span></h1>
            <p className="hero-tagline">Cut through the noise. Have a take.</p>
            <p className="hero-description">Boss drops “FII outflows” into the meeting.<br className="hidden md:block" /> The room goes on mute. Not you.<br /><span className="hero-pitch">Most newsletters tell you what happened. We tell you what to do with it.</span></p>
            <div className="hero-actions">
              <Button variant="editorial" size="lg" asChild><a href="#pricing">Get it in my inbox <ArrowUpRight /></a></Button>
              <Button variant="editorialOutline" size="lg" asChild><a href="#sample">Read a sample edition <ArrowRight /></a></Button>
            </div>
            <p className="reading-note"><Clock3 size={13} /> A few minutes to read. Zero strategic nodding required.</p>
          </div>
          <div className="hero-art-box" aria-hidden="true">
            <div className="meeting-sticker sticker-boss">“Any thoughts?”</div>
            <div className="meeting-sticker sticker-you"><Sparkles size={15} /> You, with context.</div>
          </div>
        </section>

        <div className="topic-band">
          <div className="site-wrap topic-band-inner">
            <span>LESS “CIRCLE BACK”. MORE ACTUAL CONTEXT.</span>
            <span className="topic-item"><TrendingUp size={16} /> Markets</span>
            <Plus size={12} className="text-muted-foreground" aria-hidden="true" />
            <span className="topic-item"><BriefcaseBusiness size={16} /> Business</span>
            <Plus size={12} className="text-muted-foreground" aria-hidden="true" />
            <span className="topic-item"><Sparkles size={16} /> AI in Business</span>
          </div>
        </div>

        <section id="the-name" className="site-wrap section">
          <div className="name-plate">
            <div className="name-formula">
              <div className="formula-top"><img src={logoUrl} width={400} height={400} className="formula-mark" alt="" /><span className="formula-eq">=</span><span className="formula-frac"><span className="formula-num">Σ (weight × take)</span><span className="formula-den">Σ weight</span></span></div>
              <div className="weight-rows">
                <div className="weight-row"><span className="weight-label">Read the actual filing</span><span className="weight-track"><span className="weight-fill" style={{width:'88%'}} /></span><span className="weight-num">0.9</span></div>
                <div className="weight-row"><span className="weight-label">Saw the headline</span><span className="weight-track"><span className="weight-fill" style={{width:'32%'}} /></span><span className="weight-num">0.3</span></div>
                <div className="weight-row"><span className="weight-label">Heard it in the lift</span><span className="weight-track"><span className="weight-fill" style={{width:'11%'}} /></span><span className="weight-num">0.1</span></div>
              </div>
              <p className="formula-note">Weights illustrative. Lift opinions stay weightless.</p>
            </div>
            <div className="name-copy">
              <div className="eyebrow">YES, IT’S A MATHS TERM.</div>
              <h2>Not all opinions are equal.<br />So we weight them.</h2>
              <p>Weighted average is the stats idea that some inputs count for more than others. The colleague who read the RBI statement and the uncle who forwarded a poster about it are not equal inputs.</p>
              <p>Most group chats weight by volume: whoever talks most wins. We do the opposite. We work out who actually did the reading, then hand you their number.</p>
              <p className="name-punch">So the average you walk into the meeting with is closer to the person who did the reading.</p>
            </div>
          </div>
        </section>

        <section id="newsletters" className="site-wrap section">
          <div className="section-heading">
            <div><div className="eyebrow">CHOOSE YOUR CONVERSATION STARTER.</div><h2>Pick your main character arc.</h2></div>
            <p>Not a finance bro. Not an AI evangelist. Just the person who actually gets what’s going on.</p>
          </div>
          <div className="newsletter-grid">
            {newsletters.map((newsletter, index) => {
              const Icon = [TrendingUp, BriefcaseBusiness, Sparkles][index] ?? BookOpen;
              return <article key={newsletter.name} className={`newsletter-card ${newsletter.theme}`}>
                <div className="newsletter-icon"><Icon size={37} strokeWidth={1.3} /><span className="edition-label">0{index + 1} / 03</span></div>
                <div className="eyebrow !text-[9px] !tracking-[1px]">{newsletter.label}</div>
                <h3>{newsletter.name}</h3>
                <p>{newsletter.description}</p>
                <p className="mt-4 !text-[11px]">{newsletter.extra}</p>
                <p className="schedule"><Clock3 size={13} />{newsletter.schedule}</p>
                <Button variant="ghost" className="card-link" asChild><Link to="/sample/$id" params={{ id: sampleIdForTheme[newsletter.theme] ?? 'markets' }}>Read a past edition <ArrowUpRight size={16} /></Link></Button>
              </article>;
            })}
          </div>
        </section>

        <section id="how-it-works" className="how-section section">
          <div className="site-wrap how-layout">
            <div className="how-intro">
              <div className="eyebrow"><AudioLines size={15} /> THE MEETING COULD HAVE BEEN AN EMAIL.</div>
              <h2>Your boss has a question.<br />You have… a pulse?</h2>
              <p>The boss mentions a market move. Twelve people nod. One person says “interesting”. Nobody knows what’s interesting.</p>
              <p className="mt-4">Let’s retire the nod. Here’s what a little context can do. These exchanges are illustrative; the awkwardness is universal.</p>
              <div className="meeting-demo">
                <div className="meeting-tabs" role="group" aria-label="Choose a meeting topic">{meetingLines.map((line, index) => <Button key={line.topic} variant="ghost" aria-pressed={meetingTopic === index} onClick={() => setMeetingTopic(index)}>{line.topic}</Button>)}</div>
                <p className="boss-line">{meeting.boss}</p>
                <div className={`your-reply ${hasRead ? 'informed' : ''}`}><span>{hasRead ? 'YOU, AFTER WEIGHTED AVERAGE' : 'YOU, RUNNING ON VIBES'}</span><p>{hasRead ? meeting.after : meeting.before}</p></div>
                <Button variant="editorial" onClick={() => setHasRead(value => !value)}>{hasRead ? 'Back to winging it' : 'Okay, give me the context'} <Sparkles /></Button>
              </div>
            </div>
            <div>
              <p className="eyebrow mb-7">THREE STORIES. FOUR WAYS TO GET IT.</p>
              <div className="story-steps">{steps.map((step, index) => <div className="story-step" key={step.title}><span className="step-number">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></div>)}</div>
              <p className="plain-english"><strong className="text-foreground">And finally, In Plain English.</strong> A three-sentence explainer of the one concept from that day most likely to trip you up. Because “I’ll Google it later” is how we got here.</p>
            </div>
          </div>
        </section>

        <section id="sample" className="site-wrap section front-pages" aria-labelledby="sample-title">
          <div className="section-heading">
            <div><div className="eyebrow">STRAIGHT FROM THE ARCHIVE.</div><h2 id="sample-title">Judge us by our<br />front pages.</h2></div>
            <p>Real past editions. Pick one and read the whole thing.</p>
          </div>
          <div className="front-grid">
            {sampleEditions.map(edition => (
              <Link key={edition.id} to="/sample/$id" params={{ id: edition.id }} className={`front-page ${themeForSample[edition.id]}`} aria-label={`Read the full ${edition.name} edition from ${edition.dateLabel}`}>
                <span className="front-band"><span className="front-name">{edition.shortName}</span><span className="front-date">{edition.dateLabel}</span></span>
                <ol className="front-headlines">{edition.stories.map(story => <li key={story.headline}>{story.headline}</li>)}</ol>
                <span className="front-overheard"><span className="front-overheard-tag">Overheard in this edition</span>“{edition.overheard}”</span>
                <span className="front-go">Read the full edition <ArrowRight size={15} /></span>
              </Link>
            ))}
          </div>
        </section>

        <section id="pricing" className="site-wrap section">
          <div className="pricing-heading"><div className="eyebrow">CONTEXT IS A FLEX.</div><h2>Big “I actually know this” energy.</h2><p>Choose your subscription. Bring more than “yeah, totally” to the table.</p></div>
          <div className="pricing-grid">{plans.map(plan => <article key={plan.id} className={`price-card ${plan.featured ? 'featured' : ''}`}>
            {plan.featured && <span className="best-label"><Sparkles size={12} /> THE FULL BUNDLE</span>}
            <h3>{plan.name}</h3><p className="price-description">{plan.description}</p>
            <p className="price">₹{plan.price}<small> / month</small></p>
            <ul>{plan.features.map(feature => <li key={feature}><Check size={15} />{feature}</li>)}</ul>
            <Button variant={plan.featured ? 'lime' : 'editorialOutline'} size="lg" onClick={() => setSelectedPlan(plan)}>Choose {plan.id === 'full' ? 'the full bundle' : plan.name}<ArrowUpRight /></Button>
          </article>)}</div>
          <p className="mt-6 text-center text-xs text-muted-foreground">All prices in INR, per month. No 47-tab research spiral included.</p>
        </section>

        <section className="closing"><div className="eyebrow justify-center mb-5"><Sparkles size={17} /> YOUR SILENT-NODDING ERA IS OVER.</div><h2>The next “any thoughts?” is yours.</h2><p>Three stories. Actual context. A point of view that isn’t borrowed from LinkedIn.</p><Button variant="editorial" size="lg" className="mt-7" asChild><a href="#pricing">I’m done winging it <MoveUpRight /></a></Button></section>
      </main>

      <footer className="site-wrap footer"><Brand /><p>Less doomscroll. More dinner-table lore.</p><span>© {new Date().getUTCFullYear()} Weighted Average</span></footer>

      <Dialog open={selectedPlan !== null} onOpenChange={open => { if (!open) setSelectedPlan(null); }}><DialogContent className="max-sm:w-[calc(100%-32px)]"><DialogTitle>{selectedPlan?.name}</DialogTitle><DialogDescription>Your selected monthly newsletter plan.</DialogDescription><p className="text-4xl font-display font-semibold">₹{selectedPlan?.price}<span className="text-sm text-muted-foreground font-normal"> / month</span></p><ul className="grid gap-3 text-sm">{selectedPlan?.features.map(feature => <li className="flex items-center gap-2" key={feature}><Check size={16} />{feature}</li>)}</ul>{selectedPlan?.checkoutUrl ? <><p className="text-sm text-muted-foreground border-t pt-4">You’ll finish on Zoho Billing’s secure checkout page. Your subscription starts once payment goes through there.</p><Button variant="editorial" asChild><a href={selectedPlan.checkoutUrl} rel="noopener noreferrer">Continue to checkout <ArrowUpRight /></a></Button><Button variant="ghost" onClick={() => setSelectedPlan(null)}>Back to the newsletters</Button></> : <><p className="text-sm text-muted-foreground border-t pt-4">Checkout isn’t available yet. No subscription has been created and no payment has been taken.</p><Button variant="editorial" onClick={() => setSelectedPlan(null)}>Back to the newsletters <ArrowRight /></Button></>}</DialogContent></Dialog>
    </>
  );
}
