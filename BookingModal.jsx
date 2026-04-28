import { InfiniteSlider } from './ui/infinite-slider';

const logos = [
  { src: 'https://html.tailus.io/blocks/customers/openai.svg', alt: 'OpenAI' },
  { src: 'https://html.tailus.io/blocks/customers/nvidia.svg', alt: 'Nvidia' },
  { src: 'https://html.tailus.io/blocks/customers/github.svg', alt: 'GitHub' },
  { src: 'https://html.tailus.io/blocks/customers/google.svg', alt: 'Google' },
  { src: 'https://html.tailus.io/blocks/customers/microsoft.svg', alt: 'Microsoft' },
  { src: 'https://html.tailus.io/blocks/customers/spotify.svg', alt: 'Spotify' },
  { src: 'https://html.tailus.io/blocks/customers/notion.svg', alt: 'Notion' },
  { src: 'https://html.tailus.io/blocks/customers/airbnb.svg', alt: 'Airbnb' },
];

export function LogoCloud() {
  return (
    <section
      style={{
        background: 'rgba(0,0,0,0.2)',
        backdropFilter: 'blur(8px)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
      className="py-8"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0">
          {/* Left label */}
          <div className="flex-shrink-0 md:w-56 flex items-center justify-center md:justify-start">
            <p
              style={{
                fontFamily: 'DM Sans',
                fontWeight: 400,
                fontSize: '13px',
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              Powering the<br />best teams
            </p>
          </div>

          {/* Vertical divider */}
          <div
            className="hidden md:block w-px self-stretch mx-8"
            style={{ background: 'rgba(255,255,255,0.08)' }}
          />

          {/* Slider */}
          <div className="flex-1 overflow-hidden">
            <InfiniteSlider speed={35} gap={48}>
              {logos.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-7 w-auto object-contain"
                  style={{ filter: 'brightness(0) invert(1)', opacity: 0.5 }}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              ))}
            </InfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  );
}
