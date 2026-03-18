import SectionHeader from '../ui/SectionHeader';
import testimonials from '../../data/testimonials';

const stars = '★★★★★';

/**
 * Double-row marquee testimonials with opposite scroll directions.
 * @returns {JSX.Element}
 */
function Testimonials() {
  const rowOne = [...testimonials, ...testimonials];
  const rowTwo = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()];

  return (
    <section className="section-spacing overflow-hidden bg-bg-secondary">
      <div className="container-site">
        <SectionHeader eyebrow="CLIENT LOVE" heading="What Our Clients Say" />
      </div>

      <div className="mt-8 space-y-6">
        <MarqueeRow items={rowOne} direction="left" />
        <MarqueeRow items={rowTwo} direction="right" />
      </div>
    </section>
  );
}

/**
 * Ticker row used in testimonials section.
 * @param {{items: import('../../data/testimonials').default, direction: 'left'|'right'}} props
 * @returns {JSX.Element}
 */
function MarqueeRow({ items, direction }) {
  return (
    <div className="group overflow-hidden">
      <div
        className={`flex w-max gap-6 px-4 ${direction === 'left' ? 'animate-scrollLeft' : 'animate-scrollRight'} group-hover:[animation-play-state:paused]`}
      >
        {items.map((item, index) => (
          <article key={`${item.name}-${index}`} className="relative w-[340px] flex-shrink-0 rounded-card border border-border bg-white p-7">
            <span className="absolute left-5 top-2 text-5xl leading-none text-indigo/30">"</span>
            <p className="relative mt-4 text-[15px] italic leading-[1.7] text-slate-700">{item.quote}</p>
            <p className="mt-5 text-amber-500" aria-label={`${item.rating} star rating`}>
              {stars}
            </p>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-indigo to-cyan font-display text-sm font-semibold text-white">
                {item.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-navy">{item.name}</p>
                <p className="text-xs text-text-secondary">{item.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
