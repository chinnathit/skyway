"use client";

import Image from "next/image";
import { RevealText, RollingText } from "@/components/animated-text";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { DestinationExplorer } from "@/components/destination-explorer";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronDown,
  Compass,
  Globe2,
  Headphones,
  Leaf,
  MoveUpRight,
  Plane,
  ShieldCheck,
  Sparkles,
  Sunrise,
  UtensilsCrossed,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cabins, travelQuestions } from "@/lib/travel-content";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="sw-label">
      <span />
      {children}
    </p>
  );
}

export function TravelSections() {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const labels = sectionsRef.current?.querySelectorAll(
          ".sw-label, .sw-collection-heading",
        );
        labels?.forEach((label) => {
          gsap.from(label, {
            x: -16,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: { trigger: label, start: "top 92%", once: true },
          });
        });
        const groups = sectionsRef.current?.querySelectorAll(
          ".sw-benefits, .sw-promises, .sw-footer-main",
        );
        groups?.forEach((group) => {
          gsap.from(group.children, {
            y: 22,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: { trigger: group, start: "top 90%", once: true },
          });
        });
        gsap.fromTo(
          ".sw-journal-feature > img",
          { yPercent: -6, scale: 1.15 },
          {
            yPercent: 6,
            scale: 1.15,
            ease: "none",
            scrollTrigger: {
              trigger: ".sw-journal-feature",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      });
      return () => media.revert();
    },
    { scope: sectionsRef },
  );

  return (
    <div ref={sectionsRef} className="skyway-continuation">
      <section
        className="sw-container sw-destinations"
        aria-label="Featured destinations"
      >
        <div className="sw-collection-heading">
          <span>
            <Compass size={16} /> A few places worth going further for
          </span>
          <span className="sw-collection-count">
            THE COLLECTION <span>01 — 03</span>
          </span>
        </div>
        <DestinationExplorer />
        <div className="sw-collection-footer">
          <p>
            Illustrative routes and fares. Your next chapter is yours to
            imagine.
          </p>
          <a href="#book" className="sw-link">
            Find your next destination <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <section id="experience" className="sw-experience">
        <div className="sw-container sw-experience-grid">
          <div className="sw-experience-photo">
            <Image
              src="/images/cabin.jpg"
              alt="A bright aircraft cabin with travelers settled into their seats"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
            />
            <div className="sw-photo-overlay" />
            <div className="sw-photo-caption">
              <Plane size={20} />
              <div>
                SETTLE INTO SOMETHING SPECIAL
                <span>The destination is only half the story.</span>
              </div>
            </div>
            <div className="sw-photo-seal">
              <Sparkles size={23} />
              <span>
                THOUGHTFULLY
                <br />
                SKYWAY
              </span>
            </div>
          </div>
          <div className="sw-experience-copy">
            <SectionLabel>THE SKYWAY EXPERIENCE</SectionLabel>
            <RevealText>
              Not just a flight.
              <br />
              <em>A feeling.</em>
            </RevealText>
            <RevealText as="p" effect="read">
              The quiet before takeoff. A warm welcome. Your favorite view, from
              somewhere entirely new. We believe the little details are what
              make a journey extraordinary.
            </RevealText>
            <div className="sw-benefits">
              <div>
                <Sunrise />
                <span>
                  <strong>Space to make yourself at home</strong>
                  <small>Comfort that lets the world slow down.</small>
                </span>
              </div>
              <div>
                <UtensilsCrossed />
                <span>
                  <strong>A taste of somewhere new</strong>
                  <small>Seasonal inspiration, thoughtfully served.</small>
                </span>
              </div>
              <div>
                <Headphones />
                <span>
                  <strong>A more personal way to travel</strong>
                  <small>A human touch, from the first hello.</small>
                </span>
              </div>
            </div>
            <Button asChild variant="outline" className="sw-outline-button">
              <a href="#fleet">
                <RollingText text="Discover your cabin" /> <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="fleet" className="sw-container sw-cabins">
        <div className="sw-section-heading">
          <div>
            <SectionLabel>EXCEPTIONAL AT EVERY ALTITUDE</SectionLabel>
            <RevealText>
              A space for
              <br />
              <em>your kind of journey.</em>
            </RevealText>
          </div>
          <p>
            Whether you’re switching off or setting out,
            <br />
            there’s a little more to look forward to.
          </p>
        </div>
        <Tabs defaultValue="first">
          <TabsList className="sw-cabin-tabs">
            {cabins.map((cabin) => (
              <TabsTrigger key={cabin.id} value={cabin.id}>
                {cabin.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {cabins.map((cabin) => (
            <TabsContent value={cabin.id} key={cabin.id}>
              <div className="sw-cabin-panel">
                <div className="sw-cabin-illustration" aria-hidden="true">
                  <div className={`sw-window sw-window-${cabin.id}`}>
                    <Image
                      src="/images/mountain-bg.webp"
                      alt=""
                      fill
                      sizes="350px"
                    />
                    <div className="sw-window-glow" />
                  </div>
                  <span className="sw-cabin-visual-label">
                    A NEW PERSPECTIVE
                  </span>
                  <span className="sw-cabin-number">{cabin.number}</span>
                </div>
                <div className="sw-cabin-copy">
                  <p className="sw-label">{cabin.note}</p>
                  <RevealText as="h3">{cabin.title}</RevealText>
                  <RevealText as="p" delay={0.1}>
                    {cabin.description}
                  </RevealText>
                  <ul>
                    {cabin.details.map((detail) => (
                      <li key={detail}>
                        <Check size={15} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <a className="sw-link" href="#book">
                    Make the journey yours <ArrowUpRight size={17} />
                  </a>
                  <small>Cabin experience shown as a design concept.</small>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <section className="sw-promise-section">
        <div className="sw-container sw-promises">
          <div>
            <ShieldCheck />
            <h3>Clarity, from the start.</h3>
            <p>
              Room for excitement. No room for surprises. A thoughtful booking
              experience begins with the details.
            </p>
          </div>
          <div>
            <Globe2 />
            <h3>Wonder, without limits.</h3>
            <p>
              From familiar favorites to the places you haven’t heard of yet.
              Let your curiosity lead the way.
            </p>
          </div>
          <div>
            <Leaf />
            <h3>A more considered journey.</h3>
            <p>
              Stay a little longer. Look a little closer. Make a deeper
              connection with the places you discover.
            </p>
          </div>
        </div>
      </section>

      <section
        className="sw-container sw-journal"
        aria-labelledby="journal-heading"
      >
        <div className="sw-section-heading">
          <div>
            <SectionLabel>THE SKYWAY JOURNAL</SectionLabel>
            <RevealText id="journal-heading">
              Leave the ordinary
              <br />
              <em>somewhere behind.</em>
            </RevealText>
          </div>
          <span className="sw-journal-note">
            <Compass size={18} /> A little inspiration for the way ahead.
          </span>
        </div>
        <a href="#destinations" className="sw-journal-feature">
          <Image
            src="/images/mountain-bg.webp"
            alt="A snow-capped mountain rising above the clouds"
            fill
            sizes="(max-width: 1200px) 100vw, 1152px"
          />
          <div className="sw-photo-overlay" />
          <span className="sw-journal-category">
            FIELD NOTES / THE ART OF GETTING AWAY
          </span>
          <div className="sw-journal-copy">
            <p>SOME JOURNEYS CHANGE THE WAY YOU SEE.</p>
            <RevealText as="h3">
              Take the window seat.
              <br />
              Let the world surprise you.
            </RevealText>
            <span className="sw-link">
              Explore the destination collection <ArrowUpRight size={17} />
            </span>
          </div>
          <span className="sw-journal-scroll">
            <ArrowDown size={16} /> A DIFFERENT PERSPECTIVE
          </span>
        </a>
      </section>

      <section className="sw-container sw-faq">
        <div>
          <SectionLabel>A FEW THINGS TO KNOW</SectionLabel>
          <RevealText>
            A clearer view.
            <br />
            <em>Before you go.</em>
          </RevealText>
          <p>A little context for exploring this concept.</p>
        </div>
        <div className="sw-faq-items">
          {travelQuestions.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <ChevronDown size={17} />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="sw-container sw-cta">
        <div className="sw-cta-orbit" aria-hidden="true">
          <Globe2 />
          <Plane />
        </div>
        <div>
          <SectionLabel>YOUR NEXT CHAPTER IS CALLING</SectionLabel>
          <RevealText>
            The world awaits.
            <br />
            <em>Make it your own.</em>
          </RevealText>
        </div>
        <Button asChild className="sw-accent-button">
          <a href="#book">
            <RollingText text="Begin your journey" /> <ArrowUpRight />
          </a>
        </Button>
        <MoveUpRight className="sw-cta-decoration" aria-hidden="true" />
      </section>

      <footer className="sw-container sw-footer">
        <div className="sw-footer-main">
          <div>
            <a href="#" className="sw-footer-brand">
              <Plane size={22} />
              SKYWAY
            </a>
            <p>
              Extraordinary journeys.
              <br />A little closer than you think.
            </p>
          </div>
          <nav aria-label="Explore Skyway">
            <span>EXPLORE</span>
            <a href="#destinations">Destinations</a>
            <a href="#experience">The experience</a>
            <a href="#fleet">Our cabins</a>
          </nav>
          <nav aria-label="Plan your trip">
            <span>YOUR JOURNEY</span>
            <a href="#book">Plan a trip</a>
            <a href="#fleet">Find your cabin</a>
            <a href="#experience">Life on board</a>
          </nav>
          <div className="sw-footer-note">
            <Compass size={23} />
            <p>
              Made for the places
              <br />
              you haven’t been. Yet.
            </p>
            <span>INDEPENDENT AIRLINE CONCEPT</span>
          </div>
        </div>
        <div className="sw-footer-bottom">
          <span>
            © {new Date().getFullYear()} Skyway. A world of possibility.
          </span>
          <span>Demo website · No live reservations</span>
          <a href="#">
            Back to the skies <ArrowUpRight size={13} />
          </a>
        </div>
      </footer>
    </div>
  );
}
