import type { SampleStory } from "@/lib/samples";

/** The Question and Answer, shown as the two lines of a conversation. */
export function QaExchange({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="qa-exchange">
      <div className="qa-bubble qa-question">
        <span className="qa-tag">
          The Weighted Average Question <em>· open with this</em>
        </span>
        <p>“{question}”</p>
      </div>
      <div className="qa-bubble qa-answer">
        <span className="qa-tag">
          The Weighted Average Answer <em>· when someone else brings it up</em>
        </span>
        <p>“{answer}”</p>
      </div>
    </div>
  );
}

export function SampleStoryBlock({
  story,
  index,
  total = 3,
  id,
}: {
  story: SampleStory;
  index: number;
  total?: number;
  id?: string;
}) {
  return (
    <section
      className="edition-story"
      id={id}
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      <div className="story-count">
        Story {index + 1} of {total}
      </div>
      <h2 id={id ? `${id}-title` : undefined}>{story.headline}</h2>
      <h3>What happened.</h3>
      <p>{story.whatHappened}</p>
      <h3>The second order.</h3>
      <p>{story.secondOrder}</p>
      <QaExchange question={story.question} answer={story.answer} />
    </section>
  );
}
