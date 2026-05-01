import type { personalityTraits } from '@/lib/site-data';

type BubbleCloudProps = {
  traits: typeof personalityTraits;
};

export function BubbleCloud({ traits }: BubbleCloudProps) {
  return (
    <div className="bubble-cloud" aria-label="个人属性气泡图">
      {traits.map((trait, index) => (
        <article className={`bubble bubble-${(index % 6) + 1}`} key={trait.label}>
          <span>{trait.label}</span>
          <strong>{trait.value}</strong>
        </article>
      ))}
    </div>
  );
}
