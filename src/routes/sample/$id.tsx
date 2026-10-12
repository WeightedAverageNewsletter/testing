import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Fragment, useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand, logoUrl } from "@/components/brand";
import { SampleStoryBlock } from "@/components/sample-story";
import { plans } from "@/lib/newsletters";
import {
  getSampleEdition,
  sampleEditions,
  type SampleEdition,
} from "@/lib/samples";

export const Route = createFileRoute("/sample/$id")({
  loader: ({ params }) => {
    const edition = getSampleEdition(params.id);
    if (!edition) throw notFound();
    return { edition };
  },
  head: ({ loaderData }) => {
    const edition = loaderData?.edition;
    if (!edition)
      return { meta: [{ title: "Sample not found — Weighted Average" }] };
    const title = `${edition.name} — read a real past edition`;
    const description = `${edition.stories.map((story) => story.headline).join(". ")}. A full past edition of ${edition.name}, free to read.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: SamplePage,
});

const themeFor: Record<SampleEdition["id"], string> = {
  markets: "market",
  business: "business",
  ai: "ai",
};

function SamplePage() {
  const { edition } = Route.useLoaderData();
  const plan = plans.find((p) => p.id === edition.planId);
  const bundle = plans.find((p) => p.id === "full");
  const subscribeHref = plan?.checkoutUrl || "/#pricing";
  const others = sampleEditions.filter((other) => other.id !== edition.id);

  const [pageUrl, setPageUrl] = useState("");
  useEffect(() => {
    setPageUrl(window.location.href);
  }, [edition.id]);
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`Worth a read: ${edition.name}, “${edition.stories[0]?.headline ?? ""}” ${pageUrl}`.trim())}`;

  const contents = [
    ...(edition.numbers
      ? [{ href: "#todays-numbers", label: "Today’s Numbers" }]
      : []),
    ...edition.stories.map((story, index) => ({
      href: `#story-${index + 1}`,
      label: story.headline,
    })),
    ...(edition.desk
      ? [
          {
            href: "#desk",
            label: `${edition.desk.label}: ${edition.desk.headline}`,
          },
        ]
      : []),
    {
      href: "#plain-english",
      label: `In Plain English: ${edition.plainEnglish.term}`,
    },
  ];

  return (
    <div className="sample-page">
      <header className="site-wrap site-header">
        <Brand />
        <nav className="nav-links" aria-label="Main navigation">
          <Link to="/" hash="newsletters">
            All newsletters
          </Link>
          <Link to="/" hash="pricing">
            Pricing
          </Link>
          <Button
            variant="editorial"
            size="default"
            className="nav-cta"
            asChild
          >
            <a href={subscribeHref}>
              Subscribe <ArrowUpRight />
            </a>
          </Button>
        </nav>
      </header>

      <main className="reading-wrap">
        <Link to="/" hash="newsletters" className="back-link">
          <ArrowLeft size={15} /> All newsletters
        </Link>
        <p className="archive-note">
          <span className="status-dot" /> From the archive. A real past edition,
          shown in full.
        </p>

        <article className={`edition-paper ${themeFor[edition.id]}`}>
          <header className="edition-masthead">
            <div className="masthead-brand">
              <img src={logoUrl} width={400} height={400} alt="" /> WEIGHTED
              AVERAGE
            </div>
            <h1>{edition.shortName}</h1>
            <p className="edition-meta">
              <span>{edition.dateLabel}</span>
              <span>
                <Clock3 size={13} /> {edition.readMinutes} min read
              </span>
            </p>
          </header>

          <nav className="edition-contents" aria-label="In this edition">
            <span className="contents-label">In this edition</span>
            <ol>
              {contents.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ol>
          </nav>

          {edition.numbers && (
            <section
              className="todays-numbers"
              id="todays-numbers"
              aria-labelledby="todays-numbers-title"
            >
              <h2 id="todays-numbers-title">Today’s Numbers</h2>
              <div className="numbers-scroll">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Indicator</th>
                      <th scope="col">Level</th>
                      <th scope="col">Change</th>
                      <th scope="col">% Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {edition.numbers.map((row) => (
                      <tr key={row.indicator}>
                        <th scope="row">{row.indicator}</th>
                        <td>{row.level}</td>
                        <td>{row.change}</td>
                        <td>{row.pct}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {edition.stories.map((story, index) => (
            <Fragment key={story.headline}>
              <SampleStoryBlock
                story={story}
                index={index}
                total={edition.stories.length}
                id={`story-${index + 1}`}
              />
              {index === 0 && plan && (
                <aside className="inline-cta">
                  <p>
                    <strong>This is what lands in your inbox.</strong>{" "}
                    {edition.cadence}, for ₹{plan.price} a month.
                  </p>
                  <Button variant="editorial" asChild>
                    <a href={subscribeHref}>
                      Subscribe to {edition.shortName} <ArrowUpRight />
                    </a>
                  </Button>
                </aside>
              )}
            </Fragment>
          ))}

          {edition.desk && (
            <section
              className="edition-desk"
              id="desk"
              aria-labelledby="desk-title"
            >
              <div className="section-flag">{edition.desk.label}</div>
              <h2 id="desk-title">{edition.desk.headline}</h2>
              <h3>What happened.</h3>
              <p>{edition.desk.whatHappened}</p>
              <h3>The second order.</h3>
              <p>{edition.desk.secondOrder}</p>
            </section>
          )}

          <section
            className="edition-plain"
            id="plain-english"
            aria-labelledby="plain-english-title"
          >
            <div className="section-flag">In Plain English</div>
            <h2 id="plain-english-title">{edition.plainEnglish.term}</h2>
            {edition.plainEnglish.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </section>

          <p className="edition-sign">
            Weighted Average. Most newsletters tell you what happened. We tell
            you what to do with it.
          </p>
        </article>

        <section className="sample-end" aria-labelledby="sample-end-title">
          <h2 id="sample-end-title">
            That was one edition.
            <br />
            Want the next one?
          </h2>
          <p>
            {edition.cadence}.{plan ? ` ₹${plan.price} a month.` : ""}
          </p>
          <div className="sample-end-actions">
            <Button variant="editorial" size="lg" asChild>
              <a href={subscribeHref}>
                Subscribe to {edition.shortName} <ArrowUpRight />
              </a>
            </Button>
            {bundle && (
              <Button variant="editorialOutline" size="lg" asChild>
                <a href={bundle.checkoutUrl || "/#pricing"}>
                  All three for ₹{bundle.price} <ArrowUpRight />
                </a>
              </Button>
            )}
          </div>
          <a
            className="share-link"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Share2 size={15} /> Send this edition to a colleague on WhatsApp
          </a>
        </section>

        <section
          className="other-samples"
          aria-labelledby="other-samples-title"
        >
          <h2 id="other-samples-title">Read another sample</h2>
          <div className="other-samples-grid">
            {others.map((other) => (
              <Link
                key={other.id}
                to="/sample/$id"
                params={{ id: other.id }}
                className={`other-sample ${themeFor[other.id]}`}
              >
                <span className="other-name">{other.shortName}</span>
                <span className="other-headline">
                  {other.stories[0]?.headline}
                </span>
                <span className="other-go">
                  Read the edition <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-wrap footer">
        <Brand />
        <p>Less doomscroll. More dinner-table lore.</p>
        <span>© {new Date().getUTCFullYear()} Weighted Average</span>
      </footer>

      {plan && (
        <div className="sticky-subscribe" role="region" aria-label="Subscribe">
          <div className="sticky-inner">
            <p>
              <strong>{edition.name}</strong>
              <span> · ₹{plan.price}/month</span>
            </p>
            <Button variant="lime" asChild>
              <a href={subscribeHref}>
                Subscribe <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
