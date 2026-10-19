"use client";

import { useState } from "react";
import {
  ArrowLeftRight,
  ArrowRight,
  CalendarDays,
  Check,
  CircleHelp,
  Clock3,
  Luggage,
  Plane,
  Search,
  Ticket,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const airports = [
  "Bangkok (BKK)",
  "Tokyo (NRT)",
  "Singapore (SIN)",
  "Zurich (ZRH)",
  "Denpasar (DPS)",
];

export function BookingWidget() {
  const [from, setFrom] = useState(airports[0]);
  const [to, setTo] = useState(airports[1]);
  const [oneWay, setOneWay] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <section
      id="book"
      className="booking-wrap page-width"
      aria-label="Plan your journey"
    >
      <div className="booking-card">
        <Tabs defaultValue="flights" onValueChange={() => setMessage("")}>
          <div className="booking-top">
            <TabsList className="booking-tabs">
              <TabsTrigger value="flights">
                <Plane size={16} />
                Book a flight
              </TabsTrigger>
              <TabsTrigger value="manage">
                <Luggage size={16} />
                Manage booking
              </TabsTrigger>
              <TabsTrigger value="checkin">
                <Ticket size={16} />
                Check in
              </TabsTrigger>
              <TabsTrigger value="status">
                <Clock3 size={16} />
                Flight status
              </TabsTrigger>
            </TabsList>
            <span className="booking-help">
              <CircleHelp size={14} /> A little help, a long way
            </span>
          </div>
          <TabsContent value="flights">
            <div className="trip-options">
              <label>
                <input
                  type="radio"
                  name="trip"
                  checked={!oneWay}
                  onChange={() => setOneWay(false)}
                />{" "}
                Round trip
              </label>
              <label>
                <input
                  type="radio"
                  name="trip"
                  checked={oneWay}
                  onChange={() => setOneWay(true)}
                />{" "}
                One way
              </label>
              <span>
                <Check size={13} /> A little flexibility comes standard
              </span>
            </div>
            <form
              className="flight-fields"
              onSubmit={(event) => {
                event.preventDefault();
                setMessage(
                  from === to
                    ? "Choose a different arrival airport to explore your journey."
                    : `Your ${oneWay ? "one-way" : "round-trip"} journey: ${from} → ${to}. This is a demo; no flights are reserved.`,
                );
              }}
            >
              <label className="booking-field">
                <span>
                  <Plane size={14} /> From
                </span>
                <select
                  aria-label="Departure airport"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                >
                  {airports.map((airport) => (
                    <option key={airport}>{airport}</option>
                  ))}
                </select>
                <small>Departure airport</small>
              </label>
              <button
                type="button"
                className="swap-airports"
                aria-label="Swap departure and arrival"
                onClick={() => {
                  setFrom(to);
                  setTo(from);
                }}
              >
                <ArrowLeftRight size={16} />
              </button>
              <label className="booking-field">
                <span>
                  <Plane size={14} /> To
                </span>
                <select
                  aria-label="Arrival airport"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                >
                  {airports.map((airport) => (
                    <option key={airport}>{airport}</option>
                  ))}
                </select>
                <small>Your next adventure</small>
              </label>
              <label className="booking-field date-field">
                <span>
                  <CalendarDays size={14} /> Departure
                </span>
                <input
                  aria-label="Departure date"
                  type="date"
                  required
                  defaultValue="2026-11-12"
                />
                <small>
                  {oneWay
                    ? "One-way journey"
                    : "Return date chosen in next step"}
                </small>
              </label>
              <label className="booking-field">
                <span>
                  <Users size={14} /> Travelers & cabin
                </span>
                <select aria-label="Travelers and cabin">
                  <option>1 adult, Economy</option>
                  <option>2 adults, Economy</option>
                  <option>1 adult, Business</option>
                  <option>2 adults, Business</option>
                </select>
                <small>A seat for every kind of journey</small>
              </label>
              <Button type="submit" className="search-flights">
                <Search size={18} /> Find flights
              </Button>
            </form>
          </TabsContent>
          {(
            [
              [
                "manage",
                "Find your booking",
                "View your itinerary and explore your travel options.",
              ],
              [
                "checkin",
                "A smoother departure",
                "Online check-in opens 48 hours before departure.",
              ],
              [
                "status",
                "Follow your flight",
                "Enter a flight number to preview the flight status experience.",
              ],
            ] as const
          ).map(([value, title, description]) => (
            <TabsContent key={value} value={value}>
              <form
                className="manage-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setMessage(
                    "This is a SKYWAY demo. Booking and live flight services are not connected.",
                  );
                }}
              >
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <label>
                  {value === "status" ? "Flight number" : "Booking reference"}
                  <input
                    required
                    placeholder={value === "status" ? "SW 204" : "e.g. SKY7H2"}
                  />
                </label>
                {value !== "status" && (
                  <label>
                    Last name
                    <input required placeholder="As shown on your passport" />
                  </label>
                )}
                <Button type="submit">
                  Continue <ArrowRight />
                </Button>
              </form>
            </TabsContent>
          ))}
        </Tabs>
        {message && (
          <p className="booking-message" role="status">
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
