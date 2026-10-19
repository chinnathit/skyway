"use client";

import { useState } from "react";
import Image from "next/image";
import { RollingText } from "@/components/animated-text";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { destinations } from "@/lib/travel-content";

export function DestinationExplorer() {
  const [selected, setSelected] = useState(0);
  const destination = destinations[selected];

  return (
    <div className="sw-explorer">
      <div className="sw-explorer-list" aria-label="Preview a destination">
        {destinations.map((item, index) => (
          <button
            type="button"
            key={item.city}
            aria-pressed={selected === index}
            aria-controls="destination-preview"
            onMouseEnter={() => setSelected(index)}
            onFocus={() => setSelected(index)}
            onClick={() => setSelected(index)}
          >
            <span className="sw-explorer-index">0{index + 1}</span>
            <RollingText className="sw-explorer-name" text={item.city} />
            <ArrowUpRight aria-hidden="true" />
            <span className="sw-explorer-country">{item.country}</span>
          </button>
        ))}
        <p className="sw-explorer-hint">
          <MapPin size={13} /> A place for every kind of curiosity.
        </p>
      </div>
      <div
        id="destination-preview"
        className="sw-explorer-preview"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="sw-explorer-images">
          {destinations.map((item, index) => (
            <Image
              key={item.city}
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 600px) 90vw, 42vw"
              className={selected === index ? "is-active" : ""}
              aria-hidden={selected !== index}
            />
          ))}
          <div className="sw-photo-overlay" />
          <span className="sw-destination-category">
            {destination.category}
          </span>
          <div
            className="sw-explorer-image-label sw-preview-text-enter"
            key={destination.city}
          >
            <span>{destination.country}</span>
            <strong>{destination.city}</strong>
          </div>
          <a
            href="#book"
            className="sw-round-arrow"
            aria-label={`Plan a trip to ${destination.city}`}
          >
            <ArrowUpRight />
          </a>
        </div>
        <div
          className="sw-explorer-details sw-preview-text-enter"
          key={`details-${destination.city}`}
        >
          <div>
            <p>{destination.description}</p>
            <span>
              JFK <ArrowRight size={12} /> {destination.airport} <i /> Return ·
              Economy
            </span>
          </div>
          <div className="sw-fare">
            <small>from USD</small>
            <strong>${destination.price}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
