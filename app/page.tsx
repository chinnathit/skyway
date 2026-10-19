import Image from "next/image";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Compass,
  Globe2,
  Headphones,
  Leaf,
  MoveUpRight,
  Plane,
  ShieldCheck,
  Sparkles,
  Sunrise,
  Utensils,
} from "lucide-react";
import { BookingWidget } from "@/components/booking-widget";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    name: "Kyoto",
    country: "JAPAN",
    image: "kyoto",
    alt: "Traditional Japanese street and pagoda in Kyoto",
    tag: "A little culture",
    fare: "12,900",
    code: "KIX",
    detail: "Quiet temples. A thousand discoveries.",
  },
  {
    name: "Bali",
    country: "INDONESIA",
    image: "bali",
    alt: "Lush tropical landscape and temple in Bali",
    tag: "A slower rhythm",
    fare: "6,490",
    code: "DPS",
    detail: "Find your own kind of paradise.",
  },
  {
    name: "Tromsø",
    country: "NORWAY",
    image: "tromso",
    alt: "Northern lights illuminating a Norwegian mountain landscape",
    tag: "Something extraordinary",
    fare: "29,900",
    code: "TOS",
    detail: "Some things are worth looking up for.",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero" aria-labelledby="hero-title">
        <Image
          src="/images/hero.jpg"
          alt="Mountain peaks and evergreen forests surrounding a turquoise lake"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="hero-content page-width">
          <div className="eyebrow hero-eyebrow">
            <span className="status-dot" /> THE WORLD IS STILL FULL OF WONDER
          </div>
          <h1 id="hero-title">
            Go a little
            <br />
            further.
            <br />
            <em>Feel a little more.</em>
          </h1>
          <p>
            For the places you’ve dreamed of.
            <br />
            And the moments you never saw coming.
          </p>
          <Button asChild className="hero-button">
            <a href="#destinations">
              Find your somewhere <ArrowUpRight />
            </a>
          </Button>
          <div className="hero-caption">
            <span className="caption-line" />
            <span>
              ABOVE THE EVERYDAY
              <br />
              <strong>A different perspective</strong>
            </span>
          </div>
        </div>
        <a href="#book" className="scroll-cue">
          <ArrowDown size={16} />
          <span>A new perspective awaits</span>
        </a>
        <span className="hero-index">
          01 <span>/ DISCOVER</span>
        </span>
      </section>
      <BookingWidget />
      <div className="reassurance page-width">
        <span>
          <ShieldCheck />
          Thoughtful travel, from takeoff to touchdown
        </span>
        <span>
          <Check />
          Transparent fares
        </span>
        <span>
          <Headphones />A real person, whenever you need
        </span>
        <span className="demo-pill">
          A concept airline. A real sense of possibility.
        </span>
      </div>
      <section
        id="destinations"
        className="destinations section-space page-width"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="tiny-line" /> YOUR NEXT CHAPTER
            </p>
            <h2>
              Somewhere new.
              <br />
              <em>Something you.</em>
            </h2>
          </div>
          <div className="heading-aside">
            <p>
              A change of scenery. A different perspective.
              <br />
              Where will your curiosity take you?
            </p>
            <a className="text-link" href="#destination-list">
              Explore the collection <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div id="destination-list" className="destination-grid">
          {destinations.map((destination) => (
            <a href="#book" key={destination.name} className="destination-card">
              <div className="destination-image">
                <Image
                  src={`/images/${destination.image}.jpg`}
                  alt={destination.alt}
                  fill
                  sizes="(max-width: 640px) 95vw, (max-width: 900px) 46vw, 31vw"
                />
                <span className="destination-tag">
                  <Compass size={12} />
                  {destination.tag}
                </span>
                <span className="destination-arrow">
                  <ArrowUpRight size={21} />
                </span>
                <div className="destination-name">
                  <span>{destination.country}</span>
                  <h3>{destination.name}</h3>
                </div>
              </div>
              <div className="destination-details">
                <div>
                  <p>{destination.detail}</p>
                  <span>
                    Bangkok <ArrowRight size={11} /> {destination.code}{" "}
                    <span className="route-dot">·</span> Return
                  </span>
                </div>
                <div className="destination-price">
                  <span>from</span>
                  <strong>฿{destination.fare}</strong>
                </div>
              </div>
            </a>
          ))}
        </div>
        <p className="fare-note">
          Illustrative return fares per person in Economy. Destinations, routes
          and prices are demo content.
        </p>
      </section>
      <section id="experience" className="experience-section">
        <div className="experience-inner page-width">
          <div className="experience-visual">
            <Image
              src="/images/cabin.jpg"
              alt="A sunlit airplane cabin with travelers settled into their seats"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
            />
            <div className="experience-photo-note">
              <Utensils size={17} />
              <span>
                A LITTLE ROOM TO UNWIND
                <br />
                <strong>Settle in. Your journey starts here.</strong>
              </span>
            </div>
            <div className="floating-stamp">
              <Sparkles size={23} />
              <span>
                LITTLE DETAILS.
                <br />A BIG DIFFERENCE.
              </span>
            </div>
          </div>
          <div className="experience-copy">
            <p className="eyebrow">
              <span className="tiny-line" /> THE SKYWAY WAY
            </p>
            <h2>
              The journey is
              <br />
              part of <em>the joy.</em>
            </h2>
            <p>
              Travel should feel good long before you arrive. A warm welcome,
              room to settle in, and the little details that make a long way
              feel like no time at all.
            </p>
            <div className="experience-benefits">
              <div>
                <Sunrise />
                <span>
                  <strong>A little more room to unwind</strong>
                  <small>Thoughtful spaces. Your own pace.</small>
                </span>
              </div>
              <div>
                <Utensils />
                <span>
                  <strong>Flavors worth slowing down for</strong>
                  <small>Seasonal inspiration, served with care.</small>
                </span>
              </div>
              <div>
                <Headphones />
                <span>
                  <strong>People who care about your journey</strong>
                  <small>A human touch, every step of the way.</small>
                </span>
              </div>
            </div>
            <Button asChild variant="outline">
              <a href="#journeys">
                Step inside the experience <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </section>
      <section id="journeys" className="journal section-space page-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="tiny-line" /> A WINDOW TO THE WORLD
            </p>
            <h2>
              Bring your <em>curiosity.</em>
            </h2>
          </div>
          <p className="journal-intro">
            A few good reasons to take the scenic route.
            <br />
            Stories to inspire your next chapter.
          </p>
        </div>
        <div className="journal-grid">
          <a href="#destinations" className="journal-feature">
            <Image
              src="/images/mountain-bg.webp"
              alt="A sweeping mountain vista for a scenic escape"
              fill
              sizes="(max-width: 700px) 100vw, 60vw"
            />
            <div className="journal-overlay" />
            <div className="journal-feature-copy">
              <span className="eyebrow">
                THE ART OF GETTING AWAY · 5 MIN READ
              </span>
              <h3>
                Take the long way.
                <br />
                It’s usually the beautiful one.
              </h3>
              <span className="text-link">
                Find your inspiration <ArrowUpRight size={17} />
              </span>
            </div>
          </a>
          <div className="journal-side">
            <div className="journal-number">01 / FIELD NOTES</div>
            <Leaf size={31} strokeWidth={1.2} />
            <h3>
              A lighter footprint.
              <br />A deeper connection.
            </h3>
            <p>
              Stay a little longer. Explore a little closer. Discover a more
              thoughtful way to see the places you love.
            </p>
            <a href="#experience" className="text-link">
              Travel with intention <ArrowUpRight size={17} />
            </a>
            <div className="journal-side-bottom">
              <Globe2 size={15} /> GOOD JOURNEYS START WITH SMALL CHOICES
            </div>
          </div>
        </div>
      </section>
      <section className="closing-banner page-width">
        <div className="orbit-art" aria-hidden="true">
          <Globe2 />
          <Plane />
        </div>
        <div>
          <p className="eyebrow">THERE’S A WHOLE WORLD OUT THERE</p>
          <h2>
            Your next story
            <br />
            starts with <em>a little yes.</em>
          </h2>
        </div>
        <Button asChild>
          <a href="#book">
            Let’s go somewhere <ArrowUpRight />
          </a>
        </Button>
        <ArrowDownRight className="closing-arrow" aria-hidden="true" />
      </section>
      <footer className="footer page-width">
        <div className="footer-top">
          <div>
            <a className="wordmark" href="#">
              <MoveUpRight strokeWidth={2.6} />
              <span>skyway.</span>
            </a>
            <p>A little further. A little closer to what matters.</p>
          </div>
          <a href="#book" className="text-link">
            Your next journey <ChevronRight size={16} />
          </a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Skyway. Made for the wonder of it.</p>
          <span>
            Independent design concept <span className="route-dot">·</span> Demo
            website
          </span>
          <a href="#">
            Back to top <ArrowUpRight size={13} />
          </a>
        </div>
      </footer>
    </main>
  );
}
