// Global motion layer: smooth scroll, dark/light surface wash, reveals, magnetic buttons,
// card spotlight and count-ups. Everything is progressive enhancement: content is visible
// in the HTML and stays visible if JS fails or the user prefers reduced motion.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export { gsap, ScrollTrigger };

let started = false;

export function initMotion() {
  if (started) return;
  started = true;
  const reduced = reducedMotion();

  if (!reduced) {
    const lenis = new Lenis({ lerp: 0.11, smoothWheel: true, wheelMultiplier: 0.95 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    (window as unknown as { __lenis: Lenis }).__lenis = lenis;
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (!id || id === '#') return;
        const el = document.querySelector(id);
        if (!el) return;
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -80 });
      });
    });
  }

  reveals(reduced);
  counters(reduced);
  if (!reduced && matchMedia('(pointer: fine)').matches) magnetic();
  spotlight();

  // Fonts and images shift layout; recompute trigger positions once everything is in.
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

function reveals(reduced: boolean) {
  if (reduced) return;
  const groups = new Map<Element, HTMLElement[]>();
  document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
    const group = el.closest('[data-reveal-group]') ?? el;
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group)!.push(el);
  });
  groups.forEach((els, group) => {
    // Skip elements already in view at load (avoid hiding above-the-fold content).
    const rect = (group as HTMLElement).getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) return;
    els.forEach((el) => el.classList.add('is-armed'));
    ScrollTrigger.create({
      trigger: group,
      start: 'top 85%',
      once: true,
      onEnter: () =>
        gsap.to(els, {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'expo.out',
          stagger: 0.08,
          onComplete: () => els.forEach((el) => { el.classList.remove('is-armed'); el.style.removeProperty('transform'); el.style.removeProperty('opacity'); }),
        }),
    });
  });
}

function counters(reduced: boolean) {
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const to = Number(el.dataset.count);
    const from = Number(el.dataset.from ?? 0);
    if (reduced || Number.isNaN(to)) return;
    const obj = { v: from };
    el.textContent = String(from);
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () =>
        gsap.to(obj, {
          v: to,
          duration: 1.8,
          ease: 'power3.out',
          onUpdate: () => { el.textContent = String(Math.round(obj.v)); },
        }),
    });
  });
}

function magnetic() {
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const strength = 0.28;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * strength;
      const y = (e.clientY - r.top - r.height / 2) * strength;
      gsap.to(el, { x, y, duration: 0.5, ease: 'power3.out' });
    });
    el.addEventListener('pointerleave', () => gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.4)' }));
  });
}

function spotlight() {
  document.querySelectorAll<HTMLElement>('.spotlight').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}
