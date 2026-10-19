"use client";

import { useState } from "react";
import { ArrowUpRight, Globe2, Menu, MoveUpRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [{ href: '#destinations', label: 'Discover' }, { href: '#experience', label: 'The Skyway experience' }, { href: '#journeys', label: 'Travel inspiration' }];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner page-width"><a className="wordmark" href="#" aria-label="Skyway home"><MoveUpRight strokeWidth={2.6} /><span>skyway<span className="wordmark-dot">.</span></span></a><nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav><div className="header-actions"><span className="language"><Globe2 size={15} /> EN</span><Button asChild size="sm"><a href="#book">Let’s go somewhere <ArrowUpRight /></a></Button><button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button></div></div>{open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={16} /></a>)}</nav>}</header>;
}
