import { describe, it, expect } from "vitest";
import { sampleEditions, getSampleEdition } from "./samples";
import { plans } from "./newsletters";

const all = (edition: (typeof sampleEditions)[number]) =>
  JSON.stringify(edition);

describe("Sample editions shown on the site", () => {
  it("has one real past edition per newsletter", () => {
    expect(sampleEditions.map((e) => e.id)).toEqual([
      "markets",
      "business",
      "ai",
    ]);
    expect(getSampleEdition("nope")).toBeUndefined();
  });

  it("gives every edition three complete stories and an In Plain English explainer", () => {
    for (const edition of sampleEditions) {
      expect(edition.stories).toHaveLength(3);
      for (const story of edition.stories) {
        for (const value of Object.values(story))
          expect(value.length).toBeGreaterThan(20);
      }
      expect(edition.plainEnglish.paragraphs.join(" ").length).toBeGreaterThan(
        200,
      );
    }
  });

  it("links each sample to a plan with a Zoho checkout page", () => {
    for (const edition of sampleEditions) {
      expect(plans.find((p) => p.id === edition.planId)?.checkoutUrl).toMatch(
        /^https:\/\//,
      );
    }
  });

  it("keeps production-only material and banned phrases off the site", () => {
    const banned =
      /beehiiv|suggested tweet|verification note|confidential|section \d|kind of wild|transformative|paradigm shift|ai revolution|next frontier|game-changer|disruptive|leverag|synerg|unlocking value|going forward|robust|optimism|key takeaway|important to note/i;
    for (const edition of sampleEditions)
      expect(all(edition)).not.toMatch(banned);
  });

  it("carries the agreed editorial fixes", () => {
    const markets = all(sampleEditions[0]!);
    expect(markets).not.toContain("still below the 4% target");
    expect(markets).toContain("In February 2025 the repo rate was at 6.5%");
    expect(getSampleEdition("ai")?.desk?.headline).not.toMatch(/Appoints/);
    expect(getSampleEdition("ai")?.dateLabel).not.toMatch(/Wednesday/);
  });
});
