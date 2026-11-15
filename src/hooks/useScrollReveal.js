import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll('.reveal, .reveal-hero');

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const staggerGroups = document.querySelectorAll('[data-stagger-group]');
    staggerGroups.forEach((group) => {
      const children = group.querySelectorAll('.reveal-stagger, .reveal-zoom-in');
      children.forEach((child, index) => {
        const delay = Math.min(index * 90, 500);
        child.style.transitionDelay = `${delay}ms`;
      });
    });

    const heroElements = document.querySelectorAll('.reveal-hero');
    const heroTimer = setTimeout(() => {
      heroElements.forEach((el, idx) => {
        el.style.transitionDelay = `${idx * 120}ms`;
        el.classList.add('is-visible');
      });
    }, 80);

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(heroTimer);
      observer.disconnect();
    };
  }, []);
}