/* eslint-disable react/prop-types */
const TINTS = 6;

export const AppCard = ({ index, title, description, link, image, stack = [], year }) => {
  const number = String(index + 1).padStart(2, '0');
  const meta = [...stack, year].filter(Boolean).join(' · ');

  return (
    <a
      className={`card tint-${(index % TINTS) + 1}`}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card-media">
        <div className="shot">
          <span className="card-number mono">{number}</span>
          {image && <img src={image} alt={`Screenshot of ${title}`} />}
        </div>
      </div>
      <div className="card-body">
        <div className="card-title-row">
          <h3>{title}</h3>
          <span className="arrow" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
        <p className="card-desc">{description}</p>
        <div className="card-meta">
          <span className="mono muted">{meta}</span>
          <span className="visit mono">Visit site ↗</span>
        </div>
      </div>
    </a>
  );
};
